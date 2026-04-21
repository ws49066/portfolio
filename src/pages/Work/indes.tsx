import { useTranslation } from '../../hooks/useTranslation';
import { ExternalLink, Code2, Eye, X } from 'lucide-react';
import { useState } from 'react';

interface Project {
    id: number;
    name: string;
    description: string;
    technologies: string[];
    liveUrl: string;
    githubUrl: string;
    image?: string;
    featured?: boolean;
}

export default function Work() {
    const { t } = useTranslation();
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const projects: Project[] = [
        {
            id: 1,
            name: 'Pokédex',
            description: t('work.projectCard.project1.description'),
            technologies: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'PokéAPI', 'Vercel'],
            liveUrl: 'https://pokedex-nextjs-ochre.vercel.app/',
            githubUrl: 'https://github.com/ws49066/pokedex_nextjs',
            image: 'https://api.microlink.io/?url=https%3A%2F%2Fpokedex-nextjs-ochre.vercel.app%2F&screenshot=true&meta=false&embed=screenshot.url',
            featured: true,
        },
        {
            id: 2,
            name: 'Memory Game',
            description: t('work.projectCard.project4.description'),
            technologies: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Vercel'],
            liveUrl: 'https://memory-game-nextjs-virid.vercel.app/',
            githubUrl: 'https://github.com/ws49066/memory-game-nextjs',
            image: 'https://api.microlink.io/?url=https%3A%2F%2Fmemory-game-nextjs-virid.vercel.app%2F&screenshot=true&meta=false&embed=screenshot.url',
            featured: true,
        },
    ];

    return (
        <div className='font-[JetBrainsMono] py-12 space-y-16'>
            {/* Header */}
            <div className='mb-16 text-center'>
                <h1 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent mb-4'>
                    {t('work.title')}
                </h1>
                <p className='text-gray-400 text-base md:text-lg'>{t('work.subtitle')}</p>
            </div>

            {/* Projects Grid */}
            <div className='grid grid-cols-1 gap-8'>
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className={`group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-green-400/20 rounded-2xl overflow-hidden hover:border-green-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/20 md:min-h-[450px] ${
                            index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                        }`}
                    >
                        <div className='absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

                        <div className='relative grid grid-cols-1 md:grid-cols-2 gap-0 md:h-auto'>
                            {/* Project Info */}
                            <div className={`p-6 md:p-8 flex flex-col justify-between ${index % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                                <div>
                                    <div className='flex items-center gap-3 mb-6 flex-wrap'>
                                        {project.featured && (
                                            <span className='inline-flex items-center gap-2 bg-green-400/20 border border-green-400/50 rounded-full px-4 py-1.5 text-xs font-semibold text-green-400'>
                                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                                Featured
                                            </span>
                                        )}
                                        <span className='text-xs text-gray-500 font-mono'>#{String(project.id).padStart(2, '0')}</span>
                                    </div>

                                    <h2 className='text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300'>{project.name}</h2>
                                    <p className='text-gray-300 text-base leading-relaxed mb-6'>
                                        {project.description}
                                    </p>
                                </div>

                                <div className='space-y-6'>
                                    <div>
                                        <p className='text-sm text-gray-400 mb-3 font-semibold'>{t('work.technologies')}:</p>
                                        <div className='flex flex-wrap gap-2'>
                                            {project.technologies.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className='inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-800/50 border border-green-400/30 text-green-400 hover:bg-green-400/10 transition-all duration-300'
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className='flex flex-col sm:flex-row gap-4 pt-4'>
                                        <button
                                            onClick={() => setSelectedProject(project)}
                                            className='inline-flex items-center justify-center gap-2 text-white bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 hover:scale-105'
                                        >
                                            <Eye size={18} />
                                            Preview
                                        </button>
                                        <a
                                            href={project.liveUrl}
                                            target='_blank'
                                            rel='noreferrer'
                                            className='inline-flex items-center justify-center gap-2 text-white bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105'
                                        >
                                            <ExternalLink size={18} />
                                            {t('work.viewLive')}
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            target='_blank'
                                            rel='noreferrer'
                                            className='inline-flex items-center justify-center gap-2 text-green-400 border border-green-400/50 px-6 py-3 rounded-lg font-semibold hover:bg-green-400/10 transition-all duration-300 hover:scale-105'
                                        >
                                            <Code2 size={18} />
                                            {t('work.sourceCode')}
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Project Preview */}
                            <div className={`relative h-64 md:h-full min-h-[300px] md:min-h-full overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800 ${index % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={`${project.name} preview`}
                                        className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700'
                                    />
                                ) : (
                                    <div className='w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800/50 to-slate-900/50'>
                                        <div className='text-center p-6'>
                                            <div className='w-16 h-16 mx-auto mb-4 rounded-lg bg-green-400/20 flex items-center justify-center'>
                                                <Eye size={32} className='text-green-400' />
                                            </div>
                                            <p className='text-gray-400 text-sm'>{t('work.comingSoon')}</p>
                                        </div>
                                    </div>
                                )}
                                <div className='absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent'></div>
                                <div className='absolute inset-0 bg-gradient-to-r from-slate-900/20 to-transparent'></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Preview Modal */}
            {selectedProject && (
                <div
                    className='fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4'
                    onClick={(e) => {
                        if (e.target === e.currentTarget) setSelectedProject(null);
                    }}
                >
                    <div className='bg-slate-900 border border-green-400/30 rounded-2xl w-full max-w-7xl max-h-[95vh] h-full overflow-hidden flex flex-col shadow-2xl shadow-green-500/20'>
                        {/* Modal Header */}
                        <div className='flex justify-between items-center p-4 border-b border-green-400/20 bg-slate-900/90'>
                            <div className='flex items-center gap-3'>
                                <div className='w-3 h-3 rounded-full bg-red-500'></div>
                                <div className='w-3 h-3 rounded-full bg-yellow-500'></div>
                                <div className='w-3 h-3 rounded-full bg-green-500'></div>
                                <span className='ml-3 text-sm text-gray-400 font-mono'>{selectedProject.name}</span>
                            </div>
                            <div className='flex items-center gap-3'>
                                <a
                                    href={selectedProject.liveUrl}
                                    target='_blank'
                                    rel='noreferrer'
                                    className='text-sm text-green-400 hover:text-green-300 transition-colors flex items-center gap-1'
                                >
                                    <ExternalLink size={14} />
                                    {t('work.openInNewTab')}
                                </a>
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className='text-gray-400 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-lg'
                                >
                                    <X size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Modal Body - Interactive Iframe */}
                        <div className='flex-1 bg-white overflow-hidden relative' style={{ height: '85vh' }}>
                            <iframe
                                src={selectedProject.liveUrl}
                                title={selectedProject.name}
                                className='w-full h-full border-0'
                                sandbox='allow-scripts allow-same-origin allow-forms allow-popups allow-top-navigation'
                                allow='fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            />
                        </div>

                        {/* Modal Footer */}
                        <div className='border-t border-green-400/20 p-4 bg-slate-900/90 flex justify-between items-center'>
                            <div className='text-sm text-gray-400'>
                                {selectedProject.technologies.slice(0, 4).join(' • ')}
                            </div>
                            <div className='flex gap-3'>
                                <a
                                    href={selectedProject.githubUrl}
                                    target='_blank'
                                    rel='noreferrer'
                                    className='inline-flex items-center gap-2 text-green-400 border border-green-400/50 px-4 py-2 rounded-lg font-semibold hover:bg-green-400/10 transition-all'
                                >
                                    <Code2 size={16} />
                                    GitHub
                                </a>
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className='inline-flex items-center gap-2 text-gray-300 border border-gray-500 px-4 py-2 rounded-lg font-semibold hover:bg-slate-800 transition-all'
                                >
                                    {t('work.close')}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}