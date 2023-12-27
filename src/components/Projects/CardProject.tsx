'use client'

import Image, { StaticImageData } from 'next/image'
import { Paragraph } from '../Paragraph'
import { Button } from '../Button'

interface CardProjectProps {
  title: string
  date: string
  description: string
  image: StaticImageData
}

export function CardProject({
  title,
  date,
  description,
  image,
}: CardProjectProps) {
  return (
    <article className="group relative w-full sm:w-[24rem] md:w-[24rem] lg:w-full xl:w-[24rem] min-h-[21.5rem] bg-gray-800 px-7 flex items-center lg:items-start flex-col hover:scale-105  justify-center rounded-2xl trasition duration-200 ease-in-out hover:bg-opacity-50">
      <figure className="trasition duration-200 ease-in-out group-hover:opacity-50 mb-2">
        <Image width={338} height={190.04} src={image} alt={''} />
      </figure>
      <div className="group-hover:opacity-50 trasition flex flex-col items-start duration-200 ease-in-out">
        {' '}
        <small className="text-sm font-robot text-white mb-1">{date}</small>
        <h1 className="text-base font-robot font-bold text-white mb-1">
          {title}
        </h1>
        <Paragraph>{description}</Paragraph>
      </div>

      <div className="w-full absolute top-[50%] bottom-[50%] left-0 right-0 flex justify-center items-center opacity-0 translate-y-36 transition-all duration-200 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 ">
        <Button link={'/'} variant="CardProject" title="Ver mais" />
      </div>
    </article>
  )
}
