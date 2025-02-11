import Image from 'next/image'
import React from 'react'
import './SkllBox.scss'

interface SkillBoxProps {
  textOnHover: string
  imageSrc: string
  containerClassName: `item${string}`
}

function SkillBox(props: SkillBoxProps) {
  const { textOnHover, imageSrc, containerClassName } = props
  return (
    <div className={`skill ${containerClassName}`} >
      <Image
        alt='skill box image' src={imageSrc}
        width={300}
        height={250}
      />
      <div className="hoverEffect">
        {textOnHover}
      </div>
    </div>
  )
}

export default SkillBox