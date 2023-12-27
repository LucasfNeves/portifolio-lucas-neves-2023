/* eslint-disable prettier/prettier */

'use client'

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

interface NavMenuContextProps {
  menuOptions: {
    text: string
    id: string
  }[]
  activeId: string | null
  handleNavOptions: (itemId: string) => void
}

export const NavMenuContext = createContext<NavMenuContextProps>(
  {} as NavMenuContextProps
)

interface NavMenuProviderProps {
  children: ReactNode
}

export function NavMenuProvider({ children }: NavMenuProviderProps) {
  const [activeId, setActiveId] = useState<string | null>('about')

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

  function handleNavOptions(itemId: string) {
    setActiveId(itemId)
  }

  useEffect(() => {
    // Scroll para o topo da página quando o componente é recarregado
    window.scrollTo({ top: 0, behavior: 'smooth' })

    setActiveId('about')
  }, [])

  return (
    <NavMenuContext.Provider
      value={{
        handleNavOptions,
        menuOptions,
        activeId,
      }}
    >
      {children}
    </NavMenuContext.Provider>
  )
}

export const useNavMenu = () => useContext(NavMenuContext)
