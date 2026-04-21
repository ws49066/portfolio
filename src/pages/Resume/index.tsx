import { useTranslation } from '../../hooks/useTranslation';
import { Briefcase, BookOpen, Award } from 'lucide-react';

export default function Resume() {
    const { t, language } = useTranslation();

    const experiencesData = {
        pt: [
            {
                company: 'Sidia Instituto de Ciência e Tecnologia',
                position: 'Desenvolvedor de Software - Pleno',
                period: '07/2022 - Atual',
                location: 'Manaus, AM, Brasil',
                description: 'Desenvolvedor full stack trabalhando em múltiplos projetos incluindo validador de binários Samsung, chatbot com IA/NLP e gerenciador de amostras Android. Utilizo Next.js, TypeScript, Python, LLM e Docker.',
            },
            {
                company: 'Kodigos Software LTDA',
                position: 'Desenvolvedor de Software - Pleno',
                period: '05/2021 - 06/2022',
                location: 'Manaus, AM, Brasil',
                description: 'Desenvolvi sistema web CRUD para gerenciamento e versionamento de documentos. Implementei controle de edições, permissões multi-nível e rastreabilidade. Utilizei Vue.js, C#, Entity Framework e SQL Server.',
            },
            {
                company: 'Womp Telecom',
                position: 'Desenvolvedor de Software - Junior',
                period: '07/2018 - 04/2021',
                location: 'Manaus, AM, Brasil',
                description: 'Desenvolvi aplicativos Android para controle de frotas, sistemas web administrativos e app de streaming de TV. Integrei APIs, gerenciei bancos de dados MySQL e implementei funcionalidades de tempo real.',
            },
        ],
        en: [
            {
                company: 'Sidia Instituto de Ciência e Tecnologia',
                position: 'Mid-Level Software Developer',
                period: '07/2022 - Present',
                location: 'Manaus, AM, Brazil',
                description: 'Full stack developer working on multiple projects including Samsung binary code validator, AI/NLP chatbot, and Android sample manager. I use Next.js, TypeScript, Python, LLM, and Docker.',
            },
            {
                company: 'Kodigos Software LTDA',
                position: 'Mid-Level Software Developer',
                period: '05/2021 - 06/2022',
                location: 'Manaus, AM, Brazil',
                description: 'Developed a web-based CRUD system for document management and version control. Implemented edit tracking, multi-level permissions, and full traceability. Used Vue.js, C#, Entity Framework, and SQL Server.',
            },
            {
                company: 'Womp Telecom',
                position: 'Junior Software Developer',
                period: '07/2018 - 04/2021',
                location: 'Manaus, AM, Brazil',
                description: 'Developed Android applications for fleet management, administrative web systems, and TV streaming app. Integrated APIs, managed MySQL databases, and implemented real-time features.',
            },
        ],
        it: [
            {
                company: 'Sidia Instituto de Ciência e Tecnologia',
                position: 'Sviluppatore di Software Mid-Level',
                period: '07/2022 - Presente',
                location: 'Manaus, AM, Brasile',
                description: 'Sviluppatore fullstack che lavora su più progetti inclusi validatore di codice binario Samsung, chatbot con IA/NLP e gestore di campioni Android. Utilizzo Next.js, TypeScript, Python, LLM e Docker.',
            },
            {
                company: 'Kodigos Software LTDA',
                position: 'Sviluppatore di Software Mid-Level',
                period: '05/2021 - 06/2022',
                location: 'Manaus, AM, Brasile',
                description: 'Ho sviluppato un sistema CRUD basato sul web per la gestione dei documenti e il controllo delle versioni. Ho implementato il tracciamento delle modifiche, le autorizzazioni multi-livello e la tracciabilità completa. Ho utilizzato Vue.js, C#, Entity Framework e SQL Server.',
            },
            {
                company: 'Womp Telecom',
                position: 'Sviluppatore di Software Junior',
                period: '07/2018 - 04/2021',
                location: 'Manaus, AM, Brasile',
                description: 'Ho sviluppato applicazioni Android per la gestione della flotta, sistemi web amministrativi e app di streaming TV. Ho integrato API, gestito database MySQL e implementato funzionalità in tempo reale.',
            },
        ],
    };

    const educationData = {
        pt: [
            {
                school: 'Uninorte - Laureate International',
                degree: 'Bacharelado em Engenharia da Computação',
                year: '07/2014 - 06/2021',
                location: 'Manaus, AM, Brasil',
            },
        ],
        en: [
            {
                school: 'Uninorte - Laureate International',
                degree: 'Bachelor\'s Degree in Computer Engineering',
                year: '07/2014 - 06/2021',
                location: 'Manaus, AM, Brazil',
            },
        ],
        it: [
            {
                school: 'Uninorte - Laureate International',
                degree: 'Laurea in Ingegneria Informatica',
                year: '07/2014 - 06/2021',
                location: 'Manaus, AM, Brasile',
            },
        ],
    };

    const experiences = experiencesData[language as keyof typeof experiencesData] || experiencesData.pt;
    const education = educationData[language as keyof typeof educationData] || educationData.pt;

    const skills = [
        {
            category: 'Frontend',
            skills: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue.js', 'Tailwind CSS', 'Styled-Components', 'Redux', 'Zustand', 'Axios'],
        },
        {
            category: 'Backend',
            skills: ['Node.js', 'Express', 'Python', 'FastAPI', 'FlaskAPI', 'PostgreSQL', 'MongoDB', 'JWT', 'Entity Framework'],
        },
        {
            category: 'DevOps & Tools',
            skills: ['Docker', 'Git', 'CI/CD', 'Linux', 'GitHub Actions'],
        },
        {
            category: 'IA & Others',
            skills: ['LLM', 'LangChain', 'Qdrant', 'NLP', 'Botpress', 'Ollama'],
        },
    ];

    return (
        <div className='font-[JetBrainsMono] py-12 space-y-20'>
        {/* Header */}
        <div className='mb-16 text-center'>
            <h1 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent mb-4'>
                {t('resume.title')}
            </h1>
            <p className='text-gray-400 text-base md:text-lg'>{t('resume.subtitle')}</p>
        </div>

        {/* Experience and Education */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {/* Experience */}
            <section>
                <div className='flex items-center gap-3 mb-8'>
                    <div className='p-2 rounded-lg bg-green-400/20'>
                        <Briefcase className='text-green-400' size={24} />
                    </div>
                    <h2 className='text-2xl font-bold text-white'>{t('resume.experience')}</h2>
                </div>

                <div className='space-y-6'>
                    {experiences.map((exp, idx) => (
                        <div
                            key={idx}
                            className='group relative pl-8 py-4 border-l-2 border-green-400/30 hover:border-green-400 transition-all duration-300'
                        >
                            <div className='absolute -left-4 top-6 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full shadow-lg shadow-green-500/50 group-hover:scale-125 transition-transform duration-300'></div>

                            <div className='bg-gradient-to-br from-slate-800/50 to-slate-900/30 border border-green-400/20 rounded-lg p-6 group-hover:border-green-400/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-green-500/10 group-hover:-translate-y-1'>
                                <div className='flex justify-between items-start mb-2'>
                                    <h3 className='text-lg font-bold text-white group-hover:text-green-400 transition-colors duration-300'>{exp.position}</h3>
                                    <span className='text-xs text-gray-500 font-mono bg-slate-800/50 px-2 py-1 rounded'>{exp.period}</span>
                                </div>
                                <p className='text-green-400 text-sm font-semibold mb-2'>{exp.company}</p>
                                <p className='text-gray-300 text-sm leading-relaxed'>{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Education */}
            <section>
                <div className='flex items-center gap-3 mb-8'>
                    <div className='p-2 rounded-lg bg-green-400/20'>
                        <BookOpen className='text-green-400' size={24} />
                    </div>
                    <h2 className='text-2xl font-bold text-white'>{t('resume.education')}</h2>
                </div>

                <div className='space-y-6'>
                    {education.map((edu, idx) => (
                         <div
                            key={idx}
                            className='group relative pl-8 py-4 border-l-2 border-green-400/30 hover:border-green-400 transition-all duration-300'
                        >

                            <div className='bg-gradient-to-br from-slate-800/50 to-slate-900/30 border border-green-400/20 rounded-lg p-6 group-hover:border-green-400/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-green-500/10 group-hover:-translate-y-1'>
                                <div className='flex justify-between items-start mb-2'>
                                    <h3 className='text-lg font-bold text-white transition-colors duration-300'>{edu.degree}</h3>
                                    <span className='text-xs text-gray-500 font-mono bg-slate-800/50 px-2 py-1 rounded'>{edu.year}</span>
                                </div>
                                <p className='text-green-400 text-sm font-semibold mb-2'>{edu.school}</p>
                            </div>
                        </div>
                        
                    ))}
                </div>
            </section>
        </div>

        {/* Skills Section */}
        <section>
            <div className='flex items-center gap-3 mb-8'>
                <div className='p-2 rounded-lg bg-green-400/20'>
                    <Award className='text-green-400' size={24} />
                </div>
                <h2 className='text-2xl font-bold text-white'>{t('resume.skills')}</h2>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                {skills.map((skillGroup, idx) => (
                    <div
                        key={idx}
                        className='group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-green-400/20 rounded-xl p-6 hover:border-green-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 hover:-translate-y-2'
                    >
                        <div className='flex items-center gap-2 mb-4'>
                            <div className='w-3 h-3 bg-green-400 rounded-full animate-pulse'></div>
                            <h3 className='text-green-400 font-bold text-lg'>{skillGroup.category}</h3>
                        </div>
                        <ul className='space-y-3'>
                            {skillGroup.skills.map((skill, skillIdx) => (
                                <li
                                    key={skillIdx}
                                    className='text-gray-300 text-sm flex items-center gap-2 group/skill cursor-default'
                                >
                                    <span className='w-1.5 h-1.5 bg-green-400 rounded-full group-hover/skill:scale-150 transition-transform duration-300'></span>
                                    <span className='group-hover/skill:text-green-400 transition-colors duration-300'>{skill}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    </div>
    );
}