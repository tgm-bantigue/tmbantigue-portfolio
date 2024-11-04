import java from '../assets/java.png'
import csharp from '../assets/csharp.png'
import vb from '../assets/vb.PNG'
import sql from '../assets/sql.png'
import python from '../assets/python.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import tailwind from '../assets/tailwind.png'
import javascript from '../assets/javascript.png'
import nodejs from '../assets/nodejs.png'
import vue from '../assets/vue.png'
import react from '../assets/react.png'
import php from '../assets/php.png'
import firebase from '../assets/firebase.png'
import git from '../assets/git.png'
import kotlin from '../assets/kotlin.PNG'
import mongodb from '../assets/mongodb.png'
import linux from '../assets/linux.png'
import docker from '../assets/docker.png'
import kubernetes from '../assets/kubernetes.png'

const Skills = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 text-left md:w-full ml-64 md:ml-96 primary-color spacing"> 
        My Tech Stacks:
      </h2>
    
      <div className='text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-6 
                  place-items-center md:flex md:justify-between md:items-center'>
       
       <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={java} alt="Java" width={100} height={100}/>
        <p className="mt-2">Java</p>
      </div>

      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={csharp} alt="C#" width={100} height={100}/>
        <p className="mt-2">C#</p>
      </div>

      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={vb} alt="VB" width={100} height={100}/>
        <p className="mt-2">VB</p>
      </div>

      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={sql} alt="SQL" width={100} height={100}/>
        <p className="mt-2">SQL</p>
      </div>

      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={python} alt="Python" width={100} height={100}/>
        <p className="mt-2">Python</p>
      </div>

      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={html} alt="HTML" width={100} height={100}/>
        <p className="mt-2">HTML</p>
      </div>

      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={css} alt="CSS" width={100} height={100}/>
        <p className="mt-2">CSS</p>
      </div>

      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={tailwind} alt="Tailwind" width={100} height={100}/>
        <p className="mt-2">Tailwind</p>
      </div>

      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={javascript} alt="JavaScript" width={100} height={100}/>
        <p className="mt-2">JavaScript</p>
      </div>

      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={nodejs} alt="Node.js" width={100} height={100}/>
        <p className="mt-2">Node.js</p>
      </div>
      
      </div>

      <div className='text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-6 
                  place-items-center md:flex md:justify-between md:items-center mt-8'>
                    
      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={vue} alt="Vue" width={100} height={100}/>
        <p className="mt-2">Vue</p>
      </div>

      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={react} alt="React" width={100} height={100}/>
        <p className="mt-2">React</p>
      </div>

      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={php} alt="PHP" width={100} height={100}/>
        <p className="mt-2">PHP</p>
      </div>

      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={firebase} alt="Firebase" width={100} height={100}/>
        <p className="mt-2">Firebase</p>
      </div>

      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={git} alt="Git" width={100} height={100}/>
        <p className="mt-2">Git</p>
      </div>

      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={kotlin} alt="Kotlin" width={100} height={100}/>
        <p className="mt-2">Kotlin</p>
      </div>

      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={mongodb} alt="MongoDB" width={100} height={100}/>
        <p className="mt-2">MongoDB</p>
      </div>

      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={linux} alt="Linux" width={100} height={100}/>
        <p className="mt-2">Linux</p>
      </div>

      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={docker} alt="Docker" width={100} height={100}/>
        <p className="mt-2">Docker</p>
      </div>

      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={kubernetes} alt="Kubernetes" width={100} height={100}/>
        <p className="mt-2">Kubernetes</p>
      </div>
      
      </div>
      </div>
    )
}

export default Skills