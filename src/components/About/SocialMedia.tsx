import { GithubLogo, LinkedinLogo } from 'phosphor-react'
import { ButtonSmall } from '../ButtonSmall'

export function SocialMedia() {
  return (
    <section>
      <h2 className="font-contrail_one mt-12 text-2xl">Minhas redes sociais</h2>
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
  )
}
