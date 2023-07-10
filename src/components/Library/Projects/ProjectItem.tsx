import { motion } from 'framer-motion'
import { forwardRef } from 'react'

type ProjectItemProps = {
    title:string
    path:string
}
type Ref = HTMLAnchorElement

const ProjectItem = forwardRef<Ref, ProjectItemProps>(({title, path}, ref) => {
  return (
    <a ref={ref} target="_blank" href={path} className='project__item' rel="noreferrer">
        <h6 className='project__item-title'>{title}</h6>
    </a>
  )
})

export const MProjectItem = motion(ProjectItem)
export default ProjectItem