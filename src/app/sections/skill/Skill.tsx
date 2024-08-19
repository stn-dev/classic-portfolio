"use client"

import React from 'react'
import './Skill.scss'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

function Skill() {

    const scrollStyle1 = { "--myScrollStyle": "15s" } as React.CSSProperties
    const scrollStyle2 = { "--myScrollStyle": "12s" } as React.CSSProperties
    const scrollStyle3 = { "--myScrollStyle": "8s" } as React.CSSProperties

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".skill-section",
                start: "top 50%",
                end: "bottom 60%",
                toggleActions: "play none none reverse",
            }
        })

        tl
            .to(".title-skill svg text", {
                strokeDashoffset: 0,
                duration: 4,
                delay: 0.5

            })

    }, [])


    return (
        <section className="skill-section" id="skill">

            <div className="title-skill">
                <h2>MY</h2>
                <svg viewBox='0 0 50 50' >
                    <text x="50%" y="80%" fill='transparent' textAnchor='middle' >
                        SKILL
                    </text>
                </svg>
            </div>

            {/* all the skll */}

            <div className="skills-container">

                {/* the core  */}

                <div className="core-part">

                    <h4>CORE</h4>

                    <div className="skill-container" style={scrollStyle1} >

                        <div className="scroller scroller1">

                            <div className="skill item1">
                                <img src="/image/jévascript.png" />
                                <div className="hoverEffect">
                                    JAVASCRIPT
                                </div>
                            </div>

                            <div className="skill item2">
                                <img src="/image/css.png" />
                                <div className="hoverEffect">
                                    CSS
                                </div>
                            </div>

                            <div className="skill item3">
                                <img src="/image/html.png" />
                                <div className="hoverEffect">
                                    HTML
                                </div>
                            </div>

                            <div className="skill item4">
                                <img src="/image/typescript.png" />
                                <div className="hoverEffect">
                                    TYPESCRIPT
                                </div>
                            </div>

                        </div>

                        {/* repeted */}

                        <div className="scroller scroller2">

                            <div className="skill item5">
                                <img src="/image/jévascript.png" />
                                <div className="hoverEffect">
                                    JAVASCRIPT
                                </div>
                            </div>

                            <div className="skill item6">
                                <img src="/image/css.png" />
                                <div className="hoverEffect">
                                    CSS
                                </div>
                            </div>

                            <div className="skill item7">
                                <img src="/image/html.png" />
                                <div className="hoverEffect">
                                    HTML
                                </div>
                            </div>

                            <div className="skill item8">
                                <img src="/image/typescript.png" />
                                <div className="hoverEffect">
                                    TYPESCRIPT
                                </div>
                            </div>

                        </div>



                    </div>

                </div>


                {/* the tools  */}


                <div className="tools-part">

                    <h4>TOOLS</h4>

                    <div className="skill-container" style={scrollStyle2} >

                        <div className="scroller scroller1">

                            <div className="skill item1">
                                <img src="/image/git.png" />
                                <div className="hoverEffect">
                                    GIT
                                </div>
                            </div>

                            <div className="skill item2">
                                <img src="/image/figma.png" />
                                <div className="hoverEffect">
                                    FIGMA
                                </div>
                            </div>

                            <div className="skill item3">
                                <img src="/image/github.png" />
                                <div className="hoverEffect">
                                    GITHUB
                                </div>
                            </div>

                            <div className="skill item4">
                                <img src="/image/vscode.png" />
                                <div className="hoverEffect">
                                    VSCODE
                                </div>
                            </div>

                            <div className="skill item5">
                                <img src="/image/gsap.png" />
                                <div className="hoverEffect">
                                    GSAP
                                </div>
                            </div>

                        </div>

                        <div className="scroller scroller2">

                            <div className="skill item1">
                                <img src="/image/git.png" />
                                <div className="hoverEffect">
                                    GIT
                                </div>
                            </div>

                            <div className="skill item2">
                                <img src="/image/figma.png" />
                                <div className="hoverEffect">
                                    FIGMA
                                </div>
                            </div>

                            <div className="skill item3">
                                <img src="/image/github.png" />
                                <div className="hoverEffect">
                                    GITHUB
                                </div>
                            </div>

                            <div className="skill item4">
                                <img src="/image/vscode.png" />
                                <div className="hoverEffect">
                                    VSCODE
                                </div>
                            </div>

                            <div className="skill item5">
                                <img src="/image/gsap.png" />
                                <div className="hoverEffect">
                                    GSAP
                                </div>
                            </div>

                        </div>



                    </div>

                </div>

                <div className="framework-part" style={scrollStyle3} >

                    <h4>FRAMEWORK</h4>

                    <div className="skill-container">

                        <div className="scroller scroller1">

                            <div className="skill item1">
                                <img src="/image/react.png" />
                                <div className="hoverEffect">
                                    REACT
                                </div>
                            </div>

                            <div className="skill item2">
                                <img src="/image/sass.png" />
                                <div className="hoverEffect">
                                    SASS
                                </div>
                            </div>

                            <div className="skill item3">
                                <img src="/image/tailwind.png" />
                                <div className="hoverEffect">
                                    TAILWIND
                                </div>
                            </div>

                            <div className="skill item4">
                                <img src="/image/next.png" />
                                <div className="hoverEffect">
                                    NEXT
                                </div>
                            </div>

                        </div>

                        <div className="scroller scroller2">

                            <div className="skill item1">
                                <img src="/image/react.png" />
                                <div className="hoverEffect">
                                    REACT
                                </div>
                            </div>

                            <div className="skill item2">
                                <img src="/image/sass.png" />
                                <div className="hoverEffect">
                                    SASS
                                </div>
                            </div>

                            <div className="skill item3">
                                <img src="/image/tailwind.png" />
                                <div className="hoverEffect">
                                    TAILWIND
                                </div>
                            </div>

                            <div className="skill item4">
                                <img src="/image/next.png" />
                                <div className="hoverEffect">
                                    NEXT
                                </div>
                            </div>

                        </div>




                    </div>



                </div>

            </div>

        </section>
    )
}

export default Skill