import { FC, useState, useEffect } from 'react'

import { motion, AnimatePresence, Variants } from 'framer-motion'
import Product from './Product'

interface Props {
  products: Array<any>
}

const ProductDisplay: FC<Props> = ({ products }) => {
  const [displacement, setDisplacement] = useState('0')

  const slidingVariant: Variants = {
    initial: {
      x: displacement,
      opacity: 0,
    },
    animate: {
      x: '0',
      opacity: 1,
    },
    exit: {
      x: '-100vw',
      opacity: 0,
    },
  }

  useEffect(() => {
    setDisplacement('100vw')
  }, [])

  return (
    <div className='pr-40 mt-40 mb-0 w-1/2 -z-50'>
      <h3 className='text-5xl font-medium pb-5'>
        My <br /> storehouse
      </h3>
      <h5 className='text-lg font-medium'>Products</h5>
      <AnimatePresence mode='popLayout'>
        {products.map((p) => (
          <motion.div
            variants={slidingVariant}
            animate='animate'
            exit='exit'
            initial='initial'
            key={p.id}
            layout
            transition={{
              type: 'keyframes',
            }}
          >
            <Product title={p.name} image={p.image} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default ProductDisplay
