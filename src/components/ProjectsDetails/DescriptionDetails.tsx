/* eslint-disable camelcase */

import { Paragraph } from '../Paragraph'
import { SubTitle } from '../SubTitle'

interface DescriptionDetailsProps {
  about: string
  my_role: string
  tecnologies: string
  notes: string
  date: string
  title: string
}

export function DescriptionDetails({
  about,
  my_role,
  tecnologies,
  notes,
  date,
  title,
}: DescriptionDetailsProps) {
  return (
    <div className="flex flex-col gap-4 px-8 py-6">
      <small className="text-xs text-gray-400 ">{date}</small>
      <SubTitle>{title}</SubTitle>
      <Paragraph>
        <strong className="text-cyan-400">Minha função : </strong>
        {my_role}
      </Paragraph>
      <Paragraph>
        <strong className="text-cyan-400"> Detalhes : </strong>
        {about}
      </Paragraph>
      <Paragraph>
        <strong className="text-cyan-400">Tecnologias Utilizadas : </strong>
        <span className="text-cyan-300">{tecnologies}</span>
      </Paragraph>
      <Paragraph>
        <strong className="text-cyan-400">Notas : </strong>
        {notes}
      </Paragraph>
    </div>
  )
}
