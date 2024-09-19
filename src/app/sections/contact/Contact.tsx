"use client"

import React, { useRef } from 'react'
import './Contact.scss'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

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

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".contact-section",
                start: "top 50%",
                end: "bottom 60%",
                toggleActions: "play none none reverse",
            }
        })

        tl
            .to(".title-contact svg text", {
                strokeDashoffset: 0,
                duration: 1.5,
                delay: 0
            })

    }, [])



    return (
        <section className="contact-section" id='contact'>

            <div className="title-contact">
                <svg viewBox='0 0 50 50' >
                    <text x="50%" y="80%" fill='transparent' textAnchor='middle' >
                        CONTACT
                    </text>
                </svg>
                <h2>ME</h2>
            </div>

            <div className="form-part-container">

                <div className="title-and-form">

                    <div className="form-part-title">
                        GET IN TOUCH? SEND ME AN <span>E-MAIL</span> OR CONTACT MY <span>WHATSAPP</span>
                    </div>


                    <form className="formulaire" onSubmit={sendMail} ref={formRef} >
                        <input
                            type="text"
                            name='name'
                            placeholder='NAME'
                            ref={nameRef}
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

                        </textarea>

                        <button className="submit-btn">
                            SUBMIT
                            <span className='reflectOne' ></span>
                            <span className='reflectTwo' ></span>
                        </button>
                    </form>

                </div>





                <div className="informations">
                    <div className="mail">
                        <img src="icon/mail.png" />
                        <p>mariosantatra@gmail.com</p>
                    </div>

                    <div className="phone">
                        <img src="icon/phone.png" />
                        <p>+261 38 82 090 64</p>
                    </div>

                    <div className="localisation">
                        <img src="icon/localisation.png" />
                        <p>Madagascar / Tana</p>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Contact