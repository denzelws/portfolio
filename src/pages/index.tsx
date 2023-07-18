import { useState } from 'react';

import Header from '../components/Header'
import Information from '../components/Information'
import Details from '@/components/Details';
import Scroll from '../components/Scroll'
import Portfolio from '../components/Portfolio';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className={`px-10 min-h-screen ${darkMode ? 'dark:bg-gray-900' : 'bg-gradient-to-br from-gray-100 to-gray-50'}`}>
        <Header onToggleDarkMode={toggleDarkMode} />
        <Information />
        <Scroll />
        <Details />
        <Portfolio />
      </div>
    </div>
  );
}
