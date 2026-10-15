import { useEffect, useMemo, useState } from 'react'
import {
  ArrowRight, Bell, BookOpen, Bookmark, Brain, BriefcaseBusiness,
  Check, CheckCheck, ChevronDown, ChevronRight, CircleHelp, Clock3, Code2,
  GraduationCap, LayoutDashboard, Menu, MoreHorizontal, Play, Plus,
  Search, Sparkles, Target, X,
} from 'lucide-react'
import { courses, initialTasks, quizQuestion, tracks } from './data.js'
import LearningCenter, { lessons as learningLessons } from './LearningCenter.jsx'
import InterviewPrep from './InterviewPrep.jsx'
import AuthModal from './AuthModal.jsx'
import { onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore'
import { auth, db } from './firebase.js'

const iconMap = { code: Code2, 'book-open': BookOpen }
const navItems = [
  { label: 'Overview', icon: LayoutDashboard },
  { label: 'My learning', icon: BookOpen },
  { label: 'Learning path', icon: GraduationCap },
  { label: 'Practice & quizzes', icon: Brain },
  { label: 'Interview preparation', icon: BriefcaseBusiness },
  { label: 'Bookmarks', icon: Bookmark },
]
const pageTitles = {
  Overview: ['Your learning space', 'A little progress each day adds up to big results.'],
  'My learning': ['My learning', 'Pick up where you left off and keep your momentum.'],
  'Learning path': ['Learning path', 'Learn concepts step by step, from the foundations to advanced practice.'],
  'Practice & quizzes': ['Practice & quizzes', 'Test what you know and learn from every answer.'],
  'Interview preparation': ['Interview preparation', 'Practice technical questions with clear answers, syntax and examples.'],
  Bookmarks: ['Your bookmarks', 'Keep important lessons close at hand.'],
}

function Brand() {
  return <div className="brand"><span className="brand-mark"><BookOpen size={21} strokeWidth={2.4} /></span><span>AR-CodeLab<span className="brand-dot">.</span></span></div>
}
function ProgressBar({ value, color = 'blue' }) {
  return <div className="progress-track"><div className={`progress-fill ${color}`} style={{ width: `${value}%` }} /></div>
}
function SectionHeading({ title, action, onAction }) {
  return <div className="section-heading"><h2>{title}</h2>{action && <button className="text-action" onClick={onAction}>{action}<ArrowRight size={15} /></button>}</div>
}

export default function App() {
  const [activePage, setActivePage] = useState('Overview')
  const [tasks, setTasks] = useState(() => {
    try {
      const saved = localStorage.getItem('studynest.tasks')
      return saved ? JSON.parse(saved).filter((task) => !/polity|geography|current affairs|fundamental rights|parliament/i.test(`${task.title} ${task.detail}`)) : initialTasks
    } catch {
      return initialTasks
    }
  })
  const [bookmarks, setBookmarks] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('studynest.bookmarks') || '[]').filter((id) => courses.some((course) => course.id === id))
    } catch {
      return []
    }
  })
  const [completedLessons, setCompletedLessons] = useState(() => { try { return JSON.parse(localStorage.getItem('studynest.lessons.done') || '[]') } catch { return [] } })
  const [user, setUser] = useState(null)
  const [showAuth, setShowAuth] = useState(false)
  const [cloudUserId, setCloudUserId] = useState(null)
  const [search, setSearch] = useState('')
  const [showQuiz, setShowQuiz] = useState(false)
  const [answer, setAnswer] = useState(null)
  const [quizSubmitted, setQuizSubmitted] = useState(false)
  const [mobileNav, setMobileNav] = useState(false)
  const [notice, setNotice] = useState('')
  const [selectedTrack, setSelectedTrack] = useState('all')
  const [selectedCourseGroup, setSelectedCourseGroup] = useState('languages')
  const [learningTopic, setLearningTopic] = useState('All topics')
  const [showAddTask, setShowAddTask] = useState(false)
  const [newTask, setNewTask] = useState('')
  useEffect(() => {
    if (!auth) return undefined
    return onAuthStateChanged(auth, (nextUser) => setUser(nextUser))
  }, [])

  useEffect(() => {
    localStorage.setItem('studynest.lessons.done', JSON.stringify(completedLessons))
  }, [completedLessons])

  useEffect(() => {
    if (!user || !db) { setCloudUserId(null); return undefined }
    let cancelled = false
    setCloudUserId(null)
    getDoc(doc(db, 'users', user.uid)).then((snapshot) => {
      if (cancelled) return
      if (snapshot.exists()) {
        const data = snapshot.data()
        if (Array.isArray(data.tasks)) setTasks(data.tasks)
        if (Array.isArray(data.bookmarks)) setBookmarks(data.bookmarks.filter((id) => courses.some((course) => course.id === id)))
        if (Array.isArray(data.completedLessons)) setCompletedLessons(data.completedLessons)
      }
      setCloudUserId(user.uid)
    }).catch(() => {
      if (!cancelled) setNotice('Could not load cloud progress. Check your Firebase setup and Firestore rules.')
    })
    return () => { cancelled = true }
  }, [user])

  useEffect(() => {
    if (!user || !db || cloudUserId !== user.uid) return
    setDoc(doc(db, 'users', user.uid), { tasks, bookmarks, completedLessons, updatedAt: serverTimestamp() }, { merge: true })
      .catch(() => setNotice('Cloud save failed. Your latest changes remain in this browser.'))
  }, [tasks, bookmarks, completedLessons, user, cloudUserId])

  useEffect(() => {
    localStorage.setItem('studynest.tasks', JSON.stringify(tasks))
  }, [tasks])

  useEffect(() => {
    localStorage.setItem('studynest.bookmarks', JSON.stringify(bookmarks))
  }, [bookmarks])

  const completed = tasks.filter((task) => task.done).length
  const totalLessonCount = courses.reduce((sum, course) => sum + (Number.parseInt(course.lessons, 10) || 0), 0)
  const progressPercent = totalLessonCount ? Math.min(100, Math.round(completedLessons.length / totalLessonCount * 100)) : 0
  const courseTrackAliases = {
    'Python Foundations': 'Python', 'Java Foundations': 'Java', 'JavaScript Essentials': 'JavaScript',
    'C Programming': 'C Programming', 'TypeScript': 'TypeScript', 'Database & SQL Essentials': 'SQL',
    'REST API Development': 'REST APIs', 'Web Development with HTML & CSS': 'HTML & CSS',
    'DevOps Fundamentals': 'DevOps', 'Cloud Fundamentals': 'Cloud Fundamentals', 'Linux & Shell': 'Linux & Shell',
    'Docker & Containers': 'Docker & Containers', 'Git & GitHub': 'Git & GitHub', 'Kubernetes': 'Kubernetes',
    'Data Engineering & Big Data': 'Data Engineering / Big Data', 'React': 'React', 'Node.js & Express': 'Node.js & Express',
    'Generative AI': 'Generative AI & LLMs', 'DBMS & Database Design': 'DBMS & Database Design',
    'Software Testing': 'Software Testing', 'NoSQL & MongoDB': 'NoSQL & MongoDB',
    'Django Web Development': 'Django & FastAPI', 'FastAPI Development': 'Django & FastAPI',
  }
  function getCourseProgress(course) {
    const track = course.track || courseTrackAliases[course.title] || course.title
    const matchingLessons = learningLessons.filter((lesson) => lesson.track.toLowerCase() === track.toLowerCase())
    const total = matchingLessons.length || (Number.parseInt(course.lessons, 10) || 0)
    const done = matchingLessons.filter((lesson) => completedLessons.includes(lesson.id)).length
    return { done, total, percent: total ? Math.min(100, Math.round(done / total * 100)) : 0 }
  }
  function toggleBookmark(courseId) {
    setBookmarks((current) => current.includes(courseId)
      ? current.filter((id) => id !== courseId)
      : [...current, courseId])
    setNotice(bookmarks.includes(courseId) ? 'Course removed from bookmarks.' : 'Course saved to your bookmarks.')
  }
  const courseGroupFor = (course) => {
    const title = course.title.toLowerCase()
    if (/python foundations|java foundations|javascript essentials|c programming|c\+\+|c#|typescript/.test(title)) return 'languages'
    if (/django|flask|fastapi|frameworks & libraries|react/.test(title)) return 'frameworks'
    if (/sql|database/.test(title)) return 'databases'
    if (/machine learning|data science|data analyst|data analytics|data engineering|big data|pyspark|generative ai|agentic ai/.test(title)) return 'data-ai'
    if (/devops|cloud|linux|docker|kubernetes/.test(title)) return 'devops'
    if (/html|css|frontend|web design/.test(title)) return 'web'
    if (/testing|quality assurance|pytest/.test(title)) return 'testing'
    if (/git|github|rest api|api development|developer tools/.test(title)) return 'tools'
    return 'tools'
  }
  const courseGroups = [
    ['languages', 'Programming languages'],
    ['frameworks', 'Frameworks & libraries'],
    ['databases', 'Databases & SQL'],
    ['data-ai', 'Data & AI'],
    ['devops', 'DevOps & cloud'],
    ['web', 'Web & frontend'],
    ['testing', 'Testing & QA'],
    ['tools', 'APIs & developer tools'],
    ['all', 'All courses'],
  ]
  const filteredCourses = useMemo(() => courses.filter((course) =>
    (selectedTrack === 'all' || course.category.includes('IT'))
    && (selectedCourseGroup === 'all' || courseGroupFor(course) === selectedCourseGroup)
    && `${course.title} ${course.category}`.toLowerCase().includes(search.toLowerCase())), [search, selectedTrack, selectedCourseGroup])
  const page = pageTitles[activePage] || pageTitles.Overview

  function openCourse(course) {
    const title = course.title.toLowerCase()
    const topic = title.includes('manual testing') ? 'Manual Testing' : title.includes('django rest') || title.includes('rest framework') ? 'Django REST Framework' : title.includes('machine learning') ? 'Machine Learning' : title.includes('data analyst') || title.includes('data analytics') ? 'Data Analyst' : title.includes('data science') ? 'Data Science' : title.includes('django') ? 'Django' : title.includes('flask') ? 'Flask' : title.includes('fastapi') ? 'FastAPI' : title.includes('agentic ai') ? 'Agentic AI' : title.includes('generative ai') ? 'Generative AI' : title.includes('python') ? 'Python' : title.includes('sql') || title.includes('database') ? 'SQL' : title.includes('api') ? 'REST APIs' : title.includes('c++') ? 'C++' : title.includes('c#') || title.includes('.net') ? 'C#' : title.includes('c programming') ? 'C Programming' : title.includes('typescript') ? 'TypeScript' : title.includes('react') ? 'React' : title.includes('java') && !title.includes('javascript') ? 'Java' : title.includes('frameworks & libraries') || title.includes('javascript ecosystem') ? 'JavaScript Ecosystem' : title.includes('javascript') ? 'JavaScript' : title.includes('html') || title.includes('css') ? 'HTML & CSS' : title.includes('devops') ? 'DevOps' : title.includes('cloud') ? 'Cloud Fundamentals' : title.includes('linux') ? 'Linux & Shell' : title.includes('docker') ? 'Docker & Containers' : title.includes('git') ? 'Git & GitHub' : title.includes('kubernetes') ? 'Kubernetes' : title.includes('data engineering') || title.includes('pyspark') || title.includes('big data') ? 'Data Engineering / Big Data' : 'All topics'
    setLearningTopic(topic)
    setActivePage('Learning path')
    setMobileNav(false)
    setSearch('')
  }
  function navigate(label) {
    setActivePage(label)
    setMobileNav(false)
    setSearch('')
  }
  function toggleTask(id) {
    setTasks((current) => current.map((task) => task.id === id ? { ...task, done: !task.done } : task))
  }
  function addTask(event) {
    event.preventDefault()
    if (!newTask.trim()) return
    setTasks((current) => [...current, { id: Date.now(), title: newTask.trim(), detail: 'Personal goal · Today', done: false }])
    setNewTask('')
    setShowAddTask(false)
    setNotice('Your study task has been added.')
  }
  function openQuiz() {
    setAnswer(null)
    setQuizSubmitted(false)
    setShowQuiz(true)
  }

  return (
    <div className="app-shell">
      <aside className={`sidebar ${mobileNav ? 'sidebar-open' : ''}`}>
        <div className="sidebar-top"><Brand /><button className="icon-button mobile-close" onClick={() => setMobileNav(false)} aria-label="Close navigation"><X size={19} /></button></div>
        <div className="workspace-label">WORKSPACE</div>
        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map(({ label, icon: Icon }) => <button key={label} className={`nav-item ${activePage === label ? 'active' : ''}`} onClick={() => navigate(label)}><Icon size={18} /><span>{label}</span>{label === 'Practice & quizzes' && <span className="nav-count">3</span>}</button>)}
        </nav>
        <div className="sidebar-divider" />
        <div className="workspace-label track-label">YOUR TRACKS <button className="tiny-icon" onClick={() => setNotice('Choose a track from the learning cards below.')} aria-label="Track information"><Plus size={15} /></button></div>
        {tracks.map((track) => {
          const Icon = iconMap[track.icon]
          return <button key={track.id} className={`track-nav ${selectedTrack === track.id ? 'track-selected' : ''}`} onClick={() => { setSelectedTrack(track.id); navigate('My learning') }}><span className={`track-icon ${track.color}`}><Icon size={17} /></span><span>{track.title}</span><ChevronRight size={14} className="track-chevron" /></button>
        })}
        <div className="sidebar-spacer" />
        <div className="upgrade-card"><div className="upgrade-spark"><Sparkles size={17} /></div><h3>Make learning a habit</h3><p>Small steps today. Big things tomorrow.</p><button onClick={() => setNotice('Your next step: complete one task from today’s plan.')}>Explore your goals <ArrowRight size={14} /></button><div className="upgrade-orb orb-one" /><div className="upgrade-orb orb-two" /></div>
        <button className="profile-row" onClick={() => setShowAuth(true)}><div className="avatar">{user?.displayName?.[0]?.toUpperCase() || user?.email?.[0]?.toUpperCase() || 'S'}</div><div className="profile-copy"><strong>{user?.displayName || user?.email || 'Student account'}</strong><span>{user ? 'Signed in · cloud sync' : 'Demo workspace'}</span></div><MoreHorizontal size={19} className="profile-more" /></button>
      </aside>

      {mobileNav && <button className="mobile-scrim" onClick={() => setMobileNav(false)} aria-label="Close navigation overlay" />}
      <main className="main-area">
        <header className="topbar">
          <button className="icon-button mobile-menu" onClick={() => setMobileNav(true)} aria-label="Open navigation"><Menu size={21} /></button>
          <div className="breadcrumbs"><span>Workspace</span><ChevronRight size={14} /><strong>{activePage}</strong></div>
          <div className="topbar-actions"><label className="search-box"><Search size={17} /><input aria-label="Search courses" placeholder="Search anything..." value={search} onChange={(event) => { setSearch(event.target.value); if (event.target.value) setActivePage('My learning') }} /><kbd>⌘ K</kbd></label><button className="icon-button notification-button" aria-label="Notifications" onClick={() => setNotice('You’re all caught up. Keep up your great work!')}><Bell size={19} /><i /></button><button type="button" className="top-avatar" onClick={() => setShowAuth(true)} aria-label={user ? 'Open account' : 'Sign in'}>{user?.displayName?.[0]?.toUpperCase() || user?.email?.[0]?.toUpperCase() || 'S'}</button></div>
        </header>

        <div className="page-content">
          <div className="welcome-row"><div><div className="eyebrow"><span className="eyebrow-dot" /> TUESDAY, OCTOBER 13</div><h1>{page[0]}<span className="title-period">.</span></h1><p className="page-subtitle">{page[1]}</p></div><button className="primary-button" onClick={() => navigate('My learning')}><Play size={16} fill="currentColor" /> Continue learning</button></div>

          {notice && <div className="notice-banner" role="status"><Check size={17} />{notice}<button onClick={() => setNotice('')} aria-label="Dismiss message"><X size={16} /></button></div>}

          {activePage === 'Overview' && <>
            <section className="stats-grid" aria-label="Your learning statistics">
              <article className="stat-card"><div className="stat-top"><span className="stat-icon lavender"><Target size={19} /></span><span className="stat-pill">Live total</span></div><div className="stat-label">Catalog progress</div><div className="stat-value">{progressPercent}<span className="stat-unit">%</span></div><ProgressBar value={progressPercent} /><div className="stat-foot">{completedLessons.length} lessons completed out of {totalLessonCount.toLocaleString()} listed lessons</div></article>
              <article className="stat-card"><div className="stat-top"><span className="stat-icon peach"><BookOpen size={19} /></span><span className="stat-pill">Tracked</span></div><div className="stat-label">Lessons completed</div><div className="stat-value">{completedLessons.length}</div><div className="stat-foot">Mark a lesson complete to track your progress.</div></article>
              <article className="stat-card"><div className="stat-top"><span className="stat-icon mint"><Bookmark size={19} /></span><span className="stat-pill">Your library</span></div><div className="stat-label">Saved courses</div><div className="stat-value">{bookmarks.length}</div><div className="stat-foot">Bookmark courses to keep them close.</div></article>
              <article className="stat-card"><div className="stat-top"><span className="stat-icon sky"><CheckCheck size={19} /></span><span className="stat-pill">Today</span></div><div className="stat-label">Study tasks completed</div><div className="stat-value">{completed}<span className="stat-unit">/{tasks.length}</span></div><ProgressBar value={tasks.length ? completed / tasks.length * 100 : 0} color="teal" /><div className="stat-foot">Your daily plan updates as you check off tasks.</div></article>
            </section>

            <section className="daily-banner"><div className="daily-art"><div className="art-sun" /><div className="art-book"><BookOpen size={35} /></div><span className="art-star star-a">✳</span><span className="art-star star-b">✦</span><span className="art-dot dot-a" /><span className="art-dot dot-b" /></div><div className="daily-copy"><div className="daily-kicker"><Sparkles size={14} /> YOUR DAILY FOCUS</div><h2>A little learning goes a long way.</h2><p>You’ve completed {completed} of {tasks.length} planned tasks today. Keep the momentum going!</p><div className="daily-progress-line"><ProgressBar value={tasks.length ? completed / tasks.length * 100 : 0} color="teal" /><span>{tasks.length ? Math.round(completed / tasks.length * 100) : 0}%</span></div></div><button className="daily-cta" onClick={() => navigate('My learning')}>View today’s plan <ArrowRight size={16} /></button></section>

            <div className="content-grid">
              <section className="panel tasks-panel"><SectionHeading title="Today’s study plan" action="Add task" onAction={() => setShowAddTask(true)} /><div className="task-list">{tasks.map((task) => <button key={task.id} className={`task-row ${task.done ? 'task-complete' : ''}`} onClick={() => toggleTask(task.id)}><span className={`task-check ${task.done ? 'checked' : ''}`}>{task.done && <Check size={14} />}</span><span className="task-copy"><strong>{task.title}</strong><small>{task.detail}</small></span><span className="task-status">{task.done ? 'Done' : 'To do'}</span></button>)}</div><button className="panel-footer-link" onClick={() => setShowAddTask(true)}><Plus size={15} /> Add a personal task</button></section>
              <section className="panel focus-panel"><SectionHeading title="Keep learning" /><div className="focus-illustration"><div className="focus-shape shape-back" /><div className="focus-shape shape-front"><BookOpen size={35} /></div><div className="focus-sparkle"><Sparkles size={18} /></div><div className="focus-circle" /></div><div className="focus-meta"><span className="tag tag-blue">YOUR LEARNING PATH</span><span className="muted-meta"><BookOpen size={13} /> {completedLessons.length} done</span></div><h3>Choose your next lesson</h3><p>Open a course to study concepts, practise with examples, and mark lessons complete.</p><ProgressBar value={progressPercent} /><div className="focus-bottom"><span>{progressPercent}% catalog progress</span><button className="round-arrow" onClick={() => navigate('My learning')} aria-label="Browse courses"><ArrowRight size={17} /></button></div></section>
            </div>

            <section className="courses-section overview-catalog">
              <div className="section-heading">
                <div><h2>Explore the course catalog</h2><p className="catalog-subtitle">Choose a category to show only its courses. Counts update from the current catalog.</p></div>
                <button className="text-action" onClick={() => { setSelectedCourseGroup('all'); navigate('My learning') }}>View all courses <ArrowRight size={15} /></button>
              </div>
              <div className="filter-buttons overview-category-buttons" aria-label="Filter overview courses by category">
                {courseGroups.map(([id, label]) => {
                  const groupCourses = courses.filter((course) => id === 'all' || courseGroupFor(course) === id);
                  const groupLessons = groupCourses.reduce((sum, course) => sum + (Number.parseInt(course.lessons, 10) || 0), 0);
                  return <button key={id} className={selectedCourseGroup === id ? 'filter-active' : ''} onClick={() => setSelectedCourseGroup(id)} aria-pressed={selectedCourseGroup === id}>
                    <span>{label}</span><small>{groupCourses.length} courses · {groupLessons.toLocaleString()} lessons</small>
                  </button>
                })}
              </div>
              <div className="catalog-live-summary"><strong>{courseGroups.find(([id]) => id === selectedCourseGroup)?.[1] || 'Programming languages'}</strong><span>{filteredCourses.length} courses · {filteredCourses.reduce((sum, course) => sum + (Number.parseInt(course.lessons, 10) || 0), 0).toLocaleString()} listed lessons</span></div>
              {filteredCourses.length ? <div className="course-grid">{filteredCourses.map((course) => { const Icon = iconMap[course.icon]; return <article className="course-card" key={course.id}><div className={`course-art ${course.color}`}><img className="course-art-image" src={course.image} alt={course.imageAlt} loading="lazy" /><div className="course-art-shade" /><button className="course-bookmark" onClick={() => toggleBookmark(course.id)} aria-label={bookmarks.includes(course.id) ? `Remove ${course.title} from bookmarks` : `Bookmark ${course.title}`} title={bookmarks.includes(course.id) ? "Remove bookmark" : "Save course"}><Bookmark size={16} fill={bookmarks.includes(course.id) ? "currentColor" : "none"} /></button><div className="course-art-icon"><Icon size={25} /></div><span className="course-art-orbit orbit-a" /><span className="course-art-orbit orbit-b" /><span className="course-art-dot" /></div><div className="course-info"><span className="course-category">{course.category}</span><h3>{course.title}</h3><div className="course-progress-label"><span>{getCourseProgress(course).done} / {getCourseProgress(course).total} lessons completed</span><strong>{getCourseProgress(course).percent}%</strong></div><ProgressBar value={getCourseProgress(course).percent} color={course.color === 'orange' ? 'orange' : course.color === 'teal' ? 'teal' : 'blue'} /><button className="course-open" onClick={() => openCourse(course)}>Open course <ArrowRight size={14} /></button></div></article>})}</div> : <div className="empty-state"><Search size={25} /><h3>No courses in this category</h3><p>Choose another category to explore more courses.</p></div>}
            </section>
          </>}

          {activePage === 'Learning path' && <LearningCenter key={learningTopic} initialTrack={learningTopic} completedLessons={completedLessons} onCompletedLessonsChange={setCompletedLessons} onBack={() => { setActivePage('My learning'); setMobileNav(false); setSearch('') }} />}

          {activePage === 'My learning' && <section className="learning-view"><div className="filter-row"><div><h2>{courseGroups.find(([id]) => id === selectedCourseGroup)?.[1] || 'Programming languages'}</h2><p>Browse courses by language, framework, or learning area. Each course stays in its own category.</p></div><div className="filter-buttons">{courseGroups.map(([id, label]) => <button key={id} className={selectedCourseGroup === id ? 'filter-active' : ''} onClick={() => setSelectedCourseGroup(id)}>{label}</button>)}</div></div>{filteredCourses.length ? <div className="course-grid">{filteredCourses.map((course) => { const Icon = iconMap[course.icon]; return <article className="course-card" key={course.id}><div className={`course-art ${course.color}`}><img className="course-art-image" src={course.image} alt={course.imageAlt} loading="lazy" /><div className="course-art-shade" /><button className="course-bookmark" onClick={() => toggleBookmark(course.id)} aria-label={bookmarks.includes(course.id) ? `Remove ${course.title} from bookmarks` : `Bookmark ${course.title}`} title={bookmarks.includes(course.id) ? "Remove bookmark" : "Save course"}><Bookmark size={16} fill={bookmarks.includes(course.id) ? "currentColor" : "none"} /></button><div className="course-art-icon"><Icon size={25} /></div><span className="course-art-orbit orbit-a" /><span className="course-art-orbit orbit-b" /><span className="course-art-dot" /></div><div className="course-info"><span className="course-category">{course.category}</span><h3>{course.title}</h3><div className="course-progress-label"><span>{getCourseProgress(course).done} / {getCourseProgress(course).total} lessons completed</span><strong>{getCourseProgress(course).percent}%</strong></div><ProgressBar value={getCourseProgress(course).percent} color={course.color === 'orange' ? 'orange' : course.color === 'teal' ? 'teal' : 'blue'} /><button className="course-open" onClick={() => openCourse(course)}>Open course <ArrowRight size={14} /></button></div></article>})}</div> : <div className="empty-state"><Search size={25} /><h3>No courses found</h3><p>Try a different search or track filter.</p></div>}</section>}

          {activePage === 'Practice & quizzes' && <section className="panel practice-panel"><div className="practice-intro"><span className="practice-icon"><Brain size={25} /></span><div><h2>Practice & quizzes</h2><p>Choose a course, answer its multiple-choice quiz, review explanations, and try coding challenges.</p></div></div><LearningCenter initialTrack="Python" practiceOnly /></section>}

          {activePage === 'Interview preparation' && <InterviewPrep />}

          {activePage === 'Bookmarks' && <section className="panel bookmarks-panel"><div className="section-heading"><h2>Your saved courses</h2><span className="course-category">{bookmarks.length} SAVED</span></div>{bookmarks.length ? <div className="course-grid">{courses.filter((course) => bookmarks.includes(course.id)).map((course) => { const Icon = iconMap[course.icon]; return <article className="course-card" key={course.id}><div className={`course-art ${course.color}`}><img className="course-art-image" src={course.image} alt={course.imageAlt} loading="lazy" /><div className="course-art-shade" /><div className="course-art-icon"><Icon size={25} /></div></div><div className="course-info"><span className="course-category">{course.category}</span><h3>{course.title}</h3><div className="course-progress-label"><span>{getCourseProgress(course).done} / {getCourseProgress(course).total} lessons completed</span><strong>{getCourseProgress(course).percent}%</strong></div><ProgressBar value={getCourseProgress(course).percent} /><button className="course-open" onClick={() => openCourse(course)}>Continue course <ArrowRight size={14} /></button><button className="panel-footer-link" onClick={() => toggleBookmark(course.id)}><X size={14} /> Remove bookmark</button></div></article>})}</div> : <div className="empty-state"><Bookmark size={28} /><h2>Your learning library is empty</h2><p>Use the bookmark icon on any course to save it here. Your saved courses stay on this device.</p><button className="primary-button" onClick={() => navigate('My learning')}>Explore courses <ArrowRight size={16} /></button></div>}</section>}

          <footer className="page-footer"><span>© 2026 AR-CodeLab</span><span><span className="footer-status" /> Your learning journey, one step at a time</span><button onClick={() => setNotice('AR-CodeLab MVP · Firebase integration is optional and not yet configured.')}><CircleHelp size={14} /> Help & feedback</button></footer>
        </div>
      </main>

      {showAddTask && <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setShowAddTask(false) }}><section className="modal-card" role="dialog" aria-modal="true" aria-labelledby="add-task-title"><div className="modal-heading"><div><span className="modal-eyebrow">DAILY PLANNER</span><h2 id="add-task-title">Add a study task</h2></div><button className="icon-button" onClick={() => setShowAddTask(false)} aria-label="Close"><X size={19} /></button></div><form onSubmit={addTask}><label className="field-label" htmlFor="task-name">What would you like to study?</label><input id="task-name" className="task-input" autoFocus value={newTask} onChange={(event) => setNewTask(event.target.value)} placeholder="e.g. Revise Python generators" maxLength={100} required /><div className="modal-actions"><button type="button" className="secondary-button" onClick={() => setShowAddTask(false)}>Cancel</button><button className="primary-button" type="submit"><Plus size={16} /> Add task</button></div></form></section></div>}

      {showAuth && <AuthModal user={user} onClose={() => setShowAuth(false)} />}

      {showQuiz && <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setShowQuiz(false) }}><section className="modal-card quiz-modal" role="dialog" aria-modal="true" aria-labelledby="quiz-title"><div className="modal-heading"><div><span className="modal-eyebrow">QUICK PRACTICE · QUESTION 1 OF 1</span><h2 id="quiz-title">Check your understanding</h2></div><button className="icon-button" onClick={() => setShowQuiz(false)} aria-label="Close quiz"><X size={19} /></button></div>{!quizSubmitted ? <><p className="quiz-question">{quizQuestion.question}</p><div className="quiz-options">{quizQuestion.options.map((option, index) => <button key={option} className={`quiz-option ${answer === index ? 'option-selected' : ''}`} onClick={() => setAnswer(index)}><span>{String.fromCharCode(65 + index)}</span>{option}{answer === index && <Check size={17} />}</button>)}</div><button className="primary-button quiz-submit" disabled={answer === null} onClick={() => setQuizSubmitted(true)}>Check answer <ArrowRight size={16} /></button></> : <div className="quiz-result"><span className={`result-icon ${answer === quizQuestion.answer ? 'result-correct' : 'result-incorrect'}`}>{answer === quizQuestion.answer ? <CheckCheck size={26} /> : <BookOpen size={26} />}</span><h3>{answer === quizQuestion.answer ? 'Great work! Correct answer.' : 'Keep learning — you’ve got this.'}</h3><p>{quizQuestion.explanation}</p><div className="answer-key">Correct answer: <strong>{quizQuestion.options[quizQuestion.answer]}</strong></div><button className="primary-button" onClick={() => setShowQuiz(false)}>Done <Check size={16} /></button><button className="text-action retry-action" onClick={() => { setAnswer(null); setQuizSubmitted(false) }}>Try again</button></div>}</section></div>}
    </div>
  )
}