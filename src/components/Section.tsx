import { ComponentProps } from 'react'

type SectionProps = ComponentProps<'section'>

export function Section(props: SectionProps) {
  return (
    <section
      className="flex h-screen flex-col items-center justify-center pb-20 pt-20 "
      {...props}
    />
  )
}
