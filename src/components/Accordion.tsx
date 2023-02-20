import React, { forwardRef } from 'react'
import {motion} from "framer-motion"

type AccordionProps = {
  title:string,
  content:string
  list?:string[]
}

type Ref = HTMLDivElement 


 const Accordion = forwardRef<Ref, AccordionProps >(({title, content, list}, ref) => {
  const [active, setActive] = React.useState(false)

  const onClickAccordion = () =>{
    setActive(!active)
  }


  return (
    <div ref={ref} className='accordion'>
      <div className="accordion__item">
        <div onClick={onClickAccordion} className={`accordion__title ${active ? "accordion__title-active" : ""}`}>
          <div className='accordion__title-text'>{title}</div>
          <div className={`accordion__title-symbol ${active ? "open" : ""}`}>v</div>
        </div>
      <div className={`accordion__content animated ${active ? "show" : ""}`}>
              {content}
              {list?.map((obj, index) => <li key={index}  className='accordion__list'>{obj}</li>)}
        </div>
      </div>
    </div>
  )
})

export const MAccordion = motion(Accordion)

export default Accordion;