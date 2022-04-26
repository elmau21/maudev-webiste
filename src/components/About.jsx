import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-9 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About Me:
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 pb-100'>
            <div className='sm:text-right text-4xl font-bold'>
              <p className='sm:text-right pb-1 pl-4'>Hi. I'm Mau, nice to meet. You let me introduce me:</p>
            </div>
            <div>
              <p className='px-3'>Since 2020 I'd had been working on my own projects and improving my skills to build great software and websites that they can be useful for users and keeping in mind the SEO and UI/UX design for optimize the website or app usage.</p>
              <p className='py-1 px-3 pb-48'>I am a self-taught programmer, during the internship period I had, I developed multiple problems to understand certain syntaxes of programming languages. After a year and a half I was able to overcome those "bumps" and continued to move forward, learning in the process languages like C++, C# and PHP (languages that I still use today).</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;