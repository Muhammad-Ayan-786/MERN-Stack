import { BadgeX, Cog } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"
import DeleteConfirmation from "../pages/DeleteConfirmation"

const Post = ({ posts }) => {

  const [toggleDelete, setToggleDelete] = useState(false)
  const [active, setActive] = useState(null)

  return (
    <div className="max-w-xl mx-auto flex flex-col gap-6">
      {posts.length > 0 ? posts.map(post => (
        // Post
        <article
          key={post._id}
          className="rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl shadow-orange-200/50 border border-orange-100 overflow-hidden"
        >
          {/* Post Image */}
          <img
            src={post.image}
            alt={post.caption}
            className="w-full min-h-72 object-cover"
          />

          {/* Post Caption */}
          <p className="p-4 text-stone-700 text-base leading-relaxed">
            {post.caption}
          </p>

          {/* Post Options */}
          <div className="options w-full flex justify-end items-center gap-5 p-3 bg-white/70 border-t border-orange-100">
            {/* Edit Button */}
            <Link
              to={`/update-post/${post._id}`}
              className="flex items-center gap-2 px-5 py-2 rounded-lg bg-amber-400/80 hover:bg-amber-500 text-sm text-white font-semibold shadow-sm transition-all duration-150 active:scale-[0.97] focus:outline-none cursor-pointer">
              <Cog size={18} />
              Edit
            </Link>
            {/* Delete Button */}
            <button
              className="flex items-center gap-2 px-5 py-2 rounded-lg bg-rose-500/90 hover:bg-rose-600 text-sm text-white font-semibold shadow-sm transition-all duration-150 active:scale-[0.97] focus:outline-none cursor-pointer"
              onClick={() => {
                setToggleDelete(true)
                setActive(post._id) // Setting the active post
              }}>
              <BadgeX size={18} />
              Delete
            </button>
          </div>

          {/* Delete Confirmation Modal */}
          {toggleDelete && active === post._id &&
            <DeleteConfirmation setToggleDelete={setToggleDelete} id={post._id} />
          }
        </article>
      )) : (
        // No Post
        <h2 className="text-2xl font-bold tracking-tight text-stone-700 mb-8 drop-shadow-sm text-center md:text-4xl">
          No posts yet
        </h2>
      )}
    </div>
  )
}

export default Post