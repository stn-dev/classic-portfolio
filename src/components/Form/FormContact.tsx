'use client'
import React, { useState } from 'react'
import Input from '../common/Input/Input'
import TextArea from '../common/TextArea/TextArea'
import Button from '../common/Button/Button'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import './FormContact.scss'

interface InputErroClassNmaes {
  name: boolean
  email: boolean
  message: boolean
}
function FormContact() {
  const [errorClass, setErrorClass] = useState<InputErroClassNmaes>({
    name: false, email: false, message: false
  })
  const sendMail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formdata = new FormData(e.currentTarget)
    const name = formdata.get("name")?.toString()
    const email = formdata.get("email")?.toString()
    const message = formdata.get("message")?.toString()

    const templateParams = {
      to_name: "Mario",
      name: email,
      message: message
    }

    if (!message) setErrorClass({ ...errorClass, message: true })
    if (!email) setErrorClass({ ...errorClass, email: true })
    if (!name) setErrorClass({ ...errorClass, name: true })

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please, make sure to fill all the field",
      });
      return
    } else {
      setErrorClass({ name: false, email: false, message: false })
      emailjs
        .send("service_56bza87", "template_8phdps8", templateParams, "Y55U-eVuDLLpHV7wh")
        .then(
          function (response) {
            Swal.fire({
              icon: "success",
              title: "OK",
              text: "Message send successfully",
            });
            console.log(response)
            e.currentTarget.reset()
            return
          },
          function (error) {
            Swal.fire({
              icon: "question",
              title: "Oops...",
              text: "An error occured! Please check your network",
            });
            console.log("error is " + error)
            return
          }
        )
    }
  }

  return (
    <form
      className="formulaire"
      onSubmit={sendMail}
    >
      <Input
        name='name'
        placeholder='NAME'
        clasName={errorClass.name ? "error" : ""}
      />
      <Input
        name='email'
        type='email'
        placeholder='E-MAIL'
        clasName={errorClass.email ? "error" : ""}
      />
      <TextArea
        name='message'
        placeholder='MESSAGE'
        clasName={errorClass.message ? "error" : ""}
      />
      <Button label='SUBMIT' variant='contrasted' />
    </form>
  )
}

export default FormContact