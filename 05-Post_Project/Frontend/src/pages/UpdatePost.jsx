import axios from 'axios'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import BackIcon from '../Components/BackIcon'
import PostForm from '../Components/PostForm'

const UpdatePost = () => {

  const [caption, setCaption] = useState("")
  const { id } = useParams()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)

    axios.patch(`http://localhost:3000/update-note/${id}`, formData).then(() => {
      navigate('/feed')
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <section className='create-post-section w-full min-h-screen flex flex-col justify-center items-center bg-linear-to-br from-amber-50 via-orange-50 to-rose-50 py-12 px-4 relative'>

      {/* Back Icon */}
      <BackIcon />

      <h1 className='text-3xl font-bold tracking-tight text-stone-800 mb-8 drop-shadow-sm md:text-4xl'>
        Update Post
      </h1>

      {/* Update Post From */}
      <PostForm caption={caption} setCaption={setCaption} handleSubmit={handleSubmit} />

    </section>
  )
}

export default UpdatePost