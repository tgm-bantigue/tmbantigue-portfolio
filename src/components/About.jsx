import aboutImg from '../assets/about.jpg';

const About = () => {
  return (
    <div className="text-gray-400 max-w-[1200px] mx-auto my-12 spacing" id="about">
      <div className="md:grid md:grid-cols-2 sm:py-16">
        <div className="mt-4 md:mt-0 text-left flex">
          <div className="my-auto mx-6">
            <h2 className="text-4xl font-bold mb-4 primary-color">About Me</h2>
            <p className="text-base lg:text-lg">
              I&#39;m a highly motivated and detail-oriented individual with a passion for creating innovative solutions that address real-world challenges. With a strong foundation in technology and problem-solving, I thrive in fast-paced environments where I can apply my skills to develop efficient, user-centered applications. I&#39;m driven by a continuous desire to learn and improve, which helps me stay updated with industry trends and best practices. My commitment to delivering high-quality work and collaborating effectively with teams makes me a valuable asset in achieving project goals.
            </p> 
          </div>
        </div>
        <img className="mx-auto rounded-3xl py-8 md:py-0" alt="Profile picture of [Your Name]" src={aboutImg} width={300} height={300} />
      </div>
    </div>
  );
}

export default About;