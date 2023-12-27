'use client'

import Image from 'next/image'
import Profile from '../../assets/profile-lucas.png'
import { Paragraph } from '../Paragraph'
import { SocialMedia } from './SocialMedia'

export function About() {
  return (
    <div className="flex flex-col justify-center w-full items-center gap-4 lg:grid lg:grid-cols-2">
      <div>
        <Image
          width={400}
          height={400}
          className="rounded-full border-4 border-cyan-400 object-cover"
          src={Profile}
          alt="foto perifl"
        />
      </div>
      <div className="flex flex-col gap-4 items-center lg:items-start justify-center text-cyan-400">
        <h1 className="font-contrail_one text-center lg:text-start text-2xl lg:text-5xl ">
          Olá, eu sou o Lucas <br />
          <span className="font-roboto mb-4 text-xl lg:text-2xl text-white">
            Desenvolvedor Front-end apaixonado por inovação.
          </span>
        </h1>
        <Paragraph>
          Sou programador Front-end e minha jornada na programação começa no
          final de 2022, quando ingressei na Universidade Presbiteriana
          Mackenzie na graduação de Ánalise e Desenvolvimento de Sistemas, desde
          então venho me dedicado grandimente em estudos através de cursos,
          pesquisas, leituras e gosto de construir projetos pessoais para
          aprender praticando.
        </Paragraph>
        <SocialMedia />
      </div>
    </div>
  )
}
