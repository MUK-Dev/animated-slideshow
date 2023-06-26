import { FC } from 'react'

interface Props {
  className?: string
  blobRef?: any
}

const Blob: FC<Props> = ({ className, blobRef }) => {
  return (
    <svg
      viewBox='0 0 1000 1000'
      className={className}
      ref={blobRef}
      xmlns='http://www.w3.org/2000/svg'
    >
      <defs>
        <clipPath id='a'>
          <path
            fill='currentColor'
            d='M833.5 681.5Q710 863 492 877T178.5 695.5Q83 500 167 284.5T496 76q245 7 353 215.5t-15.5 390Z'
          />
        </clipPath>
      </defs>
      <g clip-path='url(#a)'>
        <path d='M833.5 681.5Q710 863 492 877T178.5 695.5Q83 500 167 284.5T496 76q245 7 353 215.5t-15.5 390Z' />
      </g>
    </svg>
  )
}

export default Blob
