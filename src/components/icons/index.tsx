import React from 'react'
import Deco from './Deco'
import Facebook from './Facebook'
import Instagram from './Instagram'
import Whatsapp from './Whatsapp'
import './style.scss'
import ArrowDown from './ArrowDown'
import Localisation from './Localisation'
import Message from './Message'
import Phone from './Phone'
import Logo from './Logo'

const icons = {
  deco: <Deco />,
  facebook: <Facebook />,
  instagram: <Instagram />,
  whatsapp: <Whatsapp />,
  arrowDwon: <ArrowDown />,
  localisation: <Localisation />,
  message: <Message />,
  phone: <Phone />,
  logo: <Logo />
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