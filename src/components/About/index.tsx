'use client'

import Image from 'next/image'
import Profile from '../../assets/profile-lucas.png'
import { Paragraph } from '../Paragraph'
import { ButtonSmall } from '../ButtonSmall'
import { GithubLogo, LinkedinLogo } from 'phosphor-react'

export function About() {
  return (
    <div className="grid grid-cols-2">
      <div>
        <Image
          width={400}
          height={400}
          className="rounded-full border-4 border-cyan-400 object-cover"
          src={Profile}
          alt="foto perifl"
        />
      </div>
      <div className="flex flex-col text-cyan-400">
        <h1 className="font-contrail_one mb-6 text-5xl ">
          Olá, eu sou o Lucas
        </h1>
        <h2 className="font-roboto mb-4 text-2xl text-white">
          Desenvolvedor Front-end apaixonado por inovação.
        </h2>
        <Paragraph>
          Sou programador Front-end e minha jornada na programação começa no
          final de 2022, quando ingressei na Universidade Presbiteriana
          Mackenzie na graduação de Ánalise e Desenvolvimento de Sistemas, desde
          então venho me dedicado grandimente em estudos através de cursos,
          pesquisas, leituras e gosto de construir projetos pessoais para
          aprender praticando.
        </Paragraph>
        <section>
          <h2 className="font-contrail_one mt-12 text-2xl">
            Minhas redes sociais
          </h2>
          <div className="flex gap-4 mt-4">
            <ButtonSmall
              title="GitHub"
              icons={<GithubLogo weight="fill" className="h-6 w-6" />}
              linkSocial={'https://github.com/LucasfNeves'}
            />
            <ButtonSmall
              title="Linkedin"
              icons={<LinkedinLogo weight="fill" className="h-6 w-6" />}
              linkSocial={
                'https://www.linkedin.com/in/lucas-farias-das-neves-118845239/'
              }
            />
          </div>
        </section>
      </div>
    </div>
  )
}
