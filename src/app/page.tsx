import { Section } from '@/components/Section'
import { About } from '@/components/About'
import { Technologies } from '@/components/Technologies'
import { Contacts } from '@/components/Contacts'
import { Header } from '@/components/Header'
import projectsList from '../data/projects'
import { ContainerProjects } from '@/components/Projects'

export default function Home() {
  const cards = projectsList
  return (
    <>
      <Header />
      <Section id="about">
        <About />
      </Section>

      <Section id="techs">
        <h3 className="mb-2 w-full text-start font-contrail_one text-cyan-400">
          Tecnologias
        </h3>
        <Technologies />
      </Section>

      <Section id="projects">
        <h3 className="mb-2 w-full text-start font-contrail_one text-cyan-400">
          Projetos
        </h3>
        <ContainerProjects cards={cards} />
      </Section>

      <Section id="contacts">
        <h3 className="mb-2 w-full text-start font-contrail_one text-cyan-400">
          Contatos
        </h3>
        <Contacts />
      </Section>
    </>
  )
}
