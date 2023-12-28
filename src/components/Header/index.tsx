'use client'

import Image from 'next/image'
import logo from './../../assets/logo.svg'
import * as Collapsible from '@radix-ui/react-collapsible'
import { useNavMenu } from '@/context/NavMenu'
import { useIsMobile } from '@/hooks/UseInMobile'
import { MenuToggle } from './MenuToggle'
import { MenuDesktop } from './MenuDesktop'
import { ButtonMenu } from '../ButtonMenu'

export function Header() {
  const { open, setOpen } = useNavMenu()
  const isMobile = useIsMobile()

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
          <ButtonMenu title={!open ? 'Abrir menu' : 'Fechar menu'} />
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content
        forceMount
        className="flex absolute lg:relative top-16 right-6 z-20 lg:top-0 lg:right-0 lg:z-0 data-[state=closed]:hidden lg:data-[state=closed]:flex lg:w-full lg:animate-none animate-slideDownAndFade"
      >
        {isMobile ? <MenuToggle /> : <MenuDesktop />}
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
