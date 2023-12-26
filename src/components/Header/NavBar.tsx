'use client'

import { NavOptions } from './NavOptions'
import { useNavMenu } from '@/context/NavMenu'

export function NavBar() {
  const { handleNavOptions, navOptionsSelected, menuOptions } = useNavMenu()

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
