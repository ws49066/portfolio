import profile from '../../assets/images/profile.png';
import GitHubIcon from '../../assets/images/githubIcon.svg';
import LinkedinIcon from '../../assets/images/linkedinIcon.svg';
import { Download, ArrowRight, Code2, Zap, Users } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import { Link } from 'react-router';

export default function Home() {
    const { t } = useTranslation();

    const stats = [
        { icon: Code2, label: 'Years of Experience', value: '5+' },
        { icon: Zap, label: 'Projects Completed', value: '50+' },
        { icon: Users, label: 'Happy Clients', value: '30+' }
    ];

    return (
        <div className='font-[JetBrainsMono] space-y-16 lg:space-y-24'>
            {/* Hero Section */}
            <div className='flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12 min-h-[70vh] lg:min-h-[85vh] py-8 lg:py-0'>
                {/* Left Content */}
                <section className='flex flex-col gap-6 w-full lg:w-1/2 pt-4 lg:pt-0'>
                    {/* Badge */}
                    <div className='inline-flex items-center gap-3 bg-green-400/10 border border-green-400/30 rounded-full px-4 py-2 w-fit hover:border-green-400/60 transition-all duration-300 group cursor-default'>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className='text-sm text-green-400 group-hover:text-green-300 transition-colors'>{t('home.title')}</span>
                    </div>

                    {/* Main Title */}
                    <div>
                        <h4 className='text-xl text-gray-400 mb-2 animate-fade-in'>{t('home.greeting')}</h4>
                        <h3 className='text-5xl lg:text-7xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent animate-fade-in-delay leading-tight'>
                            {t('home.name')}
                        </h3>
                    </div>

                    {/* Description */}
                    <p className='text-base lg:text-lg text-gray-300 leading-relaxed max-w-lg animate-fade-in-delay-2'>
                        {t('home.description')}
                    </p>

                    {/* CTA Buttons */}
                    <div className='flex flex-col sm:flex-row gap-4 pt-6'>
                        <button className='flex gap-3 items-center justify-center text-white bg-gradient-to-r from-green-500 to-emerald-500 px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/50 hover:scale-105 duration-300 ease-in-out transition-all glow w-full sm:w-auto'>
                            <Download size={20} />
                            {t('home.downloadCV')}
                        </button>
                        <Link to="/work" className='flex gap-3 items-center justify-center text-green-400 px-8 py-3 rounded-lg border-2 border-green-400 font-semibold hover:bg-green-400/10 duration-300 ease-in-out transition-all w-full sm:w-auto hover:scale-105'>
                            {t('home.viewProjects')}
                            <ArrowRight size={20} />
                        </Link>
                    </div>

                    {/* Social Links */}
                    <div className='flex gap-6 items-center pt-8 flex-wrap'>
                        <a href='https://github.com/ws49066' target='_blank' rel='noreferrer' className='group'>
                            <div className='p-3 rounded-full bg-slate-800/50 border border-green-400/30 hover:border-green-400 hover:bg-green-400/10 transition-all duration-300 transform group-hover:scale-110'>
                                <img src={GitHubIcon} alt='GitHub' className='w-6 h-6 filter group-hover:brightness-150' />
                            </div>
                        </a>
                        <a href='https://www.linkedin.com/in/wandersonoliveiradev/' target='_blank' rel='noreferrer' className='group'>
                            <div className='p-3 rounded-full bg-slate-800/50 border border-green-400/30 hover:border-green-400 hover:bg-green-400/10 transition-all duration-300 transform group-hover:scale-110'>
                                <img src={LinkedinIcon} alt='LinkedIn' className='w-6 h-6 filter group-hover:brightness-150' />
                            </div>
                        </a>
                        <div className='ml-4 h-8 w-px bg-gradient-to-b from-transparent via-green-400/50 to-transparent'></div>
                        <span className='text-sm text-gray-400'>Available for freelance projects</span>
                    </div>
                </section>

                {/* Right - Profile Picture */}
                <aside className='w-full lg:w-1/2 flex justify-center lg:justify-center items-center py-8 lg:py-0 hidden lg:flex'>
                    <div className='relative w-96 h-96 group'>
                        {/* Outer Circle Glow - Animated */}
                        <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-green-500/50 via-emerald-500/30 to-transparent blur-3xl group-hover:blur-2xl transition-all duration-500 group-hover:from-green-500/70 animate-pulse"></div>
                        
                        {/* Animated Gradient Border Circle */}
                        <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-green-400 via-emerald-400 to-green-400 p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-lg shadow-green-500/50">
                            <div className="absolute inset-0 rounded-full bg-slate-900"></div>
                        </div>
                        
                        {/* Main Circle Container with Image */}
                        <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl shadow-green-500/40 group-hover:shadow-green-500/60 transition-all duration-500 ring-2 ring-green-400/20 group-hover:ring-green-400/50">
                            {/* Profile Image */}
                            <img
                                src={profile}
                                alt="Profile"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            
                            {/* Radial Vignette - Desvanece as bordas */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent via-transparent to-slate-900/50 group-hover:to-slate-900/30 transition-all duration-300"></div>
                            
                            {/* Top Light Reflection */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-2/5 rounded-full bg-gradient-to-b from-white/35 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        </div>
                        
                        {/* Outer Decorative Ring - Animated */}
                        <div className="absolute inset-0 rounded-full border-2 border-green-400/40 group-hover:border-green-400/100 transition-all duration-500 animate-pulse" style={{animationDuration: '3s'}}></div>
                        
                        {/* Inner Ring Detail */}
                        <div className="absolute inset-6 rounded-full border-1 border-green-400/20 group-hover:border-green-400/40 transition-all duration-500"></div>
                    </div>
                </aside>
            </div>

            {/* Stats Section */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
                {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                        <div
                            key={index}
                            className='group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-green-400/20 rounded-xl p-6 lg:p-8 hover:border-green-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 hover:-translate-y-2'
                        >
                            <div className='flex items-start justify-between mb-4'>
                                <div className='p-3 rounded-lg bg-green-400/20 group-hover:bg-green-400/30 transition-colors duration-300'>
                                    <Icon className='text-green-400' size={24} />
                                </div>
                            </div>
                            <h3 className='text-3xl lg:text-4xl font-bold text-green-400 group-hover:text-green-300 transition-colors duration-300'>{stat.value}</h3>
                            <p className='text-gray-400 text-sm mt-2'>{stat.label}</p>
                        </div>
                    );
                })}
            </div>

            {/* Additional CTA Section */}
            <div className='bg-gradient-to-r from-green-500/10 via-emerald-500/5 to-teal-500/10 border border-green-400/30 rounded-2xl p-8 lg:p-12 text-center hover:border-green-400/50 transition-all duration-300'>
                <h2 className='text-2xl lg:text-4xl font-bold text-white mb-4'>Vamos trabalhar juntos?</h2>
                <p className='text-gray-300 text-base lg:text-lg mb-6 max-w-2xl mx-auto'>
                    Tenho experiência em transformar ideias em soluções digitais inovadoras. Pronto para o próximo desafio?
                </p>
                <Link to="/contact" className='inline-flex items-center gap-2 text-white bg-gradient-to-r from-green-500 to-emerald-500 px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/50 transition-all hover:scale-105'>
                    Entrar em Contato
                    <ArrowRight size={20} />
                </Link>
            </div>
        </div>
    )
}