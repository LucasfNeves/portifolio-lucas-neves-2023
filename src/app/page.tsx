'use client'

import { Section } from '@/components/Section'
import { About } from '@/components/About'
import { Technologies } from '@/components/Technologies'
import { ContainerProjects } from '@/components/Projects/ContainerProjects'
import { ProjectsLegend } from '@/components/Projects/ProjectsLegend'
import { ButtonSmall } from '@/components/ButtonSmall'
import { Envelope, GithubLogo, LinkedinLogo } from '@phosphor-icons/react'
import { Paragraph } from '@/components/Paragraph'
import { Button } from '@/components/Button'
import { PaperPlaneRight } from 'phosphor-react'

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
        <div className="relative h-[19.375rem] w-full rounded-2xl border-2 border-cyan-400 ">
          <div className="flex justify-center flex-col gap-4 items-start py-10 px-16">
            <h2 className="font-contrail_one text-cyan-400 text-3xl">
              VAMOS CONSTRUIR ALGO JUNTOS ?
            </h2>
            <Paragraph>
              Se você tem algum projeto em mente, sinta-se à vontade para me
              enviar uma mensagem.
            </Paragraph>
            <Button
              icon={<PaperPlaneRight weight="fill" className="h-6 w-6" />}
              variant="SectionContact"
              title="Enviar mensagem"
              link="https://wa.me/5511913302042"
            />
          </div>
          <div className="flex gap-6 justify-center items-center absolute bottom-0 right-0 w-full h-[5rem] border-t-2 border-cyan-400">
            <ButtonSmall
              variant="regular"
              icons={<LinkedinLogo className="h-7 w-7" />}
              linkSocial={
                'https://www.linkedin.com/in/lucas-farias-das-neves-118845239/'
              }
              title="Linkedin"
            />
            <ButtonSmall
              variant="regular"
              icons={<GithubLogo className="h-7 w-7" />}
              linkSocial={'https://github.com/LucasfNeves'}
              title="Github"
            />
            <ButtonSmall
              variant="regular"
              icons={<Envelope className="h-7 w-7" />}
              linkSocial={'mailto:lucasfarias.ln@gmail.com'}
              title="E-mail"
            />
          </div>
        </div>
      </Section>
    </>
  )
}
