'use client'
import { useState, useEffect } from 'react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff, Lock, Mail, AlertCircle } from 'lucide-react'

export default function AdminLoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [attempts, setAttempts] = useState(0)
  const [locked, setLocked] = useState(false)
  const router = useRouter()
  const { data: session } = useSession()

  useEffect(() => {
    if (session) router.replace('/admin/dashboard')
  }, [session, router])

  // Rate-limit: lock after 5 failed attempts for 30 seconds
  useEffect(() => {
    if (attempts >= 5) {
      setLocked(true)
      setError('Too many failed attempts. Please wait 30 seconds.')
      const timer = setTimeout(() => {
        setLocked(false)
        setAttempts(0)
        setError('')
      }, 30000)
      return () => clearTimeout(timer)
    }
  }, [attempts])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (locked) return
    setError('')
    if (!email || !password) { setError('All fields required.'); return }

    setLoading(true)
    try {
      const result = await signIn('credentials', {
        email: email.toLowerCase().trim(),
        password,
        redirect: false,
      })

      if (result?.error) {
        setAttempts(prev => prev + 1)
        setError('Invalid email or password.')
      } else {
        router.replace('/admin/dashboard')
      }
    } catch {
      setError('An unexpected error occurred.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-secondary flex items-center justify-center px-4">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      </div>

      <div className="relative w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-2">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <span className="text-white font-display font-bold text-lg">E</span>
            </div>
            <span className="font-display font-bold text-2xl text-white">Eventurism</span>
          </div>
          <p className="text-white/40 text-sm font-mono">Admin Portal · Secure Access</p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          <h1 className="font-display font-bold text-2xl text-secondary mb-1">Welcome back</h1>
          <p className="text-sm text-gray-400 mb-8 font-mono">Sign in to manage your website</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5" autoComplete="off">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm font-medium text-secondary">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="admin@eventurism.com"
                  autoComplete="username"
                  required
                  disabled={locked}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-ivory text-secondary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all disabled:opacity-50"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="password" className="text-sm font-medium text-secondary">Password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  id="password"
                  type={showPass ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••••"
                  autoComplete="current-password"
                  required
                  disabled={locked}
                  className="w-full pl-10 pr-12 py-3 rounded-xl border border-border bg-ivory text-secondary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all disabled:opacity-50"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-secondary transition-colors"
                  tabIndex={-1}
                >
                  {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-3">
                <AlertCircle className="w-4 h-4 shrink-0" />
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading || locked}
              className="w-full bg-primary text-white py-3.5 rounded-xl font-medium hover:bg-primary-dark active:scale-95 transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Signing in...
                </>
              ) : 'Sign In'}
            </button>
          </form>

          <p className="mt-6 text-xs text-center text-gray-300 font-mono">
            This area is restricted to authorised personnel only.
          </p>
        </div>
      </div>
    </div>
  )
}
