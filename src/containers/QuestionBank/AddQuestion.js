import React, { Component } from 'react';
import Mde from 'react-simplemde-editor';
import 'simplemde/dist/simplemde.min.css';

import ShowMarkdown from '../MarkdownIT';
import Aux from '../../hoc/Auxiliary';

class AddQuestion extends Component {
    state = {
        questions : [],
        questionTypes : {
            1 : 'Multiple Choice Single Answer',
            2 : 'Multiple Choice Multiple Answers',
            3 : 'Single Answer'
        },
        subjects : {
            a : 'Mathematics',
            b : 'Physics',
            c : 'Programming'
        },

        question : {
            question : '',
            questionType : null,
            subject : null,
            answers : [],
            correct_answers : []
        },

        value: "When $a \\ne 0$, there are two solutions to $ax^2 + bx + c = 0$ and they are $$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$"
    };

    handleValueChange = (value) => {
        this.setState({ value });
    };

    handleTabChange = tab => {
        this.setState({ tab });
    };

    setSubject = (event) => {
        console.log(event);
    }

    render(){

        return (
            <div className="container">
                <div className='form-group form-inline row'>
                    <select name="subject" className='form-control col-md-3 mx-5' onChange={this.setSubject} required >
                        <option value='' disabled selected>Select Subject</option>
                        { Object.keys(this.state.subjects).map((key) => <option key={key} value={key}>{this.state.subjects[key]}</option>)}
                    </select>
                    <select name='questionType' className='form-control col-3 mx-5' required>
                        <option value='a' disabled selected>Select Question Type</option>
                        {Object.keys(this.state.questionTypes).map((key) => <option key={key} value={key}>{this.state.questionTypes[key]}</option>)}
                    </select>
                    <button className='btn btn-info ml-5' onClick={this.questionTypeHandler}>Create Question</button>
                </div>
                {/* <Mde value={this.state.value} onChange={this.handleValueChange} options={{autofocus : true}} />
                <div>&nbsp;</div>
                <ShowMarkdown source={this.state.value} /> */}
            </div>
        )
    }
}


export default AddQuestion;