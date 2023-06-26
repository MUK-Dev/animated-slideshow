import { FC } from 'react'

interface Props {
  image: string
  title: string
}

const Product: FC<Props> = ({ image, title }) => {
  return (
    <div className='flex justify-between items-end'>
      <h2 className='text-xl font-semibold'>{title}</h2>
      <div className='flex gap-10 items-end'>
        <p>100 X 100</p>
        <img
          src={image}
          alt='product'
          width={100}
          height={100}
          className='translate-y-5'
        />
        <button className='font-bold text-xl'>+</button>
      </div>
    </div>
  )
}

export default Product
