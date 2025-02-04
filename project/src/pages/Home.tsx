import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Brain, Rocket } from 'lucide-react';
import TechStack from '../components/TechStack';

const Home = () => {
  return (
    <div className="pt-16 relative">
      <div className="gradient-overlay" />
      
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen flex items-center justify-center px-4"
      >
        <div className="text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 neon-text"
          >
            Kartik Singh
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-300 mb-8 leading-relaxed animated-text"
          >
            <span>A Tech Enthusiast</span>
            <span>A Full Stack Developer</span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-300 mb-8 leading-relaxed"
          >
            Motivated Computer Science student with a passion for problem-solving and emerging technologies.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center gap-4"
          >
            <Link
              to="/projects"
              className="neon-button px-8 py-3 rounded-lg text-white"
            >
              <span className="relative flex items-center">
                View Projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 neon-text">What I Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="w-8 h-8 text-blue-400" />,
                title: 'Web Development',
                description: 'Building responsive and modern web applications using the latest technologies.',
              },
              {
                icon: <Brain className="w-8 h-8 text-purple-400" />,
                title: 'Problem Solving',
                description: 'Solving complex problems with efficient and elegant solutions.',
              },
              {
                icon: <Rocket className="w-8 h-8 text-pink-400" />,
                title: 'Quick Learning',
                description: 'Rapidly adapting to new technologies and methodologies.',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="p-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors neon-border"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <TechStack />
        </div>
      </section>
    </div>
  );
};

export default Home;