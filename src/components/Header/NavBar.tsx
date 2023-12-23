'use client'

import { useState } from 'react'
import { NavOptions } from './NavOptions'

export function NavBar() {
  const [navOptionsSelected, setNavOptionsSelected] = useState<number | null>(0)

  function handleNavOptions(index: number) {
    setNavOptionsSelected(index)
  }

  return (
    <nav>
      <ul className="flex gap-5">
        <NavOptions
          text="Sobre"
          onSelect={() => handleNavOptions(0)}
          selected={navOptionsSelected === 0}
        />
        <NavOptions
          text="Tecnologias"
          onSelect={() => handleNavOptions(1)}
          selected={navOptionsSelected === 1}
        />
        <NavOptions
          text="Projetos"
          onSelect={() => handleNavOptions(2)}
          selected={navOptionsSelected === 2}
        />
        <NavOptions
          text="Contatos"
          onSelect={() => handleNavOptions(3)}
          selected={navOptionsSelected === 3}
        />
      </ul>
    </nav>
  )
}
