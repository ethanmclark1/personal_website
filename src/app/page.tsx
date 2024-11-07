import { Header } from '@/components/layout/Header'
import { About } from '@/components/home/About'
import { BeyondTech } from '@/components/home/BeyondTech'
import { RecentEssays } from '@/components/home/RecentEssays'
import { FeaturedProjects } from '@/components/home/FeaturedProjects'

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 font-serif">
      <Header />
      <main className="space-y-12">
        <About />
        <BeyondTech />
        <RecentEssays />
        <FeaturedProjects />
      </main>
    </div>
  )
}