'use client'

import Image from 'next/image'

import { Section } from '@/components/Section'
import { About } from '@/components/About'
import { Technologies } from '@/components/Technologies'

export default function Home() {
  return (
    <>
      <Section>
        <About />
      </Section>
      <Section>
        <h2 className="font-contrail_one mb-2 w-full text-start text-cyan-400">
          Tecnologias
        </h2>
        <Technologies />
      </Section>
    </>
  )
}
