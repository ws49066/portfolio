import { useTranslation } from '../../hooks/useTranslation';
import { ExternalLink, Github, Eye } from 'lucide-react';
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
    const [selectedProjectPreview, setSelectedProjectPreview] = useState<number | null>(null);

    const projects: Project[] = [
        {
            id: 1,
            name: t('work.projectCard.project1.name'),
            description: t('work.projectCard.project1.description'),
            technologies: ['React', 'TypeScript', 'Tailwind CSS', 'React Router', 'Vite'],
            liveUrl: 'https://your-portfolio.vercel.app',
            githubUrl: 'https://github.com/your-repo',
            featured: true,
        },
        {
            id: 2,
            name: t('work.projectCard.project2.name'),
            description: t('work.projectCard.project2.description'),
            technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Prisma'],
            liveUrl: 'https://your-ecommerce.vercel.app',
            githubUrl: 'https://github.com/your-repo',
            featured: true,
        },
        {
            id: 3,
            name: t('work.projectCard.project3.name'),
            description: t('work.projectCard.project3.description'),
            technologies: ['React', 'Firebase', 'Tailwind CSS', 'Zustand'],
            liveUrl: 'https://your-tasks.vercel.app',
            githubUrl: 'https://github.com/your-repo',
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
                        className={`group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-green-400/20 rounded-2xl overflow-hidden hover:border-green-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/20 ${
                            index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                        }`}
                    >
                        <div className='absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

                        <div className='relative grid grid-cols-1 md:grid-cols-2 gap-0'>
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
                                            onClick={() => setSelectedProjectPreview(project.id)}
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
                                            <Github size={18} />
                                            {t('work.sourceCode')}
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Project Preview - Placeholder */}
                            <div className={`relative h-64 md:h-96 overflow-hidden flex items-center justify-center ${index % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                                <div className='absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10'></div>
                                <div className='relative z-10 text-center p-6'>
                                    <div className='w-16 h-16 mx-auto mb-4 rounded-lg bg-green-400/20 flex items-center justify-center'>
                                        <Eye size={32} className='text-green-400' />
                                    </div>
                                    <p className='text-gray-400 text-sm'>Project Preview</p>
                                    <p className='text-gray-500 text-xs mt-2'>Hover to see live preview</p>
                                </div>
                                <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent'></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Preview Modal */}
            {selectedProjectPreview && (
                <div className='fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300'>
                    <div className='bg-slate-900 border border-green-400/30 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col'>
                        {/* Modal Header */}
                        <div className='flex justify-between items-center p-6 border-b border-green-400/20'>
                            <h3 className='text-xl font-bold text-white'>
                                {projects.find(p => p.id === selectedProjectPreview)?.name}
                            </h3>
                            <button
                                onClick={() => setSelectedProjectPreview(null)}
                                className='text-gray-400 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-lg'
                            >
                                ✕
                            </button>
                        </div>

                        {/* Modal Body - Preview */}
                        <div className='flex-1 overflow-auto bg-slate-800/30'>
                            <iframe
                                src={projects.find(p => p.id === selectedProjectPreview)?.liveUrl}
                                title="Project Preview"
                                className='w-full h-full border-0'
                            />
                        </div>

                        {/* Modal Footer */}
                        <div className='border-t border-green-400/20 p-6 flex gap-4'>
                            <a
                                href={projects.find(p => p.id === selectedProjectPreview)?.liveUrl}
                                target='_blank'
                                rel='noreferrer'
                                className='inline-flex items-center gap-2 text-white bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all'
                            >
                                <ExternalLink size={18} />
                                Open in New Tab
                            </a>
                            <button
                                onClick={() => setSelectedProjectPreview(null)}
                                className='inline-flex items-center gap-2 text-gray-300 border border-gray-500 px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-all'
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* CTA Section */}
            <div className='mt-24 p-8 md:p-12 bg-gradient-to-r from-green-500/10 via-emerald-500/5 to-teal-500/10 border border-green-400/30 rounded-2xl text-center hover:border-green-400/50 transition-all duration-300'>
                <h3 className='text-2xl md:text-3xl font-bold text-white mb-3'>Quer conversar sobre um projeto?</h3>
                <p className='text-gray-300 mb-6'>Estou sempre aberto a novas oportunidades e desafios interessantes.</p>
                <a href='/contact' className='inline-flex items-center gap-2 text-white bg-gradient-to-r from-green-500 to-emerald-500 px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/50 transition-all hover:scale-105'>
                    Entrar em Contato
                </a>
            </div>
        </div>
    );
}