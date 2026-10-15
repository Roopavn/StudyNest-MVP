import { useEffect, useMemo, useState } from 'react'
import {
  ArrowDownRight, ArrowRight, Bell, BookOpen, Bookmark, Brain, BriefcaseBusiness,
  Check, CheckCheck, ChevronDown, ChevronRight, CircleHelp, Clock3, Code2,
  Flame, GraduationCap, LayoutDashboard, Menu, MoreHorizontal, Play, Plus,
  Search, Sparkles, Target, TrendingUp, Trophy, X,
} from 'lucide-react'
import { activities, courses, initialTasks, quizQuestion, tracks } from './data.js'
import LearningCenter from './LearningCenter.jsx'
import InterviewPrep from './InterviewPrep.jsx'

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
  const [search, setSearch] = useState('')
  const [showQuiz, setShowQuiz] = useState(false)
  const [answer, setAnswer] = useState(null)
  const [quizSubmitted, setQuizSubmitted] = useState(false)
  const [mobileNav, setMobileNav] = useState(false)
  const [notice, setNotice] = useState('')
  const [selectedTrack, setSelectedTrack] = useState('all')
  const [learningTopic, setLearningTopic] = useState('All topics')
  const [showAddTask, setShowAddTask] = useState(false)
  const [newTask, setNewTask] = useState('')
  useEffect(() => {
    localStorage.setItem('studynest.tasks', JSON.stringify(tasks))
  }, [tasks])

  useEffect(() => {
    localStorage.setItem('studynest.bookmarks', JSON.stringify(bookmarks))
  }, [bookmarks])

  const completed = tasks.filter((task) => task.done).length
  function toggleBookmark(courseId) {
    setBookmarks((current) => current.includes(courseId)
      ? current.filter((id) => id !== courseId)
      : [...current, courseId])
    setNotice(bookmarks.includes(courseId) ? 'Course removed from bookmarks.' : 'Course saved to your bookmarks.')
  }
  const filteredCourses = useMemo(() => courses.filter((course) =>
    (selectedTrack === 'all' || course.category.includes('IT'))
    && `${course.title} ${course.category}`.toLowerCase().includes(search.toLowerCase())), [search, selectedTrack])
  const page = pageTitles[activePage] || pageTitles.Overview

  function openCourse(course) {
    const title = course.title.toLowerCase()
    const topic = title.includes('django rest') || title.includes('rest framework') ? 'Django REST Framework' : title.includes('machine learning') ? 'Machine Learning' : title.includes('data analyst') || title.includes('data analytics') ? 'Data Analyst' : title.includes('data science') ? 'Data Science' : title.includes('django') ? 'Django' : title.includes('flask') ? 'Flask' : title.includes('fastapi') ? 'FastAPI' : title.includes('agentic ai') ? 'Agentic AI' : title.includes('generative ai') ? 'Generative AI' : title.includes('python') ? 'Python' : title.includes('sql') || title.includes('database') ? 'SQL' : title.includes('api') ? 'REST APIs' : title.includes('c++') ? 'C++' : title.includes('c#') || title.includes('.net') ? 'C#' : title.includes('c programming') ? 'C Programming' : title.includes('typescript') ? 'TypeScript' : title.includes('react') ? 'React' : title.includes('java') && !title.includes('javascript') ? 'Java' : title.includes('frameworks & libraries') || title.includes('javascript ecosystem') ? 'JavaScript Ecosystem' : title.includes('javascript') ? 'JavaScript' : title.includes('html') || title.includes('css') ? 'HTML & CSS' : title.includes('devops') ? 'DevOps' : title.includes('cloud') ? 'Cloud Fundamentals' : title.includes('linux') ? 'Linux & Shell' : title.includes('docker') ? 'Docker & Containers' : title.includes('git') ? 'Git & GitHub' : title.includes('kubernetes') ? 'Kubernetes' : title.includes('data engineering') || title.includes('pyspark') || title.includes('big data') ? 'Data Engineering / Big Data' : 'All topics'
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
        <button className="profile-row" onClick={() => setNotice('Profile settings will be available when authentication is connected.')}><div className="avatar">S</div><div className="profile-copy"><strong>Student account</strong><span>Free workspace</span></div><MoreHorizontal size={19} className="profile-more" /></button>
      </aside>

      {mobileNav && <button className="mobile-scrim" onClick={() => setMobileNav(false)} aria-label="Close navigation overlay" />}
      <main className="main-area">
        <header className="topbar">
          <button className="icon-button mobile-menu" onClick={() => setMobileNav(true)} aria-label="Open navigation"><Menu size={21} /></button>
          <div className="breadcrumbs"><span>Workspace</span><ChevronRight size={14} /><strong>{activePage}</strong></div>
          <div className="topbar-actions"><label className="search-box"><Search size={17} /><input aria-label="Search courses" placeholder="Search anything..." value={search} onChange={(event) => { setSearch(event.target.value); if (event.target.value) setActivePage('My learning') }} /><kbd>⌘ K</kbd></label><button className="icon-button notification-button" aria-label="Notifications" onClick={() => setNotice('You’re all caught up. Keep up your great work!')}><Bell size={19} /><i /></button><div className="top-avatar">S</div></div>
        </header>

        <div className="page-content">
          <div className="welcome-row"><div><div className="eyebrow"><span className="eyebrow-dot" /> TUESDAY, OCTOBER 13</div><h1>{page[0]}<span className="title-period">.</span></h1><p className="page-subtitle">{page[1]}</p></div><button className="primary-button" onClick={() => navigate('My learning')}><Play size={16} fill="currentColor" /> Continue learning</button></div>

          {notice && <div className="notice-banner" role="status"><Check size={17} />{notice}<button onClick={() => setNotice('')} aria-label="Dismiss message"><X size={16} /></button></div>}

          {activePage === 'Overview' && <>
            <section className="stats-grid" aria-label="Study statistics">
              <article className="stat-card"><div className="stat-top"><span className="stat-icon lavender"><Target size={19} /></span><span className="stat-trend"><TrendingUp size={13} /> +12%</span></div><div className="stat-label">Learning progress</div><div className="stat-value">64<span className="stat-unit">%</span></div><ProgressBar value={64} /><div className="stat-foot">You’re making steady progress</div></article>
              <article className="stat-card"><div className="stat-top"><span className="stat-icon peach"><Flame size={19} /></span><span className="stat-pill">Personal best: 12</span></div><div className="stat-label">Day streak</div><div className="stat-value">7<span className="stat-unit"> days</span></div><div className="mini-streak">{['M','T','W','T','F','S','S'].map((day, i) => <span key={i} className={i < 6 ? 'streak-done' : ''}>{i < 6 ? <Check size={12} /> : day}</span>)}</div><div className="stat-foot">One day at a time. You’ve got this!</div></article>
              <article className="stat-card"><div className="stat-top"><span className="stat-icon mint"><Clock3 size={19} /></span><span className="stat-trend"><ArrowDownRight size={13} /> This week</span></div><div className="stat-label">Study time</div><div className="stat-value">8.5<span className="stat-unit"> hrs</span></div><div className="study-bars">{activities.map((item, i) => <div className="study-bar-column" key={i}><div className={i === 5 ? 'study-bar bar-highlight' : 'study-bar'} style={{ height: `${item.value}%` }} /><span>{item.day}</span></div>)}</div></article>
              <article className="stat-card"><div className="stat-top"><span className="stat-icon sky"><Trophy size={19} /></span><span className="stat-pill">Keep it up</span></div><div className="stat-label">Quiz average</div><div className="stat-value">82<span className="stat-unit">/100</span></div><div className="quiz-sparkline"><svg viewBox="0 0 180 35" role="img" aria-label="Quiz scores trending upward"><path d="M1 29 C20 27 25 12 43 18 S68 29 86 15 S111 20 127 8 S155 15 179 2" fill="none" stroke="#0d9488" strokeWidth="2.5" strokeLinecap="round" /><path d="M1 29 C20 27 25 12 43 18 S68 29 86 15 S111 20 127 8 S155 15 179 2 L179 35 L1 35Z" fill="#0d9488" opacity=".08" /></svg></div><div className="stat-foot">Your confidence is growing</div></article>
            </section>

            <section className="daily-banner"><div className="daily-art"><div className="art-sun" /><div className="art-book"><BookOpen size={35} /></div><span className="art-star star-a">✳</span><span className="art-star star-b">✦</span><span className="art-dot dot-a" /><span className="art-dot dot-b" /></div><div className="daily-copy"><div className="daily-kicker"><Sparkles size={14} /> YOUR DAILY FOCUS</div><h2>A little learning goes a long way.</h2><p>You’ve completed {completed} of {tasks.length} planned tasks today. Keep the momentum going!</p><div className="daily-progress-line"><ProgressBar value={tasks.length ? completed / tasks.length * 100 : 0} color="teal" /><span>{tasks.length ? Math.round(completed / tasks.length * 100) : 0}%</span></div></div><button className="daily-cta" onClick={() => navigate('My learning')}>View today’s plan <ArrowRight size={16} /></button></section>

            <div className="content-grid">
              <section className="panel tasks-panel"><SectionHeading title="Today’s study plan" action="Add task" onAction={() => setShowAddTask(true)} /><div className="task-list">{tasks.map((task) => <button key={task.id} className={`task-row ${task.done ? 'task-complete' : ''}`} onClick={() => toggleTask(task.id)}><span className={`task-check ${task.done ? 'checked' : ''}`}>{task.done && <Check size={14} />}</span><span className="task-copy"><strong>{task.title}</strong><small>{task.detail}</small></span><span className="task-status">{task.done ? 'Done' : 'To do'}</span></button>)}</div><button className="panel-footer-link" onClick={() => setShowAddTask(true)}><Plus size={15} /> Add a personal task</button></section>
              <section className="panel focus-panel"><SectionHeading title="Pick up where you left off" /><div className="focus-illustration"><div className="focus-shape shape-back" /><div className="focus-shape shape-front"><BookOpen size={35} /></div><div className="focus-sparkle"><Sparkles size={18} /></div><div className="focus-circle" /></div><div className="focus-meta"><span className="tag tag-blue">PYTHON · BACKEND</span><span className="muted-meta"><Clock3 size={13} /> 12 min left</span></div><h3>Python Foundations</h3><p>Build practical programming skills one concept at a time.</p><ProgressBar value={68} /><div className="focus-bottom"><span>68% completed</span><button className="round-arrow" onClick={openQuiz} aria-label="Continue lesson"><ArrowRight size={17} /></button></div></section>
            </div>

            <section className="courses-section"><SectionHeading title="Your learning tracks" action="View all courses" onAction={() => navigate('My learning')} /><div className="course-grid">{courses.map((course) => { const Icon = iconMap[course.icon]; return <article className="course-card" key={course.id}><div className={`course-art ${course.color}`}><img className="course-art-image" src={course.image} alt={course.imageAlt} loading="lazy" /><div className="course-art-shade" /><button className="course-bookmark" onClick={() => toggleBookmark(course.id)} aria-label={bookmarks.includes(course.id) ? `Remove ${course.title} from bookmarks` : `Bookmark ${course.title}`} title={bookmarks.includes(course.id) ? "Remove bookmark" : "Save course"}><Bookmark size={16} fill={bookmarks.includes(course.id) ? "currentColor" : "none"} /></button><div className="course-art-icon"><Icon size={25} /></div><span className="course-art-orbit orbit-a" /><span className="course-art-orbit orbit-b" /><span className="course-art-dot" /><span className="course-art-number">0{course.id}</span></div><div className="course-info"><span className="course-category">{course.category}</span><h3>{course.title}</h3><div className="course-progress-label"><span>{course.lessons}</span><strong>{course.progress}%</strong></div><ProgressBar value={course.progress} color={course.color === 'orange' ? 'orange' : course.color === 'teal' ? 'teal' : 'blue'} /><button className="course-open" onClick={() => openCourse(course)}>Continue course <ArrowRight size={14} /></button></div></article>})}</div></section>
          </>}

          {activePage === 'Learning path' && <LearningCenter key={learningTopic} initialTrack={learningTopic} />}

          {activePage === 'My learning' && <section className="learning-view"><div className="filter-row"><div><h2>All courses</h2><p>Choose a course to continue your journey.</p></div><div className="filter-buttons">{[['all','All courses'],['it','IT skills']].map(([id,label]) => <button key={id} className={selectedTrack === id ? 'filter-active' : ''} onClick={() => setSelectedTrack(id)}>{label}</button>)}</div></div>{filteredCourses.length ? <div className="course-grid">{filteredCourses.map((course) => { const Icon = iconMap[course.icon]; return <article className="course-card" key={course.id}><div className={`course-art ${course.color}`}><img className="course-art-image" src={course.image} alt={course.imageAlt} loading="lazy" /><div className="course-art-shade" /><button className="course-bookmark" onClick={() => toggleBookmark(course.id)} aria-label={bookmarks.includes(course.id) ? `Remove ${course.title} from bookmarks` : `Bookmark ${course.title}`} title={bookmarks.includes(course.id) ? "Remove bookmark" : "Save course"}><Bookmark size={16} fill={bookmarks.includes(course.id) ? "currentColor" : "none"} /></button><div className="course-art-icon"><Icon size={25} /></div><span className="course-art-orbit orbit-a" /><span className="course-art-orbit orbit-b" /><span className="course-art-dot" /></div><div className="course-info"><span className="course-category">{course.category}</span><h3>{course.title}</h3><div className="course-progress-label"><span>{course.lessons}</span><strong>{course.progress}%</strong></div><ProgressBar value={course.progress} color={course.color === 'orange' ? 'orange' : course.color === 'teal' ? 'teal' : 'blue'} /><button className="course-open" onClick={() => openCourse(course)}>Open course <ArrowRight size={14} /></button></div></article>})}</div> : <div className="empty-state"><Search size={25} /><h3>No courses found</h3><p>Try a different search or track filter.</p></div>}</section>}

          {activePage === 'Practice & quizzes' && <section className="panel practice-panel"><div className="practice-intro"><span className="practice-icon"><Brain size={25} /></span><div><h2>Ready for a quick challenge?</h2><p>Try a sample question and get an instant explanation.</p></div></div><div className="quiz-preview"><div className="quiz-preview-top"><span className="tag tag-blue">BACKEND · SAMPLE</span><span className="muted-meta"><Clock3 size={14} /> 2 min</span></div><h3>{quizQuestion.question}</h3><div className="quiz-options-preview">{quizQuestion.options.map((option, index) => <div className="quiz-preview-option" key={option}><span>{String.fromCharCode(65 + index)}</span>{option}</div>)}</div><button className="primary-button" onClick={openQuiz}>Start sample quiz <ArrowRight size={16} /></button></div><div className="practice-subjects"><h3>Practice by subject</h3><p>Open a subject to study lessons and answer its MCQs.</p><div className="practice-subject-grid">{[["Python","Code & backend"],["SQL","Databases"],["REST APIs","Web services"]].map(([topic,subtitle])=><button key={topic} onClick={()=>{setLearningTopic(topic);setActivePage("Learning path");setMobileNav(false)}}><span>{topic}</span><small>{subtitle}</small><ArrowRight size={14}/></button>)}</div></div></section>}

          {activePage === 'Interview preparation' && <InterviewPrep />}

          {activePage === 'Bookmarks' && <section className="panel bookmarks-panel"><div className="section-heading"><h2>Your saved courses</h2><span className="course-category">{bookmarks.length} SAVED</span></div>{bookmarks.length ? <div className="course-grid">{courses.filter((course) => bookmarks.includes(course.id)).map((course) => { const Icon = iconMap[course.icon]; return <article className="course-card" key={course.id}><div className={`course-art ${course.color}`}><img className="course-art-image" src={course.image} alt={course.imageAlt} loading="lazy" /><div className="course-art-shade" /><div className="course-art-icon"><Icon size={25} /></div></div><div className="course-info"><span className="course-category">{course.category}</span><h3>{course.title}</h3><div className="course-progress-label"><span>{course.lessons}</span><strong>{course.progress}%</strong></div><ProgressBar value={course.progress} /><button className="course-open" onClick={() => openCourse(course)}>Continue course <ArrowRight size={14} /></button><button className="panel-footer-link" onClick={() => toggleBookmark(course.id)}><X size={14} /> Remove bookmark</button></div></article>})}</div> : <div className="empty-state"><Bookmark size={28} /><h2>Your learning library is empty</h2><p>Use the bookmark icon on any course to save it here. Your saved courses stay on this device.</p><button className="primary-button" onClick={() => navigate('My learning')}>Explore courses <ArrowRight size={16} /></button></div>}</section>}

          <footer className="page-footer"><span>© 2026 AR-CodeLab</span><span><span className="footer-status" /> Your learning journey, one step at a time</span><button onClick={() => setNotice('AR-CodeLab MVP · Firebase integration is optional and not yet configured.')}><CircleHelp size={14} /> Help & feedback</button></footer>
        </div>
      </main>

      {showAddTask && <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setShowAddTask(false) }}><section className="modal-card" role="dialog" aria-modal="true" aria-labelledby="add-task-title"><div className="modal-heading"><div><span className="modal-eyebrow">DAILY PLANNER</span><h2 id="add-task-title">Add a study task</h2></div><button className="icon-button" onClick={() => setShowAddTask(false)} aria-label="Close"><X size={19} /></button></div><form onSubmit={addTask}><label className="field-label" htmlFor="task-name">What would you like to study?</label><input id="task-name" className="task-input" autoFocus value={newTask} onChange={(event) => setNewTask(event.target.value)} placeholder="e.g. Revise Python generators" maxLength={100} required /><div className="modal-actions"><button type="button" className="secondary-button" onClick={() => setShowAddTask(false)}>Cancel</button><button className="primary-button" type="submit"><Plus size={16} /> Add task</button></div></form></section></div>}

      {showQuiz && <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setShowQuiz(false) }}><section className="modal-card quiz-modal" role="dialog" aria-modal="true" aria-labelledby="quiz-title"><div className="modal-heading"><div><span className="modal-eyebrow">QUICK PRACTICE · QUESTION 1 OF 1</span><h2 id="quiz-title">Check your understanding</h2></div><button className="icon-button" onClick={() => setShowQuiz(false)} aria-label="Close quiz"><X size={19} /></button></div>{!quizSubmitted ? <><p className="quiz-question">{quizQuestion.question}</p><div className="quiz-options">{quizQuestion.options.map((option, index) => <button key={option} className={`quiz-option ${answer === index ? 'option-selected' : ''}`} onClick={() => setAnswer(index)}><span>{String.fromCharCode(65 + index)}</span>{option}{answer === index && <Check size={17} />}</button>)}</div><button className="primary-button quiz-submit" disabled={answer === null} onClick={() => setQuizSubmitted(true)}>Check answer <ArrowRight size={16} /></button></> : <div className="quiz-result"><span className={`result-icon ${answer === quizQuestion.answer ? 'result-correct' : 'result-incorrect'}`}>{answer === quizQuestion.answer ? <CheckCheck size={26} /> : <BookOpen size={26} />}</span><h3>{answer === quizQuestion.answer ? 'Great work! Correct answer.' : 'Keep learning — you’ve got this.'}</h3><p>{quizQuestion.explanation}</p><div className="answer-key">Correct answer: <strong>Article 21</strong></div><button className="primary-button" onClick={() => setShowQuiz(false)}>Done <Check size={16} /></button><button className="text-action retry-action" onClick={() => { setAnswer(null); setQuizSubmitted(false) }}>Try again</button></div>}</section></div>}
    </div>
  )
}