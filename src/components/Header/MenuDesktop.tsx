'use client'

import { Sun } from 'phosphor-react'

import { NavBar } from './NavBar'
import { ButtonChangeColor } from '../ButtonChangeColor'

export function MenuDesktop() {
  return (
    <div className="flex  lg:items-center lg:justify-between lg:flex-row lg:flex-1 ">
      <div></div>
      <NavBar />
      <ButtonChangeColor
        icons={<Sun weight="bold" />}
        title="Mudar tema: funcionalidade em desenvolvimento, aguarde! Indisponível no momento. :)"
      />
    </div>
  )
}
