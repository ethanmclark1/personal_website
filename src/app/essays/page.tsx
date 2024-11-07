import { PageWrapper } from '@/components/layout/PageWrapper'
import { essays } from '@/lib/constants/essays'

export default function Essays() {
  return (
    <PageWrapper>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold">Essays</h1>
        <div className="space-y-6">
          {essays.map((essay, index) => (
            <div key={index}>
              <div className="flex items-center space-x-3">
                <span className="text-gray-500">{essay.date}</span>
                <a href={`/essays/${essay.slug}`} className="text-lg hover:underline">
                  {essay.title}
                </a>
              </div>
              {essay.description && (
                <p className="text-gray-600 mt-2">{essay.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  )
}