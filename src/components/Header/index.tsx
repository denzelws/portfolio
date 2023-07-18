import { BsFillMoonStarsFill } from 'react-icons/bs'

type HeaderProps = {
  onToggleDarkMode: () => void
}

const Header = ({onToggleDarkMode}: HeaderProps) => {
  return (
    <div className=' flex flex-col justify-center'>
        <nav className='py-10 mb flex justify-between'>
          <h1 className='text-base lg:text-xl dark:text-white'>
            Denzel
            <br className='md:hidden' />
            Washington
          </h1>

          <ul className='flex items-center cursor-pointer'>
            <button onClick={onToggleDarkMode}>
              <BsFillMoonStarsFill />
            </button>
            <li 
            className='bg-gradient-to-r from-purple-500 to-fuchsia-500 
            px-4 py-2 rounded-md text-white
            cursor-pointer ml-8 hover:from-purple-700 and hover:to-fuchsia-700 
            transition duration-0 hover:duration-150'
            onClick={() => window.location.href = '#services'}
            >
              Resumo
            </li>
          </ul>
        </nav>
  </div>
  )
}

export default Header