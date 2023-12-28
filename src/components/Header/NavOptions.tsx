'use client'

import { motion } from 'framer-motion'
import { Link as ScrollLink } from 'react-scroll'
import { useNavMenu } from '@/context/NavMenu'
import { useIsMobile } from '@/hooks/UseInMobile'

interface NavOptionsProps {
  text: string
  activeItem: () => void
  id: string
}

export function NavOptions({ text, activeItem, id }: NavOptionsProps) {
  const { activeId, handleNavOptions } = useNavMenu()
  const isMobile = useIsMobile()

  const activeStyle = {
    color: '#00bcd4',
  }

  return (
    <ScrollLink
      activeStyle={activeStyle}
      to={id}
      spy
      smooth
      duration={800}
      offset={-100}
      onSetActive={() => handleNavOptions(id)}
    >
      <li
        key={id}
        onClick={activeItem}
        className={`relative px-4 py-2 cursor-pointer font-roboto text-sm text-zinc-400 hover:text-zinc-300 transition duration-300 ease-in-out`}
        style={activeId === id ? activeStyle : { color: '#d1d5db' }}
      >
        {text}

        {activeId === id && !isMobile && (
          <motion.div
            layoutId="activeTab"
            className="absolute -bottom-px left-0 right-0 h-0.5 rounded-sm bg-cyan-400"
          />
        )}
      </li>
    </ScrollLink>
  )
}
