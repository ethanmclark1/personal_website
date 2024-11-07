import { PageWrapper } from '@/components/layout/PageWrapper'
import { projects } from '@/lib/constants/projects'

export default function Projects() {
  return (
    <PageWrapper>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold">Projects</h1>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={index}>
              <a href={`/projects/${project.slug}`} className="text-lg hover:underline">
                {project.title}
              </a>
              <p className="text-gray-600 mt-2">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  )
}