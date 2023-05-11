import React from 'react'
import amazon from "../../assets/amazon 1.png"
import prezola from "../../assets/prezola 1.png"
import bank from "../../assets/card 1.png"

const Gifts = () => {

  return (
    <div className='bg-melon py-20'>
        <h2 className='text-8xl font-roboto text-center'>Gift Table</h2>
        <p className='text-center text-6xl mt-10'>Our best gift is that you join us this day.</p>
        <p className='text-center text-6xl mt-6'>But if you want to have a detail these are the options.</p>
        <div className='flex justify-center items-center text-4xl mt-10'>
            <div className='basis-1/3 text-center'>
                <div className='flex justify-center mx-auto'>

                    <a className='flex justify-center items-center' href="http://amazon.com" target="_blank" rel="noopener noreferrer">
                        <img className=' hover:scale-95 duration-700 ease-in-out' src={amazon} alt="amazon shop icon" />
                    </a>
                </div>
                <h2 className='mt-10'>Amazon wedding list</h2>
            </div>
            <div className='basis-1/3 text-center'>
                    <a className='flex justify-center items-center' href="http://prezola.com" target="_blank" rel="noopener noreferrer">
                        <img className=' hover:scale-95 duration-700 ease-in-out' src={prezola} alt="shop prezola icon" />
                    </a>
                <h2 className=' mt-10 text-center'>Prezola wedding list</h2>
            </div>
            <div className='basis-1/3 text-center'>
                <div className='flex justify-center items-center'>
                    <img className='w-1/4    hover:scale-95 duration-700 ease-in-out' src={bank} alt="bank icon" />
                </div>
                <div className='mt-10'>
                    <h2>Bank Account</h2>
                    <p className='text-4xl '>Account Number: xxxxxxx</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Gifts