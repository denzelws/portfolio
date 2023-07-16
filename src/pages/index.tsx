import Details from '@/components/Details';
import Header from '../components/Header'
import Information from '../components/Information'
import Scroll from '../components/Scroll'

export default function Home() {
  return (
    <div className='px-10 min-h-screen bg-gradient-to-br from-gray-100 to-gray-50'>
      <Header />
      <Information />
      <Scroll />
      <Details />
    </div>
  );
}
