import { Project } from '@/types'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="p-6 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
      <div className="space-y-2">
        <h2 className="text-xl font-semibold hover:underline">
          <a href={`/projects/${project.slug}`}>{project.title}</a>
        </h2>
        <p className="text-gray-600">{project.description}</p>
      </div>
    </article>
  )
}
