import WebSiteImg_1 from '../assets/ecommerce-websites.jpg';
import WebSiteImg_2 from '../assets/food-ecommerce.jpg';
import WebSiteImg_3 from '../assets/website-blog.jpg';

export default function Project () {
    return  <section className="flex flex-col py-20 px-5 justify-center text-white bg-primary">
                <div className="w-full">
                    <div className="flex flex-col py-5 px-10">                        
                        <h1 className='text-4xl border-secondary border-b-2 mb-5 w-[140px] font-bold'>Projects</h1>
                        <p>These are some of my best projects. I have built these with React, MERN and vanilla CSS. Check them out.</p>
                    </div>
                </div>
                <div className="w-full">
                    <div className='flex flex-col md:flex-row px-10 gap-5'>        
                        <div className='relative'>
                            <img className='h-[200px]' src={WebSiteImg_1}/>
                            <div className='project-desc'>
                                <p className='text-center px-5 py-5'>A Ecommerce Website. Built with MERN stack.</p>
                            </div>                            
                        </div>                
                        <div className='relative'>                            
                            <img className='h-[200px]' src={WebSiteImg_2}/>
                            <div className='project-desc'>
                                <p className='text-center px-5 py-5'>Food Ecommerce website like Swiggy, Built with Angular & .Net</p>
                            </div>
                        </div>                
                        <div className='relative'>
                            <img className='h-[200px]' src={WebSiteImg_3}/>      
                            <div className='project-desc'>
                                <p className='text-center px-5 py-5'>Basic Blog Website . Built with Next JS and MongoDB</p>
                            </div>                      
                        </div>                
                    </div>
                </div>
            </section>
}