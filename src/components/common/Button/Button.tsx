import React, { ButtonHTMLAttributes } from 'react'
import './Button.scss'

interface ButtonPorps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  className?: string
  variant: 'contrasted' | 'dark'
  isDisabled?: boolean
}
function Button(props: ButtonPorps) {
  const { label, className = '', variant, isDisabled = false } = props
  return (
    <button
      className={`button-component ${variant} ${isDisabled ? 'disabled' : ''} ${className}`}
      disabled={isDisabled}
    >
      {label}
      <span className='reflectOne'></span>
      <span className='reflectTwo'></span>
    </button>
  )
}

export default Button