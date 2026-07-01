import Reveal from './Reveal.jsx'

export default function SectionHeader({ title, description }) {
  return (
    <Reveal>
      <h2 className="section-heading">{title}</h2>
      {description && (
        <p className="max-w-2xl text-muted-c leading-relaxed">
          {description}
        </p>
      )}
    </Reveal>
  )
}
