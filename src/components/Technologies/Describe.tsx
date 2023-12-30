import { Paragraph } from '../Paragraph'
import { SubTitle } from '../SubTitle'

export function Describe() {
  return (
    <div className="flex flex-col gap-2">
      <SubTitle>Minhas principais habilidades</SubTitle>
      <Paragraph>
        Ao longo da minha jornada como desenvolvedor web, adquiri proficiência
        em diversas tecnologias-chave. Possuo sólidos fundamentos em{' '}
        <strong className="font-bold text-cyan-400">
          JavaScript, HTML5, CSS3, TypeScript, ReactJS e NextJS, TailwindCSS,
          Styled-Components, Git e GitHub
        </strong>{' '}
        . Utilizo o <strong className="font-bold text-cyan-400">Figma</strong>{' '}
        para aprimorar a experiência do usuário, integrando design e
        desenvolvimento de maneira sinérgica.
      </Paragraph>
      <Paragraph>
        Encaro a área da tecnologia como uma oportunidade constante de evolução.
        Estou continuamente em busca de novos conhecimentos para impulsionar meu
        desenvolvimento profissional e aprimorar ainda mais as habilidades que
        já possuo.
      </Paragraph>
    </div>
  )
}
