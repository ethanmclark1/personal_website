import { Project } from '@/types';
import { projectCategories } from '@/lib/constants/projects';
import { ProjectCard } from './ProjectCard';

interface ProjectsListProps {
  projects: Project[];
}

export function ProjectsList({ projects }: ProjectsListProps) {
  const projectsByCategory = projects.reduce((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = [];
    }
    acc[project.category].push(project);
    return acc;
  }, {} as Record<string, Project[]>);

  return (
    <div className="space-y-12">
      {projectCategories.map((category) => {
        const categoryProjects = projectsByCategory[category];
        if (!categoryProjects?.length) return null;

        return (
          <section key={category}>
            <h2 className="text-xl font-semibold mb-6">{category}</h2>
            <div className="grid gap-6">
              {categoryProjects.map((project) => (
                <ProjectCard key={project.repo} project={project} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}