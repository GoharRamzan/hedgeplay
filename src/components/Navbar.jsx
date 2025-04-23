import React, { useState } from 'react';
import logo from '../assets/hedgelogo.png';
import { Link } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';
const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };
    return (
        <div className='flex fixed top-0 left-0 z-50 w-full  h-[25vh]  items-center justify-between    text-white'>
            <div className=' h-20 md:h-28 lg:h-2/3 w-[100%] md:w-[20%] lg:w-[10%] lg:ml-14 flex items-center justify-between lg:justify-center backdrop-blur-md bg-white/10 border border-white/30 rounded-full p-4 shadow-lg '>
                <img src={logo} alt="Logo" className='h-20 ml-4 md:ml-0 lg:ml-1 md:h-24' />
               
                    {/* Hamburger Menu Icon */}
                    <div className="mr-3 md:hidden flex items-center justify-center">
                        <button onClick={toggleDrawer}>
                            <HiMenu className="text-white text-3xl" />
                        </button>
                    </div>

               
            </div>
            <div className='hidden md:flex w-[75%] h-full  ml-11 items-center space-x-6 text-lg '>
                <span  className='h-6/12 w-[80%] rounded-3xl space-x-12  flex  items-center  bg-white '
                    style={{ boxShadow: '10px 10px 3px rgb(106, 106, 107)' }}
                >

                    <Link to="/" className='w-[12%] h-12 rounded-3xl bg-[#1A325E] flex items-center justify-center hover:bg-amber-600 transition duration-200 ml-16'>Home</Link>
                    <Link to="/about" className='w-[12%] h-12 rounded-3xl bg-[#1A325E] flex items-center justify-center hover:bg-amber-600 transition duration-200'>About</Link>
                    <Link to="/contact" className='w-[12%] h-12 rounded-3xl bg-[#1A325E] flex items-center justify-center hover:bg-amber-600 transition duration-200'> Contact </Link>
                    <Link to="/contact" className='w-[12%] h-12 rounded-3xl bg-[#1A325E] flex items-center justify-center hover:bg-amber-600 transition duration-200'> Articles </Link>

                </span>

            </div>

            {/* mobile design */}
            <>
                {/* Mobile Drawer */}
                <div
                    className={`fixed top-0 right-0 z-40 w-64 bg-[#1A325E] h-full transition-transform duration-300 transform ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    <div className="flex flex-col items-center mt-20 space-y-6">
                        <Link
                            to="/"
                            className='w-[80%] h-14 rounded-3xl bg-amber-600 flex items-center justify-center hover:bg-amber-800 transition duration-200'
                            onClick={toggleDrawer}
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className='w-[80%] h-14 rounded-3xl bg-amber-600 flex items-center justify-center hover:bg-amber-800 transition duration-200'
                            onClick={toggleDrawer}
                        >
                            About
                        </Link>
                        <Link
                            to="/contact"
                            className='w-[80%] h-14 rounded-3xl bg-amber-600 flex items-center justify-center hover:bg-amber-800 transition duration-200'
                            onClick={toggleDrawer}
                        >
                            Contact
                        </Link>
                    </div>
                </div>

                {/* Overlay */}
                <div
                    className={`fixed top-0 left-0 w-full h-full bg-black opacity-50 ${isDrawerOpen ? 'block' : 'hidden'}`}
                    onClick={toggleDrawer}
                ></div>
            </>
        </div>



    );
};

export default Navbar;
