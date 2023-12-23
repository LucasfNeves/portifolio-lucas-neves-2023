'use client'

import Image from 'next/image'

import CSS from '../../assets/CSS.svg'
import HTML from '../../assets/HTML.svg'
import JS from '../../assets/JS.svg'
import TS from '../../assets/TS.svg'
import Node from '../../assets/Node.svg'
import Next from '../../assets/Next.svg'
import Tailwind from '../../assets/Tailwind.svg'
import React from '../../assets/React.svg'

import { File } from 'phosphor-react'
import CodeTyping from '../../assets/code-typing.svg'
import { Paragraph } from '../Paragraph'
import { SubTitle } from '../SubTitle'

export function Technologies() {
  return (
    <div className="grid  h-[36.25rem]  w-full grid-cols-2 rounded-2xl bg-gray-800 px-16 py-16">
      <figure className="justify-strat flex items-center">
        <Image
          height={345.65}
          width={404.5}
          src={CodeTyping}
          alt={'coded typing image'}
        />
      </figure>
      <div className="flex w-full flex-col items-start justify-start">
        <span className="mb-6 flex gap-4">
          <Image src={CSS} alt={''} />
          <Image src={HTML} alt={''} />
          <Image src={JS} alt={''} />
          <Image src={TS} alt={''} />
          <Image src={Node} alt={''} />
          <Image src={Next} alt={''} />
          <Image src={Tailwind} alt={''} />
          <Image src={React} alt={''} />
        </span>
        <SubTitle>Minhas principais habilidades</SubTitle>
        <Paragraph>
          Ao longo da minha trajetória como desenvolvedor web, as principais
          tecnologias que eu possuo conhecimento são o{' '}
          <strong className="font-bold text-cyan-400">
            JavaScript,TypeScript, ReactJS e NextJS, além das bases essenciais
            de HTML5, CSS3, Tailwind CSS e Styled Components
          </strong>
          . Além disso, utilizo o{' '}
          <strong className="font-bold text-cyan-400">Figma</strong> para
          aprimorar a experiência do usuário, integrando design e
          desenvolvimento de maneira sinérgica.
        </Paragraph>
        <Paragraph>
          Vejo a área da tecnologia como uma oportunidade de constante evolução
          e aprendizado, por isso sempre estou buscando novos conhecimentos para
          impulsionar meu desenvolvimento profissional e me aperfeiçoar nos
          conhecimentos que já possuo
        </Paragraph>
        <button
          type="button"
          className="font-roboto button mt-4 flex items-center justify-center gap-2 rounded-md bg-cyan-400 px-3 py-3 font-bold text-zinc-800 transition duration-300 ease-in-out hover:bg-cyan-300"
        >
          <File weight="fill" className="h-5 w-5 text-gray-800" />
          Meu currículo
        </button>
      </div>
    </div>
  )
}
