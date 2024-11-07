import { essays } from '@/lib/constants/essays'
import { EssayCard } from '@/components/essays/EssayCard'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function Essays() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="max-w-3xl mx-auto px-4 py-12 font-serif flex-grow">
        <Header />
        <main className="space-y-8">
          <h1 className="text-3xl font-bold mb-8">Essays</h1>
          <div className="space-y-6">
            {essays.map((essay, index) => (
              <EssayCard key={index} essay={essay} />
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}