function SectionHeading({ eyebrow, title, align = 'left' }) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`max-w-2xl ${alignment}`}>
      <p className="text-sm font-bold uppercase tracking-widest text-brand dark:text-accent">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-extrabold leading-tight text-slate-900 dark:text-white sm:text-4xl">
        {title}
      </h2>
    </div>
  )
}

export default SectionHeading