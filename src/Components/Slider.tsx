import { useAnimate, useMotionValue } from 'framer-motion'
import { useRef, useEffect, useState, useId } from 'react'

import Blob from './Blob'
import sofa1 from '../assets/sofa.png'
import sofa2 from '../assets/sofa1.png'
import sofa3 from '../assets/sofa2.png'
import sofa4 from '../assets/sofa3.png'
import ProductDisplay from './ProductDisplay'
import Controls from './Controls'

const iterationValues = [0, 1, 2, 3]

const Slider = () => {
  const [blobRef, animateBlob] = useAnimate()
  const [imagesRef, animateImages] = useAnimate()
  const [img1Ref, animateImg1] = useAnimate()
  const [img2Ref, animateImg2] = useAnimate()
  const [img3Ref, animateImg3] = useAnimate()
  const [img4Ref, animateImg4] = useAnimate()
  const rotateZ = useMotionValue(30)
  const iteration = useMotionValue(0)
  const counter = useRef(1)

  const products = [
    { id: useId(), name: 'Workshop', image: sofa1 },
    { id: useId(), name: 'Sofa', image: sofa2 },
    { id: useId(), name: 'Chair', image: sofa3 },
    { id: useId(), name: 'Blob Sofa', image: sofa4 },
    { id: useId(), name: 'Computer', image: sofa1 },
    { id: useId(), name: 'Table', image: sofa2 },
    { id: useId(), name: 'Door', image: sofa3 },
    { id: useId(), name: 'Curtain', image: sofa4 },
  ]
  const [productIndex, setProductIndex] = useState(4)

  const getBlobColor = () => {
    const i = iteration.get()
    if (i === 0) return '#fda4af'
    else if (i === 1) return '#facc15'
    else if (i === 2) return '#a5b4fc'
    else return '#fcd34d'
  }

  const rotateBlob = () => {
    const r = rotateZ.get()
    const i = iteration.get()

    const blobFillColor = getBlobColor()
    animateBlob(
      blobRef.current,
      {
        rotateZ: r,
        fill: blobFillColor,
      },
      { duration: 0.8 }
    )
    animateImages(
      imagesRef.current,
      {
        rotateZ: r,
      },
      { duration: 0.8 }
    )
    animateImg1(
      img1Ref.current,
      { rotateZ: -r, scale: i === 0 ? 2 : 1 },
      { duration: 0.4, type: 'keyframes', stiffness: 400, ease: 'linear' }
    )
    animateImg2(
      img2Ref.current,
      { rotateZ: -r, scale: i === 3 ? 2 : 1 },
      { duration: 0.4, type: 'keyframes', stiffness: 400, ease: 'linear' }
    )
    animateImg3(
      img3Ref.current,
      { rotateZ: -r, scale: i === 2 ? 2 : 1 },
      { duration: 0.4, type: 'keyframes', stiffness: 400, ease: 'linear' }
    )
    animateImg4(
      img4Ref.current,
      { rotateZ: -r, scale: i === 1 ? 2 : 1 },
      { duration: 0.4, type: 'keyframes', stiffness: 400, ease: 'linear' }
    )

    const n = iterationValues.length
    iteration.set(iterationValues[((counter.current % n) + n) % n])
    counter.current += 1
    rotateZ.set(r + 90)
  }

  useEffect(() => rotateBlob(), [])

  useEffect(() => {
    const interval = setInterval(() => rotateBlob(), 3000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  const handleNext = () => {
    if (productIndex === 4) setProductIndex(8)
    else setProductIndex(4)
  }

  return (
    <div className='min-h-[120vh]'>
      <div className='w-full relative flex justify-end items-start'>
        <div className='absolute -top-[30rem] -left-[30rem] w-[80rem] h-[80rem] -z-40'>
          <Blob className='absolute fill-amber-300 -z-30' blobRef={blobRef} />
          <div className='relative w-full h-full -z-30' ref={imagesRef}>
            {/* First product image */}
            <img
              src={sofa1}
              ref={img1Ref}
              alt='sofa'
              className='w-40 h-40 absolute top-[35rem] scale-[2] left-[70rem] drop-shadow-[0_15px_50px_rgba(255,118,164,1)]'
            />
            <div className='w-20 h-20 scale-110 bg-gradient-to-br z-20 from-lime-300 blur-sm to-lime-600 absolute rounded-full top-[25rem] left-[60rem]' />
            <div className='w-20 h-20 scale-100 bg-gradient-to-br z-20 from-orange-300 blur-sm to-orange-600 absolute top-[55rem] left-[50rem]' />
            {/* 2nd p image */}
            <img
              src={sofa2}
              ref={img2Ref}
              alt='sofa'
              className='w-40 h-40 absolute top-[70rem] left-[35rem] drop-shadow-[0_15px_50px_rgba(198,127,78,1)]'
            />
            <div className='w-20 h-20 scale-125 bg-gradient-to-br z-20 from-red-300 blur-sm to-red-600 absolute rounded-full top-[60rem] left-[25rem]' />
            <div className='w-20 h-20 scale-[1.5] bg-gradient-to-br z-20 from-rose-300 blur-sm to-rose-600 absolute top-[20rem] left-[35rem]' />
            {/* 3rd p image */}
            <img
              src={sofa3}
              ref={img3Ref}
              alt='sofa'
              className='w-40 h-40 absolute top-[35rem] left-0 drop-shadow-[0_15px_50px_rgba(6,129,175,1)]'
            />
            <div className='w-20 h-20 scale-95 bg-gradient-to-br z-20 from-indigo-300 blur-sm to-indigo-600 absolute rounded-full top-[45rem] left-[20rem]' />
            <div className='w-20 h-20 scale-110 bg-gradient-to-br z-20 from-blue-300 blur-sm to-blue-600 absolute top-[10rem] left-[15rem]' />
            {/* 4th p image */}
            <img
              src={sofa4}
              ref={img4Ref}
              alt='sofa'
              className='w-40 h-40 absolute top-0 left-[35rem] drop-shadow-[0_15px_50px_rgba(254,183,57,1)]'
            />
          </div>
        </div>
        <ProductDisplay
          products={products.slice(productIndex - 4, productIndex)}
        />
      </div>
      <Controls handleNext={handleNext} />
    </div>
  )
}

export default Slider
