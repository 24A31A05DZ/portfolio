import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { SiLeetcode, SiHackerrank } from 'react-icons/si'
import { social, personal } from '../data/data.js'

const icons = [
  { icon: FiGithub, href: social.github, label: 'GitHub' },
  { icon: FiLinkedin, href: social.linkedin, label: 'LinkedIn' },
  { icon: SiLeetcode, href: social.leetcode, label: 'LeetCode' },
  { icon: SiHackerrank, href: social.hackerrank, label: 'HackerRank' },
  { icon: FiMail, href: social.email, label: 'Email' },
]

export default function Footer() {
  return (
    <footer
      className="relative"
      style={{ borderTop: '1px solid var(--border-card)' }}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-6 py-10 sm:flex-row sm:justify-between sm:px-8">
        <div />

        <div className="flex items-center gap-3">
          {icons.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="glass-card flex h-9 w-9 items-center justify-center rounded-full text-muted-c transition-colors hover:text-primary-400"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
