import React, { TextareaHTMLAttributes } from 'react'
import './Textarea.scss'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string
  placeholder: string
  ref?: React.LegacyRef<HTMLTextAreaElement>
  clasName?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}
function TextArea(props: TextAreaProps) {
  const {
    name,
    placeholder,
    ref,
    clasName = "",
    value,
    onChange
  } = props
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      ref={ref}
      value={value}
      onChange={onChange}
      className={`textArea-component ${clasName}`}
    />
  )
}

export default TextArea