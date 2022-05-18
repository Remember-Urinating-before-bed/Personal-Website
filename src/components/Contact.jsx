import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#9accdf] flex flex-col justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/2f4a086e-7f50-4785-b9d3-f0dda3f8a138" className='flex flex-col max-w-[800px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-500 text-[#484b5b]'>Contact</p>
                <p className='pt-4 text-[#484b5b]'>**********************************************************</p>
                <p className='text-[#484b5b]'>* Feel free to fill in the form / shoot me an email&ensp;&emsp;&emsp;&emsp;*</p>
                <p className='text-[#484b5b]'>*&ensp;-xavierleung88@gmail.com- &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&ensp;&ensp;*</p>
                <p className='text-[#484b5b]'>**********************************************************</p>
            </div>
            <input className='p-2 bg-[#ccd6f6]' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Contact Email' name='email' />
            <textarea className='p-2 bg-[#ccd6f6]' name="message" rows="8" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-500 px-4 py-3 my-8 mx-auto flex items-center'>Send</button>
        </form>
    </div>
  )
}

export default Contact