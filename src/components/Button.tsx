import { motion } from "framer-motion";

interface ButtonProps {
  buttonText: string;
  buttonLink?: string
  outline?: boolean;
}

const Button = ({ buttonText, buttonLink, outline }: ButtonProps) => {
  const style = "py-[.5rem] px-[1rem] md:py-[.8rem] md:px-[2rem] bg-[#e33d33] text-[#f1f5f4]"
  const outlineStyle = "py-[.5rem] px-[1rem] md:py-[.8rem] md:px-[2rem] border border-[#e33d33] text-[#e33d33]"

  return (
    <motion.a 
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      href={buttonLink ? buttonLink : "#"} 
      target="_blank"
      className={`${outline ? outlineStyle : style}`}
    >
      <button 
      >
        {buttonText.toUpperCase()}
      </button>
    </motion.a>
  )
}

export default Button