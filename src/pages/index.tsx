import Header from '../components/Header'
import Information from '../components/Information'

export default function Home() {
  return (
    <div className='px-10 min-h-screen bg-gradient-to-br from-gray-100 to-gray-50'>
      <Header />
      <Information />
    </div>
  );
}
