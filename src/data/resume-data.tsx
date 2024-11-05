import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Ethan M. Clark",
  location: "Phoenix, AZ",
  about:
        "Machine learning engineer using reinforcement learning to develop embodied intelligence for humanoid robots that tackle real-world challenges in manufacturing, healthcare, and defense.",
  summary:
        "I develop embodied intelligence for humanoid robots using reinforcement learning and imitation learning approaches. My focus is on creating robots that can adapt to complex physical environments and work alongside humans. I'm driven by the potential of humanoid robots to revitalize US manufacturing, address the critical shortage of healthcare workers in elderly care, and protect human lives in defense operations.",
  avatarUrl: "https://avatars.githubusercontent.com/ethanmclark1",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "eclark715@gmail.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ethanmclark1",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ethanmclark1/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/ethanmclark1",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Arizona State University",
      degree: "Computer Science, M.S.",
      start: "Aug. 2022",
      end: "May 2025",
      gpa: "3.72",
    },
    {
      school: "Arizona State University",
      degree: "Computer Science, B.S.",
      start: "Aug. 2018",
      end: "May 2022",
      gpa: "3.67",
    },
  ],
  industry: [
    {
      company: "Institute for Human and Machine Cognition (IHMC)",
      link: "https://robots.ihmc.us/",
      badges: [],
      title: "Robotics Software Engineer Intern",
      start: "Sept. 2024",
      end: "Dec. 2024",
      description:
        "Built an imitation learning pipeline for humanoid locomotion using markerless motion capture and state-of-the-art methods from character animation to produce a robust and stable motion controller for IHMC's humanoid robot, Nadia",
    },
    {
      company: "Crow Industries Inc.",
      link: "https://crowindustriesinc.com/",
      badges: [],
      title: "Machine Learning Engineer Intern",
      start: "June 2024",
      end: "Sept. 2024",
      description:
        "Led autonomy development for an unmanned ground vehicle, implementing reinforcement learning (RL) for end-to-end obstacle avoidance and navigation in geographical mapping and mining operations",
    },
  ],
  academic: [
    {
      lab: "Cooperative Robotic Systems Lab",
      link: "https://www.public.asu.edu/~yzhan442/CRS.html",
      location: "Tempe, AZ, USA",
      university: "Arizona State University",
      advisor: "Yu Zhang",
      advisorLink: "https://www.public.asu.edu/~yzhan442/",
      title: "Graduate Researcher",
      start: "Aug. 2022",
      end: "present",
      description: "Formalized the Environment Reconfiguration problem and solved it with Commutative RL, a novel reinforcement learning algorithm that leverages order-invariant meta-optimization to achieve higher performance through optimized environment configurations",
    },
    {
      lab: "Center for Personalized Diagnostics, Biodesign Institute",
      link: "https://biodesign.asu.edu/personalized-diagnostics",
      location: "Tempe, AZ, USA",
      university: "Arizona State University",
      advisor: "Jin Park",
      advisorLink: "https://biodesign.asu.edu/personalized-diagnostics/profile/jpark161/",
      title: "Graduate Researcher",
      start: "Jan. 2024",
      end: "May 2024",
      description: "Evaluated the performance of biologically-informed neural networks on single-cell RNA sequencing data, implementing multiple architectures for cell type classification and pathway analysis",
    },
    {
      lab: "Nebraska Intelligent MoBile Unmanned Systems (NIMBUS) Lab",
      link: "https://nimbus.unl.edu/",
      location: "Lincoln, NE, USA",
      university: "University of Nebraska-Lincoln",
      advisor: "Hoang-Dung Tran",
      advisorLink: "https://sites.google.com/view/v2a2/about",
      title: "Visiting Undergraduate Researcher",
      start: "May 2021",
      end: "Aug. 2021",
      description: "Built autonomous emergency brake and lane-keep assist systems for F1Tenth cars, integrating sensor fusion, computer vision, and control algorithms to achieve robust autonomy in high-speed environments",
    }
  ],
  skills: [
    "Python",
    "PyTorch",
    "Isaac Sim",
    "ROS2",
    "Gazebo",
    "C++",
    "Docker",
    "AWS",
    "Captury Live",
    "Blender",
  ],
  projects: [
    {
      title: "Co-Bot",
      techStack: [
        "Python",
        "ROS2",
        "Gazebo",
        "Nav2",
        "SLAM",
      ],
      description:
        "Autonomous mobile robot with real-time tracking, obstacle avoidance, and path planning in dynamic environments",
    },
    {
      title: "RL Toolkit",
      techStack: [
        "Python",
        "PyTorch",
        "A2C",
        "Dueling DQN",
      ],
      description: "A collection of reinforcement learning algorithms implemented in PyTorch",
      link: {
        href: "https://github.com/ethanmclark1/rl_toolkit",
      },
    },
    {
      title: "Blocksworld 3D",
      techStack: [
        "Python",
        "OpenAI Gym",
      ],
      description:
      "A 3D version of the classic BlocksWorld environment for reinforcement learning",
      link: {
        href: "https://github.com/ethanmclark1/blocksworld3d",
      },
    },
    {
      title: "Octomap ROS",
      techStack: [
        "C++",
        "Cython",
        "Python",
        "ROS2",
      ],
      description:
        "Python binding of the Octomap library for ROS2",
      link: {
        href: "https://github.com/ethanmclark1/octomap-ros/",
      },
    },
    {
      title: "GEAT",
      techStack: ["Python"],
      description:
        "A collection of genetic and evolutionary algorithms",
      link: {
        href: "https://github.com/ethanmclark1/geat",
      },
    },
  ],
} as const;
