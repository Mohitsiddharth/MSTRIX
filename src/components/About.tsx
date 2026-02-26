import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to('.parallax-bg', {
        y: 100,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.from('.float-shape', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen w-full bg-gradient-to-b from-light-white to-light-sky/20 dark:from-[#0D0D0D] dark:to-[#1a1a2e] flex items-center justify-center overflow-hidden py-32 px-6 transition-colors duration-300"
    >
      <div className="parallax-bg absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl" />
      </div>

      <div className="float-shape absolute top-20 right-20 w-20 h-20 border-2 border-purple-500 rounded-lg rotate-45 opacity-30" />
      <div className="float-shape absolute bottom-40 left-10 w-16 h-16 border-2 border-blue-500 rounded-full opacity-30" />
      <div className="float-shape absolute top-1/2 right-1/3 w-12 h-12 border-2 border-pink-500 opacity-30" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />

      <motion.div
        className="relative z-10 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.h2
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold text-black dark:text-white mb-12 tracking-tight transition-colors duration-300"
        >
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-black dark:from-blue-500 dark:to-cyan-400">Me</span>
        </motion.h2>

        <motion.div variants={itemVariants} className="space-y-8">
          <p className="text-xl md:text-2xl text-black dark:text-gray-300 leading-relaxed transition-colors duration-300">
            I'm a 3rd-year Information Science & Engineering student specializing in <span className="text-indigo-600 font-semibold">Cybersecurity and Artificial Intelligence</span>, focused on <span className="text-indigo-600 font-semibold">building secure, scalable, and high-performance systems</span> for real-world environments
          </p>

          <p className="text-xl md:text-2xl text-black dark:text-gray-300 leading-relaxed transition-colors duration-300">
            In Cybersecurity, I <span className="text-blue-400 font-semibold">analyze attack surfaces, identify vulnerabilities, and design structured defense strategies</span> grounded in threat modeling and practical experimentation. In AI, I work on <span className="text-blue-400 font-semibold">model development and optimization, building intelligent systems</span> that are both accurate and computationally efficient — without compromising security or reliability.

          </p>
          <p className="text-xl md:text-2xl text-black dark:text-gray-300 leading-relaxed transition-colors duration-300">
            Beyond core system design, I value <span className="text-pink-400 font-semibold">clean architecture</span> and <span className="text-pink-400 font-semibold">performance-driven engineering</span>. As a <span className="text-pink-400 font-semibold">vibe coder</span>, I ensure technical depth translates into seamless, responsive user experiences.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '8.5+', label: 'CGPA' },
            { number: '6+', label: 'Projects Completed' },
            { number: '5+', label: 'Hackathons' },
            { number: '100%', label: 'Dedication' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-light-beige/10 dark:bg-white/5 backdrop-blur-sm border border-light-navy/10 dark:border-white/10 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400 dark:from-blue-500 dark:to-cyan-400 mb-2">
                {stat.number}
              </div>
              <div className="text-black/60 dark:text-gray-400 text-sm md:text-base transition-colors duration-300">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
