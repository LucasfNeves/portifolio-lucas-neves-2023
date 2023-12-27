import { ComponentProps } from 'react'

type SectionProps = ComponentProps<'section'>

export function Section(props: SectionProps) {
  return (
    <section
      className="flex px-6 h-full lg:h-screen flex-col items-center justify-center lg:py-20 py-10"
      {...props}
    />
  )
}
