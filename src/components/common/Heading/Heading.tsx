"use client"
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import './Heading.scss'

interface HeadingProps {
  title: string
  titleDeco: string
  className?: string
  isInversed?: boolean
  textFontSize?: string
}

function Heading(props: HeadingProps) {
  const { title, titleDeco, className = '', isInversed = false, textFontSize = "28px" } = props
  const ref = useRef<SVGTextElement | null>(null)

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(ref.current,
      {
        scrollTrigger: {
          trigger: ref.current,
          start: "top 50%",
          end: "bottom top",
          toggleActions: "play none none reverse",
        },
        strokeDashoffset: 0,
        duration: 2,
        delay: 0,
        opacity: 1
      })
  }, [])
  return (
    <>
      {
        isInversed ?
          (
            <div className={`heading-common`}>
              <h2> {titleDeco} </h2>
              <div className={`svg-container ${className}`} >
                <svg
                  viewBox='0 0 100 50'
                  width='100'
                  height="50"
                  fill='none'
                  fontSize={textFontSize}
                >
                  <text
                    x="50%"
                    y="55%"
                    textAnchor='middle'
                    dominantBaseline="middle"
                    vectorEffect="non-scaling-stroke"
                    ref={ref}
                  >
                    {title}
                  </text>
                </svg>
              </div>
            </div>
          )
          :
          (
            <div className={`heading-common `}>
              <div className={`svg-container ${className}`} >
                <svg viewBox='0 0 100 50' width='100' height="50" fill='none' fontSize={textFontSize} >
                  <text
                    x="50%"
                    y="55%"
                    textAnchor='middle'
                    dominantBaseline="middle"
                    vectorEffect="non-scaling-stroke"
                    ref={ref}
                  >
                    {title}
                  </text>
                </svg>
              </div>
              <h2> {titleDeco} </h2>
            </div>
          )
      }
    </>
  )
}

export default Heading