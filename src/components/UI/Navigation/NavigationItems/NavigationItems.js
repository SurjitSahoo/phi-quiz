import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import Dropdown from './NavigationItem/dropdown';

const NavigationItems = () => {
    
    const dropdownMenu = [
        {to : '/questionbank/list', name : 'Question List'}, 
        {to : '/questionbank/add', name : 'Add Question'}
    ];
    
    return (
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ml-auto'>
                <Dropdown dropdownMenu={dropdownMenu}>Question Bank</Dropdown>
                <NavigationItem >Quiz</NavigationItem>
                <NavigationItem >Results</NavigationItem>
                <NavigationItem >Login</NavigationItem>
                <NavigationItem >Logout</NavigationItem>
                <NavigationItem >Register</NavigationItem>
            </ul>
        </div>
    );
}

export default NavigationItems;