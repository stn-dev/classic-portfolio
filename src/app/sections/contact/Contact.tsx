"use client"

import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import Input from '@/components/common/Input/Input'
import TextArea from '@/components/common/TextArea/TextArea'
import Button from '@/components/common/Button/Button'
import Heading from '@/components/common/Heading/Heading'
import Container from '@/components/common/Container/Container'
import './Contact.scss'
import Icon from '@/components/icons';
import { informationData } from './data';

type SendMail = (e: React.FormEvent) => void

// service_56bza87  template_8phdps8  Y55U-eVuDLLpHV7wh

function Contact() {

  const nameRef = useRef<HTMLInputElement | null>(null)
  const mailRef = useRef<HTMLInputElement | null>(null)
  const messageRef = useRef<HTMLTextAreaElement | null>(null)
  const formRef = useRef<HTMLFormElement | null>(null)

  const sendMail: SendMail = (e) => {

    let name = nameRef.current?.value
    let email = mailRef.current?.value
    let message = messageRef.current?.value

    const templateParams = {
      to_name: "Mario",
      name: email,
      message: message
    }

    e.preventDefault()

    if (nameRef.current?.value === "".trim()) {
      nameRef.current.className = "onError"

    }
    if (mailRef.current?.value === "".trim()) {
      mailRef.current.className = "onError"

    }
    if (messageRef.current?.value === "".trim()) {
      messageRef.current.className = "onError"

    }

    if (nameRef.current?.value === "".trim() ||
      mailRef.current?.value === "".trim() ||
      messageRef.current?.value === "".trim()
    ) {

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Some information are missing",
      });

    } else {

      nameRef?.current ? nameRef.current.className = "" : null
      mailRef?.current ? mailRef.current.className = "" : null
      messageRef?.current ? messageRef.current.className = "" : null

      if (name !== "".trim() && email !== "".trim() && message !== "".trim()) {
        emailjs
          .send("service_56bza87", "template_8phdps8", templateParams, "Y55U-eVuDLLpHV7wh")
          .then(
            function (response) {

              Swal.fire({
                icon: "success",
                title: "OK",
                text: "Message send successfully",
              });

              formRef.current?.reset()

              console.log(response)
            },
            function (error) {
              console.log("error is " + error)
              console.log("there is an error")
            }
          )
      }

      return
    }

  }

  // useGSAP(() => {
  //   gsap.registerPlugin(ScrollTrigger)

  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".contact-section",
  //       start: "top 50%",
  //       end: "bottom 60%",
  //       toggleActions: "play none none reverse",
  //     }
  //   })

  //   tl
  //     .to(".title-contact svg text", {
  //       strokeDashoffset: 0,
  //       duration: 1.5,
  //       delay: 0
  //     })

  // }, [])



  return (
    <Container className="contact-section" id='contact'>
      <Heading
        title='CONTACT'
        titleDeco='ME'
        textFontSize='20px'
        className='contact-heading'
      />

      {/* <div className="title-contact">
        <svg viewBox='0 0 50 50' >
          <text x="50%" y="50%" fill='transparent' textAnchor='middle' dominantBaseline='middle' >
            CONTACT
          </text>
        </svg>
        <h2>ME</h2>
      </div> */}

      <div className="form-part-container">

        <div className="title-and-form">

          <div className="form-part-title">
            GET IN TOUCH? SEND ME AN <span>E-MAIL</span> OR CONTACT MY <span>WHATSAPP</span>
          </div>


          <form
            className="formulaire"
            onSubmit={sendMail}
            ref={formRef}
          >
            <Input
              name='name'
              placeholder='NAME'
              ref={nameRef}
            />
            <Input
              name='email'
              type='email'
              placeholder='E-MAIL'
              ref={mailRef}
            />
            <TextArea
              name='message'
              placeholder='MESSAGE'
              ref={messageRef}
            />
            {/* <input
                            name='message'
                            placeholder='MESSAGE'
                            ref={messageRef}
                        />
                        <input
                            type="text"
                            name='email'
                            placeholder='E-MAIL'
                            ref={mailRef}
                        />
                        <textarea
                            name="message"
                            placeholder='MESSAGE'
                            ref={messageRef}
                        >

                        </textarea> */}

            <Button label='SUBMIT' variant='contrasted' />
          </form>

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
          {/* <div className="mail">
            <Icon name='message' />
            <p>mariosantatra@gmail.com</p>
          </div>

          <div className="phone">
            <Icon name='phone' />

            <p>+261 38 82 090 64</p>
          </div>

          <div className="localisation">
            <Icon name='localisation' />

            <p>Madagascar / Tana</p>
          </div> */}
        </div>

      </div>

    </Container>
  )
}

export default Contact