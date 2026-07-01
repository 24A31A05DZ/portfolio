import { motion } from 'framer-motion'
import { FiAward, FiExternalLink } from 'react-icons/fi'
import { achievements } from '../data/data.js'
import SectionHeader from './ui/SectionHeader.jsx'

export default function Achievements() {
  return (
    <section id="achievements" className="section-wrapper">
      <SectionHeader file="achievements.yml" title="Achievements & Certifications" />

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((item, idx) => (
          <motion.div
            key={item.title}
            className="glass-card overflow-hidden"
            initial={{ opacity: 0, y: 24, rotate: -1 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.07 }}
            whileHover={{ y: -5, scale: 1.01, boxShadow: '0 16px 36px rgba(0, 0, 0, 0.12)' }}
          >
            <a
              href={item.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="w-full">
                <img
                  src={item.image}
                  alt={`${item.title} certificate`}
                  className="block h-auto w-full object-contain object-top opacity-100 transition duration-300"
                  style={{ filter: 'none', mixBlendMode: 'normal' }}
                />
              </div>
            </a>

            <div className="p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-medium text-heading">{item.title}</p>
                  <p className="mt-1 text-sm text-primary-400">{item.organization}</p>
                </div>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-500/15 text-primary-400">
                  <FiAward size={18} />
                </div>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-muted-c">{item.description}</p>

              {item.achievement && (
                <p className="mt-3 text-sm font-medium text-primary-300">{item.achievement}</p>
              )}

              <a
                href={item.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary-400 transition-colors hover:text-primary-300"
              >
                View Certificate <FiExternalLink size={14} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
