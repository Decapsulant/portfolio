import React from 'react';
import { motion } from 'framer-motion';
import { MButton } from '../components/btn';
import { elementLeftAnimation } from '../animation/animation';

const Home = () => {
  return (
    <motion.section initial="hiden" whileInView="visible" className="home">
      <div className="container">
        <div className="home__inner">
          <motion.h1 custom={1} variants={elementLeftAnimation} className="home__title">
            Welcome to my portfolio
          </motion.h1>
          <motion.p custom={2} variants={elementLeftAnimation} className="home__subtitle">
            by <span style={{ color: 'red' }}>Vyacheslav P.</span>
          </motion.p>

          <MButton
            custom={3}
            variants={elementLeftAnimation}
            title="See my library"
            toPages="/library"
          />
        </div>
      </div>
    </motion.section>
  );
};
export default Home;
