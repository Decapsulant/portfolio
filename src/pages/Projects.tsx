import React from 'react'
import { projectData } from '../data/projectData'
import { MProjectItem } from '../components/Library/Projects/ProjectItem'

import {motion} from "framer-motion"
import { elementTopAnimation, elementBottomAnimation, elementAnimation } from '../animation/animation'

const Projects = () => {
  return (
    <motion.section initial="hiden" whileInView="visible" className='projects'>
        <div className="container">
            <motion.h2 variants={elementTopAnimation} className='projects__title'>First Projects</motion.h2>

            <div className="projects__items">
                {projectData.map((obj,index) => <MProjectItem key={index} custom={index} variants={elementAnimation}  {...obj}/>)}
            </div>
        </div>
    </motion.section>
  )
}
export default Projects