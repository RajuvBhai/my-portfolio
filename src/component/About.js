import AboutImg from '../assets/about.png';

export default function About() {
    return  <section className='flex flex-col md:flex-row bg-secondary px-5'>
                <div className='py-5 md:w-1/2'>
                    <img src={AboutImg} />
                </div>
                <div className='md:w-1/2 flex justify-center text-white'>
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-4xl border-primary border-b-2 mb-5 w-[170px] font-bold'>About me</h1>
                        <p className='pb-5'>Hi, My name is Y Rajuv. I am a Full stack web developer. I built beautiful Websites
                            with React.js and Tailwind CSS</p>
                        <p className='pb-5'>I am proficient in Frontend skills like React.js, Redux, Redux Tool Kit, Axios, Tailwind
                            CSS, Sass, Css3 and many more.</p>
                        <p className='pb-5'>In backend I know Node.js, Express.js, MongoDB, and Mongoose</p>
                    </div>
                </div>
            </section>
}