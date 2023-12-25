import { Section } from '@/components/Section'
import { About } from '@/components/About'
import { Technologies } from '@/components/Technologies'
import { ContainerProjects } from '@/components/Projects/ContainerProjects'
import { ProjectsLegend } from '@/components/Projects/ProjectsLegend'

export default function Home() {
  return (
    <>
      <Section id="about">
        <About />
      </Section>
      <Section id="techs">
        <h3 className="font-contrail_one mb-2 w-full text-start text-cyan-400">
          Tecnologias
        </h3>
        <Technologies />
      </Section>
      <Section id="projects">
        <h3 className="font-contrail_one mb-2 w-full text-start text-cyan-400">
          Projetos
        </h3>
        <ProjectsLegend />
        <ContainerProjects />
      </Section>
      <Section id="career">
        <h3 className="font-contrail_one mb-2 w-full text-start text-cyan-400">
          Carreira
        </h3>
        <div className="grid  h-[36.25rem]  w-full grid-cols-2 rounded-2xl bg-gray-800 px-16 py-16"></div>
      </Section>

      <Section id="contacts">
        <h3 className="font-contrail_one mb-2 w-full text-start text-cyan-400">
          Contatos
        </h3>
        <div className="grid  h-[36.25rem]  w-full grid-cols-2 rounded-2xl bg-gray-800 px-16 py-16"></div>
      </Section>
    </>
  )
}
