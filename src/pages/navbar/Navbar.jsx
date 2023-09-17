import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className='flex items-center md:flex-col'>
            <div onClick={() => setOpen(!open)} className='md:hidden w-[50%]'>
                <span>
                    {
                        open === true ? <button>
                            <XMarkIcon className="h-6 w-6 text-blue-500"></XMarkIcon></button>
                            : <button><Bars3Icon className="h-6 w-6 text-blue-500" /></button>
                    }
                </span>
            </div>
               <div className={`navbar bg-neutral text-neutral-content flex flex-col 
                items-start md:flex-row md:justify-center absolute md:static w-[50%] rounded-lg
                ${open ? 'top-16' : '-top-52'}`}>
                <Link className='btn btn-ghost normal-case text-xl' to="/">Home</Link>
                <Link className='btn btn-ghost normal-case text-xl' to="/blog">Blog</Link>
                <Link className='btn btn-ghost normal-case text-xl' to="/about">About</Link>
                <Link className='btn btn-ghost normal-case text-xl' to="/contact">Contact</Link>
               </div><hr className='w-[90%] m-auto hidden md:block' />
                 
            <div className="flex flex-row items-center justify-between w-full">
                    {/* <div className="form-control hidden md:block">
                        <input
                            type="text"
                            placeholder="Search"
                            className="input input-bordered w-24 md:w-auto "
                        />
                    </div> */}
                <a className="btn btn-ghost normal-case text-xl hidden md:block">daisyUI</a>
                <div>
                    <h3 className='text-3xl md:text-5xl'>Cook&Meal</h3>
                         <p className='text-center hidden md:block'>Recipes and Food</p>
                </div>
                

                    <div className="dropdown dropdown-end ">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="/" />
                            </div>
                        </label>
                        <ul tabIndex={0}
                            className="mt-3 z-[1] p-2 shadow menu 
                            menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
            </div>

        </nav>
    );
};

export default Navbar;