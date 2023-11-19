import React from 'react';
import './header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <div className='header'>
            <div>
                <img src={logo} alt=""/>
            </div>
            <div className='menu'>
                <a href="/order">Order</a>
                <a href="/OrderReview">Order Review</a>
                <a href="/ManageInventory">Manage Inventory</a>
                <a href="/Login">Login</a>
            </div>
        </div>
    );
};


export default Header;