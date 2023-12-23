import { ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const ButtonSmallVariants = tv({
  slots: {
    container: 'flex h-12 w-12 items-center justify-center rounded-md',
    icon: 'h-5 w-5 w-full h-full flex items-center justify-center',
  },

  variants: {
    variant: {
      bold: {
        container:
          'bg-gray-800 transition duration-300 ease-in-out hover:bg-gray-700',
        icon: ' text-white',
      },
      regular: {
        container:
          'bg-transparent border-2 border-cyan-400 transition duration-300 ease-in-out hover:bg-cyan-400',
        icon: ' text-cyan-400 transition duration-300 ease-in-out hover:text-neutral-900',
      },
    },
  },

  defaultVariants: {
    variant: 'bold',
  },
})

export interface ButtonSmallProps
  extends VariantProps<typeof ButtonSmallVariants> {
  icons: ReactNode
}

export function ButtonSmall({ icons, variant, ...props }: ButtonSmallProps) {
  const { container, icon } = ButtonSmallVariants({ variant })
  return (
    <button className={container()} {...props}>
      <div
        className={`flex h-full w-full items-center justify-center${icon()}`}
      >
        {icons}
      </div>
    </button>
  )
}
