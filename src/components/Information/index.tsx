import React from 'react';

import { BsArrowDownShort } from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const Information = () => {
 
  return (
    <div className='h-[85vh]'>
      <div className='h-full flex flex-col justify-center items-center'>
       
        <div className='flex flex-col items-center gap-10 h-max'>
        <h1 className='text-5xl text-center lg:text-7xl dark:text-white'>
          FRONT END DEV.
          <br/>
          WEB DESIGNER
        </h1>

        <span className='text-6xl animate-bounce cursor-pointer'>
          <BsArrowDownShort style={{ fill: 'purple' }} onClick={() => window.location.href = '#services'}/>
        </span>

        <div className='flex text-5xl lg:text-4xl text-gray-500 gap-5 mt-10 cursor-pointer dark:text-gray-400'>
          <a href="https://www.linkedin.com/in/dzwashington/" target='_blank' rel='noopener noreferrer'>
          <AiFillLinkedin/>
          </a>
          <a href="https://github.com/denzelws" target='_blank' rel='noopener noreferrer'>
          <AiFillGithub/>
          </a>
        </div>
        </div>

      </div>
    </div>
  );
};

export default Information;
