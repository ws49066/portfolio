import profile from '../../assets/images/profile.png';

export default function Home() {
    return (
        <div className='flex justify-between items-center font-[JetBrainsMono]'>
            <section className='space-y-3 w-xl'>
                <h4 className='text-xl'>Software Developer</h4>
                <h3 className='text-7xl font-bold'>Hello I'm</h3>
                <h3 className='flex flex-nowrap text-green-400 text-6xl font-bold'>Wanderson Silva</h3>
                <p className='t'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
            </section>
            <aside>
                <div className='rounded-full w-96 h-96 flex justify-center items-center '>
                    <div className="absolute w-96 h-96 rounded-full border-4 border-transparent border-t-green-400 border-b-green-400 animate-rotate-slow glow"></div>

                    <div className="absolute w-90 h-90 rounded-full border-4 border-transparent border-l-green-400 border-r-green-400 animate-rotate-reverse"></div>

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