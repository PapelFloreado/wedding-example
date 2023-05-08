import React from 'react'

const Family = () => {

  return (
        <div className=' bg-melon bg-cover bg-opacity-50 font-roboto font-light'>
            <h2 className='text-center pt-20 text-8xl'>Our Parents</h2>
            <div className='flex justify-around text-6xl'>
                <div className='justify-center'>
                    <p>Bride</p>
                    <p className='my-10 text-4xl text-center'>Vilma</p>
                    <p className='text-4xl text-center'>Alexis</p>
                </div>
                <div className='justify-center'>
                    <p className=''>Boyfriend</p>
                    <p className='my-10 text-4xl text-center'>Vilma</p>
                    <p className='text-4xl text-center'>Alexis</p>
                </div>
            </div>
            <div className='mt-10'>
                <p className='text-6xl text-center'>Godparents</p>
                <div className='flex justify-around mt-10'>
                    <p className="text-4xl">John Bonachon</p>
                    <p className="text-4xl">John Bonachon</p>
                    <p className="text-4xl">John Bonachon</p>
                    <p className="text-4xl">John Bonachon</p>
                </div>

            </div>
            
        </div>
  )
}

export default Family