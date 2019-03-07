import React from 'react';
import NavigationItems from './NavigationItems/NavigationItems';
import Logo from '../Logo/Logo';

const Toolbar = () => {
    return (
        <nav id='header' className='navbar navbar-expand-sm navbar-fixed-top'>
            <span className="col-lg-2"></span>
            <Logo />
            <NavigationItems />
            <span className="col-lg-2"></span>
        </nav>
    );
}

export default Toolbar;