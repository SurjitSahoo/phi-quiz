import React, { Component } from 'react';

import Header from '../components/UI/Header/Header';
import Aux from '../hoc/Auxiliary';
import Toolbar from '../components/UI/Navigation/Toolbar';

class Layout extends Component {

    render(){
        return (
            <Aux>
                <Toolbar />
                {this.props.children}
            </Aux>
        );
    }
}

export default Layout;