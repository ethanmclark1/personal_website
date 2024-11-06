import type { Metadata } from 'next'
import { Book, Coffee, Mountain, Sword} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ethan M. Clark',
  description: 'Robotics Software Engineer, ML Researcher, and Lifelong Learner',
}

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 font-serif">
      <header className="mb-12">
        <h1 className="text-3xl mb-2 font-bold">Ethan M. Clark</h1>
        <nav className="text-gray-600 mb-6">
          <a href="/" className="mr-6 hover:underline">Home</a>
          <a href="/essays" className="mr-6 hover:underline">Essays</a>
          <a href="/projects" className="mr-6 hover:underline">Projects</a>
          <a href="/resume" className="mr-6 hover:underline">Resume</a>
        </nav>
      </header>

      <main className="space-y-12">
        <section className="prose">
          <div className="flex items-start justify-between">
            <div className="space-y-4">
              <p className="text-lg">
                Hi, I'm Ethan — an ML researcher pursuing my 
                master's in computer science at Arizona State University. At the Cooperative Robotic 
                Systems Lab, I work on theoretical reinforcement learning in multi-agent systems under 
                Dr. Yu Zhang's guidance.
              </p>
              <p>
                Currently, I'm working on imitation learning for bipedal locomotion at IHMC, where
                I'm helping develop control systems for humanoid robots. Previously, I was at Crow 
                Industries developing autonomous navigation systems for unmanned ground vehicles.
              </p>
              <p>
                My research interests lie at the intersection of artificial intelligence and robotics,
                with a particular focus on humanoid robotics, multi-agent systems, and embodied AI.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Beyond Technology</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <Book className="w-6 h-6 text-gray-600 mt-1" />
              <div>
                <h3 className="font-medium mb-1">Lifelong Learning</h3>
                <p className="text-gray-600">
                  When not keeping up with AI progress, I explore ideas in nutrition, 
                  history, and geopolitics.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Mountain className="w-6 h-6 text-gray-600 mt-1" />
              <div>
                <h3 className="font-medium mb-1">Outdoor Enthusiast</h3>
                <p className="text-gray-600">
                  I disconnect from the virtual world through basketball and hiking.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Coffee className="w-6 h-6 text-gray-600 mt-1" />
              <div>
                <h3 className="font-medium mb-1">Bonsai Enthusiast</h3>
                <p className="text-gray-600">
                  Maintaining a humble collection of bonsai trees keeps me grounded.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Sword className="w-6 h-6 text-gray-600 mt-1" />
              <div>
                <h3 className="font-medium mb-1">Strategy Games</h3>
                <p className="text-gray-600">
                  Currently learning Chess, Stratego, and Go — still a beginner but enjoying the journey!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Recent Essays</h2>
          <ul className="space-y-3">
            <li>
              <span className="text-gray-500 mr-3">Mar 2024</span>
              <a href="/essays/bipedal-locomotion" className="hover:underline">
                On Bipedal Locomotion: Bridging the Gap Between Simulation and Reality
              </a>
            </li>
            <li>
              <span className="text-gray-500 mr-3">Feb 2024</span>
              <a href="/essays/rl-environments" className="hover:underline">
                Environment Reconfiguration: A New Approach to RL Optimization
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Featured Projects</h2>
          <div className="space-y-4">
            <div>
              <a href="/projects/imitation-learning" className="text-lg hover:underline">
                Imitation Learning Pipeline
              </a>
              <p className="text-gray-600">
                Developing control systems for IHMC's humanoid robot using markerless motion capture 
                and state-of-the-art character animation techniques.
              </p>
            </div>
            <div>
              <a href="/projects/autonomous-navigation" className="text-lg hover:underline">
                Autonomous Navigation
              </a>
              <p className="text-gray-600">
                RL-based unmanned ground vehicle control system for geographical mapping and mining operations.
              </p>
            </div>
            <div>
              <a href="/projects/co-bot" className="text-lg hover:underline">
                Co-Bot
              </a>
              <p className="text-gray-600">
                An autonomous mini robot built with ROS, featuring real-time tracking and dynamic path planning.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}