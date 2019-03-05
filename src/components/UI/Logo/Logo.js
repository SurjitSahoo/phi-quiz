import React from 'react';
import imageLogo from '../../../assets/images/logo.png';

const Logo = () => {
    return (
        <div className='logo img'>
            <img src={imageLogo} alt='Logo' style={{height : '40px'}} />
        </div>
    );
}

export default Logo;