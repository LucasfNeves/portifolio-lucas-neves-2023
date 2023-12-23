import { Section } from '@/components/Section'
import { About } from '@/components/About'
import { Technologies } from '@/components/Technologies'
import { ContainerProjects } from '@/components/Projects/ContainerProjects'
import { ProjectsLegend } from '@/components/Projects/ProjectsLegend'

export default function Home() {
  return (
    <>
      <Section>
        <About />
      </Section>
      <Section>
        <h3 className="font-contrail_one mb-2 w-full text-start text-cyan-400">
          Tecnologias
        </h3>
        <Technologies />
      </Section>
      <Section>
        <h3 className="font-contrail_one mb-2 w-full text-start text-cyan-400">
          Projetos
        </h3>
        <ProjectsLegend />
        <ContainerProjects />
      </Section>
    </>
  )
}
