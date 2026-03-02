import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

const BackIcon = () => {
  return (
    <Link
      to="/feed"
      className="fixed top-6 left-6 flex items-center gap-2 px-4 py-2 rounded-xl bg-white/80 backdrop-blur-sm border border-orange-100 text-stone-700 font-medium shadow-lg shadow-orange-200/30 hover:bg-white hover:shadow-orange-200/50 active:scale-[0.98] transition-all duration-200"
      aria-label="Back to feed"
    >
      <ArrowLeft className="w-5 h-5" strokeWidth={2.5} />
      Back
    </Link>
  )
}

export default BackIcon