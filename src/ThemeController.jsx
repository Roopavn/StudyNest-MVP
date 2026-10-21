import { useEffect, useState } from 'react'
import { Monitor, Moon, Sun, Palette, Check } from 'lucide-react'

const themes = [
  { id: 'ocean', label: 'Ocean', icon: Palette },
  { id: 'light', label: 'Light', icon: Sun },
  { id: 'dark', label: 'Dark', icon: Moon },
  { id: 'warm', label: 'Warm', icon: Sun },
  { id: 'system', label: 'System', icon: Monitor },
]

function applyTheme(theme) {
  const root = document.documentElement
  root.dataset.theme = theme
  root.style.colorScheme = theme === 'dark' ? 'dark' : 'light'
  localStorage.setItem('ar-codelab.theme', theme)
}

export default function ThemeController() {
  const [theme, setTheme] = useState(() => localStorage.getItem('ar-codelab.theme') || 'ocean')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      if ((localStorage.getItem('ar-codelab.theme') || 'ocean') === 'system') applyTheme('system')
    }
    media.addEventListener?.('change', handleChange)
    return () => media.removeEventListener?.('change', handleChange)
  }, [])

  const selected = themes.find((item) => item.id === theme) || themes[0]
  const SelectedIcon = selected.icon

  return (
    <>
      <style>{`
        :root[data-theme="dark"] { color-scheme: dark; --theme-bg:#0f172a; --theme-surface:#111827; --theme-surface-2:#1e293b; --theme-text:#e5e7eb; --theme-muted:#94a3b8; --theme-line:#334155; }
        :root[data-theme="light"] { color-scheme: light; --theme-bg:#f8fafc; --theme-surface:#ffffff; --theme-surface-2:#f1f5f9; --theme-text:#17233d; --theme-muted:#64748b; --theme-line:#e2e8f0; }
        :root[data-theme="ocean"] { color-scheme: light; --theme-bg:#edf7fb; --theme-surface:#ffffff; --theme-surface-2:#dff1f7; --theme-text:#12344a; --theme-muted:#52758a; --theme-line:#c7e3ed; }
        :root[data-theme="warm"] { color-scheme: light; --theme-bg:#fff7ed; --theme-surface:#fffdf9; --theme-surface-2:#ffedd5; --theme-text:#4a2d20; --theme-muted:#9a6b52; --theme-line:#f3d6bf; }
        :root[data-theme="system"] { color-scheme: light; }
        @media (prefers-color-scheme: dark) {
          :root[data-theme="system"] { color-scheme: dark; --theme-bg:#0f172a; --theme-surface:#111827; --theme-surface-2:#1e293b; --theme-text:#e5e7eb; --theme-muted:#94a3b8; --theme-line:#334155; }
        }
        :root[data-theme="dark"] body, :root[data-theme="system"] body, :root[data-theme="light"] body, :root[data-theme="ocean"] body, :root[data-theme="warm"] body { background:var(--theme-bg); color:var(--theme-text); }
        :root[data-theme="dark"] .sidebar, :root[data-theme="dark"] .topbar, :root[data-theme="dark"] .panel, :root[data-theme="dark"] .stat-card, :root[data-theme="dark"] .profile-row,
        :root[data-theme="system"] .sidebar, :root[data-theme="system"] .topbar, :root[data-theme="system"] .panel, :root[data-theme="system"] .stat-card, :root[data-theme="system"] .profile-row { background:var(--theme-surface); color:var(--theme-text); border-color:var(--theme-line); }
        :root[data-theme="ocean"] .sidebar, :root[data-theme="ocean"] .topbar, :root[data-theme="ocean"] .panel, :root[data-theme="ocean"] .stat-card, :root[data-theme="ocean"] .profile-row, :root[data-theme="ocean"] .course-card { background:var(--theme-surface); color:var(--theme-text); border-color:var(--theme-line); }
        :root[data-theme="warm"] .sidebar, :root[data-theme="warm"] .topbar, :root[data-theme="warm"] .panel, :root[data-theme="warm"] .stat-card, :root[data-theme="warm"] .profile-row, :root[data-theme="warm"] .course-card { background:var(--theme-surface); color:var(--theme-text); border-color:var(--theme-line); }
        :root[data-theme="ocean"] .page-content { background:var(--theme-bg); }
        :root[data-theme="warm"] .page-content { background:var(--theme-bg); }
        :root[data-theme="ocean"] .primary-button { background:#087e9b; }
        :root[data-theme="warm"] .primary-button { background:#c26735; }
        :root[data-theme="ocean"] .nav-item.active { background:#d8eef5; color:#087e9b; }
        :root[data-theme="warm"] .nav-item.active { background:#ffedd5; color:#a44e21; }
        :root[data-theme="ocean"] .daily-banner { background:linear-gradient(105deg,#dff3f8,#edf9fc 64%,#d7f0ed); border-color:#c7e3ed; }
        :root[data-theme="warm"] .daily-banner { background:linear-gradient(105deg,#fff0df,#fff8ee 64%,#fce7d4); border-color:#f3d6bf; }
        :root[data-theme="light"] .sidebar, :root[data-theme="light"] .topbar, :root[data-theme="light"] .panel, :root[data-theme="light"] .stat-card, :root[data-theme="light"] .profile-row { background:var(--theme-surface); color:var(--theme-text); border-color:var(--theme-line); }
        :root[data-theme="dark"] .main-area, :root[data-theme="system"] .main-area, :root[data-theme="light"] .main-area, :root[data-theme="ocean"] .main-area, :root[data-theme="warm"] .main-area { color:var(--theme-text); }
        :root[data-theme="dark"] .page-subtitle, :root[data-theme="dark"] .stat-label, :root[data-theme="dark"] .stat-foot, :root[data-theme="dark"] .muted-meta,
        :root[data-theme="system"] .page-subtitle, :root[data-theme="system"] .stat-label, :root[data-theme="system"] .stat-foot, :root[data-theme="system"] .muted-meta { color:var(--theme-muted); }
        :root[data-theme="dark"] .search-box, :root[data-theme="dark"] .search-box kbd, :root[data-theme="dark"] .stat-pill,
        :root[data-theme="system"] .search-box, :root[data-theme="system"] .search-box kbd, :root[data-theme="system"] .stat-pill { background:var(--theme-surface-2); border-color:var(--theme-line); color:var(--theme-muted); }
        :root[data-theme="dark"] .nav-item, :root[data-theme="dark"] .track-nav, :root[data-theme="dark"] .profile-row,
        :root[data-theme="system"] .nav-item, :root[data-theme="system"] .track-nav, :root[data-theme="system"] .profile-row { color:var(--theme-muted); }
        :root[data-theme="dark"] .nav-item.active, :root[data-theme="system"] .nav-item.active { background:#263b69; color:#bfdbfe; }
        :root[data-theme="dark"] .upgrade-card, :root[data-theme="system"] .upgrade-card { background:#172554; border-color:#273b70; }
        .theme-switcher { position:relative; flex:0 0 auto; z-index:100; font-family:inherit; }
        .theme-toggle { display:flex; align-items:center; justify-content:center; gap:0; width:38px; height:38px; border:1px solid #dfe5ef; background:#fff; color:#34415a; border-radius:10px; padding:0; box-shadow:0 4px 12px #17233d10; font-size:12px; font-weight:700; cursor:pointer; }\n        .theme-toggle span { display:none; }
        [data-theme="dark"] .theme-toggle, [data-theme="system"] .theme-toggle { background:#1e293b; color:#e5e7eb; border-color:#475569; }
        [data-theme="ocean"] .theme-toggle { background:#dff1f7; color:#087e9b; border-color:#c7e3ed; }
        [data-theme="warm"] .theme-toggle { background:#ffedd5; color:#a44e21; border-color:#f3d6bf; }
        .theme-menu { position:absolute; right:0; top:calc(100% + 8px); bottom:auto; width:158px; padding:6px; background:#fff; border:1px solid #e2e8f0; border-radius:12px; box-shadow:0 12px 35px #17233d22; }
        [data-theme="dark"] .theme-menu, [data-theme="system"] .theme-menu { background:#111827; border-color:#334155; }
        [data-theme="ocean"] .theme-menu { background:#ffffff; border-color:#c7e3ed; }
        [data-theme="warm"] .theme-menu { background:#fffdf9; border-color:#f3d6bf; }
        .theme-option { width:100%; display:flex; align-items:center; gap:9px; border:0; background:transparent; border-radius:8px; padding:9px; color:#475569; font-size:12px; text-align:left; }
        [data-theme="dark"] .theme-option, [data-theme="system"] .theme-option { color:#cbd5e1; }
        [data-theme="ocean"] .theme-option { color:#12344a; }
        [data-theme="warm"] .theme-option { color:#4a2d20; }
        .theme-option:hover { background:#f1f5f9; }
        [data-theme="dark"] .theme-option:hover, [data-theme="system"] .theme-option:hover { background:#1e293b; }
        [data-theme="ocean"] .theme-option:hover { background:#dff1f7; }
        [data-theme="warm"] .theme-option:hover { background:#ffedd5; }
        .theme-option .theme-check { margin-left:auto; }
        @media (max-width:640px) { .theme-toggle { width:36px; height:36px; } }
      `}</style>
      <div className="theme-switcher">
        {open && <div className="theme-menu" role="menu" aria-label="Choose theme">
          {themes.map(({ id, label, icon: Icon }) => (
            <button key={id} className="theme-option" onClick={() => { setTheme(id); setOpen(false) }} role="menuitem">
              <Icon size={15} />
              <span>{label}</span>
              {theme === id && <Check className="theme-check" size={14} />}
            </button>
          ))}
        </div>}
        <button className="theme-toggle" onClick={() => setOpen((value) => !value)} aria-label="Change theme" aria-expanded={open}>
          <SelectedIcon size={16} />
          <span>{selected.label}</span>
        </button>
      </div>
    </>
  )
}
