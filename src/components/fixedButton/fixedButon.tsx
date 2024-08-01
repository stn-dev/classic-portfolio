"use client"

import React, { useEffect, useState } from 'react'
import './FixedButton.scss'

function FixedButton() {

    const [showButton, setShowButton] = useState(false)
    let lastY = 0

    const controlNavbar: () => void = () => {

        if (window.scrollY > lastY) {
            setShowButton(true)
            console.log(showButton)
            console.log(lastY)

        } else {
            setShowButton(false)
            console.log(showButton)
            console.log(lastY)
        }

        lastY = window.scrollY

    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])

    return (
        <div
            className={`fixed-button ${showButton ? "hiddenButton" : ""}`}
        >

            <button className="cv">
                <a href="#" download="developer cv.png" >
                    DOWNLOAD CV
                </a>
                <span className='reflectOneCv' ></span>
                <span className='reflectTwoCv' ></span>
            </button>

            <button className="contact-me">
                <a href="#contact">
                    CONTACT ME
                </a>

                <span className='reflectOneContact' ></span>
                <span className='reflectTwoContact' ></span>
            </button>

        </div>
    )
}

export default FixedButton