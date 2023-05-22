// import { MotionConfig } from 'framer-motion';
import React from 'react';
import { motion, transform } from 'framer-motion';
// import { Routes, Route } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
// import { AnimatePresence } from 'framer-motion';
// import Home from './Home';
// import Song1 from './Song1';


const animations = {
  initial: {opacity: 0, x: 100},
  animate: {opacity: 1, x: 0},
  exit: {opacity: 0, x: -100},
}

const AnimatedRoutes = ({children}) => {

  return (
    <motion.div 
    variants={animations} 
    initial="initial" 
    animate="animate"
    transition={{duration: 1}}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedRoutes
