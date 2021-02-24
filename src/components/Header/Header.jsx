import React, { Component } from 'react';
import  './Header.css';
import  'bootstrap/dist/css/bootstrap.min.css';
import { NavLink, Link } from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <Link to='/' className='navbar-brand'>Crypto App</Link>
                <ul className='navbar-nav ml-auto'>
                    <NavLink exact to='/'  activeClassName={'activeLink'} className='nav-link'>Crypto Table Values</NavLink>
                    <NavLink to='/add_values' activeClassName={'activeLink'} className='nav-link'>Add Crypto Table Values</NavLink>
                </ul>
            </nav>
        )
    }
}

export default Header;