import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name="home" className='w-full h-screen bg-black'> 

 {/* Main */}
        <div className='max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-full'>

            <h2 className='text-white pb-4 uppercase text-2xl'>Hi, my name is Valentin and I'm a </h2>
            <h1 className='text-white font-bold uppercase py-4 text-4xl max-w-[700px]'>Photographer</h1>
            <h1 className='text-white font-bold uppercase py-4 text-4xl max-w-[700px]'>Videographer</h1>
            <h1 className='text-white font-bold uppercase py-4 text-4xl max-w-[700px]'>Web Developer </h1>
            <h2 className='text-white py-4 uppercase text-2xl'> based in Belgium </h2>

          
        </div>

    </div>
  )
}

export default Home