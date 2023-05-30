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
      <div className="flex  justify-between items-start px-4">
        <div className="mt-8 mb-8 ">
            <Title titleText="Contato" subTitle="entre em contato" />
          </div>
          <form className=" flex flex-col gap-8 py-10 min-w-[50%]">
            <div className="text-[#f1f5f4] ">
              <input 
                { ...register("name") } 
                className="outline-none border-b-2 border-[#e33d33] bg-transparent w-full px-2 py-1 placeholder:text-[#f1f5f4]"
                type="text" 
                placeholder="Seu Nome"
              />
            </div>
            <div className="text-[#f1f5f4] ">
              <input 
                { ...register("email") }
                className="outline-none border-b-2 border-[#e33d33] bg-transparent w-full px-2 py-1 placeholder:text-[#f1f5f4]"
                placeholder="Seu Email"
                type="email" 
              />
            </div>
            <div className="flex flex-col gap-2 text-[#f1f5f4]">
              <textarea
                { ...register("message") }
                className="outline-none border border-[#e33d33] bg-[#2d2d2d] py-4 px-4 rounded-md h-[15rem]"
                placeholder="Sua Mensagem..."
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