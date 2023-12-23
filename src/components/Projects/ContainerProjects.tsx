'use client'

import { CardProject } from './CardProject'
import ImageDeliveryBurguer from '../../assets/Image-delivery-burguer.png'

export function ContainerProjects() {
  return (
    <div className="mt-12 grid grid-cols-3 gap-4 w-full">
      <CardProject
        title={'Delivery Burguer'}
        date={'Nov - 2023'}
        description={'Plataforma para pedidos de hambúrguer'}
        image={ImageDeliveryBurguer}
      />
      <CardProject
        title={'Delivery Burguer'}
        date={'Nov - 2023'}
        description={'Plataforma para pedidos de hambúrguer'}
        image={ImageDeliveryBurguer}
      />
      <CardProject
        title={'Delivery Burguer'}
        date={'Nov - 2023'}
        description={'Plataforma para pedidos de hambúrguer'}
        image={ImageDeliveryBurguer}
      />
    </div>
  )
}
