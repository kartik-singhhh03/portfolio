import React from 'react';
import { motion } from 'framer-motion';

const TechStack = () => {
  const skills = [
    { name: 'HTML/CSS/JS', level: 100 },
    { name: 'React.js', level: 75 },
    { name: 'Backend', level: 70 },
  ];

  return (
    <div className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Tech Stack</h2>
      <div className="max-w-3xl mx-auto space-y-8">
        {skills.map((skill) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between">
              <span className="text-lg font-medium">{skill.name}</span>
              <span className="text-blue-400">{skill.level}%</span>
            </div>
            <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;