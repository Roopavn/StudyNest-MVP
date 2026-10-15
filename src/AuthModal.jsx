import { useState } from 'react'
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth'
import { auth, isFirebaseConfigured } from './firebase.js'
import './AuthModal.css'

export default function AuthModal({ user, onClose }) {
  const [mode, setMode] = useState('signin')
  const [name, setName] = useState('')
  const [email, setEmail] = useState(user?.email || '')
  const [password, setPassword] = useState('')
  const [busy, setBusy] = useState(false)
  const [message, setMessage] = useState('')

  async function logout() {
    if (!auth) return
    try { await signOut(auth); onClose() } catch (error) { setMessage(error.message || 'Could not sign out.') }
  }

  async function submit(event) {
    event.preventDefault()
    setMessage('')
    if (!auth || !isFirebaseConfigured) {
      setMessage('Account sign-in is not connected yet. Add the Firebase web app settings to GitHub Actions secrets and enable Email/Password in Firebase Authentication.')
      return
    }
    setBusy(true)
    try {
      if (mode === 'reset') {
        await sendPasswordResetEmail(auth, email.trim())
        setMessage('Password reset email sent. Check your inbox and spam folder.')
      } else if (mode === 'signup') {
        const credential = await createUserWithEmailAndPassword(auth, email.trim(), password)
        if (name.trim()) await updateProfile(credential.user, { displayName: name.trim() })
        onClose()
      } else {
        await signInWithEmailAndPassword(auth, email.trim(), password)
        onClose()
      }
    } catch (error) {
      const messages = {
        'auth/email-already-in-use': 'An account already exists for this email. Try signing in.',
        'auth/invalid-email': 'Enter a valid email address.',
        'auth/invalid-credential': 'Email or password is incorrect.',
        'auth/weak-password': 'Choose a password with at least 6 characters.',
        'auth/too-many-requests': 'Too many attempts. Wait a moment and try again.',
        'auth/operation-not-allowed': 'Enable Email/Password in Firebase Authentication settings.',
        'auth/network-request-failed': 'Network error. Check your connection and try again.',
      }
      setMessage(messages[error.code] || error.message || 'Could not complete the account request.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="auth-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
      <section className="auth-card" role="dialog" aria-modal="true" aria-labelledby="auth-title">
        <div className="auth-heading">
          <div className="auth-brand-mark">A</div>
          <button type="button" className="auth-close" onClick={onClose} aria-label="Close account dialog">×</button>
        </div>
        {user ? (
          <>
            <span className="auth-eyebrow">YOUR ACCOUNT</span>
            <h2 id="auth-title">You're signed in</h2>
            <p className="auth-description">Your learning data is associated with this account.</p>
            <div className="auth-user-summary"><strong>{user.displayName || 'Student'}</strong><span>{user.email}</span></div>
            <button type="button" className="auth-submit" onClick={onClose}>Back to learning</button><button type="button" className="auth-signout" onClick={logout}>Sign out</button>
          </>
        ) : (
          <>
            <span className="auth-eyebrow">YOUR LEARNING SPACE</span>
            <h2 id="auth-title">{mode === 'signup' ? 'Create your account' : mode === 'reset' ? 'Reset your password' : 'Welcome back'}</h2>
            <p className="auth-description">{mode === 'signup' ? 'Save your progress and continue learning on another device.' : mode === 'reset' ? 'We’ll send you a link to choose a new password.' : 'Sign in to sync your courses, tasks and completed lessons.'}</p>
            <form className="auth-form" onSubmit={submit}>
              {mode === 'signup' && <label>Display name<input autoComplete="name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Your name" maxLength={80} required /></label>}
              <label>Email address<input type="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" required /></label>
              {mode !== 'reset' && <label>Password<input type="password" autoComplete={mode === 'signup' ? 'new-password' : 'current-password'} value={password} onChange={(event) => setPassword(event.target.value)} placeholder={mode === 'signup' ? 'At least 6 characters' : 'Your password'} minLength={6} required /></label>}
              {message && <p className="auth-message" role="alert">{message}</p>}
              <button type="submit" className="auth-submit" disabled={busy}>{busy ? 'Please wait…' : mode === 'signup' ? 'Create account' : mode === 'reset' ? 'Send reset email' : 'Sign in'}</button>
            </form>
            <div className="auth-links">
              {mode === 'signin' && <button type="button" onClick={() => { setMode('reset'); setMessage('') }}>Forgot password?</button>}
              <button type="button" onClick={() => { setMode(mode === 'signup' ? 'signin' : 'signup'); setMessage('') }}>{mode === 'signup' ? 'Already have an account? Sign in' : 'New here? Create an account'}</button>
              {mode === 'reset' && <button type="button" onClick={() => { setMode('signin'); setMessage('') }}>Back to sign in</button>}
            </div>
            {!isFirebaseConfigured && <p className="auth-setup-note">Demo mode is available now. Cloud accounts need Firebase configuration before they can be used.</p>}
          </>
        )}
      </section>
    </div>
  )
}
