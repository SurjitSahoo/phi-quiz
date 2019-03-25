import React, { Component } from 'react'
import Markdown from 'markdown-it'
import MarkdownTex from 'markdown-it-mathjax';
import emoji from 'markdown-it-emoji';
import hljs from 'highlight.js';

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
            const new_options = {...this.props.options, 
                highlight : (str, lang) => {
                    if (lang && hljs.getLanguage(lang)){
                        try {
                            return '<pre class="hljs"><code>' + hljs.highlight(lang, str).value + '</code></pre>';
                        }catch (__) {}
                    }
                    return '<pre class="hljs"><code>' + this.md.utils.escapeHtml(str) + '</code></pre>'; 
                }
            };
            this.md = new Markdown(new_options);
		}
		return this.md.render(source)
	}
}

export default MarkdownItRenderer;