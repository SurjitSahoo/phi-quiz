import React from 'react';

const NavigationItem = props => {
    
    let classes = ['nav-link', 'text-white'];
    
    classes.push(props.aditionalClass);
    
    return (
        <li className="nav-item">
            <a className={classes.join(' ')} href='#!'>{props.children}</a>
        </li>
    );
}

export default NavigationItem;