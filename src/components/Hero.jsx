import React from 'react'
import {FaFileDownload} from 'react-icons/fa'
import CV from '../CV/Mau_Developer.pdf';

const Hero = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        {/*Container*/}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-400 text-4xl'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Mauricio Pacheco Lizama
            </h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a 
            <span className='text-4xl sm:text-7xl font-bold text-green-400 px-2'>Full Stack</span> Developer and Data Engineer
            </h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a 18 years old full stack developer,
            improving the attractive user interface and design that all users dream of having so that the software 
            designed is as expected in a way that everyone is happy.</p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-400 hover:border-pink-400'>
                <a href={CV}>Download my CV</a>
                 <FaFileDownload className='ml-3'/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Hero;