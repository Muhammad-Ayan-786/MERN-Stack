import { useEffect, useState } from "react"
import axios from "axios"
import CreateIcon from "../Components/CreateIcon"
import Post from "../Components/Post"

const Feed = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/posts').then((res) => {
      setPosts(res.data.posts);
    }).catch((err) => {
      console.log(err);
    })
  }, [posts]);

  return (
    <section className="feed-section w-full min-h-screen bg-linear-to-br from-amber-50 via-orange-50 to-rose-50 py-12 px-4">

      <h1 className="text-3xl font-bold tracking-tight text-stone-800 mb-8 drop-shadow-sm text-center md:text-6xl">
        Feed
      </h1>

      {/* Posts */}
      <Post posts={posts} />

      {/* Create Post Route Icon */}
      <CreateIcon />
    </section>
  )
}

export default Feed