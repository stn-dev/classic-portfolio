import React from 'react'
import './FixedButton.scss'

function FixedButton() {
    return (
        <div className="fixed-button">

            <button className="cv">
                <a href="#" download="/image/bgHeroImage.png" >
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