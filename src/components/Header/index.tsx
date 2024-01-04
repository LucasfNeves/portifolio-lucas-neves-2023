'use client'

import Image from 'next/image'
import logo from './../../assets/logo.svg'
import * as Collapsible from '@radix-ui/react-collapsible'
import { useIsMobile } from '@/hooks/UseInMobile'
import { ButtonMenu } from '../ButtonMenu'
import { useEffect, useState } from 'react'
import { NavBar } from './NavBar'

export function Header() {
  const [activeId, setActiveId] = useState<string | null>('about')
  const [open, setOpen] = useState(false)

  const isMobile = useIsMobile()

  function handleNavOptions(itemId: string | null) {
    setActiveId(itemId)
    setOpen(false)
  }

  useEffect(() => {
    // Scroll para o topo da página quando o componente é recarregado
    window.scrollTo({ top: 0, behavior: 'smooth' })

    setActiveId('about')
  }, [])

  return (
    <Collapsible.Root
      open={open}
      onOpenChange={setOpen}
      className="sticky left-0 right-0 top-0 z-50 flex h-[5rem] w-full flex-col bg-neutral-900 lg:mx-auto lg:max-w-[76rem] lg:flex-row"
    >
      <div className="flex h-full w-full items-center justify-between px-6 lg:w-fit">
        <figure>
          <Image src={logo} alt="Logo" />
        </figure>

        <Collapsible.Trigger asChild className="lg:hidden">
          <ButtonMenu
            open={open}
            setOpen={setOpen}
            title={!open ? 'Abrir menu' : 'Fechar menu'}
          />
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content
        forceMount
        className="absolute right-6 top-16 z-20 flex animate-slideDownAndFade data-[state=closed]:hidden lg:relative lg:right-0 lg:top-0 lg:z-0 lg:w-full lg:animate-none      lg:data-[state=closed]:flex"
      >
        {isMobile ? (
          <div className="shadow-blackA4 flex flex-col items-center gap-4 rounded-md bg-gray-800 bg-opacity-95 p-8 shadow-[0_2px_10px] ">
            <NavBar activeId={activeId} handleNavOptions={handleNavOptions} />
            {/* <ButtonChangeColor
              icons={<Sun weight="bold" />}
              title="Mudar tema: funcionalidade em desenvolvimento, aguarde! Indisponível no momento. :)"
              /> */}
          </div>
        ) : (
          <div className="flex  lg:flex-1 lg:flex-row lg:items-center lg:justify-center ">
            <NavBar activeId={activeId} handleNavOptions={handleNavOptions} />
            {/* <ButtonChangeColor
              icons={<Sun weight="bold" />}
              title="Mudar tema: funcionalidade em desenvolvimento, aguarde! Indisponível no momento. :)"
              /> */}
          </div>
        )}
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
