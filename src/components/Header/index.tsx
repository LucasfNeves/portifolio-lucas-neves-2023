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
      className="flex-col lg:flex-row sticky left-0 right-0 top-0 z-50 lg:mx-auto flex h-[5rem] w-full lg:max-w-[76rem] bg-neutral-900"
    >
      <div className="flex px-6 items-center justify-between h-full w-full lg:w-fit">
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
        className="flex absolute lg:relative top-16 right-6 z-20 lg:top-0 lg:right-0 lg:z-0 data-[state=closed]:hidden lg:data-[state=closed]:flex lg:w-full lg:animate-none      animate-slideDownAndFade"
      >
        {isMobile ? (
          <div className="flex flex-col items-center gap-4 bg-gray-800 bg-opacity-95 rounded-md p-8 shadow-[0_2px_10px] shadow-blackA4 ">
            <NavBar activeId={activeId} handleNavOptions={handleNavOptions} />
            {/* <ButtonChangeColor
              icons={<Sun weight="bold" />}
              title="Mudar tema: funcionalidade em desenvolvimento, aguarde! Indisponível no momento. :)"
              /> */}
          </div>
        ) : (
          <div className="flex  lg:justify-center lg:items-center lg:flex-row lg:flex-1 ">
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
