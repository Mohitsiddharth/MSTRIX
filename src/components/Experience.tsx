import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Cybersecurity Intern',
    company: 'MAHE-ISAC (Manipal Academy of Higher Education – ISAC)',
    period: '2026',
    description: 'Completed an intensive 1-month internship focused on cybersecurity fundamentals, ethical hacking, and network security analysis.',
    achievements: [
      'Worked with Kali Linux and Ubuntu for secure testing environments',
      'Performed network reconnaissance and vulnerability scanning using Nmap',
      'Studied penetration testing methodologies and attack simulations',
      'Analyzed real-world cyber threats and mitigation techniques',
    ],
  },
  {
    role: 'Cloud Computing Practitioner',
    company: 'Oracle Cloud Infrastructure',
    period: '2025',
    description: 'Earned Oracle Cloud Infrastructure 2025 Certified Architect Associate certification with strong foundation in cloud architecture and deployment.',
    achievements: [
      'Understood compute, storage, networking, and IAM services',
      'Learned scalable cloud deployment strategies',
      'Gained practical knowledge of cloud security principles',
    ],
  },
  {
    role: 'AI & Web Innovation Developer',
    company: 'ULTRON-25 Technical Event',
    period: '2025',
    description: 'Designed and developed AI-powered web interface concepts during competitive technical event.',
    achievements: [
      'Built intelligent web prototype with AI-driven logic',
      'Applied modern UI/UX and interaction design principles',
      'Presented working solution under time constraints',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Independent Projects',
    period: '2025 - Present',
    description: 'Developing high-performance web applications with advanced animations, 3D integrations, and AI-powered features.',
    achievements: [
      'Built FIVE – immersive cinematic portfolio using React, TypeScript, GSAP, and Three.js',
      'Developed Antiquish – AI analytics platform with real-time data visualization',
      'Optimized rendering pipelines and improved frontend performance',
      'Implemented advanced scroll-based animation architecture',
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative min-h-screen w-full bg-light-white dark:bg-[#0D0D0D] py-32 px-6 transition-colors duration-300"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-black dark:text-white mb-20 text-center transition-colors duration-300"
        >
          Work{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-black dark:from-blue-500 dark:to-indigo-500">
            Experience
          </span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative"
        >
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-8 md:pl-20"
              >
                <div className="absolute left-0 md:left-8 top-6 w-4 h-4 -ml-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 ring-4 ring-[#0D0D0D]" />

                <div className="group p-8 rounded-2xl bg-light-beige/50 dark:bg-white/5 backdrop-blur-sm border border-light-navy/10 dark:border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-black dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-purple-400">
                        <Briefcase className="w-4 h-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-black/70 dark:text-gray-300 border border-purple-500/30 transition-colors duration-300">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-black/80 dark:text-gray-300 mb-4 leading-relaxed transition-colors duration-300">
                    {exp.description}
                  </p>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className="flex items-start gap-2 text-black/70 dark:text-gray-400 transition-colors duration-300"
                      >
                        <span className="text-purple-400 mt-1">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
