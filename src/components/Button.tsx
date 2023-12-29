import Link from 'next/link'
import { ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import { Url } from 'next/dist/shared/lib/router/router'

const ButtonVariants = tv({
  slots: {
    container:
      'flex items-center gap-2 justify-center font-roboto font-bold transition duration-300 ease-in-out',
    icon1: 'flex items-center justify-center',
    icon2: 'flex items-center justify-center',
  },

  variants: {
    variant: {
      CardProject: {
        container: 'bg-cyan-400 hover:bg-cyan-300 w-[10rem] rounded-md h-12',
      },
      SectionContact: {
        container:
          'bg-cyan-400 hover:bg-cyan-300 w-[13rem] rounded-3xl h-12 text-neutral-900',
        icon1: 'text-neutral-900',
        icon2: 'text-neutral-900',
      },
      Curriculum: {
        container:
          'button rounded-md bg-cyan-400 px-3 py-3 text-zinc-800 hover:bg-cyan-300 mt-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300',
        icon1: ' text-gray-800',
        icon2: ' text-gray-800',
      },
      CardProjectDetailsLink: {
        container:
          ' hover:bg-cyan-400 justify-around  border-2 border-cyan-400 w-full rounded-md h-12 text-cyan-400 hover:text-zinc-900',
        icon1: 'hover:text-zinc-900',
        icon2: 'hover:text-zinc-900',
      },
      CardProjectDetailsGit: {
        container:
          'bg-cyan-400 justify-around hover:bg-cyan-300 w-full rounded-md h-12 text-zinc-900',
        icon1: ' text-zinc-900',
        icon2: ' text-zinc-900',
      },
    },
  },

  defaultVariants: {
    variant: 'CardProject',
  },
})

export interface ButtonProps extends VariantProps<typeof ButtonVariants> {
  title: string
  icon?: ReactNode
  icon2?: ReactNode
  link: Url
  target?: string
}

export function Button({ target, ...props }: ButtonProps) {
  const { container, icon1, icon2 } = ButtonVariants({ variant: props.variant })
  return (
    <Link target={target} href={props.link}>
      <button type="button" className={container()} {...props}>
        <div className={icon1()}>{props.icon}</div>
        {props.title}
        <div className={icon2()}>{props.icon2}</div>
      </button>
    </Link>
  )
}
