import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import "./App.css"

function Home() {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [currentSlide, setCurrentSlide] = useState(0)
  const navigate = useNavigate()

  const slides = [
    'https://images.unsplash.com/photo-1611612135381-fa0cf1d06d18?w=600&q=80',
    'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=600&q=80',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80',
    'https://images.unsplash.com/photo-1596933247883-36b3f1e8de3c?w=600&q=80',
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isLogin) {
      console.log('Login:', { email, password })
      navigate('/mainpf')
    } else {
      console.log('Signup:', { name, username, email, password })
      navigate('/mainpf')
    }
  }

  const handleGoogleSignIn = () => {
    navigate('/mainpf')
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 p-4">

      <header className="mb-20 header-title">
        <h1 className="mt-15 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 text-center drop-shadow-lg">
          ✨ ZonE
        </h1>
      </header>
      <div className='flex gap-8 items-center justify-between'>

        {/* Slideshow Section */}
        <div className="w-2/3 relative h-200 rounded-2xl overflow-hidden shadow-2xl border border-purple-500/40 ml-25">
          {/* Slides */}
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide}
              alt={`Chat interface ${index + 1}`}
              className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-purple-950/60 to-transparent"></div>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-cyan-400 w-8'
                    : 'bg-purple-400/50 hover:bg-purple-300'
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-purple-600/60 hover:bg-purple-500 text-white p-2 rounded-full transition-all duration-300"
          >
            ❮
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-purple-600/60 hover:bg-purple-500 text-white p-2 rounded-full transition-all duration-300"
          >
            ❯
          </button>
        </div>

        {/* Form Section */}
        <div className="flex">
          <form onSubmit={handleSubmit} className={`form-container mr-30 w-100 bg-gradient-to-br from-purple-950 via-slate-900 to-slate-950 p-8 rounded-2xl shadow-2xl border border-purple-500/40 backdrop-blur-xl transition-all duration-500 ${!isLogin ? 'expanded' : 'collapsed'}`}>

            {/* Toggle Switch */}
            <div className="toggle-switch flex items-center justify-center mb-8 bg-gradient-to-r from-purple-900/40 to-slate-800/40 rounded-xl p-1.5 transition-all duration-400 border border-purple-500/30 hover:border-purple-400/50">
              <button
                type="button"
                onClick={() => setIsLogin(true)}
                className={`toggle-switch-btn flex-1 py-2.5 rounded-lg font-semibold transition-all duration-400 ${isLogin
                  ? 'bg-gradient-to-r from-purple-600 via-purple-500 to-cyan-500 text-white shadow-lg shadow-cyan-500/40 scale-105'
                  : 'text-purple-300 hover:text-purple-200'
                  }`}
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => setIsLogin(false)}
                className={`toggle-switch-btn flex-1 py-2.5 rounded-lg font-semibold transition-all duration-400 ${!isLogin
                  ? 'bg-gradient-to-r from-purple-600 via-purple-500 to-cyan-500 text-white shadow-lg shadow-cyan-500/40 scale-105'
                  : 'text-purple-300 hover:text-purple-200'
                  }`}
              >
                Signup
              </button>
            </div>

            <h2 className="text-center text-white text-xl font-semibold mb-8 transition-all duration-400 min-h-7">
              {isLogin ? 'Welcome Back' : 'Create an Account'}
            </h2>

            {/* Signup-only Fields */}
            {!isLogin && (
              <>
                <div className="form-field field-enter mb-6 transition-all duration-500" style={{ animationDelay: '0.1s' }}>
                  <label className="text-purple-300 text-sm font-semibold block mb-2">Full Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    autoComplete="off"
                    className="w-full px-4 py-3 bg-slate-800/60 border border-purple-500/40 rounded-lg text-white placeholder-purple-400/60 focus:outline-none focus:border-cyan-400/80 focus:ring-2 focus:ring-cyan-400/30 transition-all duration-200 hover:border-purple-400/60"
                    required
                  />
                </div>

                <div className="form-field field-enter mb-6 transition-all duration-500" style={{ animationDelay: '0.2s' }}>
                  <label className="text-purple-300 text-sm font-semibold block mb-2">Username</label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Choose a username"
                    autoComplete="off"
                    className="w-full px-4 py-3 bg-slate-800/60 border border-purple-500/40 rounded-lg text-white placeholder-purple-400/60 focus:outline-none focus:border-cyan-400/80 focus:ring-2 focus:ring-cyan-400/30 transition-all duration-200 hover:border-purple-400/60"
                    required
                  />
                </div>
              </>
            )}

            <div className="form-field mb-6 transition-all duration-500">
              <label className="text-purple-300 text-sm font-semibold block mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                autoComplete="email"
                className="w-full px-4 py-3 bg-slate-800/60 border border-purple-500/40 rounded-lg text-white placeholder-purple-400/60 focus:outline-none focus:border-cyan-400/80 focus:ring-2 focus:ring-cyan-400/30 transition-all duration-200 hover:border-purple-400/60"
                required
              />
            </div>

            <div className="form-field mb-8 transition-all duration-500">
              <label className="text-purple-300 text-sm font-semibold block mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                autoComplete="current-password"
                className="w-full px-4 py-3 bg-slate-800/60 border border-purple-500/40 rounded-lg text-white placeholder-purple-400/60 focus:outline-none focus:border-cyan-400/80 focus:ring-2 focus:ring-cyan-400/30 transition-all duration-200 hover:border-purple-400/60"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-purple-600 via-purple-500 to-cyan-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 mb-6 active:scale-95 shadow-lg shadow-purple-500/30"
            >
              {isLogin ? 'Login' : 'Create Account'}
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent transition-all duration-300"></div>
              <span className="text-purple-400 text-xs uppercase transition-all duration-300 font-semibold">or</span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent transition-all duration-300"></div>
            </div>

            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full py-3 bg-slate-800/60 border border-purple-500/40 text-purple-300 font-semibold rounded-lg hover:bg-slate-700/60 hover:border-cyan-400/60 transition-all duration-300 active:scale-95 hover:shadow-lg hover:shadow-purple-500/20"
            >
              Sign in with Google
            </button>

          </form>
        </div>
      </div>

    </section>
  )
}

export default Home