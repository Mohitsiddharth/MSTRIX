import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Brain, Terminal, Wrench } from 'lucide-react';

const skills = {
  "AI/ ML": [
    { name: 'Python for ML', level: 90 },
    { name: 'Supervised & Unsupervised Learning', level: 85 },
    { name: 'Model Optimization & Evaluation', level: 80 },
    { name: 'Data Preprocessing & Feature Engineering', level: 85 },
    { name: 'AI Model Deployment Basics', level: 75 },
    { name: 'Performance Tuning', level: 78 },
  ],
  "Programming & Development": [
    { name: 'Python', level: 95 },
    { name: 'C / C++', level: 80 },
    { name: 'JavaScript / TypeScript', level: 60 },
    { name: 'React', level: 65 },
    { name: 'Node.js', level: 60 },
    { name: 'JAVA', level: 70 },
    { name: 'SQL', level: 80 },
  ],
  Tools: [
    { name: 'Git', level: 90 },
    { name: 'Codex', level: 82 },
    { name: 'Claude', level: 70 },
    { name: 'VS Code', level: 85 },
    { name: 'Antigravity', level: 90 },
  ],
};

const icons: Record<string, React.ReactNode> = {
  "AI/ ML": <Brain className="w-6 h-6" />,
  "Programming & Development": <Terminal className="w-6 h-6" />,
  Tools: <Wrench className="w-6 h-6" />,
};

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative min-h-screen w-full bg-light-sky/20 dark:bg-[#1a1a2e] py-32 px-6 transition-colors duration-300"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-black dark:text-white mb-20 text-center transition-colors duration-300"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-black dark:from-blue-500 dark:to-white">
            Skills & Expertise
          </span>{' '}
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {Object.entries(skills).map(([category, items]) => (
            <motion.div
              key={category}
              variants={categoryVariants}
              className="group relative p-8 rounded-2xl bg-light-white dark:bg-white/5 backdrop-blur-sm border border-light-navy/10 dark:border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white">
                  {icons[category]}
                </div>
                <h3 className="text-2xl font-bold text-black dark:text-white transition-colors duration-300">{category}</h3>
              </div>

              <div className="space-y-4">
                {items.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-black/80 dark:text-gray-300 font-medium transition-colors duration-300">{skill.name}</span>
                      <span className="text-black dark:text-white text-sm">{skill.level}%</span>
                    </div>
                    <div className="relative h-2 bg-light-navy/10 dark:bg-white/10 rounded-full overflow-hidden transition-colors duration-300">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: 'easeOut' }}
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
