import { ArrowUpRight, GithubLogo, GlobeSimple } from '@phosphor-icons/react'
import { Button } from '../Button'

interface AcessProjectProps {
  linkDeploy: string
  linkGit: string
}

export function AcessProject({ linkDeploy, linkGit }: AcessProjectProps) {
  return (
    <aside className="bg-gray-800  h-[248px] lg:max-h-[248px] rounded-2xl w-full flex flex-col justify-center gap-4 items-stretch px-8">
      <h2 className="font-roboto text-zinc-300 font-bold text-md  lg:text-xl text-center lg:mb-4">
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
