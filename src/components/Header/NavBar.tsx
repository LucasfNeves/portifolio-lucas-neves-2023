'use client'

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
    text: 'Contatos',
    id: 'contacts',
  },
]

interface NavBarProps {
  handleNavOptions: (itemId: string) => void
  activeId: string | null
}

export function NavBar({ handleNavOptions, activeId }: NavBarProps) {
  return (
    <nav>
      <ul className="flex flex-col lg:flex-row lg:gap-5">
        {menuOptions.map((option) => (
          <NavOptions
            key={option.id}
            text={option.text}
            id={option.id}
            handleNavOptions={handleNavOptions}
            activeId={activeId}
          />
        ))}
      </ul>
    </nav>
  )
}
