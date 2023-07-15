import React from 'react';
import { BsArrowDownShort } from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const Index = () => {
  return (
    <div className='h-screen flex justify-center'>
      <div className='h-3/6 flex flex-col justify-center items-center relative'>
        <div>
          <h1 className='text-5xl lg:text-7xl text-center'>
            FRONT END DEV.
            <br />
            WEB DESIGN
          </h1>
        </div>

        <span className='text-5xl animate-bounce mt-4 cursor-pointer'>
          <BsArrowDownShort style={{ fill: 'purple' }} />
        </span>

        <div className='mt-8 flex items-center space-x-4 text-3xl lg:text-4xl py-3 text-gray-600'>
          <a href='https://www.linkedin.com/in/dzwashington/' target='_blank' rel='noopener noreferrer'>
            <AiFillLinkedin  />
          </a>
          <a href="https://github.com/denzelws" target='_blank' rel='noopener noreferrer'>
            <AiFillGithub  />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
