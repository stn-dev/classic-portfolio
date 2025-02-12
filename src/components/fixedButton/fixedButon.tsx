"use client"
import React, { useEffect, useRef, useState } from 'react'
import Button from '../common/Button/Button'
import './FixedButton.scss'

function FixedButton() {
  const [showButton, setShowButton] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    const controlNavbar = () => {
      window.scrollY > lastY.current ? setShowButton(true) : setShowButton(false)
      lastY.current = window.scrollY
    }
    window.addEventListener('scroll', controlNavbar)
    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [])

  return (
    <div className={`fixed-button ${showButton ? "hiddenButton" : ""}`}>
      <a href="/image/developerCV.png" download={"Mario developper CV"}>
        <Button label='DOWNLOAD CV' variant='contrasted' />
      </a>
      <a href="#contact">
        <Button label='CONTACT ME' variant='dark' />
      </a>
    </div>
  )
}

export default FixedButton