const variants = {
  primary:
    'bg-accent text-brand-dark hover:scale-105 focus-visible:outline-accent',
  outline:
    'border-2 border-white text-white hover:bg-white hover:text-brand-dark focus-visible:outline-white',
}

function Button({ href, variant = 'primary', external = false, className = '', children }) {
  const externalProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <a
      href={href}
      {...externalProps}
      className={`inline-flex min-h-11 items-center justify-center rounded-full px-7 py-3 text-base font-bold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  )
}

export default Button