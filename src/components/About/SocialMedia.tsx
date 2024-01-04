'use client'

import { ButtonSmall } from '../ButtonSmall'
import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react'

export function SocialMedia() {
  return (
    <section>
      <h2 className="mt-8 font-contrail_one text-2xl">Minhas redes sociais</h2>
      <div className="mt-4 flex items-center justify-center gap-4 lg:justify-start">
        <ButtonSmall
          target={'_blank'}
          title="GitHub"
          icons={<GithubLogo weight="fill" className="h-6 w-6" />}
          linkSocial={'https://github.com/LucasfNeves'}
        />
        <ButtonSmall
          target={'_blank'}
          title="Linkedin"
          icons={<LinkedinLogo weight="fill" className="h-6 w-6" />}
          linkSocial={
            'https://www.linkedin.com/in/lucas-farias-das-neves-118845239/'
          }
        />
      </div>
    </section>
  )
}
