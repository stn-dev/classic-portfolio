import React from 'react'
import './Container.scss'

interface ContainerProps {
  children: React.ReactNode
  tag?: "header" | "footer" | "div" | "section" | "nav"
  className?: string
  id?: string
  mouseMoveHandler?: (e: React.MouseEvent) => void
}

function Container(Props: ContainerProps) {
  const { children, className = "", tag = "section", mouseMoveHandler, id = "" } = Props
  const Tag = tag
  return (
    <Tag
      id={id}
      className={`container-component ${className}`}
      onMouseMove={mouseMoveHandler}
    >
      {children}
    </Tag>
  )
}

export default Container