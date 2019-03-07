import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = props => {

    let classes = ['nav-link', 'text-white', 'dropdown-toggle'];
    classes.push(props.aditionalClass);

    const dropdownItems = props.dropdownMenu.map(dropdownItem => (
        <li key={dropdownItem.name}>
            <Link to={dropdownItem.to}>{dropdownItem.name}</Link>
        </li>
    ));

    const newDropdownItems = <ul className='dropdown-menu'>{dropdownItems}</ul>

    return (
        <li className="dropdown">
            <a className={classes.join(' ')} data-toggle="dropdown" href='#!'>{props.children}</a>
            {newDropdownItems}
        </li>
    );
}

export default Dropdown;