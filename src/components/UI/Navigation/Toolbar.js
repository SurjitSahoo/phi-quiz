import React from 'react';
import NavigationItems from './NavigationItems/NavigationItems';
import Logo from '../Logo/Logo';

const Toolbar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-info text-light'>
            <div className="container">
                <a className="navbar-brand"><Logo /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className='navbar-toggler-icon'></i>
                </button>
                <NavigationItems />
            </div>
        </nav >
    );
}

export default Toolbar;