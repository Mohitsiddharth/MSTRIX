import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, User, Code2, Briefcase, GraduationCap, Mail, MessageSquare } from 'lucide-react';

const sections = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code2 },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'contact', label: 'Contact', icon: MessageSquare },
];

export default function Navigation() {
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Simple scrollspy
            const current = sections.find((section) => {
                const element = document.getElementById(section.id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });

            if (current) {
                setActiveSection(current.id);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offsetTop = element.offsetTop;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth',
            });
            setActiveSection(id);
        }
    };

    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/80 dark:bg-[#0D0D0D]/80 backdrop-blur-md shadow-lg py-4'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <div
                    className="text-2xl font-bold cursor-pointer bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
                    onClick={() => scrollTo('home')}
                >
                    MST
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    {sections.map(({ id, label }) => (
                        <button
                            key={id}
                            onClick={() => scrollTo(id)}
                            className={`text-sm font-medium transition-colors duration-300 ${activeSection === id
                                ? 'text-blue-600 dark:text-cyan-400'
                                : 'text-black/60 dark:text-white/60 hover:text-blue-600 dark:hover:text-cyan-400'
                                }`}
                        >
                            {label}
                        </button>
                    ))}
                    <button
                        onClick={() => scrollTo('contact')}
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 ml-4 shadow-md shadow-blue-500/20"
                    >
                        <Mail className="w-4 h-4" />
                        <span className="text-sm font-medium">Email Me</span>
                    </button>
                </nav>

                {/* Mobile Navigation (Floating Bottom Bar) */}
                <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 bg-white dark:bg-[#1a1a2e] px-4 py-3 rounded-2xl shadow-xl flex items-center gap-4 sm:gap-6 border border-gray-200 dark:border-white/10 z-50">
                    {sections.map(({ id, icon: Icon }) => (
                        <button
                            key={id}
                            onClick={() => scrollTo(id)}
                            className={`p-2 rounded-xl transition-all duration-300 ${activeSection === id
                                ? 'bg-blue-500/10 text-blue-600 dark:text-cyan-400 scale-110'
                                : 'text-black/60 dark:text-white/60 hover:text-blue-600 dark:hover:text-cyan-400'
                                }`}
                        >
                            <Icon className="w-5 h-5" />
                        </button>
                    ))}
                    <button
                        onClick={() => scrollTo('contact')}
                        className="p-2 pl-4 border-l border-gray-200 dark:border-white/10 text-blue-600 dark:text-cyan-400 hover:scale-110 transition-transform duration-300"
                    >
                        <Mail className="w-5 h-5" />
                    </button>
                </nav>
            </div>
        </motion.div>
    );
}
