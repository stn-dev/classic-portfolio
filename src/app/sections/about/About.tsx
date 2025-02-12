import React from 'react'
import Heading from '@/components/common/Heading/Heading'
import Image from 'next/image'
import Container from '@/components/common/Container/Container'
import Link from 'next/link'
import './About.scss'

function About() {
  return (
    <Container
      className='about-section'
      id='about'
    >
      <Heading title='ABOUT' titleDeco='ME' />
      <div className="about-section__image-and-text">
        <Image
          src="/image/aboutMyImage.png"
          alt="about iamge profile"
          className="about-section__image-and-text__image"
          width={400}
          height={450}
        />
        <div className="about-section__image-and-text__text">
          I am a <span>front-end</span> developer passionate about creating interactive and modern <span>Web experiences</span>. After completing training at <span><Link href="https://saha-technology.com/fr" target='_blank' >Saha-Academy</Link></span> , i gained <span>strong skills</span> in HTML , CSS , javaScript and other front-end technologies such as <span>React</span> and <span>Next.js</span> . I am also interested in <span>UI/UX desing</span> , which allow me to create visually appealing and <span>functional interface</span>. My goal is to transform creatives ideas into <span>high-quality</span> digital products that enchance the <span>user experience</span>. Fell free to <span><Link href='#contact' >reach out</Link></span> if you&apos;d like to <span>collaborate</span> or have any question.
        </div>
      </div>
    </Container>
  )
}

export default About