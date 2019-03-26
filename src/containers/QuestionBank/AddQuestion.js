import React, { Component } from 'react';
import * as Showdown from 'showdown';
import Markdown from '@nteract/markdown';
import ReactMde from 'react-mde';
import 'react-mde/lib/styles/css/react-mde-all.css';

import ShowMarkdown from '../MarkdownIT';
import Aux from '../../hoc/Auxiliary';

class AddQuestion extends Component {
    constructor (props) {
        super(props);
        this.state = {
          value: "When $a \\ne 0$, there are two solutions to $ax^2 + bx + c = 0$ and they are $$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$"
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

        return (
            <Aux>
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
                    {/* <ShowMarkdown source={this.state.value} /> */}
                    <Markdown source={this.state.value} />
                </div>
            </Aux>
        )
    }
}


export default AddQuestion;