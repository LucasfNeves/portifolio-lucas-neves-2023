'use client'

import { ComponentProps, ReactNode } from 'react'

export type ButtonChangeColorProps = ComponentProps<'button'> & {
  icons: ReactNode
  title?: string
}

export function ButtonChangeColor({ icons, ...props }: ButtonChangeColorProps) {
  return (
    <button
      className="flex h-12 w-12 items-center justify-center rounded-md bg-gray-800 transition duration-300 ease-in-out hover:bg-gray-700 "
      {...props}
    >
      <div className="flex h-5 w-5 items-center justify-center  text-white">
        {icons}
      </div>
    </button>
  )
}
