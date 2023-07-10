import React from 'react';
import myPhoto from '../assets/about-my-photo.jpg';
import { AccordionData } from '../data/accordionsData';
import { MAccordion } from '../components/Accordion';
import { motion } from 'framer-motion';
import { elementLeftAnimation, elementRightAnimation } from '../animation/animation';

const About = () => {
  return (
    <motion.section initial="hiden" whileInView="visible" className="about">
      <div className="container">
        <div className="about__inner">
          <motion.h1 variants={elementLeftAnimation} custom={1} className="about__title">
            About me
          </motion.h1>
          <motion.h4 variants={elementLeftAnimation} custom={2} className="about__subtitle">
            Hi, my name is <span>Vyacheslav Petrenko</span>{' '}
          </motion.h4>
          <motion.p variants={elementLeftAnimation} custom={3} className="about__text">
            Here i talk about my skills and a little about myself.
          </motion.p>

          <div className="about__body">
            <motion.div variants={elementLeftAnimation} custom={1}>
              <img src={myPhoto} alt="" />
            </motion.div>
            <div className="about__accordions">
              {AccordionData.map((obj) => (
                <MAccordion
                  key={obj.id}
                  variants={elementRightAnimation}
                  custom={obj.id}
                  {...obj}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
export default About;
