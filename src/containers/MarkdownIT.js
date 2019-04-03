import React, { Component } from 'react'
import Markdown from 'markdown-it'
import MarkdownSub from 'markdown-it-sub';
import MarkdownSup from 'markdown-it-sup';
import MarkdownMark from 'markdown-it-mark';
import MarkdownMathjax from 'markdown-it-mathjax';
import emoji from 'markdown-it-emoji';
import MarkdownHighlight from 'markdown-it-highlightjs';
// import ReactMathjax from 'react-mathjax2';
import ReactDOM from 'react-dom';
import '../../node_modules/highlight.js/styles/default.css';


class MarkdownItRenderer extends Component {
	static defaultProps = {
		container: 'div',
		options: {
            linkify : true,
            typographer : true,
        }
	}

	render() {
		var Container = this.props.container
		return <Container>{this.content()}</Container>
	}

	componentWillUpdate(nextProps, nextState) {
		if (nextProps.options !== this.props.options) {
            this.md = new Markdown(nextProps.options);
		}
	}

	// componentDidMount(){
	// 	// Mathjax.Hub.Config({tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}});
	// 	Mathjax.Hub.Queue(['Typeset', Mathjax.Hub, ReactDOM.findDOMNode(this)]);
	// 	// console.log(Mathjax.Hub);
	// }

	content() {
		if (this.props.source) {
			return <span dangerouslySetInnerHTML={{__html: this.renderMarkdown(this.props.source)}}/>
		} else {
			return React.Children.map(this.props.children, child => {
				if (typeof child === 'string') {
					return <span dangerouslySetInnerHTML={{__html: this.renderMarkdown(child)}}/>
				} else {
					return child
				}
			})
		}
	}

	renderMarkdown(source) {
		if (!this.md) {
            this.md = new Markdown(this.props.options).use(emoji)
                                                      .use(MarkdownMathjax())
                                                      .use(MarkdownSub)
                                                      .use(MarkdownSup)
                                                      .use(MarkdownMark)
                                                      .use(MarkdownHighlight);

            this.md.renderer.rules.table_open = () => '<table class="table table-striped">\n';
		}
		return this.md.render(source)
	}
}

export default MarkdownItRenderer;