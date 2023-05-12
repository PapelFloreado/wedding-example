import React from 'react'

const Family = () => {

  return (
        <div className=' text-melon bg-cover bg-opacity-50 font-roboto font-light'>
            <h2 className='text-center pt-20 text-6xl md:text-8xl'>Our Parents</h2>
            <div className='md:flex justify-around text-4xl md:text-6xl'>
                <div className='justify-center '>
                    <p className='mt-10 text-4xl md:text-6xl text-center'>Bride</p>
                    <p className='my-10 text-4xl md:text-6xl font-sacramento text-center'>Vilma Johnson</p>
                    <p className='text-4xl md:text-6xl font-sacramento text-center'>Alexis Johnson</p>
                </div>
                <div className='justify-center'>
                    <p className='mt-10 text-center'>Boyfriend</p>
                    <p className='my-10 text-4xl md:text-6xl font-sacramento text-center'>Vilma Johnson</p>
                    <p className='text-4xl md:text-6xl font-sacramento text-center'>Alexis Johnson</p>
                </div>
            </div>
            <div className='mt-10'>
                <p className='text-4xl md:text-6xl text-center'>Godparents</p>
                <div className='md:flex text-center justify-around mt-10'>
                    <p className="text-4xl mt-10 md:text-6xl font-sacramento">John Bonachon</p>
                    <p className="text-4xl mt-10 md:text-6xl font-sacramento">John Bonachon</p>
                    <p className="text-4xl mt-10 md:text-6xl font-sacramento">John Bonachon</p>
                    <p className="text-4xl mt-10 md:text-6xl font-sacramento">John Bonachon</p>
                </div>

            </div>
            
        </div>
  )
}

export default Family