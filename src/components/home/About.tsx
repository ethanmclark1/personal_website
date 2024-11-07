export function About() {
  return (
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
  )
}