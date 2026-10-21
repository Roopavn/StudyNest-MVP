import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ThemeController from './ThemeController.jsx'

class AppErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, message: '' }
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, message: error?.message || 'An unexpected rendering error occurred.' }
  }
  componentDidCatch(error) {
    console.error('StudyNest render error:', error)
  }
  render() {
    if (this.state.hasError) {
      return <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: 24, background: '#f5f7fb', fontFamily: 'system-ui, sans-serif', color: '#1c2944' }}>
        <section style={{ maxWidth: 520, padding: 28, border: '1px solid #e2e8f0', borderRadius: 16, background: '#fff', boxShadow: '0 12px 40px #1c294410' }}>
          <h1 style={{ marginTop: 0 }}>StudyNest hit a loading error</h1>
          <p>The page failed to render instead of loading normally. Refresh the page to try again.</p>
          <pre style={{ whiteSpace: 'pre-wrap', overflowWrap: 'anywhere', padding: 12, borderRadius: 8, background: '#f1f5f9', fontSize: 13 }}>{this.state.message}</pre>
          <button onClick={() => window.location.reload()} style={{ padding: '10px 16px', border: 0, borderRadius: 8, background: '#3159c9', color: '#fff', fontWeight: 700, cursor: 'pointer' }}>Reload StudyNest</button>
        </section>
      </main>
    }
    return this.props.children
  }
}
import './styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppErrorBoundary>
      <App />
      <ThemeController />
    </AppErrorBoundary>
  </StrictMode>,
)
