import HeroImg from '../assets/hero.png';
import { AiOutlineWhatsApp, AiOutlineLinkedin, AiOutlineGithub  } from "react-icons/ai";

export default function Hero() {
    return  <section className='flex flex-col md:flex-row px-5 py-32 bg-secondary justify-center'>
                <div className='w-1/2 flex flex-col'>
                    <h1 className='text-white text-6xl font-hero-font'>Hi, <br/> Im <span className='text-black'>Y</span> Rajuvkaran
                    <p className='text-2xl'>I'm a Full-stack developer</p>
                    </h1>
                    <div className='flex py-5'>
                        <a href='#' className='pr-5 hover:text-white'><AiOutlineWhatsApp size={40}/></a>
                        <a href='#' className='pr-5 hover:text-white'><AiOutlineLinkedin size={40}/></a>
                        <a href='#' className='hover:text-white'><AiOutlineGithub size={40}/></a>
                    </div>
                </div>
                <img className='md:w-1/3' src={HeroImg} />
            </section>
    }