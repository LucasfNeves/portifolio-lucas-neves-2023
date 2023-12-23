import { ComponentProps } from 'react'

type ButtonLgProps = ComponentProps<'button'> & {
  title: string
  icon?: string
  linkTo?: string
}

export function ButtonLg({ ...props }: ButtonLgProps) {
  return (
    <button
      type="button"
      className="px-20 py-4 flex items-center justify-center text-gray-800 font-roboto font-bold rounded-md bg-cyan-400 transition duration-300 ease-in-out  hover:bg-cyan-300"
      {...props}
    >
      {props.icon}
      {props.title}
    </button>
  )
}
