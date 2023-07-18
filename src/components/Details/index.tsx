import Image from 'next/image'
import React from 'react'

import design from '../../img/design.png'
import code from '../../img/code.png'
import consulting from '../../img/consulting.png'

const Details = () => {
  return (
    <div id='services' className='mt-20'>
        <h3 className='text-3xl py-1 dark:text-white'>Serviços que ofereço</h3>
        <p className='text-md py-2 leading-8 text-gray-80 dark:text-white'>
         Olá, eu sou Denzel, um desenvolvedor web full stack com um foco especial em <span className='text-purple-500'>design</span>. Minha paixão é criar experiências digitais envolventes e funcionais para os usuários.
         <br/>
        </p>
        <p className='text-md py-2 leading-8 text-gray-80 dark:text-white'>
        Meu conjunto de habilidades abrange diversas tecnologias atualizadas e ferramentas avançadas para fornecer soluções <span className='text-purple-500'>eficientes</span> e impactantes. 
        Estou constantemente atualizando meu conhecimento para acompanhar as tendências e tecnologias emergentes, garantindo que meu trabalho permaneça em <span className='text-purple-500'>alto nível</span>. 
        </p>
       

        <p className='text-md py-2 leading-8 text-gray-80 dark:text-white'>
        Seja um projeto pessoal ou empresarial, estou comprometido em entregar resultados excepcionais, atendendo às necessidades e objetivos de cada cliente. Meu objetivo é trazer ideias inovadoras à vida, criando interfaces impressionantes e funcionais que cativem os usuários e proporcionem uma experiência memorável.
        Segue abaixo alguns <span className='text-purple-500'>serviços</span> que ofereço.
        </p>

        <div className='p-10 my-10 flex flex-col items-center text-center shadow-lg rounded-xl  dark:bg-white'>
            <Image src={design} alt='Uma imagem com um desenho dentro simulando um design ' width={100} height={100} />
            <h3 className='text-lg font-medium pt-8 pb-2'>Interfaces exuberantes </h3>
            <p className='py-2 lg:text-lg'>
            Design elegante e personalizado para você. 
            Desde identidades visuais até interfaces intuitivas, estou pronto para dar vida às suas ideias com beleza e funcionalidade.
            </p>
            <h4 className='py-4 text-fuchsia-600'>Ferramentas de Design</h4>
            <p className='text-gray-800 py-1'>Figma</p>
        </div>

        <div className='p-10 flex flex-col items-center text-center shadow-lg rounded-xl my-10 dark:bg-white'>
            <Image src={code} alt='Uma imagem com um desenho dentro simulando um design ' width={100} height={100} />
            <h3 className='text-lg font-medium pt-8 pb-2'>Códigos estruturados </h3>
            <p className='py-2'>
            Tem uma ideia para o seu próximo app ou site? Vamos torná-lo realidade.
            </p>
            <h4 className='py-4 text-fuchsia-600'>Ferramentas</h4>
            <p className='text-gray-800 py-1'>VSCode, React, NextJS, TypeScript, Strapi</p>
        </div>

        <div className='p-10 flex flex-col items-center text-center shadow-lg rounded-xl my-10 dark:bg-white'>
            <Image src={consulting} alt='Uma imagem com um desenho dentro simulando um design ' width={100} height={100} />
            <h3 className='text-lg font-medium pt-8 pb-2'>Avaliações positivas </h3>
            <p className='py-2'>
            Com o auxílio de tecnologias atualizadas, conhecimento e experiências comprovadas o contentamento é garantido. Prezando sempre pela satisfação do cliente.
            </p>
        </div>
    </div>
  )
}

export default Details