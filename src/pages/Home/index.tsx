import profile from '../../assets/images/profile.png';
import GitHubIcon from '../../assets/images/githubIcon.svg';
import LinkedinIcon from '../../assets/images/linkedinIcon.svg';
import { Download } from 'lucide-react';


export default function Home() {
    return (
        <div className='flex flex-col justify-between font-[JetBrainsMono] gap-20'>
            <div className='flex justify-between'>
                <section className='flex  flex-col gap-2 w-[50%]'>
                    <h4 className='text-xl'>Software Developer</h4>
                    <h3 className='text-6xl font-medium'>Hello I am</h3>
                    <h3 className='flex flex-nowrap text-green-400 text-6xl font-semibold'>Wanderson Oliveira</h3>
                    <p className='text-sm my-2'>
                        I am a fullstack software developer with over five years of experience in high-impact, high-performance projects.
                        I have worked on complex systems, Android applications, and video streaming solutions, always focused on efficiency and quality.
                    </p>
                    <div className='flex my-5 gap-6 items-center'>
                        <button className='flex gap-5 glow justify-center items-center text-green-400 px-10 py-3 rounded-full border 
                        border-green-400 hover:bg-green-900 hover:scale-105 duration-700 ease-in-out'>Donwload CV <Download /></button>
                        <a href='https://github.com/ws49066' target='_blank' className='border-[2px] border-green-400 flex justify-center items-center w-[36px] h-[36px] rounded-full bg-green-400
                         hover:bg-green-600 hover:border-green-600 hover:scale-120 duration-500 ease-in-out' >
                            <img src={GitHubIcon} className='flex' />
                        </a>
                        <a href='https://www.linkedin.com/in/wandersonoliveiradev/' target='_blank' className='border-[2px] border-green-400 flex justify-center items-center w-[36px] h-[36px] rounded-full bg-green-400 
                        hover:bg-green-600 hover:border-green-600 hover:scale-120 duration-500'>
                            <img src={LinkedinIcon} className='flex' />
                        </a>

                    </div>
                 <button >

                 </button>
                </section>
                <aside>
                    <div className='rounded-full flex justify-center items-center relative'>
                        <div className="absolute w-90 h-90 rounded-full border-4 border-transparent border-t-green-400 border-b-green-400 animate-rotate-slow glow"></div>

                        <div className="absolute w-85 h-85 rounded-full border-4 border-transparent border-l-green-400 border-r-green-400 animate-rotate-reverse glow"></div>


                        <img
                            src={profile}
                            alt=""
                            width={400}
                            className="
                            rounded-full
                            object-cover
                            mask-b-from-30% mask-radial-[50%_90%] mask-radial-from-60%

                        "
                        />
                    </div>
                </aside>
            </div>
        </div>
    )
}