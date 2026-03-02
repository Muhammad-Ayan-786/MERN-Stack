import { Plus } from "lucide-react"
import { Link } from "react-router-dom"

const CreateIcon = () => {
  return (
    <Link
      to="/create-post"
      className="fixed bottom-8 right-8 flex items-center justify-center w-14 h-14 rounded-full bg-linear-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-300/40 hover:from-orange-600 hover:to-amber-600 active:scale-95 transition-all duration-200"
      aria-label="Create post"
    >
      <Plus className="w-7 h-7" strokeWidth={2.5} />
    </Link>
  )
}

export default CreateIcon