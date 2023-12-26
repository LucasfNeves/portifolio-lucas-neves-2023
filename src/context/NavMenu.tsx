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
  handleNavOptions: (itemId: string) => void
  navOptionsSelected: string
}

export const NavMenuContext = createContext<NavMenuContextProps>(
  {} as NavMenuContextProps,
)

interface NavMenuProviderProps {
  children: ReactNode
}

export function NavMenuProvider({ children }: NavMenuProviderProps) {
  const [navOptionsSelected, setNavOptionsSelected] = useState<string>('about')

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

  function handleNavOptions(itemId: string) {
    setNavOptionsSelected(itemId)
  }

  useEffect(() => {
    // Scroll para o topo da página quando o componente é recarregado
    window.scrollTo(0, 0)
  }, [])

  return (
    <NavMenuContext.Provider
      value={{ handleNavOptions, navOptionsSelected, menuOptions }}
    >
      {children}
    </NavMenuContext.Provider>
  )
}

export const useNavMenu = () => useContext(NavMenuContext)
