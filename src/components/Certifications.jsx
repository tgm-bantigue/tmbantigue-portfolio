import freecodecamp from '../assets/freecodecamp.png';
import harvard from '../assets/harvard.png';
import dataanalytics from '../assets/dataanalytics.png';
import datasci from '../assets/datasci.png';
import machinelearning from '../assets/machinelearning.png';
import projectmgmt from '../assets/projectmgmt.png';

const Certifications = () => {
  return (
    <div className='max-w-[1200px] mx-auto p-5 spacing' id='certifications'>
        <div className='pb-8'>
            <p className='text-4xl mb-3 font-bold primary-color'>Certifications and Trainings</p>
            <p className='text-gray-400'>Check out some of my recent certifications and training sessions.</p>
        </div>   


        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                            shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                            h-[200px] bg-cover relative'>
                <img src={freecodecamp} alt="Project 1" className="object-cover w-full h-full"/>
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                                justify-center items-center'>        
                    <span className='text-2xl font-bold text-white tracking-wider'></span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 
                                               font-bold text-lg'>
                                View Project
                            </button>
                        </a>
                    </div>
                </div>         
            </div>

            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                            shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                            h-[200px] bg-cover relative'>
                <img src={harvard} alt="Project 2" className="object-cover w-full h-full"/>
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                                justify-center items-center'>        
                    <span className='text-2xl font-bold text-white tracking-wider'></span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 
                                               font-bold text-lg'>
                                View Project
                            </button>
                        </a>
                    </div>
                </div>         
            </div>

            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                            shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                            h-[200px] bg-cover relative'>
                <img src={dataanalytics} alt="Project 3" className="object-cover w-full h-full"/>
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                                justify-center items-center'>        
                    <span className='text-2xl font-bold text-white tracking-wider'></span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 
                                               font-bold text-lg'>
                                View Project
                            </button>
                        </a>
                    </div>
                </div>         
            </div>

            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                            shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                            h-[200px] bg-cover relative'>
                <img src={datasci} alt="Project 2" className="object-cover w-full h-full"/>
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                                justify-center items-center'>        
                    <span className='text-2xl font-bold text-white tracking-wider'></span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 
                                               font-bold text-lg'>
                                View Project
                            </button>
                        </a>
                    </div>
                </div>         
            </div>

            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                            shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                            h-[200px] bg-cover relative'>
                <img src={machinelearning} alt="Project 2" className="object-cover w-full h-full"/>
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                                justify-center items-center'>        
                    <span className='text-2xl font-bold text-white tracking-wider'></span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 
                                               font-bold text-lg'>
                                View Project
                            </button>
                        </a>
                    </div>
                </div>         
            </div>

            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                            shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                            h-[200px] bg-cover relative'>
                <img src={projectmgmt} alt="Project 2" className="object-cover w-full h-full"/>
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                                justify-center items-center'>        
                    <span className='text-2xl font-bold text-white tracking-wider'></span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 
                                               font-bold text-lg'>
                                View Project
                            </button>
                        </a>
                    </div>
                </div>         
            </div>
            
            </div>
            </div> 
            );
        }
        
        export default Certifications;