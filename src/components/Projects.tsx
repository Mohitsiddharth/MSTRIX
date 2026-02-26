import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Antiquish',
    description: 'A cybersecurity simulation framework that detects suspicious behavior through decoy monitoring and automated countermeasures. Designed with modular threat logic and structured defensive workflows.',
    tags: ['React', 'TypeScript', 'Three.js', 'WebGL', 'TensorFlow.js'],
    gradient: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500/10',
  },
  {
    title: 'FIVE – Security Engine',
    description: 'A high-performance, real-time cybersecurity simulation platform built with cutting-edge web technologies. Engineered for immersive user experiences and seamless cross-platform deployment.',
    tags: ['Python', 'ML', 'AI', 'Cyber Security'],
    gradient: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-500/10',
  },
  {
    title: 'MSTRIX',
    description: 'Cinematic, animation-driven developer portfolio with modular architecture and real-time 3D integration.',
    tags: ['React', 'TypeScript', 'GSAP', 'Framer Motion', 'Three.js', 'Tailwind', 'Vite'],
    gradient: 'from-green-800 to-green-400',
    bgColor: 'bg-green-400/10',
  },
  {
  title: 'CodeQuest',
  description: 'A full-stack coding platform with real-time code execution using Docker-based sandboxing and Judge API integration. Built with a React frontend, Express backend, MongoDB database, and integrated CodeMirror/ACE editors for syntax highlighting and debugging support.',
  tags: [
    'React.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Docker',
    'Judge API',
    'CodeMirror',
    'ACE Editor'
  ],
  gradient: 'from-red-500 to-orange-500',
  bgColor: 'bg-red-500/10',
},
{
  title: 'Aqua Harvest Pro',
  description: 'A smart water resource management platform focused on monitoring, optimizing, and analyzing water usage through structured data insights and sustainability-driven workflows. Designed to improve efficiency and promote responsible resource utilization.',
  tags: [
    'React.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'REST API'
  ],
  gradient: 'from-yellow-500 to-yellow-300',
  bgColor: 'bg-yellow-500/10',
  github: 'https://github.com/Mohitsiddharth/Aqua-Harvest-Pro',
},
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !scrollContainerRef.current) return;

    const ctx = gsap.context(() => {
      const horizontalSections = gsap.utils.toArray('.project-card');

      gsap.to(horizontalSections, {
        xPercent: -100 * (horizontalSections.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: scrollContainerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (horizontalSections.length - 1),
          end: () => `+=${scrollContainerRef.current!.offsetWidth * 2}`,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative w-full bg-gradient-to-b from-light-sky/20 to-light-white dark:from-[#1a1a2e] dark:to-[#0D0D0D] overflow-hidden transition-colors duration-300"
    >
      <div className="py-32 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold text-black dark:text-white mb-12 text-center transition-colors duration-300"
        >
          Featured{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-black dark:from-blue-500 dark:to-cyan-400">
            Projects
          </span>
        </motion.h2>

        <div ref={scrollContainerRef} className="relative w-full overflow-hidden">
          <div className="flex gap-8 w-max py-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card group relative w-[90vw] md:w-[600px] h-[500px] flex-shrink-0"
              >
                <div className={`absolute inset-0 ${project.bgColor} rounded-3xl transform transition-transform duration-500 group-hover:scale-105`} />

                <div className="relative h-full p-8 rounded-3xl bg-light-white dark:bg-white/5 backdrop-blur-sm border border-light-navy/10 dark:border-white/10 group-hover:border-purple-500/50 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-xl dark:shadow-none">
                  <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${project.gradient} opacity-20 blur-3xl rounded-full transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-700`} />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <h3 className="text-3xl md:text-4xl font-bold text-black dark:text-white transition-colors duration-300">
                        {project.title}
                      </h3>
                      <div className="flex gap-3">
                        <button className="p-2 rounded-lg bg-light-navy/5 hover:bg-light-navy/10 dark:bg-white/10 dark:hover:bg-white/20 transition-colors duration-300">
                          <Github className="w-5 h-5 text-black dark:text-white transition-colors duration-300" />
                        </button>
                        <button className="p-2 rounded-lg bg-light-navy/5 hover:bg-light-navy/10 dark:bg-white/10 dark:hover:bg-white/20 transition-colors duration-300">
                          <ExternalLink className="w-5 h-5 text-black dark:text-white transition-colors duration-300" />
                        </button>
                      </div>
                    </div>

                    <p className="text-black/80 dark:text-gray-300 text-lg mb-8 leading-relaxed transition-colors duration-300">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-4 py-2 rounded-full text-sm font-medium bg-light-navy/5 text-black/80 border border-light-navy/10 dark:bg-white/10 dark:text-gray-300 dark:border-white/20 hover:border-purple-500/50 transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="relative z-10">
                    <button className={`w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r ${project.gradient} hover:shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300`}>
                      View Case Study
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-black/60 dark:text-gray-400 mt-12 text-lg transition-colors duration-300">
          Scroll horizontally to explore projects →
        </p>
      </div>
    </section>
  );
}
