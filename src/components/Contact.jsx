import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi'
import { SiLeetcode, SiHackerrank } from 'react-icons/si'
import { personal, social } from '../data/data.js'
import SectionHeader from './ui/SectionHeader.jsx'

const contactLinks = [
  { label: 'Email', value: personal.email, href: social.email, icon: FiMail },
  { label: 'GitHub', value: '24A31A05DZ', href: social.github, icon: FiGithub },
  {
    label: 'LinkedIn',
    value: 'chandini-gurram',
    href: social.linkedin,
    icon: FiLinkedin,
  },
  { label: 'LeetCode', value: '24A31A05DZ', href: social.leetcode, icon: SiLeetcode },
  {
    label: 'HackerRank',
    value: '24A31A05DZ_',
    href: social.hackerrank,
    icon: SiHackerrank,
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sent')
    setTimeout(() => setStatus('idle'), 3000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="section-wrapper">
      <SectionHeader
        file="contact.jsx"
        title="Let's Connect"
        description="Open to internships, collaborations, and interesting problems. Reach out through any channel below."
      />

      <div className="mt-10 grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
        <div className="grid gap-4">
          {contactLinks.map((link, idx) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="glass-card flex items-center gap-4 p-4"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-500/15 text-primary-400">
                <link.icon size={18} />
              </div>
              <div>
                <p className="text-xs text-faint-c">{link.label}</p>
                <p className="text-sm font-medium text-heading">{link.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.form
          onSubmit={handleSubmit}
          className="glass-card space-y-4 p-6 sm:p-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <label htmlFor="name" className="mb-1.5 block text-xs font-mono text-muted-c">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full rounded-xl bg-transparent px-4 py-3 text-sm text-heading outline-none placeholder:text-faint-c"
              style={{ border: '1px solid var(--border-card)' }}
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block text-xs font-mono text-muted-c">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full rounded-xl bg-transparent px-4 py-3 text-sm text-heading outline-none placeholder:text-faint-c"
              style={{ border: '1px solid var(--border-card)' }}
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-xs font-mono text-muted-c">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project or opportunity..."
              className="w-full resize-none rounded-xl bg-transparent px-4 py-3 text-sm text-heading outline-none placeholder:text-faint-c"
              style={{ border: '1px solid var(--border-card)' }}
            />
          </div>

          <button type="submit" className="btn-primary w-full justify-center">
            {status === 'sent' ? 'Message Sent ✓' : (
              <>
                <FiSend /> Send Message
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  )
}
