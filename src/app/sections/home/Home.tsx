"use client"

import React, { useState } from 'react'
import './Home.scss'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Document from 'next/document'

function Home() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const [offsetX, setOffsetX] = useState<Number>(0)
    const [offsetY, setOffsetY] = useState<Number>(0)

    const middleX = window.innerWidth / 2
    const middleY = window.innerHeight / 2


    const catchPosition = (e: React.MouseEvent) => {
        setX(e.clientX)
        setY(e.clientY)

        setOffsetX(((x - middleX) / middleX) * 50)
        setOffsetY(-1 * (((y - middleY) / middleY) * 50))

    }







    // useGSAP(() => {

    //     gsap.registerPlugin(ScrollTrigger)
    //     const timeline = gsap.timeline()

    //     timeline
    //         .from(".home-section .big-text", {
    //             yPercent: -10,
    //             opacity: 0,
    //             color: 'red'
    //         })
    //         .from(".imageOnHero", {
    //             yPercent: -10,
    //             opacity: 0,
    //         })
    //         .from(".social-media", {
    //             left: "-5.3vw",
    //             opacity: 0
    //         })
    //         .from(".scroll-indication", {
    //             right: "-5.3vw",
    //             opacity: 0
    //         })


    // }, [])

    return (
        <section
            className="home-section"
            id='home'
            onMouseMove={catchPosition}
        >
            <div className="big-text">
                <p>I'M</p>
                <h1>MARIO</h1>
                <h3>
                    <span>
                        FRONT-END
                    </span>
                    <span>
                        DEVELOPER
                    </span>
                </h3>
            </div>

            <div className="social-media">
                <img src="/icon/facebook.png" alt="faccebook icon" />
                <img src="/icon/insta.png" alt="instagram icon" />
                <img src="/icon/whatsapp.png" alt="whatsapp icon" />
                <hr />
            </div>

            <div className="imageOnHero" >
                <img src="/image/heroImage.png" alt="" />
            </div>

            <div
                className="image2onHero"

                style={{ transform: `rotateX(${offsetY}deg) rotateY(${offsetX}deg)` }}
            >
                <img src="/image/bgHeroImage.png" alt="" />
            </div>

            <div className="scroll-indication">
                <p>SCROLL</p>
                <p> DONW</p>
                <img src="/icon/arrowDown.png" alt="arrowdown icon" />
            </div>
        </section>
    )
}

export default Home