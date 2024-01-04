'use client'

import { ArrowUp } from 'phosphor-react'

export function Footer() {
  function handleScroll() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="absolute bottom-0 flex h-16 w-screen items-center justify-between bg-gray-800 px-6 text-white lg:w-full lg:px-40">
      <span className="font-roboto font-normal text-zinc-400">
        Lucas Farias das Neves <span className="text-xs">©</span> 2023
      </span>
      <button
        type="button"
        onClick={handleScroll}
        className="flex h-12 w-12 items-center justify-center rounded-md bg-gray-700 transition duration-300 ease-in-out hover:bg-gray-600"
        title="Voltar ao topo"
      >
        <ArrowUp
          weight="bold"
          className="flex h-6 w-6 items-center justify-center text-white"
        />
      </button>
    </footer>
  )
}
