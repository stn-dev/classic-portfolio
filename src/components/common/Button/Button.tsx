import React from 'react'
import './Button.scss'

interface ButtonPorps {
  label: string
  className?: string
  variant: 'contrasted' | 'dark'
}
function Button(props: ButtonPorps) {
  const { label, className = '', variant } = props
  return (
    <button
      className={`button-component ${variant} ${className}`} >
      {label}
      <span className='reflectOne' ></span>
      <span className='reflectTwo' ></span>
    </button>
  )
}

export default Button