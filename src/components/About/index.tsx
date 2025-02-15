import Image from 'next/image'
import Profile from '../../assets/profile-lucas.png'
import { Paragraph } from '../Paragraph'
import { SocialMedia } from './SocialMedia'

export function About() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 lg:grid lg:grid-cols-2">
      <div>
        <Image
          width={400}
          height={400}
          className="rounded-full border-4 border-cyan-400 object-cover"
          src={Profile}
          alt="foto perifl"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-4 text-cyan-400 lg:items-start">
        <h1 className="text-center font-contrail_one text-2xl lg:text-start lg:text-5xl ">
          Olá, bem vindo ao meu Portfólio! <br />
          <span className="mb-4 font-roboto text-xl text-white lg:text-2xl">
            Desenvolvedor Front-end.
          </span>
        </h1>
        <Paragraph>
          Me chamo Lucas Farias, e minha jornada no mundo da tecnologia e
          desenvolvimento teve início no começo de 2023. Estou atualmente focado
          em minha trajetória acadêmica, cursando o último semestre de Análise e
          Desenvolvimento de Sistemas na faculdade Mackenzie. Além dos estudos,
          desenvolvo projetos como freelancer, aprimorando minhas habilidades e
          adquirindo experiência prática no desenvolvimento Front-End e
          Back-End. Minha paixão por superar desafios e resolver problemas me
          motiva a estar sempre aprendendo e evoluindo. Ao longo da minha
          jornada, adquiri valiosos conhecimentos por meio de cursos
          especializados e projetos pessoais, que continuam a todo vapor. Estou
          confiante de que minha determinação, habilidades técnicas e
          comprometimento serão ativos valiosos para qualquer equipe de
          desenvolvimento.
        </Paragraph>
        <SocialMedia />
      </div>
    </div>
  )
}
