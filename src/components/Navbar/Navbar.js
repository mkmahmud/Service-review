import React from 'react';
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {

    // Menus
    const menus = <>
          <li><a>Home</a></li>
          <li><a>About</a></li>
          <li><a>Services</a></li>
    </>

    return (
        <div className="navbar bg-black text-white h-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                       {
                        menus
                       }
                    </ul>
                </div>
                <a> <img className='h-16' src={logo} alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {
                        menus
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">log in</a>
            </div>
        </div>
    );
};

export default Navbar;