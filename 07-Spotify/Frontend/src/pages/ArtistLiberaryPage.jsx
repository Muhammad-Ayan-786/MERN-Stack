import { Infinity, Pause, Play } from 'lucide-react'
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchMusic } from '../store/features/musicAPI';

const ArtistLiberaryPage = () => {

  const dispatch = useDispatch()
  const musicsObj = useSelector((state) => state.music)
  const audioRef = useRef(new Audio())

  const [currentSongTile, setCurrentSongTite] = useState(null)

  const playSongFunc = (uri, idx) => {
    const audio = audioRef.current

    if (uri) {
      setCurrentSongTite(idx)
      audio.src = uri
      audio.play()
    } else {
      setCurrentSongTite(null)
      audio.pause()
    }
  }

  useEffect(() => {
    dispatch(fetchMusic())
  }, [])

  useEffect(() => {
    return () => {
      audioRef.current.pause()
    }
  }, [])

  return (
    <section className="flex h-full min-h-0 flex-col gap-6">
      {/* Header */}
      <div className="shrink-0 space-y-2">
        <p className="inline-flex rounded-full border border-green-400/35 bg-green-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-green-200">
          Your collection
        </p>
        <h1 className="pb-2 bg-linear-to-r from-lime-200 via-green-300 to-emerald-200 bg-clip-text text-3xl font-black tracking-tight text-transparent sm:text-4xl">
          Library
        </h1>
        <p className="max-w-xl text-sm text-zinc-400 sm:text-base">
          Every track you have saved, ready to play.
        </p>
      </div>

      {/* Main */}
      <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/4 p-4 backdrop-blur-sm sm:p-5">
        <h2 className="mb-3 shrink-0 text-sm font-semibold uppercase tracking-wider text-zinc-400">
          Saved songs
        </h2>
        <div className="songs flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto overscroll-contain pr-1 scrollbar-hide">
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
                    style={currentSongTile === idx ? {
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
                      <button
                        type="button"
                        className="rounded-full bg-lime-500/90 p-2.5 text-zinc-900 shadow-lg shadow-lime-500/25 transition group-hover:bg-lime-400"
                        aria-label="Play"
                      >
                        {
                          currentSongTile === idx ?
                            <Pause size={18} className="fill-current" onClick={() => {
                              playSongFunc(null, null)
                            }} />
                            :
                            <Play size={18} className="fill-current" onClick={() => {
                              playSongFunc(song.uri, idx)
                            }} />
                        }
                      </button>
                    </div>
                  </div>
                ))
                :
                (
                  <p className="py-12 text-center text-sm text-zinc-500">
                    No songs in your library yet. Discover music on Home.
                  </p>
                )
              )
          }
        </div>
      </div>
    </section>
  )
}

export default ArtistLiberaryPage