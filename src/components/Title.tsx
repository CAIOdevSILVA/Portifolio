interface TitleProps {
  titleText: string
  subTitle: string
}

const Title = ({ titleText, subTitle }: TitleProps) => {
  return (
    <>
      <h3 className="text-[.9rem] md:text-[1.25rem] font-light text-[#f1f5f4]">{subTitle.toUpperCase()}</h3>
      <h1 className="text-[2.5rem] md:text-[3.75rem] text-[#f1f5f4] font-bold">{titleText.toUpperCase()}</h1>
    </>
  )
}

export default Title