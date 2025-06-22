export function About() {
  return (
    <section className="prose prose-lg max-w-none">
      <div className="space-y-6">
      <p className="leading-relaxed">
          Hi, I'm Ethan! I work as an RL engineer at <a href="https://www.luckyrobots.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">Lucky Robots</a>, specializing in embodied AI.
          I earned my master's in computer science from Arizona State University, 
          where I conducted research on theoretical reinforcement learning for multi-agent systems under the guidance of <a href="https://www.public.asu.edu/~yzhan442/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">Dr. Yu Zhang</a> in the Cooperative Robotic Systems Lab.
        </p>
        <p className="leading-relaxed">
          Before joining Lucky Robots, I worked on imitation learning at <a href="https://robots.ihmc.us/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">IHMC</a>, 
          developing locomotion policies for humanoid robots. I also gained experience at <a href="https://www.crowindustriesinc.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">Crow Industries</a>, creating autonomous navigation systems for unmanned ground vehicles.
        </p>
        <p className="leading-relaxed">
          I'm passionate about building AI systems that can operate in the real world, particularly humanoid robots that can meaningfully help people.
          I'm especially motivated by applications in elderly care, strengthening American manufacturing, and protecting our service members.
        </p>
      </div>
    </section>
  )
}