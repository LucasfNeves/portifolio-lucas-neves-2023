import { motion } from 'framer-motion'
import { useNavMenu } from '@/context/NavMenu'
import { ComponentProps } from 'react'
import { Menu, X } from 'lucide-react'

export type ButtonMenuProps = ComponentProps<'button'> & {
  title?: string
}

const animationVariants = {
  open: { rotate: 0 },
  closed: { rotate: 180 },
}

export function ButtonMenu({ ...props }: ButtonMenuProps) {
  const { open, setOpen } = useNavMenu()

  const toggleOpen = () => setOpen(!open)

  return (
    <button
      className="flex h-12 w-12 items-center justify-center rounded-md bg-transparent"
      {...props}
      onClick={toggleOpen}
    >
      <div className="text-white font-bold">
        <motion.div initial="closed" animate={open ? 'open' : 'closed'}>
          <motion.div variants={animationVariants}>
            {!open ? <Menu className="h-7 w-7" /> : <X className="h-6 w-6" />}
          </motion.div>
        </motion.div>
      </div>
    </button>
  )
}
