'use client'

import { PaperPlaneRight } from '@phosphor-icons/react'
import { Button } from '../Button'
import { Paragraph } from '../Paragraph'
import { Footer } from './Footer'

export function Contacts() {
  return (
    <>
      <div className="relative mb-20 h-full w-full rounded-2xl border-2 border-cyan-400 lg:mb-0 lg:h-[19.375rem] ">
        <div className="flex w-full flex-col items-center justify-center gap-4 px-16 py-6 lg:items-start lg:py-10 ">
          <h2 className="font-contrail_one text-xl text-cyan-400 lg:text-3xl">
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
