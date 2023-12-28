import { Section } from '@/components/Section'
import { About } from '@/components/About'
import { Technologies } from '@/components/Technologies'
import { Contacts } from '@/components/Contacts'
import { Projects } from '@/components/Projects'
import { Header } from '@/components/Header'

export default function Home() {
  return (
    <>
      <Header />

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
        <Projects />
      </Section>

      <Section id="contacts">
        <h3 className="font-contrail_one mb-2 w-full text-start text-cyan-400">
          Contatos
        </h3>
        <Contacts />
      </Section>
    </>
  )
}
