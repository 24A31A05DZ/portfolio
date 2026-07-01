import { motion } from 'framer-motion'
import { skillGroups } from '../data/data.js'
import SectionHeader from './ui/SectionHeader.jsx'

export default function Skills() {
  return (
    <section id="skills" className="section-wrapper">
      <SectionHeader
        file="skills.json"
        title="Skills & Toolkit"
        description="Languages, concepts, and tools I use to design, build, and reason about software."
      />

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, gIdx) => (
          <motion.div
            key={group.title}
            className="glass-card p-6"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: gIdx * 0.06 }}
            whileHover={{ y: -6, boxShadow: '0 0 30px rgba(37,99,235,0.15)' }}
          >
            <h3 className="font-display text-lg font-semibold text-heading">
              {group.title}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill, sIdx) => (
                <motion.span
                  key={skill}
                  className="chip"
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: gIdx * 0.06 + sIdx * 0.04 }}
                  whileHover={{ scale: 1.08, borderColor: 'rgba(37,99,235,0.6)' }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
