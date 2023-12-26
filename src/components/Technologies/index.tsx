'use client'

import Image from 'next/image'

import { File } from 'phosphor-react'
import CodeTyping from '../../assets/code-typing.svg'
import { IconsTechs } from './IconsTechs'
import { Describe } from './Describe'

export function Technologies() {
  return (
    <div className="grid  h-[36.25rem]  w-full grid-cols-2 rounded-2xl bg-gray-800 px-16 py-16">
      <figure className="justify-strat flex items-center">
        <Image
          height={345.65}
          width={404.5}
          src={CodeTyping}
          alt={'coded typing image'}
        />
      </figure>
      <div className="flex w-full flex-col items-start justify-start">
        <IconsTechs />
        <Describe />

        <button
          type="button"
          className="font-roboto button mt-4 flex items-center justify-center gap-2 rounded-md bg-cyan-400 px-3 py-3 font-bold text-zinc-800 transition duration-300 ease-in-out hover:bg-cyan-300"
        >
          <File weight="fill" className="h-5 w-5 text-gray-800" />
          Meu currículo
        </button>
      </div>
    </div>
  )
}
