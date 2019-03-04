import React from 'react';
import NavigationItems from './NavigationItems/NavigationItems';
import Logo from '../Logo/Logo';

const Toolbar = () => {
    return (
        <nav className='navbar navbar-expand-sm bg-primary navbar-dark fixed-top'>
            <a className='navbar-brand' href="#"><Logo/></a>
            <NavigationItems />
        </nav>
    );
}

export default Toolbar;