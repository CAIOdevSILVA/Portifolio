import { Title } from "./index"

import { useForm } from "react-hook-form"

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const { register, handleSubmit,formState:{ errors }, reset } = useForm<ContactForm>()

  const onSubmit = handleSubmit(data => console.log(data))

  return (
    <section className="lg:mt-32 mt-12 mb-8 px-[6.25rem]" id="contact">
      <div className="flex flex-col px-4 max-w-[50%] shadow-card">
        <div className="mt-8 mb-8 ">
            <Title titleText="Contato" subTitle="entre em contato" />

            <p className="text-[#f1f5f4] text-[18px]">

            </p>
          </div>
          <form className=" flex flex-col gap-4 py-6">
            <div className="flex flex-col gap-2 text-[#f1f5f4]">
              <label>Seu Nome</label>
              <input 
                { ...register("name") } 
                className="outline-none border-none bg-[#e33d33] py-4 px-4 rounded-md"
                type="text" 
                placeholder="Qual o seu nome ?"
              />
            </div>
            <div className="flex flex-col gap-2 text-[#f1f5f4]">
              <label>Seu Email</label>
              <input 
                { ...register("email") }
                className="outline-none border-none bg-[#e33d33] py-4 px-4 rounded-md"
                placeholder="Qual o seu email ?"
                type="email" 
              />
            </div>
            <div className="flex flex-col gap-2 text-[#f1f5f4]">
              <label>Sua Mensagem</label>
              <textarea
                { ...register("message") }
                className="outline-none border-none bg-[#e33d33] py-4 px-4 rounded-md h-[15rem]"
                placeholder="Qual a sua mensagem ?"
              ></textarea>
            </div>
            <button
              className="py-[.8rem] px-[2rem] mt-8 max-w-[10rem] border border-[#e33d33] text-[#e33d33]"
              onClick={() => onSubmit}
            >
              Enviar
            </button>
          </form>
      </div>
    </section>
  )
}

export default Contact