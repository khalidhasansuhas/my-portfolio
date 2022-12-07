import React, { useState } from 'react';
import logo from '../assets/logo.png'
import {
  FaBars,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTimes,
} from 'react-icons/fa';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion'
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => {
    setNav(!nav)
  }
  return (
    <div className='container fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f]  text-gray-300'>
      <div>

        <Link to='home' smooth={true} duration={500}>
          <img className='cursor-pointer'  src={logo} alt="" style={{ width: '70px' }} />
        </Link>
      </div>
      {/*menu */}
      <ul className='hidden md:flex'>
        <motion.li whileHover={{scale:1.5}} className='hover:bg-pink-600'>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </motion.li>
        <motion.li whileHover={{scale:1.5}} className='hover:bg-pink-600'>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </motion.li>
        <motion.li whileHover={{scale:1.5}} className='hover:bg-pink-600'>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </motion.li>
        <motion.li whileHover={{scale:1.5}} className='hover:bg-pink-600'>
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
        </motion.li>
        <motion.li whileHover={{scale:1.5}} className='hover:bg-pink-600'>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </motion.li>
      </ul>
      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-20'>
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
        <li className='py-6 text-4xl'><Link onClick={handleClick} to='home' smooth={true} duration={500}>
          Home
        </Link></li>
        <li className='py-6 text-4xl'><Link to='about' onClick={handleClick} smooth={true} duration={500}>
          About
        </Link></li>
        <li className='py-6 text-4xl'> <Link to='skills' onClick={handleClick} smooth={true} duration={500}>
          Skills
        </Link></li>
        <li className='py-6 text-4xl'><Link to='work' onClick={handleClick} smooth={true} duration={500}>
          Work
        </Link></li>
        <li className='py-6 text-4xl'><Link to='contact' onClick={handleClick} smooth={true} duration={500}>
          Contact
        </Link></li>
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
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-900'>
            <a
              className='flex justify-between items-center font-semibold w-full text-gray-300'
              href='https://www.facebook.com/suuhaas'
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook <FaFacebook size={30} />
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