import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import Aux from '../../../../hoc/Auxiliary';
import Dropdown from './NavigationItem/dropdown';

const NavigationItems = () => {
    
    const dropdownMenu = [
        {to : '/questionbank/list', name : 'Question List'}, 
        {to : '/questionbank/add', name : 'Add Question'}
    ];
    
    return (
        <Aux>
            <ul className='nav'>
                <Dropdown dropdownMenu={dropdownMenu}>Question Bank</Dropdown>
                <NavigationItem >Quiz</NavigationItem>
                <NavigationItem >Results</NavigationItem>
            </ul>
            <ul className='nav ml-auto'>
                <NavigationItem >Login</NavigationItem>
                <NavigationItem >Logout</NavigationItem>
                <NavigationItem >Register</NavigationItem>
            </ul>
        </Aux>
    );
}

export default NavigationItems;