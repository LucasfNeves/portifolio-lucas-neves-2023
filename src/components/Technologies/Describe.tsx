import { Paragraph } from '../Paragraph'
import { SubTitle } from '../SubTitle'

export function Describe() {
  return (
    <div className="flex flex-col gap-2">
      <SubTitle>Minhas principais habilidades</SubTitle>
      <Paragraph>
        Ao longo da minha jornada como desenvolvedor web, desenvolvi projetos
        reias em diversas tecnologias. Possuo experiência{' '}
        <strong className="font-bold text-cyan-400">
          JavaScript, TypeScript, HTML, CSS, React.js, Next.js, TailwindCSS,
          Styled-Components, Sass, Git, GitHub, CI/CD, Docker, Vitest, Jest,
          Node.JS, Express, PostgreSQL, MySQL, MongoDB, REST API, JWT, SEO,
          Acessibilidade, Responsividade, Design Patterns, Clean Code, SOLID,
          Firebase e outras tecnologias.
        </strong>{' '}
        . Utilizo o <strong className="font-bold text-cyan-400">Figma</strong>{' '}
        para aprimorar a experiência do usuário, integrando design e
        desenvolvimento de maneira sinérgica.
      </Paragraph>
      <Paragraph>
        A tecnologia é, para mim, uma oportunidade constante de evolução. Estou
        sempre em busca de novos conhecimentos para impulsionar meu crescimento
        profissional e aprimorar ainda mais as habilidades que já possuo.
      </Paragraph>
    </div>
  )
}
