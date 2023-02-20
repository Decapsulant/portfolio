import React, { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export type BtnProps = {
    toPages:string,
    title:string
}

type Ref = HTMLAnchorElement

export const Button = forwardRef<Ref, BtnProps>(({title, toPages}, ref) => {
  return (
     
    <Link className='button__link' ref={ref} to={toPages}  >
    <button  className='home__btn'>{title}</button>
    </Link> 
  )
})

export const MButton = motion(Button)
