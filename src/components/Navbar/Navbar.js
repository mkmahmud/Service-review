import React, { useContext } from 'react';
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext/UserContext';

const Navbar = () => {


    // Context Data
    const { user, logOut} = useContext(AuthContext)
    // User Data 
    
    console.log(user)

    // Menus
    const menus = <>
        <li><Link to='/'>Home</Link></li>
        <li><a href='#about'>About</a></li>
        <li><Link to='/services'>Services</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
    </>

    // handelLogOut
    const handelLogOut = () => {
        logOut()
    }

    

    return (
        <div className="navbar bg-black text-white h-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52">
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
                {
                    user?.uid ?
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user?.photoURL} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-black rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        {user?.displayName}
                                    </a>
                                </li>
                                <li style={{width:'200px'}}><a>{user?.email}</a></li>
                                <li><a><Link to='/addservice'>Add new Service</Link></a></li>
                                <li><a><Link to='/myreviews'>My Reviews</Link></a></li>
                                <li><a onClick={handelLogOut}>Logout</a></li>
                            </ul>
                        </div>
                        :
                        <>
                            <button className='btn btn-success'> <Link to='/login'>log in</Link></button>
                            <button className='btn btn-danger'> <Link to='/signup'>Sign Up</Link></button>
                        </>
                }

            </div>
        </div>
    );
};

export default Navbar;