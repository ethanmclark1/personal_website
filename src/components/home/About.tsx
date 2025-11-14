export function About() {
  return (
    <section className="prose prose-lg max-w-none">
      <div className="space-y-6">
        <p className="leading-relaxed">
          Hi, I'm Ethan, a Founding Engineer at <a href="https://www.luckyrobots.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">Lucky Robots</a>, where I specialize in reinforcement learning and imitation learning for humanoid robots.
          I completed both my bachelor's and master's degrees in computer science at Arizona State University. 
          During my master's, I researched theoretical reinforcement learning for multi-agent systems under <a href="https://www.public.asu.edu/~yzhan442/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">Dr. Yu Zhang</a> in the <a href="https://www.public.asu.edu/~yzhan442/CRS.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">Cooperative Robotic Systems Lab</a>.
        </p>
        <p className="leading-relaxed">
          Previously, I developed imitation learning systems for humanoid locomotion at <a href="https://robots.ihmc.us/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">IHMC</a> and engineered autonomous navigation systems for unmanned ground vehicles at <a href="https://www.crowindustriesinc.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">Crow Industries</a>.
        </p>
        <p className="leading-relaxed">
          I'm passionate about building general-purpose robotic systems that can provide real-world value, whether that's supporting the elderly, revitalizing American manufacturing, or protecting military personnel. My work focuses on developing learning-based approaches for loco-manipulation and tool use, with particular interest in novel methods for generating high-quality training data.
        </p>
      </div>
    </section>
  )
}