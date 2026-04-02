import { LogOut, Menu } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = ({ logoutFunc, active, setActive, isMenuOpen, setIsMenuOpen }) => {
  return (
    <>
      {/* Navigation Bar */}
      <nav className={`${isMenuOpen ? 'fixed inset-0 z-40 flex w-full' : 'hidden'} sm:relative sm:z-auto sm:flex sm:h-screen sm:w-72 flex-col justify-between border-r border-white/10 bg-black/55 p-5 backdrop-blur-xl sm:bg-black/30 sm:backdrop-blur-md`}>
        <div className='flex flex-col gap-7'>
          {/* User Studio Logo */}
          <div className='rounded-2xl flex flex-col gap-2 border border-white/15 bg-white/5 p-4 shadow-[0_16px_40px_-20px_rgba(74,222,128,0.55)]'>
            <p className='text-xs font-semibold uppercase tracking-[0.22em] text-green-200/80'>Your Music</p>
            <h1 className='pb-2 bg-linear-to-r from-lime-200 via-green-300 to-emerald-200 bg-clip-text text-4xl font-black tracking-tight text-transparent'>
              Spotify
            </h1>
            <p className='text-sm text-zinc-300'>Listen, discover, repeat</p>
          </div>

          {/* User Navigation Links */}
          <ul className='flex flex-col gap-3'>
            <Link
              to='/user/home'
              className='w-full rounded-xl px-4 py-2.5 text-lg font-semibold uppercase tracking-wide transition-all active:scale-95 hover:bg-green-500/20'
              style={active === 'home' ? { background: 'linear-gradient(135deg, rgba(20,83,45,0.9), rgba(3,7,18,0.9))', boxShadow: '0 20px 40px -20px rgba(163,230,53,0.65)', borderLeft: '3px solid #84cc16' } : { background: 'none' }}
              onClick={() => {
                setActive('home')
                setIsMenuOpen(false)
              }}
            >Home</Link>
            <Link
              to='/user/library'
              className='w-full rounded-xl px-4 py-2.5 text-lg font-semibold uppercase tracking-wide transition-all active:scale-95 hover:bg-green-500/20'
              style={active === 'library' ? { background: 'linear-gradient(135deg, rgba(20,83,45,0.9), rgba(3,7,18,0.9))', boxShadow: '0 20px 40px -20px rgba(163,230,53,0.65)', borderLeft: '3px solid #84cc16' } : { background: 'none' }}
              onClick={() => {
                setActive('library')
                setIsMenuOpen(false)
              }}
            >Library</Link>
          </ul>
        </div>

        {/* User Logout Button */}
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

      {/* Button to toggle Nav-bar */}
      <button
        type='button'
        aria-label='Toggle navigation menu'
        className='sm:hidden fixed top-5 right-5 z-50 rounded-xl border border-white/20 bg-black/45 p-2.5 text-white shadow-[0_12px_30px_-12px_rgba(0,0,0,0.8)] backdrop-blur-md transition-all duration-200 hover:scale-105 hover:bg-emerald-500/25 active:scale-95'
        onClick={() => {
          setIsMenuOpen(prev => !prev)
        }}
      >
        <Menu size={20} />
      </button>

    </>
  )
}

export default NavigationBar