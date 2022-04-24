import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About Me:
            </p>
          </div>
          <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-9 px-4">
          
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p className='sm:text-right pb-8 pl-4'>Hi. I'm Mau, nice to meet you. Please take a look around. Please, let me introduce you to:</p>
              <p className='py-10 text-green-400 sm:text-right pb-8 pl-4'>My path to Full-Stack</p>
              <p className='py-5 text-green-400 sm:text-right pb-8 pl-4'>And</p>
              <p className='py-5 text-pink-300 sm:text-right pb-8 pl-4' >My Hobbies:</p>
            </div>
            <div>
              <p className='py-1.5 px-3'>Since 2020 I'd had been working on my own projects and improving my skills to build great software and websites that they can be useful for users and keeping in mind the SEO and UI/UX design for optimize the website or app usage.</p>
              <p className='py-10 px-3'>I am a self-taught programmer, during the internship period I had, I developed multiple problems to understand certain syntaxes of programming languages. After a year and a half I was able to overcome those "bumps" and continued to move forward, learning in the process languages like C++, C# and PHP (languages that I still use today).</p>
              <p className='py-1.5 px-3'>
               -  Play videogames with friends
              </p>
              <p className='py-1.5 px-3'>
               -  Learn about Machine Learning and Deep Learning,
              </p>
              <p className='py-1.5 px-3'>
               -  Listening to HyperPop and trap music.
              </p>
              <p className='py-1.5 px-3'>
               -  Learn new languages.
              </p>
              <p className='py-1.5 px-3 pb-40'>
               -  Learn new Programming languages.
              </p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;