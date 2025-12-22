import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ feature, index, cardVariants }) => {
  return (
    <motion.div
      key={feature.id}
      variants={cardVariants}
      custom={index}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative"
    >
      <div className="relative border flex flex-col    border-white/20 p-8 h-100 w-90 bg-dark-100 rounded-xl transition-all duration-300  ">
        
        
        <div className="relative  ">
        
          <img
            src={feature.icon}
            alt=""
            className=" absolute z-10"
          />

        
         
        </div>

        
        <div className="flex h-full flex-col mt-4  align-bottom  justify-end">
        <div className="relative mb-6">
            <img
              src={feature.pattern}
              alt=""
              className="w-full h-auto object-contain"
            />
            <div className='absolute inset-0 h-full w-full bg-gradient-to-b from-[transaprent] to-[#111111]'/>
          </div>
          <h3 className="font-display text-xl font-semibold mb-3 text-center group-hover:text-primary transition-colors duration-300">
            {feature.title}
          </h3>
          <p className="text-gray-400 text-center leading-relaxed">
            {feature.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;