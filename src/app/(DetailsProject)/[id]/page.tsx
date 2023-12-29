'use client'

import { Button } from '@/components/Button'
import { ButtonSmall } from '@/components/ButtonSmall'
import { Paragraph } from '@/components/Paragraph'
import { SubTitle } from '@/components/SubTitle'
import { projectDetailsList } from '@/data/projectDetailsList'
import { GithubLogo } from '@phosphor-icons/react'
import Image from 'next/image'
import { ArrowLeft, ArrowUpRight, GlobeSimple } from 'phosphor-react'

interface DetailsProjectPageProps {
  params: {
    id: string
  }
}

export default function DetailsProjectPage(props: DetailsProjectPageProps) {
  const id = props.params.id
  const projectDetails = projectDetailsList.find((project) => project.id === id)

  return (
    <div className="flex flex-col min-h-screen py-4 px-6 gap-4 mb-24 lg:mb-0 lg:pb-16 lg:pt-10 lg:gap-6">
      <ButtonSmall
        title="Voltar para Home"
        linkSocial={'/'}
        variant="bold"
        icons={<ArrowLeft className="h-7 w-7" />}
      />
      <div className="flex flex-col gap-4 lg:min-h-screen lg:grid lg:gap-6 lg:grid-cols-detailsProject">
        <main className="bg-gray-800 min-h-[938px] flex flex-col rounded-2xl">
          <Image
            className="w-full h-fit object-cover"
            src={projectDetails?.image}
            alt={projectDetails?.title ?? ''}
            width={1920}
            height={1080}
          />

          <div className="px-8 py-6 flex flex-col gap-4">
            <small className="text-gray-400 text-xs ">
              {projectDetails?.date}
            </small>
            <SubTitle>{projectDetails?.title}</SubTitle>
            <Paragraph>
              <strong className="text-cyan-400">Minha função : </strong>
              {projectDetails?.my_role}
            </Paragraph>
            <Paragraph>
              <strong className="text-cyan-400"> Detalhes : </strong>
              {projectDetails?.about}
            </Paragraph>
            <Paragraph>
              <strong className="text-cyan-400">
                Tecnologias Utilizadas :{' '}
              </strong>
              <span className="text-cyan-300">
                {projectDetails?.tecnologies}
              </span>
            </Paragraph>
            <Paragraph>
              <strong className="text-cyan-400">Notas : </strong>
              {projectDetails?.notes}
            </Paragraph>
          </div>
        </main>
        <aside className="bg-gray-800  h-[248px] lg:max-h-[248px] rounded-2xl w-full flex flex-col justify-center gap-4 items-stretch px-8">
          <h2 className="font-roboto text-zinc-300 font-bold text-md  lg:text-xl text-center lg:mb-4">
            Links do projeto
          </h2>
          <Button
            variant="CardProjectDetailsLink"
            title="Acessar Projeto"
            link={projectDetails?.linkDeploy ?? ''}
            target={'_blank'}
            icon={<GlobeSimple className="h-7 w-7" />}
            icon2={<ArrowUpRight className="h-7 w-7" />}
          />
          <Button
            variant="CardProjectDetailsGit"
            title="Acessar Repositório"
            link={projectDetails?.linkGit ?? ''}
            target={'_blank'}
            icon={<GithubLogo className="h-7 w-7" />}
            icon2={<ArrowUpRight className="h-7 w-7" />}
          />
        </aside>
      </div>
    </div>
  )
}
