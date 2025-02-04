import React from 'react';
import { motion } from 'framer-motion';
import { Coffee } from 'lucide-react';

const Store = () => {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8">Digital Store</h1>
          <p className="text-xl text-gray-300 mb-12">Support my work and get access to exclusive digital products!</p>
          
          <a
            href="https://buymeacoffee.com/kartiksinghh03"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-[#FFDD00] text-gray-900 rounded-lg font-bold hover:bg-[#FFDD00]/90 transition-colors"
          >
            <Coffee className="w-6 h-6 mr-2" />
            Buy Me A Coffee
          </a>
          
          <p className="mt-8 text-gray-400">
            Visit my Buy Me a Coffee page to support my work and get access to exclusive content and digital products.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Store;