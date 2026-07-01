import { motion } from 'framer-motion'
import { FiBriefcase, FiCheckCircle } from 'react-icons/fi'
import { experience } from '../data/data.js'
import SectionHeader from './ui/SectionHeader.jsx'

export default function Experience() {
  return (
    <section id="experience" className="section-wrapper">
      <SectionHeader file="experience.log" title="Experience" />

      <div className="mt-10 space-y-6">
        {experience.map((exp, idx) => (
          <motion.div
            key={exp.company}
            className="glass-card p-6 sm:p-8"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: idx * 0.1 }}
          >
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-500/15 text-primary-400">
                <FiBriefcase size={20} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-heading">
                  {exp.role}
                </h3>
                <p className="text-sm text-muted-c">{exp.company}</p>
              </div>
            </div>

            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {exp.responsibilities.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-body-c">
                  <FiCheckCircle className="mt-0.5 shrink-0 text-primary-400" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
