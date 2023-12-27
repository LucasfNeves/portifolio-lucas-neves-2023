'use client'

import Image from 'next/image'

import { File } from 'phosphor-react'
import CodeTyping from '../../assets/code-typing.svg'
import { IconsTechs } from './IconsTechs'
import { Describe } from './Describe'
import { Button } from '../Button'

export function Technologies() {
  return (
    <div className="flex flex-col gap-4 items-center px-4 py-10 justify-center lg:grid lg:h-[36.25rem] lg:gap-0 w-full lg:grid-cols-2 rounded-2xl bg-gray-800 lg:px-16 lg:py-14">
      <figure className="justify-strat flex items-center">
        <Image
          height={345.65}
          width={404.5}
          src={CodeTyping}
          alt={'coded typing image'}
        />
      </figure>
      <div className="flex w-full flex-col items-center justify-center gap-4 lg:gap-0 lg:items-start lg:justify-start ">
        <IconsTechs />
        <Describe />

        <Button
          icon={<File weight="fill" className="h-5 w-5" />}
          title="Meu currículo"
          link="https://drive.google.com/file/d/1u1vsffyQqA6GJRhZmGDVNQvNv7MkElu0/view"
          variant="Curriculum"
          target="_blank"
        />
      </div>
    </div>
  )
}
