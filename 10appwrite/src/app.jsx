import React, { useState, useEffect } from 'react'
import authService from './appwrite/auth'

function App() {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)
  const [isSignUp, setIsSignUp] = useState(false)
  
  // Form State
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    checkUserStatus()
  }, [])

  const checkUserStatus = () => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) setUser(userData)
        else setUser(null)
      })
      .catch((err) => console.log("Auth Check:", err))
      .finally(() => setLoading(false))
  }

  const handleAuth = async (e) => {
    e.preventDefault()
    setError('')
    try {
      if (isSignUp) {
        const session = await authService.createAccount({ email, password, name })
        if (session) checkUserStatus()
      } else {
        const session = await authService.login({ email, password })
        if (session) checkUserStatus()
      }
    } catch (err) {
      setError(err.message || "Authentication failed")
    }
  }

  const handleLogout = async () => {
    await authService.logout()
    setUser(null)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center text-teal-400">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-teal-400"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-900 text-white">
      {/* Navigation Header */}
      <header className="py-4 shadow bg-slate-800 border-b border-slate-700">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-teal-400">DevWrite Blog</h1>
          <nav className="flex items-center gap-4">
            {user ? (
              <>
                <span className="text-sm bg-teal-600 px-3 py-1 rounded-full font-medium">
                  {user.name || user.email}
                </span>
                <button 
                  onClick={handleLogout}
                  className="bg-red-500/20 hover:bg-red-500/30 text-red-400 px-3 py-1 rounded text-sm transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <span className="text-sm text-gray-400">Not Logged In</span>
            )}
          </nav>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-grow flex items-center justify-center p-6">
        {user ? (
          /* Dashboard when logged in */
          <div className="max-w-md w-full bg-slate-800 p-8 rounded-xl border border-slate-700 text-center shadow-lg">
            <h2 className="text-3xl font-extrabold text-teal-400 mb-2">
              Welcome Back, {user.name || 'Developer'}!
            </h2>
            <p className="text-gray-300 mb-6">
              You are successfully authenticated via Appwrite Cloud.
            </p>
            <div className="bg-slate-900 p-4 rounded-lg text-left text-xs font-mono text-teal-300 border border-slate-700 space-y-1">
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>User ID:</strong> {user.$id}</p>
              <p><strong>Status:</strong> Active Session</p>
            </div>
          </div>
        ) : (
          /* Authentication Form when logged out */
          <div className="max-w-md w-full bg-slate-800 p-8 rounded-xl border border-slate-700 shadow-xl">
            <h2 className="text-2xl font-bold text-teal-400 text-center mb-6">
              {isSignUp ? 'Create DevWrite Account' : 'Sign In to DevWrite'}
            </h2>

            {error && (
              <div className="bg-red-500/20 border border-red-500 text-red-300 text-sm p-3 rounded mb-4">
                {error}
              </div>
            )}

            <form onSubmit={handleAuth} className="space-y-4">
              {isSignUp && (
                <div>
                  <label className="block text-sm text-gray-300 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-2 text-white focus:outline-none focus:border-teal-400"
                    placeholder="John Doe"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-2 text-white focus:outline-none focus:border-teal-400"
                  placeholder="name@example.com"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-1">Password</label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-2 text-white focus:outline-none focus:border-teal-400"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-teal-500 hover:bg-teal-600 text-slate-950 font-semibold py-2 rounded transition mt-2"
              >
                {isSignUp ? 'Sign Up' : 'Log In'}
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-400">
              {isSignUp ? "Already have an account?" : "Don't have an account?"}{' '}
              <button
                onClick={() => {
                  setIsSignUp(!isSignUp)
                  setError('')
                }}
                className="text-teal-400 hover:underline font-medium ml-1"
              >
                {isSignUp ? 'Log In' : 'Sign Up'}
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="py-4 text-center text-sm text-gray-500 border-t border-slate-800">
        DevWrite © 2026 - Mega Blog Architecture
      </footer>
    </div>
  )
}

export default App