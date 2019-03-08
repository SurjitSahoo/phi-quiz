import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Aux from '../hoc/Auxiliary';
import Toolbar from '../components/UI/Navigation/Toolbar';
import QuestionList from './QuestionBank/QuestionList';
import AddQuestion from './QuestionBank/AddQuestion';

class Layout extends Component {

    render(){
        return (
            <Aux>
                <Toolbar />
                <div className='header-spacer'></div>
                <div className='container'>
                    <div className='row'>&nbsp;</div>
                    <Route path='/questionbank/list' component={QuestionList} />
                    <Route path='/questionbank/add' component={AddQuestion} />
                </div>
            </Aux>
        );
    }
}

export default Layout;