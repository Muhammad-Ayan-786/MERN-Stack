import { Key, User } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {

  const navigate = useNavigate()

  const [user, setUser] = useState({
    username: '',
    password: '',
    role: 'user'
  })

  const twoWaysBinding = (e) => {
    const { name, value } = e.target
    setUser((prev) => ({ ...prev, [name]: value }))
  }

  const formSubmit = async (e) => {
    e.preventDefault()

    try {
      const responce = await axios.post('http://localhost:3000/api/auth/login', user)

      setUser({
        username: '',
        password: '',
        role: 'user'
      });

      if (responce.status === 201) {
        navigate('/')
      }

      return responce;

    } catch (err) {
      console.log("Error", err);
      alert('You are passing Invalid credentials')
    }
  }


  return (
    <section className='w-screen h-screen flex justify-center items-center bg-gray-950 text-white'>
      {/* Centered Container */}
      <div className="container bg-gray-900 w-2/3 h-4/5 flex flex-col gap-5 justify-between rounded-xl p-5 shadow-2xl shadow-green-500/40 sm:w-1/2 md:w-2/5">

        {/* Hero Title */}
        <h1 className="text-4xl font-bold text-center text-green-500 text-shadow-sm text-shadow-gray-400 hidden lg:block">Login Account</h1>
        <h1 className="text-3xl font-bold text-center text-green-500 text-shadow-sm text-shadow-gray-400 block lg:hidden">Login</h1>

        {/* Sign-in Form */}
        <form className=" flex-1 flex flex-col justify-between" onSubmit={formSubmit}>

          {/* Username Input */}
          <div className="flex flex-col gap-2">
            <label htmlFor="username" className=" sm:text-lg text-gray-300 text-shadow-green-400 text-shadow-xs">Username</label>
            <div className="flex gap-2 items-center relative">
              <User className="absolute top-2.5 left-2 text-green-500 text-shadow-xs" size={20} />
              <input
                className="text-base bg-gray-700 w-full outline-none py-2 px-5 pl-10 rounded focus:ring-1 focus:ring-green-500 focus:ring-offset-1 focus:ring-offset-gray-900"
                required
                type="text"
                id="username"
                name="username"
                placeholder='Enter your Username'
                autoComplete="off"
                value={user.username}
                onChange={twoWaysBinding}
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className=" sm:text-lg text-gray-300 text-shadow-green-400 text-shadow-xs">Password</label>
            <div className="flex gap-2 relative">
              <Key className="absolute top-2.5 left-2 text-green-500 text-shadow-xs" size={20} />
              <input
                className="text-base bg-gray-700 w-full outline-none py-2 px-5 pl-10 rounded  focus:ring-1 focus:ring-green-500 focus:ring-offset-1 focus:ring-offset-gray-900"
                required
                type="password"
                id="password"
                name="password"
                placeholder='Enter your Password'
                autoComplete="off"
                value={user.password}
                onChange={twoWaysBinding}
              />
            </div>
          </div>

          {/* Roles Container */}
          <div className="role flex flex-col gap-2 sm:flex-row sm:justify-evenly my-2">
            {/* USER Role */}
            <div className="flex gap-3 py-2 px-7 bg-green-400 font-semibold uppercase rounded border-b-2 border-white transition-all hover:bg-green-600">
              <input
                type="radio"
                name="role"
                id="user"
                value="user"
                checked={user.role === 'user'}
                onChange={twoWaysBinding}
              />
              <label htmlFor="user">user</label>
            </div>
            {/* Artist Role */}
            <div className="flex gap-3 py-2 px-7 bg-green-400 font-semibold uppercase rounded border-b-2 border-white transition-all hover:bg-green-600">
              <input
                type="radio"
                name="role"
                id="artist"
                value="artist"
                checked={user.role === 'artist'}
                onChange={twoWaysBinding}
              />
              <label htmlFor="artist">artist</label>
            </div>
          </div>

          {/* Submit Form */}
          <button className="text-while text-lg w-full uppercase font-bold bg-green-600 py-2 rounded-lg border-b-2 border-white transition-all hover:bg-green-700">
            Get Registered
          </button>

        </form>

        {/* Login Route */}
        <p className="text-base">
          Don't have an account? <Link to='http://localhost:5173/api/auth/register' className="font-bold text-base cursor-pointer text-green-400 text-shadow-gray-300 text-shadow-xs transition-all hover:text-green-600">
            Register
          </Link>
        </p>

      </div>
    </section>
  )
}

export default Login