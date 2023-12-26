import Link from 'next/link'
import { ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import { Url } from 'next/dist/shared/lib/router/router'

const ButtonVariants = tv({
  slots: {
    container:
      'flex items-center gap-2 justify-center font-roboto font-bold transition duration-300 ease-in-out',
    iconV: 'flex items-center justify-center',
  },

  variants: {
    variant: {
      CardProject: {
        container: 'bg-cyan-400 hover:bg-cyan-300 w-[10rem] rounded-md h-12',
      },
      SectionContact: {
        container:
          'bg-cyan-400 hover:bg-cyan-300 w-[13rem] rounded-3xl h-12 text-neutral-900',
        iconV: 'text-neutral-900',
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
  link: Url
}

export function Button({ ...props }: ButtonProps) {
  const { container, iconV } = ButtonVariants({ variant: props.variant })
  return (
    <Link href={props.link}>
      <button type="button" className={container()} {...props}>
        <div className={iconV()}>{props.icon}</div>
        {props.title}
      </button>
    </Link>
  )
}
