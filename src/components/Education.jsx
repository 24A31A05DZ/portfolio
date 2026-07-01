import { motion } from 'framer-motion'
import { education } from '../data/data.js'
import SectionHeader from './ui/SectionHeader.jsx'

export default function Education() {
  return (
    <section id="education" className="section-wrapper">
      <SectionHeader file="education.timeline" title="Education" />

      <div className="relative mt-12 pl-8 sm:pl-10">
        <div
          className="absolute left-[7px] top-1 h-full w-px sm:left-[9px]"
          style={{ background: 'linear-gradient(180deg, #2563EB, transparent)' }}
        />

        <div className="space-y-10">
          {education.map((item, idx) => (
            <motion.div
              key={item.school}
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <span
                className="absolute -left-8 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-primary-400 sm:-left-10"
                style={{ backgroundColor: 'var(--bg-page)' }}
              />

              <div className="glass-card p-5 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold text-heading">
                    {item.school}
                  </h3>
                  {item.period && (
                    <span className="chip">{item.period}</span>
                  )}
                </div>
                <p className="mt-1 text-sm text-muted-c">{item.course}</p>
                <p className="mt-3 font-mono text-sm text-primary-400">{item.score}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
