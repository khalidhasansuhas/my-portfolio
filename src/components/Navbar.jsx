import React, { useState } from 'react';
import logo from '../assets/logo.png'
import {
    FaBars,
    FaFacebook,
    FaGithub,
    FaLinkedin,
    FaTimes,
  } from 'react-icons/fa';

import { BsFillPersonLinesFill } from 'react-icons/bs';

const Navbar = () => {
    const [nav, setNav]= useState(false)
    const handlClik=()=>{
        setNav(!nav)
    }
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f]  text-gray-300'>
            <div>
            <img src={logo} alt="" style={{ width: '70px' }} />
            </div>
              {/*menu */}
              <ul className='hidden md:flex'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Work</li>
                    <li>Contact</li>
                </ul>
            {/* Hamburger */}
            <div onClick={handlClik} className='md:hidden z-20'>
                {
                    !nav 
                    ? <FaBars></FaBars>
                    : <FaTimes></FaTimes>
                }
            </div>
            {/* Mobile Menu */}
            <ul className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
            >
                    <li className='py-6 text-4xl'>Home</li>
                    <li className='py-6 text-4xl'>About</li>
                    <li className='py-6 text-4xl'>Skills</li>
                    <li className='py-6 text-4xl'>Work</li>
                    <li className='py-6 text-4xl'>Contact</li>
                </ul>
            {/* social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center font-semibold w-full text-gray-300'
              href='https://www.linkedin.com/in/khalid-hasan-suhas/'
              target="_blank" 
              rel="noopener noreferrer"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center font-semibold w-full text-gray-300'
              href='https://github.com/khalidhasansuhas'
              target="_blank" 
              rel="noopener noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center font-semibold w-full text-gray-300'
              href='https://www.facebook.com/suuhaas'
              target="_blank" 
              rel="noopener noreferrer"
            >
              Email <FaFacebook size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center font-semibold w-full text-gray-300'
              href='https://drive.google.com/file/d/1I8nz1AKATaacBX5D1EKeacBt8cInSapy/view?fbclid=IwAR1bbQN0B4pZkGI7diPRShT-_nGva3N0dxB8ndHvz2ZDral_89uxKcOGdWI'
              target="_blank" 
              rel="noopener noreferrer"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
        </div>
    );
};

export default Navbar;