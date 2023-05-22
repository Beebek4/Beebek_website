import Head from 'next/head';
import Image from 'next/image';
import { AiOutlineSmile, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
import projectdata from "./projectdata";
import ImageSwap from "./ImageSwap";
import favicon from "../public/favicon.ico";

export default function Home() {
  return (
    <main className='bg-white px-5 md:px-20 lg:px-40'>
      <Head>
        <link rel="shortcut icon" href="../public/favicon.ico" />
      </Head>
      <section className='min-h-screen'>
        <nav className='py-10 mb-4 flex justify-between lg:mb-0'>
          <AiOutlineSmile className=' cursor-pointer text-xl transition ease-in-out delay-150hover:-translate-y-1 hover:scale-110 duration-300'/>
          <a className='bg-indigo-400 text-white px-4 py-2 rounded-md ml-8 transition ease-in-out delay-150hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300' href='https://docs.google.com/document/d/e/2PACX-1vRw4ek_bz8IK68q-8M6_ykKHS7YGzhXx2RErAdHFVPrhnvdQEAPIPlFBYzYXgXM-nlhcK6A2I4X-Ml5/pub' target="_blank">Resume</a>
        </nav>
        <div className='text-center p-4 lg:p-2'>
          <h2 className='text-5xl py-6 text-indigo-400 font-bold lg:py-0'>Beebek Limbu</h2>
          <h3 className='text-xl py-4'>Computer Science Student</h3>
          <p className='text-gray-500 leading-6 py-4 max-w-sm mx-auto lg:py-2'>Natural inclination towards problem-solving, constantly seeking new opportunities to learn and grow.</p>
        </div>
        <div className='text-5xl flex justify-center gap-12 py-12 text-gray-700 lg:py-8'>
          <a className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-black duration-300' href="https://github.com/Beebek4" target="_blank"><AiFillGithub/></a>
          <a className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-black duration-300' href="https://www.linkedin.com/in/beebeklimbu/" target="_blank"><AiFillLinkedin/></a>
          <a className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-black duration-300' href="mailto: limbubeebek@gmail.com"><HiOutlineMail/></a>
        </div>
        <div className='lg:flex gap-10'>
          <ImageSwap /> 
          <div className='h-80 lg:w-80 mx-auto overflow-hidden text-center align-middle inline-block'>
            <p className='font-mono p-6 py-12'>
            Namaste! I am currently a London University student pursuing my bachelor's in computer science. 
            <br/>I like to create unique and fun projects. I hope you enjoy seeing them as much as I did making them.
            </p>
          </div>
          
        </div>
        
      </section>
      <section>
        <h2 className=' text-center font-bold text-2xl py-4 text-indigo-500'>My Projects</h2>
        <div className='flex flex-col gap-10 p-8 lg:flex-row lg:flex-wrap'>
          {projectdata.map((project)=>(
          <div className='text-center shadow-xl my-4 rounded-lg basis-1/3 flex-1'>

            <h3 className=' font-semibold'>{project.name}</h3>
            <div className='lg:w-96 lg:h-72 md:w-80 md:h-64 w-52 h-44  relative m-auto'>
              <Image className='m-auto rounded-3xl border-solid border-2 border-gray-600' fill={true} src={project.imgUrl} alt={project.imgAlt}/>
            </div>
            
            <p className='max-w-md p-4 m-auto '>{project.desc}</p>
            <details className='question py-4'>
              <summary className='text-gray-600 '>Design Tools Used:</summary>
              {project.tools.map((tool)=>(
                <ul>
                  <li key={tool} className=' text-gray-600'>{tool}</li>
                </ul>
              ))}
            </details>
          </div>
          ))}
        </div>
      </section>
    </main>
  )
}
