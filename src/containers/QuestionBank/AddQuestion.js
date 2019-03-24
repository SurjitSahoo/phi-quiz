import React, { Component } from 'react';
import MathJax from 'react-mathjax2';
import * as Showdown from 'showdown';
import ReactMde from 'react-mde';
import 'react-mde/lib/styles/css/react-mde-all.css';
import RemarkMathPlugin from 'remark-math';
import ReactMarkdown from 'react-markdown';
import MarkdownRenderer from '../../components/MarkdownRenderer';

import Aux from '../../hoc/Auxiliary';

class AddQuestion extends Component {
    constructor (props) {
        super(props);
        this.state = {
          value: "$\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$"
        };
        this.converter = new Showdown.Converter({
            tables: true,
            simplifiedAutoLink: true,
            strikethrough: true,
            tasklists: true
        });
    }

    handleValueChange = (value) => {
        console.log(value);
        this.setState({ value });
    };

    handleTabChange = tab => {
    this.setState({ tab });
    };

    render(){
            
        const renderers = {
            math: () => <div><MathJax.Node>{this.state.value}</MathJax.Node></div>,
            inlineMath: (val) => <MathJax.Node inline>{val}</MathJax.Node>
        }

        return (
            <Aux>
            <MathJax.Context input="tex">
                <div className="container">
                    <ReactMde
                        onChange={this.handleValueChange}
                        onTabChange={this.handleTabChange}
                        value={this.state.value}
                        generateMarkdownPreview={markdown =>
                            Promise.resolve(this.converter.makeHtml(markdown))
                        }
                        selectedTab={this.state.tab}
                        />
                        <div>&nbsp;</div>
                        {/* <Markdown>{this.state.value}</Markdown> */}
                        {/* <p>some garbage text to check<MathJax.Node >{"\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}"}</MathJax.Node></p> */}
                        {/* <ReactMarkdown plugins={[RemarkMathPlugin]} renderers={renderers} source={this.state.value}/> */}
                        
                </div>
            </MathJax.Context>
            <p>test</p>
            <MarkdownRenderer value={this.state.value} />
            </Aux>
        )
    }
}


export default AddQuestion;