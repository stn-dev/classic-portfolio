"use client"
import React, { useEffect, useState } from 'react'
import { DimensionType, OffsetType } from './type'
import { scrowlDownLetterData, socialMediaData } from './data'
import Link from 'next/link'
import Icon from '@/components/icons'
import Image from 'next/image'
import Container from '@/components/common/Container/Container'
import './Home.scss'


function Home() {
  const [offset, setOffset] = useState<OffsetType>({ offsetX: 0, offsetY: 0 })
  const [dimension, setDimension] = useState<DimensionType>({ width: 0, height: 0 })
  let x: number;
  let y: number;

  const catchPosition = (e: React.MouseEvent) => {
    x = e.clientX;
    y = e.clientY;
    setOffset({
      offsetX: ((x - dimension.width) / dimension.width) * 30,
      offsetY: -1 * (((y - dimension.height) / dimension.height) * 30)
    })
  }
  useEffect(() => {
    setDimension({ width: window.innerWidth / 2, height: window.innerHeight / 2 })
  }, [dimension.height, dimension.width])

  return (

    <Container
      className="home-section"
      id='home'
      mouseMoveHandler={catchPosition}
    >
      <div className="home-section__social-media">
        {
          socialMediaData.map((logo, id) => (
            <Link
              href={logo.href}
              key={`social--${id}`}
              target='_blank'
            >
              <Icon name={logo.icon} />
            </Link>
          ))
        }
        <hr />
      </div>

      <div className='home-section__center'>
        <div
          className="home-section__center__image2onHero"
          style={{ transform: `rotateX(${offset.offsetY}deg) rotateY(${offset.offsetX}deg)` }}
        >
          <Image
            alt='profile image'
            src={'/image/imageOnHeroDesktop.png'}
            width={800}
            height={1000}
            priority
          />
        </div>

        <div className="home-section__center__imageOnHero" >
          <Image
            src={"/image/heroImageOnMobile2.png"}
            alt='profile image'
            width={300}
            height={450}
          />
        </div>

        <div className="home-section__center__big-text">
          <p>I&apos;M</p>
          <h1>MARIO</h1>
          <h3>
            <span>FRONT-END </span>
            <span> DEVELOPER</span>
          </h3>
        </div>
      </div>

      <div className="home-section__scroll-indication">
        <div className='home-section__scroll-indication__text1'>
          {
            scrowlDownLetterData.scrowl.map((letter, id) => (
              <span key={id} > {letter.letter} </span>
            ))
          }
        </div>
        <div className='home-section__scroll-indication__text2'>
          {
            scrowlDownLetterData.down.map((letter, id) => (
              <span key={id} > {letter.letter} </span>
            ))
          }
        </div>
        <Icon name='arrowDwon' />
      </div>
    </Container>
  )
}

export default Home