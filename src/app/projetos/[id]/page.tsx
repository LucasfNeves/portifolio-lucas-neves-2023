/* eslint-disable camelcase */
'use client'

import { ButtonSmall } from '@/components/ButtonSmall'
import projectDetailsList from '@/data/projectDetailsList'
import Image from 'next/image'
import { ArrowLeft } from 'phosphor-react'
import { AcessProject } from '@/components/ProjectsDetails/AcessProject'
import { DescriptionDetails } from '@/components/ProjectsDetails/DescriptionDetails'

interface DetailsProjectPageProps {
  params: {
    id: string
  }
}

interface projectDetailsList {
  id: string
  title: string
  date: string
  image: string
  my_role: string
  about: string
  tecnologies: string
  notes: string
  linkDeploy: string
  linkGit: string
}

export default function DetailsProjectPage(props: DetailsProjectPageProps) {
  const id = props.params.id

  const projectDetails: projectDetailsList | undefined =
    projectDetailsList.find((project) => project.id === id)

  const {
    title,
    date,
    image,
    my_role,
    notes,
    about,
    tecnologies,
    linkDeploy,
    linkGit,
  } = projectDetails || ({} as projectDetailsList)

  return (
    <div className="mb-24 flex min-h-screen flex-col gap-4 px-6 py-4 lg:mb-0 lg:gap-6 lg:pb-16 lg:pt-10">
      <ButtonSmall
        title="Voltar para Home"
        linkSocial={'/'}
        variant="bold"
        icons={<ArrowLeft className="h-7 w-7" />}
      />
      <div className="flex flex-col gap-4 lg:grid lg:min-h-screen lg:grid-cols-detailsProject lg:gap-6">
        <main className="flex min-h-[938px] flex-col rounded-2xl bg-gray-800">
          <Image
            className="h-fit w-full object-cover"
            src={image}
            alt={title}
            width={1920}
            height={1080}
          />

          <DescriptionDetails
            about={about}
            my_role={my_role}
            tecnologies={tecnologies}
            notes={notes}
            date={date}
            title={title}
          />
        </main>
        <AcessProject linkDeploy={linkDeploy} linkGit={linkGit} />
      </div>
    </div>
  )
}
