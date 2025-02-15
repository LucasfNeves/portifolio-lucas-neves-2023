'use client'

import Image, { StaticImageData } from 'next/image'
import { Paragraph } from '../Paragraph'
import { Button } from '../Button'

export interface CardProps {
  title: string
  date: string
  description: string
  image: StaticImageData
  id: string
}

export function CardProject({
  title,
  date,
  description,
  id,
  image,
}: CardProps) {
  return (
    <article
      key={id}
      className="trasition group relative flex min-h-[21.5rem] w-full flex-col items-center justify-center rounded-2xl bg-gray-800 px-7 duration-200 ease-in-out hover:scale-105  hover:bg-opacity-50 sm:w-[24rem] md:w-[23rem] lg:w-full lg:items-start xl:w-[23rem]"
    >
      <figure className="trasition mb-2 object-cover duration-200 ease-in-out group-hover:opacity-50">
        <Image
          className="rounded-md object-cover"
          width={338}
          height={190.04}
          src={image}
          alt={''}
        />
      </figure>

      <div className="trasition flex flex-col items-start duration-200 ease-in-out group-hover:opacity-50">
        <small className="font-robot mb-1 text-sm text-white">{date}</small>

        <h1 className="font-robot mb-1 text-base font-bold text-white">
          {title}
        </h1>

        <Paragraph>{description}</Paragraph>
      </div>

      <div className="absolute bottom-[50%] left-0 right-0 top-[50%] flex w-full translate-y-36 items-center justify-center opacity-0 transition-all duration-200 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 ">
        <Button
          link={`projetos/${id}`}
          variant="CardProject"
          title="Ver mais"
        />
      </div>
    </article>
  )
}
