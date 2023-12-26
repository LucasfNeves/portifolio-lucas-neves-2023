'use client'

import Image from 'next/image'
import logo from './../../assets/logo.svg'
import { Sun } from 'phosphor-react'

import { NavBar } from './NavBar'
import { ButtonSmall } from '../ButtonSmall'

export function Header() {
  return (
    <header className="sticky left-0 right-0 top-0 z-10 mx-auto  flex h-[5rem] w-full max-w-[76rem] items-center justify-between bg-neutral-900">
      <figure>
        <Image src={logo} alt="Logo" />
      </figure>
      <NavBar />
      <ButtonSmall
        icons={<Sun weight="bold" />}
        variant="bold"
        linkSocial={''}
        title="Mudar tema: funcionalidade em desenvolvimento, aguarde! Indisponível no momento. :)"
      />
    </header>
  )
}
