import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#9accdf] text-[#484b5b]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            {/* container */}
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-500'>
                        About
                    </p>
                </div>
                <div></div>
            </div>
            {/* sm:grid-cols-2  turns adjacent obj to 2 lines of obj*/}
            <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi, I'm Xavier, nice to meet you. Please feel free to look around</p>
                </div>
                <div>
                    <p className='text-xl'>I am passionate in dicovering new technolgies that can improve the lives of poeple since young.
                       I am current wirting programs with Java, Python and any other languages that can help me to fullfill my task.
                    </p>
                    <p>
                       <br />
                       Motto that inspires me: "Don't say what you make, make what you say "
                    </p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default About