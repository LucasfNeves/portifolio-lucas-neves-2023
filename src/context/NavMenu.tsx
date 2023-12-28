/* eslint-disable prettier/prettier */

'use client'

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

import menuOptions from '@/data/menuItems'

interface NavMenuContextProps {
  menuOptions: {
    text: string
    id: string
  }[]
  activeId: string | null
  open: boolean
  setOpen: (open: boolean) => void
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
  const [open, setOpen] = useState(false)

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
    <NavMenuContext.Provider
      value={{
        handleNavOptions,
        menuOptions,
        activeId,
        open,
        setOpen,
      }}
    >
      {children}
    </NavMenuContext.Provider>
  )
}

export const useNavMenu = () => useContext(NavMenuContext)
