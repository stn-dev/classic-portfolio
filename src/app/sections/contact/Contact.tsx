import React from 'react'
import Heading from '@/components/common/Heading/Heading'
import Container from '@/components/common/Container/Container'
import Icon from '@/components/icons';
import { informationData } from './data';
import FormContact from '@/components/Form/FormContact';
import './Contact.scss'

function Contact() {
  return (
    <Container className="contact-section" id='contact'>
      <Heading
        title='CONTACT'
        titleDeco='ME'
        textFontSize='20px'
        className='contact-heading'
      />
      <div className="form-part-container">
        <div className="title-and-form">
          <div className="form-part-title">
            GET IN TOUCH? SEND ME AN <span>E-MAIL</span> OR CONTACT MY <span>WHATSAPP</span>
          </div>
          <FormContact />
        </div>
        <div className="informations">
          {
            informationData.map((info, id) => (
              <div className={info.className} key={id}>
                <Icon name={info.iconType} />
                <p>{info.text}</p>
              </div>
            ))
          }
        </div>
      </div>
    </Container>
  )
}

export default Contact