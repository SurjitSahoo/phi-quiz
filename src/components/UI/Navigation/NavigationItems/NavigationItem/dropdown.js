import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = props => {

    let dropdownButtonClasses = ['nav-link', 'text-white', 'dropdown-toggle'];
    dropdownButtonClasses.push(props.aditionalClass);

    // Map dropdown array to dropdown Elements
    const dropdownItems = props.dropdownMenu.map(dropdownItem => (
        <li key={dropdownItem.name}>
            <Link to={dropdownItem.to} className='text-white'>{dropdownItem.name}</Link>
        </li>
    ));

    return (
        <li className="dropdown">
            <a className={dropdownButtonClasses.join(' ')} data-toggle="dropdown">{props.children}</a>
            <ul className='dropdown-menu bg-info'>
                {dropdownItems}
            </ul>
        </li>
    );
}

export default Dropdown;