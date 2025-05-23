"use client"

import React, { useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import headerLinks from './data'
import Link from 'next/link'
import Container from '../common/Container/Container'
import Deco from '../icons/Deco'
import Icon from '../icons'
import './Header.scss'

function Header() {
  const [menu, setMenu] = useState<boolean>(false)
  const toHideMenu = () => setMenu(false)
  const toShowMenu = () => setMenu(true)

  useGSAP(() => {
    const tl1 = gsap.timeline()
    const tl2 = gsap.timeline()

    if (menu) {
      tl1
        .to(".header-section__transition", {
          top: 0,
          opacity: 1,
          display: "block",
          ease: "elastic",
          duration: 0.1,
        })
        .to(".header-section__transition", {
          rotate: 0,
          duration: 0.2
        })
        .to(".header-section__transition", {
          left: 0,
          width: "100vw",
          duration: 0.1
        }, "+=0.3")
        .to(".header-section__navigation-menu", {
          left: 0,
          opacity: 1,
          duration: 0.1
        })
        .to(".header-section__navigation-menu__links li a", {
          opacity: 1,
          stagger: 0.1
        })
        .to(".header-section__navigation-menu__deco", {
          display: "block",
          bottom: "0",
          duration: 0.5
        }, "-=0.4")
    }
    if (menu === false) {
      tl2
        .to(".header-section__navigation-menu__links li a", {
          opacity: 0,
          stagger: 0.1
        })
        .to(".header-section__navigation-menu__deco", {
          bottom: "-100%",
          duration: 0.4,
        }, "-=0.4")
        .to(".header-section__navigation-menu__deco", {
          display: "none",
          duration: 0,
        })
        .to(".header-section__navigation-menu", {
          opacity: 0,
          left: "-100vw",
          duration: 0.1,
        })
        .to(".header-section__transition", {
          opacity: 0,
          width: "10vw",
          left: "40%",
          duration: 0.2,
        })
        .to(".header-section__transition", {
          rotate: 25,
        })
        .to(".header-section__transition", {
          top: "-150vh",
          duration: 0.1,
        })
        .to(".header-section__transition", {
          display: 'none',
          duration: 0,
        })
    }
  }, [menu])

  return (
    <header className='header-section' >
      <Container>
        <div className="header-section__navbar">
          <Icon name='logo' />
          <div
            className="header-section__navbar__menu"
            onClick={toShowMenu}
          >
            MENU
          </div>
        </div>
        <div className="header-section__navigation-menu">
          <ul className="header-section__navigation-menu__links">
            {
              headerLinks.map((link, id) => (
                <li onClick={toHideMenu} key={id} >
                  <Link href={link.href} >
                    {link.label}
                  </Link>
                </li>
              ))
            }
          </ul>
          <Deco className='header-section__navigation-menu__deco' />
          <div
            onClick={toHideMenu}
            className="header-section__navigation-menu__close"
          >
            CLOSE
          </div>
        </div>
        <div className="header-section__transition"></div>
      </Container>
    </header>
  )
}

export default Header