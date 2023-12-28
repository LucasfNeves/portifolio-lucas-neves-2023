'use client'

import { ButtonChangeColor } from '../ButtonChangeColor'
import { NavBar } from './NavBar'

import { Sun } from 'phosphor-react'

export function MenuToggle() {
  return (
    <div className="flex flex-col items-center gap-4 bg-gray-800 bg-opacity-95 rounded-md p-8 shadow-[0_2px_10px] shadow-blackA4 ">
      <NavBar />
      <ButtonChangeColor
        icons={<Sun weight="bold" />}
        title="Mudar tema: funcionalidade em desenvolvimento, aguarde! Indisponível no momento. :)"
      />
    </div>
  )
}
