'use client'

import Image from 'next/image'
import logo from './../../assets/logo.svg'
import { Sun } from 'phosphor-react'
import { NavBar } from './NavBar'
import { ButtonSmall } from '../ButtonSmall'
import * as Collapsible from '@radix-ui/react-collapsible'
import { Menu } from 'lucide-react'
import { X } from '@phosphor-icons/react'
import { useNavMenu } from '@/context/NavMenu'

export function Header() {
  const { open, setOpen } = useNavMenu()

  return (
    <Collapsible.Root
      open={open}
      onOpenChange={setOpen}
      className="flex-col lg:flex-row sticky left-0 right-0 top-0 z-50 lg:mx-auto flex h-[5rem] w-full lg:max-w-[76rem] bg-neutral-900"
    >
      <div className="flex px-6 items-center justify-between h-full w-full lg:w-fit">
        <figure>
          <Image src={logo} alt="Logo" />
        </figure>

        <Collapsible.Trigger asChild className="lg:hidden">
          <button className="z-30">
            {!open ? (
              <Menu className="h-7 w-7 text-zinc-300 font-bold" />
            ) : (
              <X className="h-6 w-6 text-zinc-300" weight="bold" />
            )}
          </button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content
        forceMount
        className="flex absolute lg:relative lg:top-0 top-16 lg:right-0 right-6 z-20  data-[state=closed]:hidden lg:data-[state=closed]:flex transition-all duration-500 ease-in-out lg:w-full"
      >
        <div className="flex flex-col lg:bg-inherit bg-gray-800 lg:opacity-100 bg-opacity-95 rounded-md lg:p-0 p-8 lg:shadow-none shadow-[0_2px_10px] shadow-blackA4 lg:items-center  lg:justify-between lg:flex-row lg:flex-1 ">
          <div></div>
          <NavBar />
          <ButtonSmall
            icons={<Sun weight="bold" />}
            variant="bold"
            linkSocial={''}
            title="Mudar tema: funcionalidade em desenvolvimento, aguarde! Indisponível no momento. :)"
          />
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
