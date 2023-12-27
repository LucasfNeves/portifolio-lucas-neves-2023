import CSS from '../../assets/CSS.svg'
import HTML from '../../assets/HTML.svg'
import JS from '../../assets/JS.svg'
import TS from '../../assets/TS.svg'
import Node from '../../assets/Node.svg'
import Next from '../../assets/Next.svg'
import Tailwind from '../../assets/Tailwind.svg'
import React from '../../assets/React.svg'
import Image from 'next/image'

export function IconsTechs() {
  return (
    <div className="mb-6 flex gap-4 flex-wrap">
      <Image src={CSS} alt={''} />
      <Image src={HTML} alt={''} />
      <Image src={JS} alt={''} />
      <Image src={TS} alt={''} />
      <Image src={Node} alt={''} />
      <Image src={Next} alt={''} />
      <Image src={Tailwind} alt={''} />
      <Image src={React} alt={''} />
    </div>
  )
}
