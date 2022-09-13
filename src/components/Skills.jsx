import React from 'react'
import Python from '../assets/Python.png'
import Java from '../assets/Java.png'
import C_Sharp from '../assets/C-Sharp.png'
import MySQL from '../assets/MySQL.png'
import Github from '../assets/Github.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#9accdf] text-[#484b5b]'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='sm:pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-500'>Skills</p>
                <p className='py-4 text-xl'># The following are the technologies that I've worked with:</p>
            </div>

            {/* icons */}
            <div className='w-full grid grid-cols-2 gap-4 sm:grid-cols-2 text-center py-8'>

                {/* Python */}
                <div className='shadow-md shadow-[#6190a1] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Python} alt="Python Icon" />
                    <p className='my-4'>Python</p>
                </div>

                {/* Java */}
                <div className='shadow-md shadow-[#6190a1] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Java} alt="Java Icon" />
                    <p className='my-4'>Java</p>
                </div>

                {/* C++ */}
                <div className='shadow-md shadow-[#6190a1] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={C_Sharp} alt="C# Icon" />
                    <p className='my-4'>C#</p>
                </div>

                {/* MySql */}
                <div className='shadow-md shadow-[#6190a1] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={MySQL} alt="MySQL Icon" />
                    <p className='my-4'>MySQL</p>
                </div>

                {/* Github */}
                <div className='shadow-md shadow-[#6190a1] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Github} alt="Github Icon" />
                    <p className='my-4'>Github</p>
                </div>
            
            </div>
        </div>
    </div>
  )
}

export default Skills