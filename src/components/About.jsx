import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-fit py-6 bg-black text-gray-300'> 

        <div className='flex flex-col justify-center items-center w-full h-full'>

            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>

                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 uppercase border-white'>About</p>
                     </div>

                </div>
                <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8 pb-6'>
                    <div className='sm: text-righttext-4xl font-bold '>
                        <p className='pt-2 indent-6 text-justify'>Hello my name is Valentin PETREA and I have created this website to apply for one of your job openings with some of the requirements for it.</p>
                        <p className='pt-2 indent-6 text-justify'>I'm a self thaught developer, clearly not a graphic designer, photographer and videographer located in Belgium.</p>
                        <p className='pt-2 indent-6 text-justify'>As you can see on my <span className='underline'><a href="https://www.linkedin.com/in/valentin-petrea/" target='_blank'>CV</a></span> I took different positions which allowed me to grow my skill set, from web development to handling logistics for a e-commerce, to creating different types of media content for the existing platforms.  </p>
                        <p className='pt-2 indent-6 text-justify'>And a little bit about me, I like to travel a lot, discover neighbouring countries, attend trackdays, photography, e-sports and anything related to it.</p>
                        <p className='pt-2 indent-6 text-justify'>I also "created" a Heroic.GG website using some of the technologies listed in the job description for the Web Developer position.</p>
                      
                        <a href="https://heroicgg.netlify.app/" target='_blank'><button className='text-white border-2 px-4 py-3 my-8 mx-auto flex items-center'>Visit website !</button></a>

                    </div>
                    <div>
                        <p>
                            Here are some useful links to show you some of my work:
                        </p>


                    <ul className='list-disc pt-2'>
                        <span  className='uppercase text-xl border-b-2 border-white mb-1'>WEB</span>
                        <a href="https://github.com/WallEPrime" target='_blank'><li>GitHub - display the code for this website and the Heroic team "about" website.</li></a>
                        <a href="https://valentinpetrea.com/" target='_blank'><li>Portfolio - small portfolio built on WordPress that gathers almost all my work done so far.</li></a>
                    </ul>

                    <ul className='list-disc pt-2'>
                        <span className='uppercase text-xl border-b-2 border-white mb-1'>PHOTO</span>
                        <a href="https://instagram.com/photorizedbel" target='_blank'><li>Instagram - Account displaying some of my photography mostly cars</li></a>
                        <a href="https://www.facebook.com/PhotorizedBE" target='_blank'><li>Facebook - Page hosting all of my photography work, car related.</li></a>
                        
                    </ul>
                    
                    <ul className='list-disc pt-2'>
                       <span className='uppercase text-xl border-b-2 border-white mb-1'> VIDEO</span>
                        <a href="https://vimeo.com/webandchill" target='_blank'><li>Vimeo - Account showcasing my videography work. All shot and edited by me.</li></a>
                        <a href="https://www.youtube.com/channel/UCaL7QzBzEfRe3WdfsY5rkSg" target='_blank'><li>YouTube - Channel showcasing my videography work , content related to cars. All shot and edited by me</li></a>
                    </ul>

                    <ul className='list-disc pt-2'>
                       <span className='uppercase text-xl border-b-2 border-white mb-1'> APPLICATIONS </span>
                       <a href="https://play.google.com/store/apps/details?id=be.photorized.carmeets&gl=BE" target='_blank'><li>Google Play - Applicaiton built using Ionic and Angular with a backend built using PHP to do CRUD queries and manage the app. Alpha build.</li></a>
                    </ul>
                    </div>
                    
                </div>
                </div>

               

            </div>

        


    
  )
}

export default About