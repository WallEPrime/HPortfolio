import React from 'react'
import kill from '../assets/kill.png'
import ps from '../assets/ps.png'
import premiere from '../assets/premiere.jpeg'
import wordpress from '../assets/wordpress.png'
import php from '../assets/php.png'
import mysql from '../assets/mysql.png'
import js from '../assets/js.png'
import ionic from '../assets/ionic.png'



function Skill() {
  return (
    <div name='skill' className=' w-full h-screen bg-black text-gray-300'>

{/* Container */}
<div className='max-w-[1000px] mx-auto p-6 flex flex-col justify-center w-full h-full pt-10' >
        <div  >

            <p className='text-4xl inline border-b-4 border-white uppercase '>Skills</p>
            <p className='py-4'> </p>

        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className=''>
                <img className='w-20 mx-auto' src={ps} alt="Skill" />
                <p className='my-4'>PHOTOSHOP</p>
            </div>
            <div className=''>
                <img className='w-20 mx-auto' src={premiere} alt="Skill" />
                <p className='my-4'>PREMIERE</p>
            </div>
            <div className=''>
                <img className='w-20 mx-auto' src={wordpress} alt="Skill" />
                <p className='my-4'>WORDPRESS</p>
            </div>
            <div className=''>
                <img className='w-20 mx-auto' src={kill} alt="Skill" />
                <p className='my-4'>SHOPIFY</p>
            </div>
            <div className=''>
                <img className='w-20 mx-auto' src={php} alt="Skill" />
                <p className='my-4'>PHP</p>
            </div>
            <div className=''>
                <img className='w-20 mx-auto' src={mysql} alt="Skill" />
                <p className='my-4'>MYSQL</p>
            </div>
            <div className=''>
                <img className='w-20 mx-auto' src={js} alt="Skill" />
                <p className='my-4'>JAVASCRIPT</p>
            </div>
            <div className=''>
                <img className='w-20 mx-auto' src={ionic} alt="Skill" />
                <p className='my-4'>IONIC</p>
            </div>
        </div>

    
        </div>
    </div>
  )
}

export default Skill