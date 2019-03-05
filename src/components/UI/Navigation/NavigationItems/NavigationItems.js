import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import Aux from '../../../../hoc/Auxiliary';
import Dropdown from './NavigationItem/dropdown';

const NavigationItems = () => {
    
    return (
        <Aux>
            <ul className='nav'>
                <Dropdown>Users</Dropdown>
                <NavigationItem aditionalClass='true'>Question Bank</NavigationItem>
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