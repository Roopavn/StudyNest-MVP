import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase.js'
import AuthModal from './AuthModal.jsx'

// Show the account dialog once whenever an unauthenticated visitor opens the app.
// Closing it keeps the demo workspace usable, while signing in enables cloud progress sync.
export default function AuthGate() {
  const [user, setUser] = useState(null)
  const [checked, setChecked] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (!auth) {
      setChecked(true)
      return undefined
    }
    return onAuthStateChanged(auth, (nextUser) => {
      setUser(nextUser)
      setChecked(true)
      if (nextUser) setDismissed(false)
    })
  }, [])

  if (!checked || user || dismissed) return null

  return <AuthModal user={null} onClose={() => setDismissed(true)} />
}
