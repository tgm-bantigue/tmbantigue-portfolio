import btrmerge from '../assets/btrmerge.jpg';
import ticketreservation from '../assets/ticketreservation.png';
import resto from '../assets/resto.png';
import qr from '../assets/qr.png';
import librarymgmt from '../assets/librarymgmt.png';
import ibps from '../assets/ibps.png';

const Work = () => {
  return (
    <div className='max-w-[1200px] mx-auto p-5 spacing' id='work'>
        <div className='pb-8'>
            <p className='text-4xl mb-3 font-bold primary-color'>Work</p>
            <p className='text-gray-400'>Check out some of my recent work</p>
        </div>   


        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                            shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                            h-[200px] bg-cover relative'>
                <img src={btrmerge} alt="Project 1" className="object-cover w-full h-full"/>
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                                justify-center items-center'>        
                    <span className='text-2xl font-bold text-white tracking-wider'>BTR Merge Application</span>
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
                <img src={ticketreservation} alt="Project 2" className="object-cover w-full h-full"/>
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                                justify-center items-center'>        
                    <span className='text-2xl font-bold text-white tracking-wider'>Cinema Ticket Reservation System</span>
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
                <img src={resto} alt="Project 3" className="object-cover w-full h-full"/>
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                                justify-center items-center'>        
                    <span className='text-2xl font-bold text-white tracking-wider'>Restaurant Management System</span>
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

            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hiddens
                            shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                            h-[200px] bg-cover relative'>
                <img src={qr} alt="Project 2" className="object-cover w-full h-full"/>
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                                justify-center items-center'>        
                    <span className='text-2xl font-bold text-white tracking-wider'>QR-Based Academic Activities and
                    Events Registration System</span>
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
                <img src={librarymgmt} alt="Project 2" className="object-cover w-full h-full"/>
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                                justify-center items-center'>        
                    <span className='text-2xl font-bold text-white tracking-wider'>Library Management System</span>
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
                <img src={ibps} alt="Project 2" className="object-cover w-full h-full"/>
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                                justify-center items-center'>        
                    <span className='text-2xl font-bold text-white tracking-wider'>Intelligent Business Processing Suite</span>
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

export default Work;