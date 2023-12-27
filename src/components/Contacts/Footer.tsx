'use cleint'

import { Envelope, GithubLogo, LinkedinLogo } from '@phosphor-icons/react'
import { ButtonSmall } from '../ButtonSmall'

export function Footer() {
  return (
    <footer className="flex gap-6 justify-center items-center absolute bottom-0 right-0 w-full h-[5rem] border-t-2 border-cyan-400">
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
    </footer>
  )
}