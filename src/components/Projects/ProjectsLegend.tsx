'use client'

export function ProjectsLegend() {
  return (
    <p className="w-full font-robot text-start text-base text-zinc-300">
      Aqui estão listados meus{' '}
      <strong className="text-cyan-400 font-robot"> 3 </strong> principais
      projetos para ver mais você pode acessar meu{' '}
      <a
        href="https://github.com/LucasfNeves"
        className="text-cyan-400 border-b border-cyan-400 hover:text-cyan-300 hover:border-cyan-300"
      >
        {' '}
        GitHub
      </a>{' '}
      !
    </p>
  )
}
