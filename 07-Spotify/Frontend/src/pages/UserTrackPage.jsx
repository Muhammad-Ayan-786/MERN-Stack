import { Infinity, Pause, Play } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchMusic } from '../store/features/musicAPI';
import { fetchAlbum } from '../store/features/albumAPI';
import Header from '../components/Header';
import Songs from '../components/Songs';

const UserTrackPage = () => {

  const dispatch = useDispatch()

  const musicsObj = useSelector((state) => state.music)
  const albumsObj = useSelector((state) => state.album)

  const [currentSong, setCurrentSong] = useState(null)
  const audioRef = useRef(new Audio())
  const [isLoop, setIsLoop] = useState(false)

  const playSongFunc = (uri, idx, onloop = false) => {
    const audio = audioRef.current

    if (uri) {
      setCurrentSong(idx)
      setIsLoop(onloop)
      audio.src = uri
      audio.loop = onloop
      audio.play()
    }
    else {
      setCurrentSong(null)
      setIsLoop(false)
      audio.loop = false
      audio.pause()
    }
  }

  useEffect(() => {
    dispatch(fetchMusic())
    dispatch(fetchAlbum())
  }, [])

  useEffect(() => {
    return () => {
      audioRef.current.pause()
      audioRef.current.loop = false
      setIsLoop(false)
    }
  }, [])

  return (
    <section className="flex h-full min-h-0 flex-col gap-4 pb-2 sm:gap-6">
      {/* Header */}
      <Header
        ButtonMessage={"Discover"}
        MainTitle={"Home"}
        Description={"Browse albums, explore songs, and jump into your library in one place."}
      />

      {/* Main — albums & songs side by side on large screens */}
      <div className="grid grid-cols-1 gap-3 sm:gap-4 lg:min-h-0 lg:flex-1 lg:grid-cols-2 lg:items-stretch lg:gap-6 lg:overflow-hidden">

        {/* Albums column */}
        <div className="flex min-h-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/4 p-3 backdrop-blur-sm sm:p-4">
          <h2 className="mb-3 shrink-0 text-sm font-semibold uppercase tracking-wider text-zinc-400">
            Albums
          </h2>
          <div className="albums scrollbar-adaptive flex min-h-0 flex-1 pr-1 overflow-y-auto overscroll-contain">
            {
              albumsObj.isLoading
                ?
                <div className="flex min-h-30 items-center justify-center py-8">
                  <Infinity size={20} className="h-9 w-9 cursor-pointer animate-spin rounded-full bg-lime-500/20 p-2 text-lime-300" />
                </div>
                :
                <div className="grid grid-cols-2 gap-2 min-[480px]:grid-cols-3 sm:gap-3 lg:grid-cols-2 xl:grid-cols-3">
                  {albumsObj.data.map((album, idx) => (
                    <div
                      key={idx}
                      className="album relative flex aspect-4/5 min-h-27.5 flex-col justify-end overflow-hidden rounded-xl border border-white/10 bg-linear-to-br from-emerald-900/80 to-zinc-900/90 p-2.5 shadow-[0_8px_24px_-10px_rgba(74,222,128,0.35)] sm:aspect-square sm:max-h-36 sm:p-2"
                    >
                      <span className="absolute left-1.5 top-1.5 rounded-md bg-black/40 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-lime-200/90">
                        Album
                      </span>
                      <h3 className="line-clamp-2 text-center text-[11px] font-semibold leading-tight tracking-wide text-white sm:text-xs">
                        {album.title}
                      </h3>
                    </div>
                  ))}
                </div>
            }
          </div>
        </div>

        {/* Songs column */}
        <Songs musicsObj={musicsObj} currentSong={currentSong} playSongFunc={playSongFunc} />
      </div>

      {/* Music Player */}
      <div className="music-play sticky bottom-0 z-20 mt-2 flex flex-col gap-4 rounded-2xl border border-white/15 bg-black/70 px-4 py-4 backdrop-blur-md sm:mt-auto sm:shrink-0 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        {/* Song Details */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lime-300/90">
            {
              currentSong !== null
                ? "Currently Playing"
                : "Please select a song to play"
            }
          </p>
          <h2 className="mt-1 text-xl font-bold tracking-wide text-white sm:text-2xl">
            {
              currentSong !== null
                ? musicsObj.data[currentSong].title
                : "No song selected"
            }
          </h2>
        </div>

        {/* Player Controls */}
        <div className="icons flex items-center justify-center gap-3 sm:justify-end">
          {/* Play & Pause Button Logic */}
          {
            currentSong === null ?
              <button
                type="button"
                className="DisabledBtn rounded-full bg-zinc-800 p-2.5 text-zinc-500 shadow-lg shadow-zinc-900/20 transition"
                aria-label="Play"
                disabled
              >
                <Play size={18} className="fill-current h-5 w-5" />
              </button>
              :
              <button
                type="button"
                className="rounded-full bg-lime-400 p-2.5 text-zinc-900 shadow-lg shadow-lime-500/30 transition hover:bg-lime-300"
                aria-label="Pause"
                onClick={() => {
                  playSongFunc(null, null)
                }}
              >
                <Pause size={18} className="fill-current h-5 w-5" />
              </button>
          }

          {/* Song on Loop Button Logic */}
          {
            currentSong !== null ?
              <button
                type="button"
                className={`
                ${isLoop
                    ? 'bg-lime-400 p-2.5 text-zinc-900 shadow-lg shadow-lime-500/30 transition hover:bg-lime-300'
                    : 'text-white transition hover:bg-white/10'
                  }
                rounded-full border border-white/20 p-2.5
                `}
                aria-label="Repeat"
                onClick={() => {
                  const nextLoop = !isLoop
                  setIsLoop(nextLoop)
                  playSongFunc(musicsObj.data[currentSong].uri, currentSong, nextLoop);
                }}>
                <Infinity className="h-5 w-5" />
              </button>
              :
              <button
                type="button"
                className={`
                  ${isLoop &&
                  'bg-lime-400 p-2.5 text-zinc-900 shadow-lg shadow-lime-500/30 transition hover:bg-lime-300'
                  }
                  DisabledBtn rounded-full border border-white/20 p-2.5  bg-zinc-800 text-zinc-500 shadow-lg shadow-zinc-900/20 transition
                `}
                aria-label="Repeat"
                disabled
              >
                <Infinity className="h-5 w-5" />
              </button>
          }

        </div>
      </div>
    </section >
  )
}

export default UserTrackPage
