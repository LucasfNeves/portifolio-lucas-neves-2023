import { ComponentProps } from 'react'

type SubTitleProps = ComponentProps<'h2'>

export function SubTitle(props: SubTitleProps) {
  return <p className="mb-4 font-roboto text-2xl text-white" {...props} />
}
