import {BsFillMoonStarsFill} from 'react-icons/bs'

export default function Home() {
  return (
    <div>
      <header className='flex justify-between py-5 px-5 mx-5'>
        <h1 className='text-xl'>
        Denzel 
        <br className='md:hidden' />  
        Washington
        </h1>
    
      <ul className='flex'>
        <li><BsFillMoonStarsFill/></li>
        <li>Resumo</li>
      </ul>
      </header>
    </div>
  )
}
