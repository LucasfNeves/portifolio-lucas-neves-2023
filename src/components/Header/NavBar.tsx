'use client'

import { useState } from 'react'
import { NavOptions } from './NavOptions'

const menuOptions = [
  {
    text: 'Sobre',
    id: 'about',
  },
  {
    text: 'Tecnologias',
    id: 'techs',
  },
  {
    text: 'Projetos',
    id: 'projects',
  },
  {
    text: 'Carreira',
    id: 'career',
  },
  {
    text: 'Contatos',
    id: 'contacts',
  },
]

export function NavBar() {
  const [navOptionsSelected, setNavOptionsSelected] = useState<string>('about')

  function handleNavOptions(itemId: string) {
    setNavOptionsSelected(itemId)
  }

  return (
    <nav>
      <ul className="flex gap-5">
        {menuOptions.map((option) => (
          <NavOptions
            key={option.id}
            text={option.text}
            onSelect={() => handleNavOptions(option.id)}
            selected={navOptionsSelected === option.id}
            id={option.id}
          />
        ))}
      </ul>
    </nav>
  )
}
