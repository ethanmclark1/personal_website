export function About() {
 return (
   <section className="prose">
     <div className="flex items-start justify-between">
       <div className="space-y-4">
         <p>
           Hi, I'm Ethan — an ML engineer completing my master's degree in computer science at Arizona State University.
           Under the advisement of <a href="https://www.public.asu.edu/~yzhan442/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">Dr. Yu Zhang</a> in the <a href="https://www.public.asu.edu/~yzhan442/CRS.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">Cooperative Robotic Systems Lab</a>,
           I research theoretical reinforcement learning for multi-agent systems.
         </p>
         <p>
           Currently, I'm working on imitation learning for bipedal locomotion at <a href="https://robots.ihmc.us/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">IHMC</a>, where
           I'm helping develop control systems for humanoid robots. Previously, I was at <a href="https://www.crowindustriesinc.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">Crow Industries</a> developing autonomous navigation systems for unmanned ground vehicles.
         </p>
         <p>
           My professional interests lie at the intersection of artificial intelligence and robotics,
           focusing on humanoids and embodied learning.
           I'm particularly interested in developing humanoids for elderly care, revitalizing the American industrial base, and saving military lives.
         </p>
       </div>
     </div>
   </section>
 )
}