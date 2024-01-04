import { Envelope, GithubLogo, LinkedinLogo } from '@phosphor-icons/react'
import { ButtonSmall } from '../ButtonSmall'

export function Footer() {
  return (
    <footer className="flex h-[5rem] w-full items-center justify-center gap-6 border-t-2 border-cyan-400 lg:absolute lg:bottom-0 lg:right-0">
      <ButtonSmall
        target={'_blank'}
        variant="regular"
        icons={<LinkedinLogo className="h-7 w-7" />}
        linkSocial={
          'https://www.linkedin.com/in/lucas-farias-das-neves-118845239/'
        }
        title="Linkedin"
      />
      <ButtonSmall
        variant="regular"
        target={'_blank'}
        icons={<GithubLogo className="h-7 w-7" />}
        linkSocial={'https://github.com/LucasfNeves'}
        title="Github"
      />
      <ButtonSmall
        target={'_blank'}
        variant="regular"
        icons={<Envelope className="h-7 w-7" />}
        linkSocial={'mailto:lucasfarias.ln@gmail.com'}
        title="E-mail"
      />
    </footer>
  )
}
