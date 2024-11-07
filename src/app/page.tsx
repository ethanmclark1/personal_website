import { PageWrapper } from '@/components/layout/PageWrapper'
import { About } from '@/components/home/About'
import { BeyondTech } from '@/components/home/BeyondTech'
import { RecentEssays } from '@/components/home/RecentEssays'
import { FeaturedProjects } from '@/components/home/FeaturedProjects'

export default function Home() {
  return (
    <PageWrapper>
      <div className="space-y-16">
        <About />
        <BeyondTech />
        <RecentEssays />
        <FeaturedProjects />
      </div>
    </PageWrapper>
  )
}