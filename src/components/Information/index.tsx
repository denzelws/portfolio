import React from 'react';
import { BsArrowDownShort } from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';


import Scroll from '../../components/Scroll'

const Information = () => {
 
  return (
    <div className='h-[85vh]'>
      <div className='h-full flex flex-col justify-center items-center'>
       
        <div className='flex flex-col items-center gap-10 h-max'>
        <h1 className='text-5xl text-center lg:text-7xl'>
          FRONT END DEV.
          <br/>
          WEB DESIGNER
        </h1>

        <span className='text-6xl animate-bounce cursor-pointer'>
          <BsArrowDownShort style={{ fill: 'purple' }}/>
        </span>

        <div className='flex text-3xl lg:text-4xl text-gray-500 gap-5 mt-10 cursor-pointer'>
          <AiFillLinkedin/>
          <AiFillGithub/>
        </div>
        </div>

      </div>
        <Scroll />
    </div>
  );
};

export default Information;
