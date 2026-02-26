import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Github, Linkedin, Send, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isHovered, setIsHovered] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.send(
        'service_289lmwf',
        'template_39j91pm',
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        '7koHjymWC3bspJCOs'
      );
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('Email failed to send:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative min-h-screen w-full bg-light-sky/20 dark:bg-[#1a1a2e] py-32 px-6 transition-colors duration-300"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-black dark:text-white mb-12 text-center transition-colors duration-300"
        >
          Get In{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-black dark:from-blue-500 dark:to-cyan-500">
            Touch
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-black/70 dark:text-gray-400 text-center mb-16 transition-colors duration-300"
        >
          Have a project in mind? Let's create something extraordinary together.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold text-black dark:text-white mb-6 transition-colors duration-300">Contact Information</h3>

              <div className="space-y-4">
                <button
                  onClick={async (e) => {
                    e.preventDefault();
                    await navigator.clipboard.writeText('mohithsiddhartht@gmail.com');
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-light-white dark:bg-white/5 backdrop-blur-sm border border-light-navy/10 dark:border-white/10 hover:border-purple-500/50 transition-all duration-300 group w-full text-left"
                >
                  <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-black/60 dark:text-gray-400 text-sm transition-colors duration-300">Email</p>
                    <p className="text-black dark:text-white font-medium transition-colors duration-300">
                      {copied ? 'Copied to clipboard!' : 'mohithsiddhartht@gmail.com'}
                    </p>
                  </div>
                </button>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-light-white dark:bg-white/5 backdrop-blur-sm border border-light-navy/10 dark:border-white/10 transition-colors duration-300">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-black/60 dark:text-gray-400 text-sm transition-colors duration-300">Location</p>
                    <p className="text-black dark:text-white font-medium transition-colors duration-300">Bengaluru, India</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-6 transition-colors duration-300">Connect With Me</h3>
              <div className="flex gap-4">
                {
                  [
                    { icon: Github, href: 'https://github.com/Mohitsiddharth', label: 'GitHub', type: 'link' },
                    { icon: Linkedin, href: 'https://www.linkedin.com/in/mohit-siddharth-t-676a65330/', label: 'LinkedIn', type: 'link' },
                    { icon: Mail, label: 'Email', type: 'copy' },
                  ].map((social, index) => {
                    if (social.type === 'copy') {
                      return (
                        <button
                          key={index}
                          onClick={async (e) => {
                            e.preventDefault();
                            await navigator.clipboard.writeText('mohithsiddhartht@gmail.com');
                            setCopied(true);
                            setTimeout(() => setCopied(false), 2000);
                          }}
                          className="group p-4 rounded-xl bg-light-white dark:bg-white/5 backdrop-blur-sm border border-light-navy/10 dark:border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-110"
                          aria-label={social.label}
                        >
                          <social.icon className="w-6 h-6 text-black/60 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors duration-300" />
                        </button>
                      );
                    }

                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-4 rounded-xl bg-light-white dark:bg-white/5 backdrop-blur-sm border border-light-navy/10 dark:border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-110"
                        aria-label={social.label}
                      >
                        <social.icon className="w-6 h-6 text-black/60 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors duration-300" />
                      </a>
                    );
                  })
                }
              </div>
            </motion.div>
          </motion.div>

          <motion.form
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <label htmlFor="name" className="block text-black/80 dark:text-gray-300 mb-2 font-medium transition-colors duration-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 rounded-xl bg-light-white dark:bg-white/5 backdrop-blur-sm border border-light-navy/10 dark:border-white/10 focus:border-purple-500/50 focus:outline-none text-black dark:text-white placeholder-light-navy/40 dark:placeholder-gray-500 transition-all duration-300"
                placeholder="Your name"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label htmlFor="email" className="block text-black/80 dark:text-gray-300 mb-2 font-medium transition-colors duration-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 rounded-xl bg-light-white dark:bg-white/5 backdrop-blur-sm border border-light-navy/10 dark:border-white/10 focus:border-purple-500/50 focus:outline-none text-black dark:text-white placeholder-light-navy/40 dark:placeholder-gray-500 transition-all duration-300"
                placeholder="your@email.com"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label htmlFor="message" className="block text-black/80 dark:text-gray-300 mb-2 font-medium transition-colors duration-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-6 py-4 rounded-xl bg-light-white dark:bg-white/5 backdrop-blur-sm border border-light-navy/10 dark:border-white/10 focus:border-purple-500/50 focus:outline-none text-black dark:text-white placeholder-light-navy/40 dark:placeholder-gray-500 transition-all duration-300 resize-none"
                placeholder="Tell me about your project..."
              />
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <button
                type="submit"
                disabled={isSubmitting}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-500 to-cyan-400 hover:shadow-2xl hover:shadow-cyan-400/50 transition-all duration-300 overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <Send className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              {isSuccess && (
                <p className="absolute -bottom-8 left-0 right-0 text-center text-green-500 dark:text-green-400 font-medium transition-opacity duration-300">
                  Message sent successfully!
                </p>
              )}
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
