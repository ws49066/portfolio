import profile from '../../assets/images/profile.png';

export default function Home() {
    return (
        <div className='flex justify-between font-[JetBrainsMono]'>
            <section className='space-y-3'>
                <h4 className='text-lg'>Software Developer</h4>
                <h3 className='text-6xl font-medium'>Hello I'm</h3>
                <h3 className='flex flex-nowrap text-green-400 text-6xl font-semibold'>Wanderson Oliveira</h3>
                <p className='text-md'>
                    I am a fullstack software developer with over five years of experience in high-impact, high-performance projects. 
                    I have worked on complex systems, Android applications, and video streaming solutions, always focused on efficiency and quality.
                </p>
            </section>
            <aside>
                <div className='rounded-full w-90 h-90 flex justify-center items-center '>
                    <div className="absolute w-90 h-90 rounded-full border-4 border-transparent border-t-green-400 border-b-green-400 animate-rotate-slow glow"></div>

                    <div className="absolute w-85 h-85 rounded-full border-4 border-transparent border-l-green-400 border-r-green-400 animate-rotate-reverse"></div>

                    {/* <div className="absolute w-80 h-80 rounded-full border-4 border-dotted border-green-400 opacity-50 animate-rotate-reverse"></div> */}
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
    )
}