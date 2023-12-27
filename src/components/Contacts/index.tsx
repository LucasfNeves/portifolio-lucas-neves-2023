'use client'

import { PaperPlaneRight } from '@phosphor-icons/react'
import { Button } from '../Button'
import { Paragraph } from '../Paragraph'
import { Footer } from './Footer'

export function Contacts() {
  return (
    <>
      <h3 className="font-contrail_one w-full text-start text-cyan-400">
        Contatos
      </h3>
      <div className="relative h-[19.375rem] w-full rounded-2xl border-2 border-cyan-400 ">
        <div className="flex justify-center flex-col gap-4 items-start py-10 px-16">
          <h2 className="font-contrail_one text-cyan-400 text-3xl">
            VAMOS CONSTRUIR ALGO JUNTOS ?
          </h2>
          <Paragraph>
            Se você tem algum projeto em mente, sinta-se à vontade para me
            enviar uma mensagem.
          </Paragraph>
          <Button
            icon={<PaperPlaneRight weight="fill" className="h-6 w-6" />}
            variant="SectionContact"
            title="Enviar mensagem"
            link="https://wa.me/5511913302042"
            target="_blank"
          />
        </div>
        <Footer />
      </div>
    </>
  )
}
