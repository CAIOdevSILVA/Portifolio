interface ButtonProps {
  buttonText: string;
  buttonLink?: string
  outline?: boolean;
}

const Button = ({ buttonText, buttonLink, outline }: ButtonProps) => {
  const style = "py-[.8rem] px-[2rem] bg-[#e33d33] text-[#f1f5f4]"
  const outlineStyle = "py-[.8rem] px-[2rem] border border-[#e33d33] text-[#e33d33]"

  return (
    <a 
      href={buttonLink ? buttonLink : "#"} 
      target="_blank"
      className={`${outline ? outlineStyle : style}`}
    >
      <button 
      >
        {buttonText.toUpperCase()}
      </button>
    </a>
  )
}

export default Button