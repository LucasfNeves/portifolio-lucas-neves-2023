'use client'

import { CardProject, CardProps } from './CardProject'

import { ProjectsLegend } from './ProjectsLegend'

interface ContainerProjectsProps {
  cards: CardProps[]
}

export function ContainerProjects({ cards }: ContainerProjectsProps) {
  return (
    <>
      <ProjectsLegend />
      <div className="mt-12 flex w-full flex-col items-center justify-center gap-10 lg:grid lg:grid-cols-3 lg:gap-5">
        {cards.map((project) => (
          <CardProject
            id={project.id}
            key={project.id}
            title={project.title}
            date={project.date}
            description={project.description}
            image={project.image}
          />
        ))}
      </div>
    </>
  )
}
