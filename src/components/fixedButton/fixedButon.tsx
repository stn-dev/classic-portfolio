"use client"
import React, { useEffect, useState } from 'react'
import Button from '../common/Button/Button'
import './FixedButton.scss'

function FixedButton() {
  const [showButton, setShowButton] = useState(false)
  let lastY = 0
  const controlNavbar = () => {
    window.scrollY > lastY ? setShowButton(true) : setShowButton(false)
    // if (window.scrollY > lastY) {
    //   setShowButton(true)
    // } else {
    //   setShowButton(false)
    // }
    lastY = window.scrollY
  }

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)
    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [])

  return (
    <div className={`fixed-button ${showButton ? "hiddenButton" : ""}`}>
      <a href="/image/developerCV.png" download={"test"}>
        <Button label='DOWNLOAD CV' variant='contrasted' />
      </a>
      <Button label='CONTACT ME' variant='dark' />
    </div>
  )
}

export default FixedButton