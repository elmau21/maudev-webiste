import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaTwitter, FaFacebook, FaYoutube} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/Md.png';
import CV from '../CV/Mau_Developer.pdf';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={Logo} alt="Logo Image" style={{width: '110px'}}/>
        </div>
        {/* menu */}
            <ul className='hidden md:flex'>
            <li>
          <Link className='hover:bg-pink-400 rounded-md' to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link className='hover:bg-pink-400 rounded-md' to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link className='hover:bg-pink-400 rounded-md' to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link className='hover:bg-pink-400 rounded-md'to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
            </ul>
        {/* Ham Menu */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
          <li className='py-4 text-4xl'>
            <Link onClick={handleClick} to='home' smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className='py-4 text-4xl'>
            {' '}
            <Link onClick={handleClick} to='about' smooth={true} duration={500}>
              About Me
            </Link>
          </li>
          <li className='py-4 text-4xl'>
            {' '}
            <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className='py-4 text-4xl'>
            {' '}
            <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>


        {/* Social Icons*/}
        <div className=' hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/elmau21">
                        GitHub <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://www.facebook.com/maupl.02/">
                        Facebook <FaFacebook size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#7e1616]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://www.youtube.com/channel/UCrxnzMrr5dEAm326EAW6FiA">
                        YouTube <FaYoutube size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-400'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://twitter.com/maugodtv">
                        Twitter <FaTwitter size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#C13584]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://www.instagram.com/just_maupl/">
                        Instagram<BsInstagram size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#833AB4]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href={CV}>
                        Resume<BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar;