import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { FiGithub, FiCode } from 'react-icons/fi'
import { projects } from '../data/data.js'
import SectionHeader from './ui/SectionHeader.jsx'

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-40, 40], [8, -8]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(x, [-40, 40], [-8, 8]), { stiffness: 200, damping: 20 })

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    x.set(e.clientX - rect.left - rect.width / 2)
    y.set(e.clientY - rect.top - rect.height / 2)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="glass-card group flex h-full flex-col p-6"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500/15 text-primary-400">
          <FiCode size={20} />
        </div>
        <span className="font-mono text-xs text-faint-c">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <h3 className="mt-5 font-display text-xl font-semibold text-heading">
        {project.title}
      </h3>

      <div className="mt-3 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span key={tech} className="chip">
            {tech}
          </span>
        ))}
      </div>

      <ul className="mt-5 flex-1 space-y-2">
        {project.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-body-c">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
            {feature}
          </li>
        ))}
      </ul>

      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-ghost mt-6 justify-center"
      >
        <FiGithub /> View on GitHub
      </a>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section-wrapper">
      <SectionHeader
        file="projects/"
        title="Featured Projects"
        description="A selection of projects where I applied AI, systems thinking, and clean engineering to real problems."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
      </div>
    </section>
  )
}
