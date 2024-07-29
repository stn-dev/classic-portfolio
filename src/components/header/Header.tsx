"use client"

import React, { useState } from 'react'
import './Header.scss'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

type Menufunction = () => void

function Header() {

    const [menu, setMenu] = useState<boolean | null>(null)
    const toHideMenu: Menufunction = () => setMenu(false)
    const toShowMenu: Menufunction = () => setMenu(true)


    useGSAP(() => {
        const tl = gsap.timeline()
        const tl2 = gsap.timeline()

        if (menu) {
            console.log(menu)
            tl
                .to(".transition", {
                    top: 0,
                    display: "block",
                    ease: "elastic",
                    duration: 0.1,
                })
                .to(".transition", {
                    rotate: 0,
                    duration: 0.2
                })
                .to(".transition", {
                    left: 0,
                    width: "100vw",
                    duration: 0.1
                }, "+=0.3")
                .to(".navigation-menu", {
                    left: 0,
                    opacity: 1,
                    duration: 0.1
                })
                .to(".navigation-menu .links li a", {
                    opacity: 1,
                    stagger: 0.1
                })
                .to(".navigation-menu img", {
                    display: "block",
                    opacity: 1,
                    right: "-22vw",
                    bottom: "-20vw",
                    duration: 0.1
                })
        }

        if (menu == false) {
            console.log(menu)

            tl2
                .to(".navigation-menu .links li a", {
                    opacity: 0,
                    stagger: 0.1
                })
                .to(".navigation-menu img", {
                    right: "-52vw",
                    bottom: "-34vw",
                    duration: 0.1,
                }, "-=0.2")
                .to(".navigation-menu img", {
                    display: "none",
                    duration: 0.1,
                })
                .to(".navigation-menu", {
                    opacity: 0,
                    left: "-100vw",
                    duration: 0.1,
                })
                .to(".transition", {
                    width: "10vw",
                    left: "40%",
                    duration: 0.2,
                })
                .to(".transition", {
                    rotate: 25,
                })
                .to(".transition", {
                    top: "100vh",
                    duration: 0.1,
                })
                .to(".transition", {
                    display: 'none',
                    duration: 0.1,
                }, "+=0.5")
        }

    }, [menu])

    return (
        <div className='header-section' >

            <div className="navbar">
                <img src="/icon/logo.png" alt="logo icon" />
                <div
                    onClick={toShowMenu}
                    className="menu-btn"
                >
                    <img

                        src="/icon/menu icon.png" alt="menu icon"
                    />
                    <span>MENU</span>
                </div>

            </div>

            <div className="navigation-menu">
                <ul className="links">
                    <li onClick={toHideMenu} >
                        <a href="#home">
                            HOME
                        </a>
                    </li>
                    <li onClick={toHideMenu} >
                        <a href="#about">ABOUT</a>
                    </li>
                    <li onClick={toHideMenu} >
                        <a href="#skill">SKILL</a>
                    </li>
                    <li onClick={toHideMenu} >
                        <a href="#contact">CONTACT</a>
                    </li>
                </ul>

                <img src="/image/menu-deco.png" alt="decoration image" />

                <div
                    onClick={toHideMenu}
                    className="close"
                >
                    <p>CLOSE</p>
                    <img src="/icon/closeIcon.png" alt="close icon" />
                </div>

            </div>

            <div className="transition"></div>

        </div>
    )
}

export default Header