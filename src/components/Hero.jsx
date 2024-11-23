import heroimage from '../assets/avatar.JPG';
import resumeFile from '../assets/Tristan-Glenn-Bantigue-Resume.pdf'; // Import the resume file

const Hero = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8">
      
      {/* Image Section */}
      <div className="my-auto mx-auto w-[160px] h-auto lg:w-[260px]">
        <img 
          src={heroimage} 
          alt="Hero" 
          className="transition-opacity duration-1000 ease-in-out opacity-0 fade-in-active transform hover:scale-105"
        />
      </div>

      {/* Text Content Section */}
      <div className="col-span-2 px-5 my-auto">
        <h1 className="text-gray-400 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
          <span className="text-gray-400">I&apos;m a</span>
          <br />
          <span>Programmer Analyst</span>
        </h1>
        
        <br />
        <hr />

        <p className="text-gray-400 sm:text-lg my-6 lg:text-xl">
          Experienced IT professional with 5 years in tech, specializing in software development and system optimization.
        </p>

        {/* Resume Download Button */}
        <div className="my-3 flex space-x-4">
          <a 
            href={resumeFile} 
            download="Tristan-Glenn-Bantigue-Resume.pdf" 
            className="px-6 py-3 w-full rounded-xl border border-gray-400 
                       hover:bg-gradient-to-br from-blue-500 to-pink-500 text-center flex justify-center">
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;