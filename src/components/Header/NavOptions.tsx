'use client'

import { motion } from 'framer-motion'
import { Link as ScrollLink } from 'react-scroll'
import React from 'react'

interface NavOptionsProps {
  text: string
  onSelect: () => void
  selected: boolean
  id: string
}

export function NavOptions({ text, onSelect, selected, id }: NavOptionsProps) {
  return (
    <ScrollLink to={id} spy smooth duration={800}>
      <li
        key={id}
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
    </ScrollLink>
  )
}
