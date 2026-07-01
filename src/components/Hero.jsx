import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiDownload, FiArrowRight, FiMapPin } from 'react-icons/fi'
import { personal, typingWords } from '../data/data.js'
import BackgroundBlobs from './ui/BackgroundBlobs.jsx'

function useTypewriter(words, typingSpeed = 90, deletingSpeed = 45, pause = 1400) {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex % words.length]
    let timeout

    if (!deleting && text === currentWord) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setWordIndex((i) => i + 1)
    } else {
      timeout = setTimeout(
        () => {
          setText((t) =>
            deleting ? currentWord.slice(0, t.length - 1) : currentWord.slice(0, t.length + 1)
          )
        },
        deleting ? deletingSpeed : typingSpeed
      )
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, typingSpeed, deletingSpeed, pause])

  return text
}

export default function Hero() {
  const typed = useTypewriter(typingWords)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <BackgroundBlobs />

      <div className="section-wrapper grid items-center gap-14 py-0 md:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-eyebrow">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-500" />
            </span>
            Available for internships &amp; collaborations
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight text-heading sm:text-5xl lg:text-6xl">
            Hi, I&rsquo;m{' '}
            <span className="bg-gradient-to-r from-primary-300 via-primary-500 to-primary-700 bg-clip-text text-transparent">
              {personal.name}
            </span>
          </h1>

          <div className="mt-4 h-9 font-mono text-lg text-primary-400 sm:text-xl">
            {typed}
            <span className="ml-0.5 animate-blink">|</span>
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-body-c sm:text-lg">
            {personal.tagline}
          </p>

          <p className="mt-4 flex items-center gap-2 text-sm text-muted-c">
            <FiMapPin className="text-primary-400" />
            {personal.location}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a href={personal.resumeUrl} className="btn-primary" download>
              <FiDownload /> Download Resume
            </a>
            <button onClick={() => scrollTo('projects')} className="btn-ghost">
              View Projects <FiArrowRight />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500/40 to-primary-800/10 blur-2xl" />
          <div className="glass-card relative flex h-full w-full items-center justify-center rounded-full">
            <img
              src="/profile.jpg"
              alt="Profile — Chandini Gurram"
              loading="lazy"
              className="h-[88%] w-[88%] rounded-full object-cover"
              style={{ objectPosition: '50% 20%' }}
              width={320}
              height={320}
            />
          </div>
          <motion.div
            className="glass-card absolute -bottom-3 -left-6 px-4 py-2 font-mono text-xs text-primary-300"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            CGPA: 9.46
          </motion.div>
          <motion.div
            className="glass-card absolute -top-2 -right-4 px-4 py-2 font-mono text-xs text-primary-300"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            CSE &apos;28
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
