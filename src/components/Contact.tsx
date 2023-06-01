import { useState } from "react"
import emailjs from "@emailjs/browser"
import validator from "validator"

import { Title } from "./index"

import { useForm } from "react-hook-form"

interface ContactForm {
  name: string;
  email: string;
  message: string;
}


const Contact = () => {
  const [send, setSend] = useState(false)
  const { register, handleSubmit,formState:{ errors }, reset } = useForm<ContactForm>()

  // const onSubmit = handleSubmit(data => console.log(data))
  const onSubmit = async(data: ContactForm) => {
    setSend(true)
    
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: data.name,
        to_name: "Caio SIlva",
        from_email: data.email,
        to_email: "caiossantosp5563@gmail.com",
        message: data.message
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      alert("Obrigado pela mensagem!\nRetornarei assim que possível.")
      setSend(false)
      reset()
    })
  }

  return (
    <section className="lg:mt-32 mt-12 mb-8 px-[2rem] lg:px-[6.25rem]" id="contact">
      <div className="lg:flex felx-col justify-between items-start md:px-4">
        <div className="mt-8 mb-8 ">
            <Title titleText="Contato" subTitle="entre em contato" />
          </div>
          <form className=" flex flex-col gap-8 py-10 min-w-[50%]">
            <div className="text-[#f1f5f4] ">
              <input 
                { ...register("name", { required: true }) } 
                className="outline-none border-b-2 border-[#e33d33] bg-transparent w-full px-2 py-1 placeholder:text-[#f1f5f4]"
                type="text" 
                placeholder="Seu Nome"
              />
              {errors?.name?.type === "required" && (
                <p className="text-[#e33d33] text-xs mt-1">CAMPO OBRIGATÓRIO</p>
              ) }
            </div>
            <div className="text-[#f1f5f4] ">
              <input 
                { ...register("email", { required: true, validate : value => validator.isEmail(value)  }) }
                className="outline-none border-b-2 border-[#e33d33] bg-transparent w-full px-2 py-1 placeholder:text-[#f1f5f4]"
                placeholder="Seu Email"
                type="email" 
              />
               {errors?.email?.type === "required" && (
                <p className="text-[#e33d33] text-xs mt-1">CAMPO OBRIGATÓRIO</p>
              ) }
               {errors?.email?.type === "validate" && (
                <p className="text-[#e33d33] text-xs mt-1">INSIRA UM EMAIL VÁLIDO</p>
              ) }
            </div>
            <div className="flex flex-col gap-2 text-[#f1f5f4]">
              <textarea
                { ...register("message", { required: true }) }
                className="outline-none border border-[#e33d33] bg-[#2d2d2d] py-4 px-4 rounded-md h-[15rem]"
                placeholder="Sua Mensagem..."
              ></textarea>
               {errors?.message?.type === "required" && (
                <p className="text-[#e33d33] text-xs mt-1">CAMPO OBRIGATÓRIO</p>
              ) }
            </div>
            <button
              className="py-[.6rem] px-[1rem] md:py-[.8rem] md:px-[2rem] mt-8 max-w-[7rem] md:max-w-[10rem] border border-[#e33d33] text-[#e33d33]"
              onClick={(e) => {
                e.preventDefault()
                handleSubmit(onSubmit)()
              }}
            >
              {send ? "Enviando..." : "Enviar"}
            </button>
          </form>
      </div>
    </section>
  )
}

export default Contact