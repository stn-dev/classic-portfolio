import React, { ButtonHTMLAttributes } from 'react'
import './Button.scss'
import Link from 'next/link'

interface ButtonPorps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  className?: string
  variant: 'contrasted' | 'dark'
  IsForDownload?: boolean
  link?: string
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