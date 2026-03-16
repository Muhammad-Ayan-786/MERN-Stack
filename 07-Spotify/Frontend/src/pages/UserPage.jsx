import { LogOut } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const UserPage = () => {

  const [active, setActive] = useState('home')

  const navigate = useNavigate()

  useEffect(() => {
    navigate('/user/home')
  }, [])

  return (
    <section className='w-screen h-screen bg-gray-950 text-white flex'>
      <nav className='w-1/5 h-full flex flex-col justify-between p-5 py-8 border-r rounded-full border-gray-700'>
        <div className='flex flex-col gap-8'>
          <h1 className='text-5xl text-lime-500 font-bold text-shadow-lime-800 text-shadow-lg up'>Spotify</h1>
          <hr className='bg-gray-500 border-gray-700' />
          <ul className='flex flex-col gap-8'>
            <Link
              to='/user/home'
              className='w-3/4 uppercase font-semibold bg-gra text-2xl tracking-wide py-1 px-3 rounded-r-2xl cursor-pointer transition-all active:scale-95 hover:bg-lime-900'
              style={active === 'home' ? { background: 'linear-gradient(135deg, #35530e, #030712)', boxShadow: '0 20px 50px 0px rgba(217, 249, 157, 0.5)', borderLeft: '2px solid #7ccf00' } : { background: 'none' }}
              onClick={() => setActive('home')}
            >Home</Link>
            <Link
              to='/user/library'
              className='w-3/4 uppercase font-semibold text-2xl tracking-wide py-1 px-3 rounded-r-2xl cursor-pointer transition-all active:scale-95 hover:bg-lime-900'
              style={active === 'library' ? { background: 'linear-gradient(135deg, #35530e, #030712)', boxShadow: '0 20px 50px 0px rgba(217, 249, 157, 0.5)', borderLeft: '2px solid #7ccf00' } : { background: 'none' }}
              onClick={() => setActive('library')}
            >Library</Link>
          </ul>
        </div>

        <div>
          <button className='flex gap-3 items-center font-semibold bg-gray-800 text-lg tracking-wide py-1 px-3 rounded cursor-pointer uppercase transition-all hover:bg-lime-600'><LogOut size={20} /> Logout</button>
        </div>
      </nav>

      <main className='w-4/5 h-full p-5 py-8 flex flex-col justify-between gap-2.5'>
        <Outlet />
      </main>
    </section>
  )
}

export default UserPage