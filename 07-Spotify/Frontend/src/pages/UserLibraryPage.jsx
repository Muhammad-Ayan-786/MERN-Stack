import { Infinity, Pause, Play } from 'lucide-react'
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchMusic } from '../store/features/musicAPI';
import UserHeader from '../components/UserPageConponents/UserHeader';

const UserLibraryPage = () => {

  const dispatch = useDispatch()

  const musicsObj = useSelector((state) => state.music)

  const [currentSong, setCurrentSong] = useState(null)
  const audioRef = useRef(new Audio())
  const [isLoop, setIsLoop] = useState(false)

  const playSongFunc = (uri, idx, onLoop = false) => {
    const audio = audioRef.current

    if (uri) {
      setCurrentSong(idx)
      audio.src = uri
      audio.play()
    }
    else {
      setCurrentSong(null)
      audio.pause()
    }
  }

  useEffect(() => {
    dispatch(fetchMusic())
  }, [])


  return (
    <section className="flex min-h-0 flex-col gap-4 pb-2 sm:gap-6">
      {/* Header */}
      <UserHeader
        ButtonMessage={"Your Collection"}
        MainTitle={"Library"}
        Description={"All your saved tracks in one place, ready whenever you want to play."}
      />

      {/* Main */}
      <div className="flex min-h-[320px] flex-1 flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/4 p-4 backdrop-blur-sm sm:p-5 lg:min-h-0">
        <h2 className="mb-3 shrink-0 text-sm font-semibold uppercase tracking-wider text-zinc-400">
          Songs
        </h2>
        <div className="songs scrollbar-adaptive flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto overscroll-contain pr-1">
          {
            musicsObj.isLoading
              ?
              <div className="flex min-h-[160px] flex-1 items-center justify-center py-12">
                <Infinity size={20} className="h-9 w-9 cursor-pointer animate-spin rounded-full bg-lime-500/20 p-2 text-lime-300" />
              </div>
              :
              (musicsObj.data && musicsObj.data.length > 0
                ? musicsObj.data.map((song, idx) => (
                  <div
                    key={idx}
                    className="song group flex cursor-pointer items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-green-400/25 hover:bg-green-500/10"
                    style={currentSong === idx ? {
                      background: 'linear-gradient(90deg, #a3e635 0%, #34d399 100%)',
                      boxShadow: '2px 4px 25px -2px #bef264cc',
                      border: '2px solid #bbf7d0'
                    } : {}}
                    onDoubleClick={() => {
                      playSongFunc(song.uri, idx)
                    }}
                  >
                    <div className="min-w-0 flex-1">
                      <h3 className="truncate text-base font-semibold tracking-wide text-white sm:text-lg">
                        {song.title}
                      </h3>
                      <p className="mt-0.5 truncate font-mono text-[11px] text-zinc-500 sm:text-xs" title={String(song._id ?? song.id ?? '')}>
                        ID: {song._id ?? song.id ?? '—'}
                      </p>
                    </div>
                    <div className="flex shrink-0 items-center gap-3 sm:gap-6">
                      <p className="hidden text-sm text-zinc-400 sm:block">Artist</p>

                      {
                        currentSong === idx ?
                          <button
                            type="button"
                            className="rounded-full bg-lime-500/90 p-2 text-zinc-900 shadow-lg shadow-lime-500/25 transition group-hover:bg-lime-400 sm:p-2.5"
                            aria-label="Play"
                            onClick={() => {
                              playSongFunc(null, null)
                            }}
                          >
                            <Pause size={18} className="fill-current" />
                          </button>
                          :
                          <button
                            type="button"
                            className="rounded-full bg-lime-500/90 p-2 text-zinc-900 shadow-lg shadow-lime-500/25 transition group-hover:bg-lime-400 sm:p-2.5"
                            aria-label="Play"
                            onClick={() => {
                              playSongFunc(song.uri, idx)
                            }}
                          >
                            <Play size={18} className="fill-current" />
                          </button>
                      }

                    </div>
                  </div>
                ))
                : (
                  <p className="py-12 text-center text-sm text-zinc-500">
                    No songs in your library yet. Discover music on Home.
                  </p>
                ))
          }
        </div>
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

        {/*  Player Controls */}
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
    </section>
  )
}

export default UserLibraryPage
