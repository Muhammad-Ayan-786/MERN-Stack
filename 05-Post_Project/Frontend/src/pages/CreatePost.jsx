import axios from "axios"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { ArrowLeft } from "lucide-react";

const CreatePost = () => {

  const [caption, setCaption] = useState("")

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    axios.post('http://localhost:3000/create-post', formData).then((res) => {
      setCaption('');
      navigate('/feed');
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <section className='create-post-section w-full min-h-screen flex flex-col justify-center items-center bg-linear-to-br from-amber-50 via-orange-50 to-rose-50 py-12 px-4 relative'>
      <Link
        to="/feed"
        className="fixed top-6 left-6 flex items-center gap-2 px-4 py-2 rounded-xl bg-white/80 backdrop-blur-sm border border-orange-100 text-stone-700 font-medium shadow-lg shadow-orange-200/30 hover:bg-white hover:shadow-orange-200/50 active:scale-[0.98] transition-all duration-200"
        aria-label="Back to feed"
      >
        <ArrowLeft className="w-5 h-5" strokeWidth={2.5} />
        Back
      </Link>
      <h1 className='text-3xl font-bold tracking-tight text-stone-800 mb-8 drop-shadow-sm md:text-4xl'>Create Post</h1>

      <form
        onSubmit={handleSubmit}
        className='flex flex-col gap-6 p-8 rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl shadow-orange-200/50 border border-orange-100 max-w-md w-full'
      >
        <label className='flex flex-col gap-2'>
          <span className='text-sm font-medium text-stone-600 md:text-base'>Image</span>
          <input
            type="file"
            name='image'
            accept='image/*'
            className='p-4 rounded-xl border-2 border-stone-200 bg-stone-50 text-stone-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-orange-500 file:text-white file:font-medium hover:file:bg-orange-600 file:cursor-pointer transition-colors focus:border-orange-400 focus:ring-2 focus:ring-orange-200 focus:outline-none'
          />
        </label>
        <label className='flex flex-col gap-2'>
          <span className='text-sm font-medium text-stone-600 md:text-base'>Caption</span>
          <input
            required
            type="text"
            name='caption'
            value={caption}
            autoComplete="off"
            placeholder='Enter Caption'
            onChange={(e) => setCaption(e.target.value)}
            className='p-4 rounded-xl border-2 border-stone-200 bg-stone-50 placeholder:text-stone-400 text-stone-700 transition-colors focus:border-orange-400 focus:ring-2 focus:ring-orange-200 focus:outline-none focus:bg-white'
          />
        </label>
        <button
          type='submit'
          className='mt-2 p-4 rounded-xl font-semibold text-white bg-linear-to-r from-orange-500 to-amber-500 shadow-lg shadow-orange-300/40 hover:from-orange-600 hover:to-amber-600 active:scale-[0.98] transition-all duration-200 cursor-pointer'
        >
          Submit
        </button>
      </form>
    </section>
  )
}

export default CreatePost