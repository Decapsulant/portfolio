import React from 'react';
import { libraryData } from '../data/libraryData';
import { MChoiseCatalog } from '../components/Library/ChoiseCatalog';
import {motion} from "framer-motion";
import {elementTopAnimation, elementBottomAnimation} from "../animation/animation"

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
            {libraryData.map((obj,index) => <MChoiseCatalog variants={elementBottomAnimation} custom={index} key={obj.title} {...obj}/>)}
          </div>
        </div>
      </div>
    </motion.section>

  )
}
export default Library