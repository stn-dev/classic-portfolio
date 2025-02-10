import React, { InputHTMLAttributes } from 'react'
import './Input.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: "text" | "password" | "email"
  name: string
  placeholder: string
  ref?: React.ForwardedRef<HTMLInputElement>
  clasName?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void

}
function Input(props: InputProps) {
  const {
    type = "text",
    name,
    placeholder,
    ref,
    clasName = "",
    onChange
  } = props
  return (
    <input
      name={name}
      placeholder={placeholder}
      type={type}
      ref={ref}
      onChange={onChange}
      className={`input-component ${clasName}`}
    />
  )
}

export default Input