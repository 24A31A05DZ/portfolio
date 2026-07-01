import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'
import { SiLeetcode, SiHackerrank, SiCodeforces } from 'react-icons/si'
import { competitiveProgramming } from '../data/data.js'
import SectionHeader from './ui/SectionHeader.jsx'

const icons = {
  LeetCode: SiLeetcode,
  HackerRank: SiHackerrank,
  Codeforces: SiCodeforces,
}

export default function CompetitiveProgramming() {
  return (
    <section id="competitive-programming" className="section-wrapper !pt-0">
      <SectionHeader
        file="cp_profile.js"
        title="Competitive Programming"
        description="Sharpening problem-solving through consistent practice across data structures and algorithms."
      />

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {competitiveProgramming.platforms.map((platform, idx) => {
          const Icon = icons[platform.name]
          return (
            <motion.a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card flex items-center justify-between p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500/15 text-primary-400">
                  {Icon && <Icon size={22} />}
                </div>
                <div>
                  <p className="font-display text-lg font-semibold text-heading">
                    {platform.name}
                  </p>
                  <p className="font-mono text-xs text-muted-c">@{platform.handle}</p>
                </div>
              </div>
              <FiExternalLink className="text-muted-c" />
            </motion.a>
          )
        })}
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {competitiveProgramming.topics.map((topic) => (
          <span key={topic} className="chip">
            {topic}
          </span>
        ))}
      </div>
    </section>
  )
}
