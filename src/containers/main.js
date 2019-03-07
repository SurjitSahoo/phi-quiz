import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Aux from '../hoc/Auxiliary';
import Toolbar from '../components/UI/Navigation/Toolbar';
import QuestionList from './QuestionList/QuestionList';

class Layout extends Component {

    render(){
        return (
            <Aux>
                <Toolbar />
                <div className='header-spacer'></div>
                <div className='container'>
                    <Route path='/questionbank/list' component={QuestionList} />
                </div>
                
            </Aux>
        );
    }
}

export default Layout;