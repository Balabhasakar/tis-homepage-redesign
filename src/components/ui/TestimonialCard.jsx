// Takes the first letter of the first and last name: "Namita Agarwal" -> "NA"
function getInitials(name) {
  const parts = name.split(' ')
  return `${parts[0][0]}${parts[parts.length - 1][0]}`
}

function TestimonialCard({ name, relation, quote }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-800">
      <blockquote className="flex-1 leading-relaxed text-slate-700 dark:text-slate-300">
        &ldquo;{quote}&rdquo;
      </blockquote>

      <figcaption className="mt-6 flex items-center gap-3">
        <span
          aria-hidden="true"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white"
        >
          {getInitials(name)}
        </span>
        <span>
          <span className="block font-bold text-slate-900 dark:text-white">
            {name}
          </span>
          <span className="block text-sm text-slate-600 dark:text-slate-400">
            {relation}
          </span>
        </span>
      </figcaption>
    </figure>
  )
}

export default TestimonialCard