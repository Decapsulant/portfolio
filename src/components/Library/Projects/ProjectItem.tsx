import { motion } from 'framer-motion'
import React, { forwardRef } from 'react'
import { Link } from 'react-router-dom'

type ProjectItemProps = {
    title:string
    path:string
}

type Ref = HTMLAnchorElement

const ProjectItem = forwardRef<Ref,ProjectItemProps>(({title, path}, ref) => {
  return (
    <Link to={path} ref={ref} className='project__item'>
        <h6 className='project__item-title'>{title}</h6>
    </Link>
  )
})

export const MProjectItem = motion(ProjectItem)
export default ProjectItem