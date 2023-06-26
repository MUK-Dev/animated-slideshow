import { FC } from 'react'

interface Props {
  handleNext: () => void
}

const Controls: FC<Props> = ({ handleNext }) => {
  return (
    <div className='flex justify-center mt-5'>
      <div className='flex justify-between items-center h-10 shadow-[0_20px_40px_rgba(0,0,0,0.5)] rounded-3xl py-11 px-5 font-bold text-xl'>
        <div className='flex px-10'>
          <button className='p-5 hover:bg-slate-100 rounded-3xl text-3xl transition-colors'>
            👌
          </button>
          <button className='p-5 hover:bg-slate-100 rounded-3xl text-3xl transition-colors'>
            👨‍💼
          </button>
          <button className='p-5 hover:bg-slate-100 rounded-3xl text-3xl transition-colors'>
            🏃‍♀️
          </button>
        </div>
        <button
          className='bg-black py-6 px-7 text-white hover:bg-gray-600 rounded-3xl transition-colors'
          onClick={handleNext}
        >
          ➜
        </button>
      </div>
    </div>
  )
}

export default Controls
