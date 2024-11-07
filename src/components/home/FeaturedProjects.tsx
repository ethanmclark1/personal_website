import { projects } from '@/lib/constants/projects'

export function FeaturedProjects() {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Featured Projects</h2>
      <div className="space-y-4">
        {projects.map((project, index) => (
          <div key={index}>
            <a href={`/projects/${project.slug}`} className="text-lg hover:underline">
              {project.title}
            </a>
            <p className="text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}