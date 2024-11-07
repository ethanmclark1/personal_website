import { Essay } from '@/types'

interface EssayCardProps {
  essay: Essay
}

export function EssayCard({ essay }: EssayCardProps) {
  return (
    <article className="p-6 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">{essay.date}</span>
        </div>
        <h2 className="text-xl font-semibold hover:underline">
          <a href={`/essays/${essay.slug}`}>{essay.title}</a>
        </h2>
        {essay.description && (
          <p className="text-gray-600">{essay.description}</p>
        )}
      </div>
    </article>
  )
}
