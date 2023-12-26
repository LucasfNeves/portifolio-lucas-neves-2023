'use client'

import { CardProject } from './CardProject'
import ImageDeliveryBurguer from '../../assets/Image-delivery-burguer.png'

const projectsList = [
  {
    title: 'Delivery Burguer',
    date: 'Nov - 2023',
    description: 'Plataforma para pedidos de hambúrguer',
    image: ImageDeliveryBurguer,
  },
  {
    title: 'Delivery Burguer',
    date: 'Nov - 2023',
    description: 'Plataforma para pedidos de hambúrguer',
    image: ImageDeliveryBurguer,
  },
  {
    title: 'Delivery Burguer',
    date: 'Nov - 2023',
    description: 'Plataforma para pedidos de hambúrguer',
    image: ImageDeliveryBurguer,
  },
]

export function ContainerProjects() {
  return (
    <div className="mt-12 grid grid-cols-3 gap-5 w-full">
      {projectsList.map((project) => (
        <CardProject
          key={project.title}
          title={project.title}
          date={project.date}
          description={project.description}
          image={project.image}
        />
      ))}
    </div>
  )
}
