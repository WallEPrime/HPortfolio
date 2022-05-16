import React from 'react'
import project from '../assets/project.png'
import i360 from '../assets/i360.png'
import assur from '../assets/assur.png'
import eshop from '../assets/eshop.png'
import mango from '../assets/mango.png'
import web from '../assets/web.png'
import app from '../assets/app.jpeg'

function Work() {
  return (
    <div  name='work' className='w-full md:h-screen text-gray-300 bg-black'> 

        <div className='max-w-[1000px] mx-auto p4 flex flex-col justify-center w-full h-full'>

            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-white uppercase'>Work</p>
               
            </div>
 {/* Main Container*/}
            <div   className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/*item*/}
                <div  style={{backgroundImage: `url(${project})`}} className='shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    
                    {/*hover*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Wordpress
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://photorized.be/" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg'>Demo</button>
                            </a>

                        </div>
                    </div>
                </div>
                               {/*item*/}
                               <div  style={{backgroundImage: `url(${i360})`}} className='shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    
                    {/*hover*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            WordPress
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://360immo.eu/" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg'>Demo</button>
                            </a>
                        </div>
                    </div>
                </div>
                               {/*item*/}
                               <div  style={{backgroundImage: `url(${eshop})`}} className='shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    
                    {/*hover*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Shopify
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://photorized.shop/ " target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg'>Demo</button>
                            </a>

                        </div>
                    </div>
                </div>
                               {/*item*/}
                               <div  style={{backgroundImage: `url(${web})`}} className='shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    
                    {/*hover*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            WordPress
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://webandchill.be/" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg'>Demo</button>
                            </a>

                        </div>
                    </div>
                </div>
                               {/*item*/}
                               <div  style={{backgroundImage: `url(${assur})`}} className='shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    
                    {/*hover*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            WordPress
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://assurimo.ch/" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg'>Demo</button>
                            </a>

                        </div>
                    </div>
                </div>
                               {/*item*/}
                               <div  style={{backgroundImage: `url(${app})`}} className='shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    
                    {/*hover*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Ionic / Angular Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://play.google.com/store/apps/details?id=be.photorized.carmeets&gl=BE" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg'>Demo</button>
                            </a>

                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Work