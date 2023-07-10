import React from 'react';
import {  MProjectItem } from '../components/Library/Projects/ProjectItem';
import {motion} from "framer-motion";
import {elementTopAnimation, elementAnimation} from "../animation/animation"
import { projectData } from '../data/projectData';

 const Library = () => {
  return (


    <motion.section
    initial="hiden"
    whileInView="visible"
    className='library'>
      <div className="container">
        <div className="library__inner">
          <motion.h2 variants={elementTopAnimation}  className='library__title'>Library</motion.h2>
          <div className="library__catalog">
            {projectData.map((el, index) => (<MProjectItem variants={elementAnimation} custom={index} key={el.path} title={el.title} path={el.path}/>))}
          </div>
        </div>
      </div>
    </motion.section>

  )
}
export default Library