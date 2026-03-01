import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Plus } from "lucide-react"
import axios from "axios"

const Feed = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/posts').then((res) => {
      setPosts(res.data.posts);
    }).catch((err) => {
      console.log(err);
    })
  }, []);

  return (
    <section className="feed-section w-full min-h-screen bg-linear-to-br from-amber-50 via-orange-50 to-rose-50 py-12 px-4">
      <h1 className="text-3xl font-bold tracking-tight text-stone-800 mb-8 drop-shadow-sm text-center md:text-6xl">Feed</h1>
      <div className="max-w-xl mx-auto flex flex-col gap-6">
        {posts.length > 0 ? posts.map(post => (
          <article
            key={post._id}
            className="rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl shadow-orange-200/50 border border-orange-100 overflow-hidden"
          >
            <img
              src={post.image}
              alt={post.caption}
              className="w-full min-h-72 object-cover"
            />
            <p className="p-5 text-stone-700 text-base leading-relaxed">
              {post.caption}
            </p>
          </article>
        )) : (
          <h2 className="text-2xl font-bold tracking-tight text-stone-700 mb-8 drop-shadow-sm text-center md:text-4xl">No posts yet</h2>
        )}
      </div>

      <Link
        to="/create-post"
        className="fixed bottom-8 right-8 flex items-center justify-center w-14 h-14 rounded-full bg-linear-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-300/40 hover:from-orange-600 hover:to-amber-600 active:scale-95 transition-all duration-200"
        aria-label="Create post"
      >
        <Plus className="w-7 h-7" strokeWidth={2.5} />
      </Link>
    </section>
  )
}

export default Feed