import { motion } from 'framer-motion'
import { Link as ScrollLink } from 'react-scroll'
import { useIsMobile } from '@/hooks/UseInMobile'

interface NavOptionsProps {
  text: string
  handleNavOptions: (itemId: string) => void
  id: string
  activeId: string | null
}

export function NavOptions({
  text,
  id,
  handleNavOptions,
  activeId,
}: NavOptionsProps) {
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
        onClick={() => handleNavOptions(id)}
        className={`relative cursor-pointer px-4 py-2 font-roboto text-sm text-zinc-400 transition duration-300 ease-in-out hover:text-zinc-300`}
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
