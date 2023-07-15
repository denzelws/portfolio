import React from 'react'
import { BsFillMoonStarsFill } from 'react-icons/bs'

const index = () => {
  return (
    <div className=' flex flex-col justify-center'>
        <nav className='py-10 mb-12 flex justify-between'>
          <h1 className='text-sm lg:text-xl'>
            Denzel
            <br className='md:hidden' />
            Washington
          </h1>

          <ul className='flex items-center cursor-pointer'>
            <li>
              <BsFillMoonStarsFill />
            </li>
            <li 
            className='bg-gradient-to-r from-purple-500 to-fuchsia-500 
            px-4 py-2 rounded-md text-white
            cursor-pointer ml-8 hover:from-purple-700 and hover:to-fuchsia-700 
            transition duration-0 hover:duration-150'>
              Resumo
            </li>
          </ul>
        </nav>
  </div>
  )
}

export default index