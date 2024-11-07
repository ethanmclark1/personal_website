import { projects } from '@/lib/constants/projects'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function Projects() {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="max-w-3xl mx-auto px-4 py-12 font-serif flex-grow">
                <Header />
                <main className="space-y-8">
                    <h1 className="text-3xl font-bold mb-8">Projects</h1>
                    <div className="space-y-6">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    )
}