import { Infinity, Pause, Play } from 'lucide-react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchMusic } from '../store/features/musicAPI';
import { fetchAlbum } from '../store/features/albumAPI';

const UserHomePage = () => {

  const dispatch = useDispatch()

  const musicsObj = useSelector((state) => state.music)
  const albumsObj = useSelector((state) => state.album)

  useEffect(() => {
    dispatch(fetchMusic())
    dispatch(fetchAlbum())
  }, [])

  return (
    <>
      {/* Header */}
      <div className='flex flex-col gap-8'>
        <h1 className='text-5xl text-emerald-300 font-bold text-shadow-emerald-800 text-shadow-lg'>Home</h1>
        <hr className='bg-gray-500 border-gray-700' />
      </div>

      {/* Main */}
      <div className='flex-1 flex flex-col gap-5 pt-5 overflow-y-auto scrollbar-hide'>
        {/* Albums */}
        <div className="albums pr-4 max-w-full flex flex-nowrap gap-5 overflow-x-auto overflow-y-hidden scrollbar-hide">
          {
            albumsObj.isLoading
              ?
              <Infinity size={20} className='bg-lime-600 rounded-full w-9 h-9 p-2 cursor-pointer animate-spin' />
              :
              albumsObj.data.map((album, idx) => (
                <div key={idx} className="album w-32 h-32 relative shrink-0 rounded-lg flex flex-col justify-center items-center p-2 bg-gray-700">
                  <h2 className='absolute top-2 left-2 text-lg tracking-wide'>Album</h2>
                  <h3 className='text-xl font-semibold tracking-wide'>{album.title}</h3>
                </div>
              ))
          }
        </div>

        {/* Songs */}
        <div className="songs flex-1 flex flex-col gap-5 pr-3 overflow-x-auto scrollbar-hide">
          {
            musicsObj.isLoading
              ?
              <Infinity size={20} className='bg-lime-600 rounded-full w-9 h-9 p-2 cursor-pointer animate-spin' />
              :
              musicsObj.data.map((song, idx) => (
                <div key={idx} className="song bg-gray-800 py-2 px-6 flex gap-10 rounded cursor-pointer">
                  <div className='w-2/5 flex items-center'>
                    <h3 className='text-xl font-semibold tracking-wide'>{song.title}</h3>
                  </div>
                  <div className='w-3/5 flex justify-between items-center'>
                    <p className='text-lg'>Artist</p>
                    <Play size={20} className='bg-lime-600 rounded-full w-9 h-9 p-2 cursor-pointer' />
                  </div>
                </div>
              ))
          }
        </div>
      </div>

      {/* Music Player */}
      <div className="music-play bg-gray-900 border border-gray-300 rounded-xl h-[10%] flex justify-between items-center px-10" >
        <h2 className='text-3xl font-bold tracking-wide'>
          <span className='text-lime-400 text-lg'>Playing</span> Dooron Dooron
        </h2>
        <div className="icons flex gap-5">
          <Pause className='w-9 h-9 p-1.5 border border-gray-400 rounded-full cursor-pointer' />
          <Play className='w-9 h-9 p-1.5 border border-gray-400 rounded-full cursor-pointer' />
          <Infinity className='w-9 h-9 p-1.5 border border-gray-400 rounded-full cursor-pointer' />
        </div>
      </div>

    </>
  )
}

export default UserHomePage