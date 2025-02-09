"use client"
import React from 'react'
import './Heading.scss'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'

interface HeadingProps {
  title: string
  titleDeco: string
  className?: string
}

function Heading(props: HeadingProps) {
  const { title, titleDeco, className = '' } = props

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(`.heading-common ${className} svg text`,
      {
        scrollTrigger: {
          trigger: `.heading-common ${className}`,
          start: "top 50%",
          end: "bottom top",
          toggleActions: "play none none reverse",
        },
        strokeDashoffset: 0,
        duration: 2,
        delay: 0,
      })
  }, [])
  return (
    <div className={`heading-common ${className} `}>
      <div className='svg-container' >
        <svg viewBox='0 0 100 50' width='100' height="50" fill='none'>
          <text
            x="50%"
            y="55%"
            textAnchor='middle'
            dominantBaseline="middle"
            vectorEffect="non-scaling-stroke"
          >
            {title}
          </text>
        </svg>
      </div>
      <h2> {titleDeco} </h2>
    </div>
  )
}

export default Heading