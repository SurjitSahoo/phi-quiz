import React from 'react';

const Dropdown = props => {

    let classes = ['nav-link', 'text-white', 'dropdown-toggle'];
    
    classes.push(props.aditionalClass);
    
    return (
        <li className="dropdown">
            <a className={classes.join(' ')} data-toggle="dropdown" href='#!'>{props.children}</a>
            <ul className='dropdown-menu'>
                <li onClick={props.clicked}>List</li>
                <li onClick={props.clicked}>Group</li>
            </ul>
        </li>
    );
}

export default Dropdown;