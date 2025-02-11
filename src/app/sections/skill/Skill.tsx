import React from 'react'
import Heading from '@/components/common/Heading/Heading'
import Container from '@/components/common/Container/Container'
import { core, coreScrollerOne, coreScrollerTwo, framework, frameworkScrollOne, frameworkScrollTwo, tools, toolsScrollOne, toolsScrollTwo } from './data'
import SkillBox from '@/components/SkillBox/SkillBox'
import './Skill.scss'

function Skill() {
  return (
    <Container className="skill-section" id="skill">
      <Heading title='SKILL' titleDeco='MY' isInversed={true} />
      <div className="skills-container"  >
        <div className="core-part">
          <h4>{core.title}</h4>
          <div className='skill-container' style={core.style}>
            <div className={`scroller ${coreScrollerOne.classNames}`}  >
              {
                coreScrollerOne.content.map((box, id) => (
                  <SkillBox
                    key={id}
                    containerClassName={box.className}
                    imageSrc={box.src}
                    textOnHover={box.text}
                  />
                ))
              }
            </div>
            <div className={`scroller ${coreScrollerTwo.classNames}`} >
              {
                coreScrollerTwo.content.map((box, id) => (
                  <SkillBox
                    key={id}
                    containerClassName={box.className}
                    imageSrc={box.src}
                    textOnHover={box.text}
                  />
                ))
              }
            </div>
          </div>
        </div>

        <div className="tools-part">
          <h4>{tools.title}</h4>
          <div className='skill-container' style={tools.style}>
            <div className={`scroller ${toolsScrollOne.classNames}`}  >
              {
                toolsScrollOne.content.map((box, id) => (
                  <SkillBox
                    key={id}
                    containerClassName={box.className}
                    imageSrc={box.src}
                    textOnHover={box.text}
                  />
                ))
              }
            </div>
            <div className={`scroller ${toolsScrollTwo.classNames}`} >
              {
                toolsScrollTwo.content.map((box, id) => (
                  <SkillBox
                    key={id}
                    containerClassName={box.className}
                    imageSrc={box.src}
                    textOnHover={box.text}
                  />
                ))
              }
            </div>
          </div>
        </div>

        <div className="tools-part">
          <h4>{framework.title}</h4>
          <div className='skill-container' style={framework.style}>
            <div className={`scroller ${frameworkScrollOne.classNames}`}  >
              {
                frameworkScrollOne.content.map((box, id) => (
                  <SkillBox
                    key={id}
                    containerClassName={box.className}
                    imageSrc={box.src}
                    textOnHover={box.text}
                  />
                ))
              }
            </div>
            <div className={`scroller ${frameworkScrollTwo.classNames}`} >
              {
                frameworkScrollTwo.content.map((box, id) => (
                  <SkillBox
                    key={id}
                    containerClassName={box.className}
                    imageSrc={box.src}
                    textOnHover={box.text}
                  />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Skill