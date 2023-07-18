import React from 'react'

import linkup from '../../img/port1.png'
import windwatch from '../../img/port2.png'
import won from '../../img/port3.png'
import Image from 'next/image'

const Portfolio = () => {
  return (
    <div className='dark:text-white'>
        <h3 className='text-3xl py-1'>Portfolio</h3>
        <p className='text-md py-2 leading-8 text-gray-80'>
        Ao longo da minha jornada, trabalhei em diversos projetos desafiadores, cada um com suas próprias demandas e objetivos únicos. Minha experiência abrange desde a criação de sites corporativos elegantes até o desenvolvimento de aplicativos interativos e intuitivos.
        </p>
        <p className='text-md py-2 leading-8 text-gray-80'>
        Com o uso de tecnologias modernas e ferramentas avançadas, garanto que cada projeto seja desenvolvido com eficiência, qualidade e escalabilidade. Minha expertise em frameworks como React, NextJS e Node.js permite criar interfaces dinâmicas e envolventes, proporcionando uma experiência agradável aos usuários.
        </p>
        <p className='text-md py-2 leading-8 text-gray-80'>
         Segue alguns abaixo:
        </p>
        <p className='text-md py-2 leading-8 text-gray-80'>
         LinkUp - App de Cadastro de Usuários -
         Concluído | Implementando features
        </p>
        <p className='text-md py-2 leading-8 text-gray-80'>
         WindWatch - App de consulta ao clima tempo |
         Concluído
        </p>
        <p className='text-md py-2 leading-8 text-gray-80'>
         WonGames - Ecommerce |
         Em desenvolvimento
        </p>
        
    <div className='flex flex-col gap-16 py-10 lg:flex-row lg:flex-wrap'>
    <div className='w-full lg:w-1/2 flex-1'>
    <div className='h-full'>
      <Image 
        src={linkup} 
        alt='Aplicativo que gerencia cadastro de usuários' 
        className='rounded-lg object-cover h-full'
        layout='responsive'
      />
    </div>
  </div>
  <div className='w-full lg:w-1/2 flex-1'>
    <div className='h-full'>
      <Image 
        src={windwatch} 
        alt='Aplicativo de clima tempo' 
        className='rounded-lg object-cover h-full'
        layout='responsive'
      />
    </div>
  </div>
  <div className='w-full lg:w-1/2 flex-1'>
    <div className='h-full'>
      <Image 
        src={won} 
        alt='Ecommerce de jogos' 
        className='rounded-lg object-cover h-full'
        layout='responsive'
      />
    </div>
  </div>
</div>

    </div>
  )
}

export default Portfolio