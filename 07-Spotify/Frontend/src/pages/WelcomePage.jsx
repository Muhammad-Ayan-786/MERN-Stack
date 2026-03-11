import { Link } from "react-router-dom"

const WelcomePage = () => {
  return (
    <section className="w-screen min-h-screen bg-[url(https://static.vecteezy.com/system/resources/previews/028/215/268/non_2x/wavy-lines-with-lighting-background-vector.jpg)] bg-no-repeat bg-cover bg-center flex justify-center items-center text-white backdrop-blur-2xs">

      {/* Main Container */}
      <div className="flex flex-col justify-between items-center gap-8 w-9/12 h-1/2 p-10 rounded-3xl bg-green-950 shadow-2xl shadow-lime-200 md:gap-0 md:flex-row">

        {/* Left Side */}
        <div className="w-2/5 h-full flex flex-col gap-8 justify-center items-center">
          {/* Hero Text */}
          <h1 className="text-3xl text-center font-bold tracking-tight text-gray-50 text-shadow-lime-950 text-shadow-lg w-full md:w-fit md:text-6xl">
            Welcome To Music World
          </h1>
          {/* Logo Banner */}
          <div className="items-center justify-center gap-5 bg-lime-300 px-8 py-4 md:px-14 md:pt-4 md:pb-6 rounded-full hidden md:flex">
            <img className="w-8 h-8 md:w-13 md:h-13 mt-2 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVGHahSsy5_XU1QcxJAFf4-aC2VHbUugDFJw&s" alt="Logo" />
            <p className="text-xl font-bold text-gray-50 text-shadow-lime-950 text-shadow-lg md:text-5xl">Spotify</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-2/5 h-full flex flex-col gap-8 justify-center items-start">
          {/* Hero Paragraph */}
          <p className="text-xl font-bold text-gray-50 text-shadow-lime-950 text-shadow-lg hidden md:block md:text-4xl">
            Listen to your favorite music anywhere, anytime.
          </p>
          {/* Auth Buttons */}
          <div className="flex flex-col gap-5 w-full">
            <Link to='/api/auth/register' className="md:w-full bg-lime-500 rounded-full text-center py-3.5 px-8 text-base font-bold text-gray-50 text-shadow-lime-950 text-shadow-lg md:text-lg">Sign up</Link>
            <Link to='/api/auth/login' className="md:w-full bg-lime-500 rounded-full text-center py-3.5 px-8 text-base font-bold text-gray-50 text-shadow-lime-950 text-shadow-lg md:text-lg">Log in</Link>
          </div>
        </div>
      </div>

    </section >
  )
}

export default WelcomePage