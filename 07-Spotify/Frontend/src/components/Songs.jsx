import { Infinity, Pause, Play } from "lucide-react"

const Songs = ({ musicsObj, currentSong, playSongFunc }) => {
  return (
    <div className="songs flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/4 p-3 backdrop-blur-sm sm:p-4">
      <h2 className="mb-3 shrink-0 text-sm font-semibold uppercase tracking-wider text-zinc-400">
        Songs
      </h2>
      <div className="scrollbar-hide flex min-h-0 flex-1 flex-col gap-2.5 pr-1 overflow-y-auto overscroll-contain">
        {
          musicsObj.isLoading
            ?
            <div className="flex min-h-30 flex-1 items-center justify-center py-12">
              <Infinity size={20} className="h-9 w-9 cursor-pointer animate-spin rounded-full bg-lime-500/20 p-2 text-lime-300" />
            </div>
            :
            musicsObj.data.map((song, idx) => (
              <div
                key={idx}
                className="song group flex cursor-pointer items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 transition hover:border-green-400/25 hover:bg-green-500/10 sm:gap-4 sm:px-4 sm:py-3"
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
                  <h3 className="truncate text-sm font-semibold tracking-wide text-white sm:text-lg">
                    {song.title}
                  </h3>
                  <p className="mt-0.5 truncate font-mono text-[11px] text-zinc-500 sm:text-xs" title={String(song._id ?? song.id ?? '')}>
                    ID: {song._id ?? song.id ?? '—'}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-2 sm:gap-6">
                  <p className="hidden text-sm text-zinc-400 md:block">Artist</p>

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
        }
      </div>
    </div>
  )
}

export default Songs
