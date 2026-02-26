import { motion } from 'framer-motion';
import { Diamond } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative w-full bg-light-white dark:bg-[#0D0D0D] border-t border-light-navy/10 dark:border-white/10 py-12 px-6 overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full filter blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-black dark:from-blue-500 dark:via-white dark:to-blue-500 text-transparent bg-clip-text transition-all duration-300">
              Mohit Siddharth T
            </h3>
            <p className="text-black/70 dark:text-gray-400 transition-colors duration-300">Student Developer</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-black/70 dark:text-gray-400 transition-colors duration-300"
          >
            <span>Made with</span>
            <Diamond className="w-4 h-4 text-pink-500 fill-pink-500 animate-pulse" />
            <span>and React</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-black/70 dark:text-gray-400 transition-colors duration-300"
          >
            © {new Date().getFullYear()} All rights reserved
          </motion.div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 h-px bg-gradient-to-r from-transparent via-blue-800 to-transparent dark:via-cyan-400 "
        />
      </div>
    </footer>
  );
}
