import heroimage from '../assets/avatar.JPG'
//import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8'>
        
        <div className='my-auto mx-auto w-[160px] h-auto lg:w-[260px]'>
            <img 
    src={heroimage} 
    alt="hero image" 
    className='transition-opacity duration-1000 ease-in-out opacity-0 fade-in-active transform hover:scale-105'
  />
</div>

        
        <div className='col-span-2 px-5 my-auto'>
            <h1 className='text-gray-400 text-4xl sm:text-5xl lg-:text-8xl font-extrabold'>
                <span className="primary-color">
                    I&apos;m a 
                </span>
                <br/>
                <span> Programmer Analyst </span>
               
            </h1>
            
            <br/>
            <hr/>

            <p className="text-gray-400 sm:text-lg my-6 lg:text-xl">
                My name is Tristan Glenn M. Bantigue and I have 5 years experience in IT.
            </p>

            <div className='my-8'> 
                <a href="/Tristan-Glenn-Bantigue-Resume.pdf" download="Tristan-Glenn-Bantigue-Resume.pdf" className="px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-blue-500 to-pink-500 text-white">
                Download Resume
                </a>
                    <a href="#contact" className="px-6 py-3 w-full rounded-xl
                           border border-gray-400 hover:bg-gradient-to-br from-blue-500 to-pink-500 
                            text-gray-400 hover:border-none">
                        Contact
                    </a>
            </div>           
        </div>
    </div>

   
  )
}

export default Hero