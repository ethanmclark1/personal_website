import { interests } from '@/lib/constants/interests'
import { Interest } from '@/types'

export function BeyondTech() {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Beyond Technology</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {interests.map((interest, index) => {
          const Icon = interest.icon;  // Destructure the icon component
          return (
            <div key={index} className="flex items-start space-x-3">
              <Icon className="w-6 h-6 text-gray-600 mt-1" />
              <div>
                <h3 className="font-medium mb-1">{interest.title}</h3>
                <p className="text-gray-600">{interest.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  )
}