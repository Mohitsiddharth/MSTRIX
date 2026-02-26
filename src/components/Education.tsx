import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Engineering in Information Science and Engineering',
    institution: 'Global Academy of Technology, Bangalore',
    period: 'Oct 2023 - Jul 2027',
    focus: 'Core Computer Science, Software Development, and Emerging Technologies',
    achievements: [
      'CGPA: 8.4/10',
      'Active participation in technical events and hackathons',
      'Oracle Cloud Infrastructure 2025 Certified Architect Associate',
    ],
  },
  {
    degree: 'Pre-University Course (2nd PUC)',
    institution: 'Narayana PU College, Bangalore',
    period: 'Jul 2021 - Mar 2023',
    focus: 'Science Stream (Physics, Chemistry, Mathematics, Computer Science)',
    achievements: [
      'Karnataka State Board',
      'Scored 89.5%',
      'Strong foundation in Mathematics and Computer Science',
    ],
  },
];

const certifications = [
  'Oracle Cloud Infrastructure 2025 Certified Architect Associate',
  'AI Website Design – ULTRON-25',
  'Value Added Program on MAD (Mevi Technologies LLP)',
  'VAIMAANIK 2024 – WingedInk Hackathon',
];
export default function Education() {
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
      id="education"
      className="relative min-h-screen w-full bg-gradient-to-b from-light-white to-light-sky/20 dark:from-[#0D0D0D] dark:to-[#1a1a2e] py-32 px-6 transition-colors duration-300"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-black dark:text-white mb-20 text-center transition-colors duration-300"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-black dark:from-blue-500 dark:to-indigo-500">
            Education
          </span>{' '}
          & Certifications
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-8 mb-16"
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group p-8 rounded-2xl bg-light-beige/50 dark:bg-white/5 backdrop-blur-sm border border-light-navy/10 dark:border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex-shrink-0">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-black dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300">
                        {edu.degree}
                      </h3>
                      <p className="text-purple-400 font-medium">{edu.institution}</p>
                    </div>
                    <span className="mt-2 md:mt-0 px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-black/70 dark:text-gray-300 border border-purple-500/30 w-fit transition-colors duration-300">
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-black/80 dark:text-gray-300 mb-4 italic transition-colors duration-300">{edu.focus}</p>

                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, achIndex) => (
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
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="p-8 rounded-2xl bg-light-white dark:bg-white/5 backdrop-blur-sm border border-light-navy/10 dark:border-white/10 transition-colors duration-300"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-black dark:text-white transition-colors duration-300">Certifications</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-xl bg-light-navy/5 dark:bg-white/5 border border-light-navy/10 dark:border-white/10 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                <span className="text-black/80 dark:text-gray-300 transition-colors duration-300">{cert}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
