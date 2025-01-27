import WebSiteImg_1 from '../assets/ecommerce-websites.jpg';
import WebSiteImg_2 from '../assets/food-ecommerce.jpg';
import WebSiteImg_3 from '../assets/website-blog.jpg';

export default function Project () {
    const config = {
        projects : [
            {
                img: WebSiteImg_1,
                desc: "A Ecommerce Website. Built with MERN stack.",
                link: ""
            },
            {
                img: WebSiteImg_2,
                desc: "Food Ecommerce website like Swiggy, Built with Angular & .Net",
                link: ""
            },
            {
                img: WebSiteImg_3,
                desc: "Basic Blog Website . Built with Next JS and MongoDB",
                link: ""
            }
        ]
    }
    return  <section id='project' className="flex flex-col py-20 px-5 justify-center text-white bg-primary">
                <div className="w-full">
                    <div className="flex flex-col py-5 px-10">                        
                        <h1 className='text-4xl border-secondary border-b-2 mb-5 w-[140px] font-bold'>Projects</h1>
                        <p>These are some of my best projects. I have built these with React, MERN and vanilla CSS. Check them out.</p>
                    </div>
                </div>
                <div className="w-full">
                    <div className='flex flex-col md:flex-row px-10 gap-5'>        
                        {config.projects.map((project) => (                                                   
                            <div className='relative'>
                                <img className='h-[200px]' src={project.img}/>
                                <div className='project-desc'>
                                    <p className='text-center px-5 py-5'>{project.desc}</p>
                                    <div className='flex justify-center'>
                                        <a className='btn' target='_blank' href={project.link}>View Project </a>
                                    </div>
                                </div>                            
                            </div>                                                          
                        ))}
                    </div>
                </div>
            </section>
}