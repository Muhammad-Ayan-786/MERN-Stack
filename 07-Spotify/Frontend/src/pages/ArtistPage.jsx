import axios from 'axios'
import { LogOut } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const ArtistPage = () => {

  const [active, setActive] = useState('home')

  const navigate = useNavigate()

  const logoutFunc = async () => {
    await axios.post("http://localhost:3000/api/auth/logout")
    localStorage.clear();
    navigate('/')
  }

  useEffect(() => {
    navigate('/artist/home')
  }, [])

  return (
    <section className='flex min-h-screen w-full overflow-x-hidden bg-linear-to-br from-zinc-950 via-emerald-950 to-black text-white'>
      <nav className='flex h-screen w-72 flex-col justify-between border-r border-white/10 bg-black/30 p-5 backdrop-blur-md'>
        <div className='flex flex-col gap-7'>

          {/* Artist Studio Logo */}
          <div className='rounded-2xl flex flex-col gap-2 border border-white/15 bg-white/5 p-4 shadow-[0_16px_40px_-20px_rgba(74,222,128,0.55)]'>
            <p className='text-xs font-semibold uppercase tracking-[0.22em] text-green-200/80'>Artist Studio</p>
            <h1 className='pb-2 bg-linear-to-r from-lime-200 via-green-300 to-emerald-200 bg-clip-text text-4xl font-black tracking-tight text-transparent'>
              Spotify
            </h1>
            <p className='text-sm text-zinc-300'>Manage your music world</p>
          </div>

          {/* Artist Navigation Links */}
          <ul className='flex flex-col gap-3'>
            <Link
              to='/artist/home'
              className='w-full rounded-xl px-4 py-2.5 text-lg font-semibold uppercase tracking-wide transition-all active:scale-95 hover:bg-green-500/20'
              style={active === 'home' ? { background: 'linear-gradient(135deg, rgba(20,83,45,0.9), rgba(3,7,18,0.9))', boxShadow: '0 20px 40px -20px rgba(163,230,53,0.65)', borderLeft: '3px solid #84cc16' } : { background: 'none' }}
              onClick={() => setActive('home')}
            >Home</Link>
            <Link
              to='/artist/liberary'
              className='w-full rounded-xl px-4 py-2.5 text-lg font-semibold uppercase tracking-wide transition-all active:scale-95 hover:bg-green-500/20'
              style={active === 'liberary' ? { background: 'linear-gradient(135deg, rgba(20,83,45,0.9), rgba(3,7,18,0.9))', boxShadow: '0 20px 40px -20px rgba(163,230,53,0.65)', borderLeft: '3px solid #84cc16' } : { background: 'none' }}
              onClick={() => setActive('liberary')}
            >Liberary</Link>
            <Link
              to='/artist/upload'
              className='w-full rounded-xl px-4 py-2.5 text-lg font-semibold uppercase tracking-wide transition-all active:scale-95 hover:bg-green-500/20'
              style={active === 'upload' ? { background: 'linear-gradient(135deg, rgba(20,83,45,0.9), rgba(3,7,18,0.9))', boxShadow: '0 20px 40px -20px rgba(163,230,53,0.65)', borderLeft: '3px solid #84cc16' } : { background: 'none' }}
              onClick={() => setActive('upload')}
            >Upload</Link>
            <Link
              to='/artist/album'
              className='w-full rounded-xl px-4 py-2.5 text-lg font-semibold uppercase tracking-wide transition-all active:scale-95 hover:bg-green-500/20'
              style={active === 'album' ? { background: 'linear-gradient(135deg, rgba(20,83,45,0.9), rgba(3,7,18,0.9))', boxShadow: '0 20px 40px -20px rgba(163,230,53,0.65)', borderLeft: '3px solid #84cc16' } : { background: 'none' }}
              onClick={() => setActive('album')}
            >Album</Link>
            <Link
              to='/artist/song'
              className='w-full rounded-xl px-4 py-2.5 text-lg font-semibold uppercase tracking-wide transition-all active:scale-95 hover:bg-green-500/20'
              style={active === 'song' ? { background: 'linear-gradient(135deg, rgba(20,83,45,0.9), rgba(3,7,18,0.9))', boxShadow: '0 20px 40px -20px rgba(163,230,53,0.65)', borderLeft: '3px solid #84cc16' } : { background: 'none' }}
              onClick={() => setActive('song')}
            >Song</Link>
          </ul>
        </div>

        {/* Logout Button */}
        <div className='border-t border-white/10 pt-4'>
          <button
            className='flex w-full items-center justify-center gap-2 rounded-xl border border-red-400/35 bg-red-500/10 px-3 py-2.5 text-base font-semibold uppercase tracking-wide text-red-100 transition-all hover:bg-red-500/20'
            onClick={logoutFunc}
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </nav>

      <main className='h-screen flex-1 p-6 sm:p-8'>
        <Outlet />
      </main>
    </section>
  )
}

export default ArtistPage