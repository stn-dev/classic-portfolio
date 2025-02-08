import React from 'react'
import Deco from './Deco'
import Facebook from './Facebook'
import Instagram from './Instagram'
import Whatsapp from './Whatsapp'
import './style.scss'
import ArrowDown from './ArrowDown'

const icons = {
  deco: <Deco />,
  facebook: <Facebook />,
  instagram: <Instagram />,
  whatsapp: <Whatsapp />,
  arrowDwon: <ArrowDown />
}

export type IconType = typeof icons

interface IconProps {
  name: keyof IconType
  className?: string
}

function Icon(props: IconProps) {
  const { name, className = "" } = props
  return (
    <span className={`icon ${className}`} >
      {icons[name]}
    </span>
  )
}

export default Icon