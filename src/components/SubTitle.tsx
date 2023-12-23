import { ComponentProps } from 'react'

type SubTitleProps = ComponentProps<'h2'>

export function SubTitle(props: SubTitleProps) {
  return <p className="font-roboto mb-4 text-2xl text-white" {...props} />
}
