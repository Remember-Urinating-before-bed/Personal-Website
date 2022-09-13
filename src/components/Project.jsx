import React from 'react'
import WebApp from '../assets/ReactJS_web_application.png'
import Schedular from '../assets/Company_project_scheduler.png'
import VectorGraphicSoftware from '../assets/Vector_graphic_software.png'

const Project = () => {
  return (
    <div name='project' className='w-full md:h-screen text-[#484b5b] bg-[#9accdf]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pd-8 sm:pl-4'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-500'>
            Projects
          </p>
          <p className='py-4 text-xl'>
            // Have a look on my past projects
          </p>
        </div>
        {/* container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* Grid Items */}
          {/* content-div is customied */}

          {/* React JS Web Application */}
          <div style={{ backgroundImage: `url(${WebApp})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center itmes-center mx-auto content-div'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Web Application
              </span>
              <div className='pt-8 text-center'>
                {/* demo button */}
                <a href="https://remember-urinating-before-bed.github.io/Personal-Website/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                {/* code button */}
                <a href="https://github.com/Remember-Urinating-before-bed/Personal-Website/tree/master">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Codes</button>
                </a>
              </div>
            </div>
          </div>

          {/* C Company Project Scheduler */}
          <div style={{ backgroundImage: `url(${Schedular})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center itmes-center mx-auto content-div'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                C Company Project Scheduler
              </span>
              <div className='pt-8 text-center'>
                {/* code button */}
                <a href="https://github.com/Remember-Urinating-before-bed/Project-Scheduler-for-Companies">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Codes</button>
                </a>
              </div>
            </div>
          </div>

          {/* Java Command Line Vector Graphic Software  */}
          <div style={{ backgroundImage: `url(${VectorGraphicSoftware})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center itmes-center mx-auto content-div'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Java Command Line Vector Graphic Software 
              </span>
              <div className='pt-8 text-center'>
                {/* code button */}
                <a href="https://github.com/Remember-Urinating-before-bed/CL-Vector-Graphic-Software">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Codes</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project