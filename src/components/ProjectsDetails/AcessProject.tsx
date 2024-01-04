import { ArrowUpRight, GithubLogo, GlobeSimple } from '@phosphor-icons/react'
import { Button } from '../Button'

interface AcessProjectProps {
  linkDeploy: string
  linkGit: string
}

export function AcessProject({ linkDeploy, linkGit }: AcessProjectProps) {
  return (
    <aside className="flex  h-[248px] w-full flex-col items-stretch justify-center gap-4 rounded-2xl bg-gray-800 px-8 lg:max-h-[248px]">
      <h2 className="text-md text-center font-roboto font-bold  text-zinc-300 lg:mb-4 lg:text-xl">
        Links do projeto
      </h2>
      <Button
        variant="CardProjectDetailsLink"
        title="Acessar Projeto"
        link={linkDeploy}
        target={'_blank'}
        icon={<GlobeSimple className="h-7 w-7" />}
        icon2={<ArrowUpRight className="h-7 w-7" />}
      />
      <Button
        variant="CardProjectDetailsGit"
        title="Acessar Repositório"
        link={linkGit}
        target={'_blank'}
        icon={<GithubLogo className="h-7 w-7" />}
        icon2={<ArrowUpRight className="h-7 w-7" />}
      />
    </aside>
  )
}
