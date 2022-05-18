import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'
import personalPic from '../assets/Personal_pic.jpg'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#9accdf]'>

      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-xl text-pink-600'>Hi there, my name is is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#389472]'>Xavier Leung</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#545f7e]'>I'm a Year-2 student stdying Computing</h2>
        <br />
        <p className='text-[#54576a] text-xl py-4 max-w-[700px]'>I'm from Hong Kong & currently studying in the Hong Kong Polytechnic University. This year, I hope to discover more technolgies in different aspects.</p>
        <div className='flex justify-between'>
          <Link activeClass="active" to="about" smooth={true} duration={800}>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View More
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3' />
              </span>
            </button>
          </Link>
          <img className='rounded-lg object-scale-down h-80 w-150' src={personalPic} alt="personal picture" /> 
        </div>
      </div>
    </div>
  )
}

export default Home