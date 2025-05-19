'use client'
import React, { useEffect, useState } from 'react'
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
  const [load, setLoad] = useState<boolean>(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const serviceId = import.meta.env.VITE_SERVICE_ID
  const templateId = import.meta.env.VITE_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_PUBLIC_KEY

  const sendMail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoad(true)
    const templateParams = {
      to_name: "Mario",
      name: email,
      message: message
    }

    if (!name.trim() || !email.trim() || !message.trim()) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please, make sure to fill all the field",
        scrollbarPadding: false,
      });
      setLoad(false)
      return
    } else {
      emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .then(
          function (response) {
            Swal.fire({
              icon: "success",
              title: "OK",
              text: "Message send successfully",
              scrollbarPadding: false,
            });
            setName('')
            setEmail('')
            setMessage('')
            setLoad(false)
            return
          },
          function (error) {
            Swal.fire({
              icon: "question",
              title: "Oops...",
              text: "An error occured! Please check your network",
              scrollbarPadding: false,
            });
            console.log("error is " + error)
            setLoad(false)
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
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
      />
      <Input
        name='email'
        type='email'
        placeholder='E-MAIL'
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
      />
      <TextArea
        name='message'
        placeholder='MESSAGE'
        value={message}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
      />
      <Button
        label={load ? "SUBMITING..." : 'SUBMIT'}
        variant='contrasted'
        isDisabled={load}
      />
    </form>
  )
}

export default FormContact