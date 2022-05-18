import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaBlogger } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className='fixed w-full h-[100px] flex justify-between items-center px-4 bg-[#0c254b] text-white text-xl'>
            {/* logo */}
            <text>
                Leung's personal web
            </text>

            {/* menu */}
            <ul className='hidden sm:flex font-[Courgette]'>
                <li className='txt'>
                    <Link activeClass="active" to="home" smooth={true} duration={500} >
                        Home
                    </Link>
                </li>
                <li className='txt'>
                    <Link activeClass="active" to="about" smooth={true} duration={500} >
                        About
                    </Link>
                </li>
                <li className='txt'>
                    <Link activeClass="active" to="skills" smooth={true} duration={500} >
                        Skills
                    </Link>
                </li>
                <li className='txt'>
                    <Link activeClass="active" to="side_project" smooth={true} duration={500} >
                        Side Projects
                    </Link>
                </li>
                <li className='txt'>
                    <Link activeClass="active" to="contact" smooth={true} duration={500} >
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className='sm:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#9accdf] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl txt'>
                    <Link onClick={handleClick} activeClass="active" to="home" smooth={true} duration={500} >
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl txt'>
                    <Link onClick={handleClick} activeClass="active" to="about" smooth={true} duration={500} >
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl txt '>
                    <Link onClick={handleClick} activeClass="active" to="skills" smooth={true} duration={500} >
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl txt'>
                    <Link onClick={handleClick} activeClass="active" to="side_project" smooth={true} duration={500} >
                        Side Projects
                    </Link>
                </li>
                <li className='py-6 text-4xl txt'>
                    <Link onClick={handleClick} activeClass="active" to="contact" smooth={true} duration={500} >
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Social icons */}
            <div className='hidden md:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    {/* mail */}
                    <Link activeClass="active" to="contact" smooth={true} duration={500} >
                        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-700'>
                            <a className='flex justify-between items-center w-full text-gray-300'>
                                Mail <HiOutlineMail size={30} />
                            </a>
                        </li>
                    </Link>


                    {/* github */}
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#181c20]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href="https://github.com/Remember-Urinating-before-bed">
                            Github <FaGithub size={30} />
                        </a>
                    </li>

                    {/* Blog */}
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-purple-700'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href="https://medium.com/@Xavier.ck">
                            Blog <FaBlogger size={30} />
                        </a>
                    </li>

                    {/* resume
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
                        <a className='flex justify-between items-center w-full text-gray-300'>
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li> */}


                </ul>
            </div>

        </div>
    )
}

export default Navbar