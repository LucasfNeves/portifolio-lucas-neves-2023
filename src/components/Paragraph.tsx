import { ComponentProps } from 'react'

type ParagraphProps = ComponentProps<'p'>

export function Paragraph(props: ParagraphProps) {
  return (
    <p
      className="text-justify font-roboto text-base text-zinc-300"
      {...props}
    />
  )
}
