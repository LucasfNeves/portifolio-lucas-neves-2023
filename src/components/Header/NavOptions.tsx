'use client'

import { motion } from 'framer-motion'

interface NavOptionsProps {
  text: string
  onSelect: () => void
  selected: boolean
}

export function NavOptions({ text, onSelect, selected }: NavOptionsProps) {
  return (
    <li
      key={'Sobre'}
      onClick={onSelect}
      className={`font-roboto cursor-pointer ${
        selected ? ' relative text-cyan-400' : 'relative text-gray-400'
      }`}
    >
      {text}
      {selected && (
        <motion.div
          layoutId="activeTab"
          className="absolute -bottom-px left-0 right-0 h-0.5 rounded-sm bg-cyan-400"
        />
      )}
    </li>
  )
}
