import React from 'react'
import './Container.scss'

interface ContainerProps {
  children: React.ReactNode
  tag?: "header" | "footer" | "div" | "section" | "nav"
  className?: string
}

function Container(Props: ContainerProps) {
  const { children, className = "", tag = "div" } = Props
  const Tag = tag
  return (
    <Tag className={`container-component ${className}`} >
      {children}
    </Tag>
  )
}

export default Container