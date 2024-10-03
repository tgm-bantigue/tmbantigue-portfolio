import React from 'react'
import heroimage from '../assets/avatar.JPG'
//import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black'>
        
        <div className='my-auto mx-auto w-[160px] h-auto lg:w-[260px]'>
           <img src={heroimage} alt="hero imageee"/>
        </div>
        
        <div className='col-span-2 px-5 my-auto'>
            <h1 className='text-white text-4xl sm:text-5xl lg-:text-8xl font-extrabold'>
                <span className="primary-color">
                    I'm a 
                </span>
                <br/>
                <span> Programmer Analyst </span>
               
            </h1>
            
            <br/>
            <hr/>

            <p className="text-white sm:text-lg my-6 lg:text-xl">
                My name is Tristan Glenn M. Bantigue and I have 5 years experience in IT.
            </p>

            <div className='my-8'> 
                    <a href="/" className="px-6 py-3 w-full rounded-xl mr-4
                            bg-gradient-to-br from-orange-500 to-pink-500 
                            text-white">
                        Download Resume
                    </a>
                    <a href="#contact" className="px-6 py-3 w-full rounded-xl
                           border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 
                            text-white hover:border-none">
                        Contact
                    </a>
            </div>           
        </div>
    </div>
  )
}

export default Hero