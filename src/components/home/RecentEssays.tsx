import { essays } from '@/lib/constants/essays'

export function RecentEssays() {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Recent Essays</h2>
      <ul className="space-y-3">
        {essays.map((essay, index) => (
          <li key={index}>
            <span className="text-gray-500 mr-3">{essay.date}</span>
            <a href={`/essays/${essay.slug}`} className="hover:underline">
              {essay.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}