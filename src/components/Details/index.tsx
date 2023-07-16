import Image from 'next/image'
import React from 'react'

import design from '../../img/design.png'
import code from '../../img/code.png'
import consulting from '../../img/consulting.png'

const Details = () => {
  return (
    <div className='mt-20'>
        <h3 className='text-3xl py-1'>Serviços que ofereço</h3>
        <p className='text-md py-2 leading-8 text-gray-80'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem laborum aliquam vero esse est adipisci debitis facilis qui porro nisi!
          Lorem ipsum dolor sit amet <span className='text-purple-500'>consectetur</span> adipisicing elit. Nemo autem ad in voluptates quaerat quibusdam velit nostrum earum sunt repudiandae?
        </p>
        <p className='text-md py-2 leading-8 text-gray-80'>
          Lorem ipsum dolor sit amet <span className='text-purple-500'>consectetur</span> adipisicing elit. Nemo autem ad in voluptates quaerat quibusdam velit nostrum earum sunt repudiandae?
        </p>

        <div className='p-10 flex flex-col items-center text-center shadow-lg rounded-xl my-10'>
            <Image src={design} alt='Uma imagem com um desenho dentro simulando um design ' width={100} height={100} />
            <h3 className='text-lg font-medium pt-8 pb-2'>Interfaces exuberantes </h3>
            <p className='py-2'>
            Design elegante e personalizado para você. 
            Desde identidades visuais até interfaces intuitivas, estou pronto para dar vida às suas ideias com beleza e funcionalidade.
            </p>
            <h4 className='py-4 text-fuchsia-600'>Ferramentas de Design</h4>
            <p className='text-gray-800 py-1'>Figma</p>
        </div>

        <div className='p-10 flex flex-col items-center text-center shadow-lg rounded-xl my-10'>
            <Image src={code} alt='Uma imagem com um desenho dentro simulando um design ' width={100} height={100} />
            <h3 className='text-lg font-medium pt-8 pb-2'>Interfaces exuberantes </h3>
            <p className='py-2'>
            Design elegante e personalizado para você. 
            Desde identidades visuais até interfaces intuitivas, estou pronto para dar vida às suas ideias com beleza e funcionalidade.
            </p>
            <h4 className='py-4 text-fuchsia-600'>Ferramentas de Design</h4>
            <p className='text-gray-800 py-1'>Figma</p>
        </div>

        <div className='p-10 flex flex-col items-center text-center shadow-lg rounded-xl my-10'>
            <Image src={consulting} alt='Uma imagem com um desenho dentro simulando um design ' width={100} height={100} />
            <h3 className='text-lg font-medium pt-8 pb-2'>Interfaces exuberantes </h3>
            <p className='py-2'>
            Design elegante e personalizado para você. 
            Desde identidades visuais até interfaces intuitivas, estou pronto para dar vida às suas ideias com beleza e funcionalidade.
            </p>
            <h4 className='py-4 text-fuchsia-600'>Ferramentas de Design</h4>
            <p className='text-gray-800 py-1'>Figma</p>
        </div>
    </div>
  )
}

export default Details