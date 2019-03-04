import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = () => {
    return (
        <ul className='navbar-nav'>
            <NavigationItem >Users</NavigationItem>
            <NavigationItem >Question Bank</NavigationItem>
            <NavigationItem >Quiz</NavigationItem>
            <NavigationItem >Results</NavigationItem>
        </ul>
    );
}

export default NavigationItems;