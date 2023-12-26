import { Paragraph } from '../Paragraph'
import { SubTitle } from '../SubTitle'

export function Describe() {
  return (
    <>
      <SubTitle>Minhas principais habilidades</SubTitle>
      <Paragraph>
        Ao longo da minha trajetória como desenvolvedor web, as principais
        tecnologias que eu possuo conhecimento são o{' '}
        <strong className="font-bold text-cyan-400">
          JavaScript,TypeScript, ReactJS e NextJS, além das bases essenciais de
          HTML5, CSS3, Tailwind CSS e Styled Components
        </strong>
        . Além disso, utilizo o{' '}
        <strong className="font-bold text-cyan-400">Figma</strong> para
        aprimorar a experiência do usuário, integrando design e desenvolvimento
        de maneira sinérgica.
      </Paragraph>
      <Paragraph>
        Vejo a área da tecnologia como uma oportunidade de constante evolução e
        aprendizado, por isso sempre estou buscando novos conhecimentos para
        impulsionar meu desenvolvimento profissional e me aperfeiçoar nos
        conhecimentos que já possuo
      </Paragraph>
    </>
  )
}
