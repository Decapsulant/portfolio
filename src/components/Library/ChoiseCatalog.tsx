import { motion } from 'framer-motion'
import React, { forwardRef } from 'react'
import { Link } from 'react-router-dom'

type ChoiseCatalogProps = {
  title:string
  to:string
}

type Ref = HTMLAnchorElement


const ChoiseCatalog = forwardRef<Ref,ChoiseCatalogProps>(({title, to}, ref) => {
  return (
    <Link to={to} ref={ref} className='library__choise-catalog'>
        <h5 className="library__choise-catalog-title">{title}</h5>
    </Link>

  )
})

export const MChoiseCatalog = motion(ChoiseCatalog)

export default ChoiseCatalog