/* eslint-disable react/no-unescaped-entities */
"use client"

import React from 'react'
import './About.scss'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'


function About() {



    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".about-section",
                start: "top 50%",
                end: "bottom 60%",
                toggleActions: "play none none reverse",
            }
        })

        tl
            .to(".title svg text", {
                strokeDashoffset: 0,
                duration: 1.5,
                delay: 0

            })

    }, [])

    return (
        <section
            className='about-section'
            id='about'
        >
            <div className="title">
                <svg viewBox='0 0 50 50' >
                    <text x="50%" y="80%" fill='transparent' textAnchor='middle' >
                        ABOUT
                    </text>
                </svg>
                <h2>ME</h2>
            </div>

            <div className="image-and-text">
                <img src="/image/aboutMyImage.png" alt="" className="aboutImage" />

                <div className="text-about">
                    I AM A
                    <span> FRONT END </span>
                    DEVELOPER BASED IN
                    MADAGASCAR. I AM A
                    <span> UI/UX DESIGNER </span>
                    TOO
                    AT THE  SAME TIME.
                    <span> PASIONNATE </span>
                    OF
                    CREATING A BEAUTIFUL
                    <span> USER INTERFACE </span>
                    WITH
                    <span> MODERN DESIGN </span>
                    AND
                    <span> FUNCTIONALITY </span>
                    I GOT MY CERTIFICATE FROM
                    <span> <a href="https://www.facebook.com/saha.academy.261/" target="_blank" >SAHA-ACADEMY</a> </span>
                    WHERE I LEARNED THE BEST WORKFLOW AS
                    WEB DEVELOPER
                    IF YOU HAVE A PROJECT TO BUILD.
                    <span> <a href="#contact" >CONTACT ME</a> </span>
                    AND LET'S MAKE THE MAGIC HAPPEN
                </div>
            </div>

        </section>
    )
}

export default About