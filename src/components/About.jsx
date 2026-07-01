import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { personal, stats } from '../data/data.js'
import SectionHeader from './ui/SectionHeader.jsx'
import Reveal from './ui/Reveal.jsx'

function Counter({ value, decimals = 0, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    let frame
    const duration = 1200
    const start = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(value * eased)
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, value])

  return (
    <span ref={ref} className="text-3xl font-bold text-heading sm:text-4xl">
      {display.toFixed(decimals)}
      {suffix}
    </span>
  )
}

export default function About() {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader file="about.md" title="About Me" />

      <div className="mt-10 grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
        <Reveal delay={0.1}>
          <p className="text-base leading-relaxed text-body-c sm:text-lg">
            {personal.about}
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              className="glass-card flex flex-col justify-between p-5"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <Counter value={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
              <span className="mt-2 text-xs font-mono uppercase tracking-wider text-muted-c">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
