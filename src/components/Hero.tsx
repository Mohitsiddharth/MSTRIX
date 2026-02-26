import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, MeshDistortMaterial, Sphere } from '@react-three/drei';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import * as THREE from 'three';

function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          setIsDarkMode(document.documentElement.classList.contains('dark'));
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });
    setIsDarkMode(document.documentElement.classList.contains('dark'));

    return () => observer.disconnect();
  }, []);

  return isDarkMode;
}

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const isDarkMode = useDarkMode();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.3;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 100, 200]} scale={2.7}>
      <MeshDistortMaterial
        color={isDarkMode ? "#2429be" : "#9edbdd"}
        attach="material"
        distort={0.5}
        speed={2}
        roughness={isDarkMode ? 0.2 : 3}
        metalness={isDarkMode ? 0.8 : 3}
        clearcoat={isDarkMode ? 0 : 0.4}
        clearcoatRoughness={0.1}
      />
    </Sphere>
  );
}

function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null);
  const isDarkMode = useDarkMode();

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  const particleCount = 1000;
  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color={isDarkMode ? "#ffffff" : "#768a8b"} transparent opacity={0.6} />
    </points>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollY = window.scrollY;
        const opacity = Math.max(0, 1 - scrollY / 500);
        containerRef.current.style.opacity = opacity.toString();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-light-white dark:bg-[#0D0D0D] transition-colors duration-300" ref={containerRef}>
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} color="#89c5d0" intensity={5} />
          <AnimatedSphere />
          <ParticleField />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
        </Canvas>
      </div>

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center"
        >
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-black dark:text-white mb-4 tracking-tight transition-colors duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Hi, I'm{' '}
            <span
              className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 dark:from-blue-500 dark:via-white dark:to-blue-500 text-transparent bg-clip-text transition-all duration-300"
            >Mohit Siddharth T
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-3xl lg:text-4xl text-black dark:text-gray-400 font-light tracking-widest transition-colors duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            S T U D E N T &nbsp; D E V E L O P E R
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-black/70 dark:text-gray-500 mt-6 transition-colors duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            Bengaluru, India
          </motion.p>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { duration: 1, delay: 1.5 },
          y: { duration: 1.5, repeat: Infinity }
        }}
        onClick={scrollToContent}
      >
        <ChevronDown className="w-8 h-8 text- black dark:text-white transition-colors duration-300" />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-light-white dark:to-[#0D0D0D] pointer-events-none transition-colors duration-300" />
    </section>
  );
}
