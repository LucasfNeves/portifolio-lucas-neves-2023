import { ComponentProps } from 'react'

type SectionProps = ComponentProps<'section'>

export function Section(props: SectionProps) {
  return (
    <section
      className="flex h-full flex-col items-center justify-center px-6 py-10 lg:h-screen lg:py-20"
      {...props}
    />
  )
}
