import axios from 'axios'
import { LogOut, Menu } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import NavigationBar from '../components/UserPageConponents/NavigationBar'

const UserPage = () => {

  const navigate = useNavigate()
  const [active, setActive] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const logoutFunc = async () => {
    await axios.post("http://localhost:3000/api/auth/logout")
    localStorage.clear();
    navigate('/')
  }

  useEffect(() => {
    navigate('/user/home')
  }, [])

  return (
    <section className='relative flex h-screen w-full overflow-hidden bg-linear-to-br from-zinc-950 via-emerald-950 to-black text-white'>
      {/* Navigation Bar */}
      <NavigationBar
        logoutFunc={logoutFunc}
        active={active}
        setActive={setActive}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <main className='scrollbar-adaptive min-h-0 flex-1 overflow-y-auto p-4 sm:p-8'>
        <Outlet />
      </main>

    </section >
  )
}

export default UserPage
