import { ComponentProps } from 'react'

type ParagraphProps = ComponentProps<'p'>

export function Paragraph(props: ParagraphProps) {
  return (
    <p
      className="font-roboto lg:text-justify text-base text-zinc-300"
      {...props}
    />
  )
}
