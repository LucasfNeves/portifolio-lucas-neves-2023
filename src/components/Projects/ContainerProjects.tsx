'use client'

import { CardProject } from './CardProject'

import projectsList from '@/data/projects'

export function ContainerProjects() {
  return (
    <div className="mt-12 flex flex-col items-center justify-center gap-10 lg:grid lg:grid-cols-3 lg:gap-5 w-full">
      {projectsList.map((project) => (
        <CardProject
          key={project.title}
          title={project.title}
          date={project.date}
          description={project.description}
          image={project.image}
        />
      ))}
    </div>
  )
}
