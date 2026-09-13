import { useTranslation } from '../../hooks/useTranslation';
import { Briefcase, BookOpen, Award, Languages as LanguagesIcon } from 'lucide-react';

export default function Resume() {
    const { t, language } = useTranslation();

    const experiencesData = {
        pt: [
            {
                company: 'Contabilizei',
                position: 'Desenvolvedor de Software - Pleno',
                period: '02/2026 - Atual',
                location: 'Curitiba, PR, Brasil',
                description: 'Desenvolvo e mantenho mais de 21 bots de automação para o processo de abertura de empresas (CNPJ), utilizando Playwright para interagir com portais governamentais e Python, FastAPI e Flask para orquestrar os fluxos. Construí serviços escaláveis e orientados a eventos no GCP (Cloud Run, Cloud Scheduler, Pub/Sub), reduzindo a intervenção manual, acelerando o onboarding de clientes e aumentando a confiabilidade e recuperação de falhas das automações.',
            },
            {
                company: 'Sidia Instituto de Ciência e Tecnologia',
                position: 'Desenvolvedor de Software - Pleno',
                period: '07/2022 - 02/2026',
                location: 'Manaus, AM, Brasil',
                description: 'Desenvolvedor full stack em três projetos principais: criei um validador de binários que reduziu o tempo de validação de features Samsung de 2-3 dias para ~10 minutos; desenvolvi um chatbot de IA/NLP com LangChain, LLaMA e Qdrant para busca semântica segura em documentos internos; e atuei como Tech Lead do Gerenciador de Amostras Android, responsável por requisitos do cliente, backlog e coordenação da equipe.',
            },
            {
                company: 'Kodigos Software LTDA',
                position: 'Desenvolvedor de Software - Pleno',
                period: '05/2021 - 06/2022',
                location: 'Manaus, AM, Brasil',
                description: 'Desenvolvi sistema web CRUD para gerenciamento e versionamento de documentos. Implementei controle de edições, permissões multi-nível e rastreabilidade. Utilizei Vue.js, Vuetify, C#, Entity Framework e SQL Server.',
            },
            {
                company: 'Womp Telecom',
                position: 'Desenvolvedor de Software - Junior',
                period: '07/2018 - 04/2021',
                location: 'Manaus, AM, Brasil',
                description: 'Desenvolvi um aplicativo mobile para motoristas de frotas com controle de combustível, manutenção de veículos e checklists, além de um painel administrativo web. Criei um app de streaming com Flussonic para conversão de multicast para unicast na retransmissão de canais de TV. Também desenvolvi uma aplicação de mapeamento urbano para cadastro e monitoramento de postes de iluminação, transformadores e redes de fibra óptica, integrada ao Google Maps.',
            },
        ],
        en: [
            {
                company: 'Contabilizei',
                position: 'Mid-Level Software Developer',
                period: '02/2026 - Present',
                location: 'Curitiba, PR, BRAZIL',
                description: 'Develop and maintain over 21 automation bots for the company registration (CNPJ) process, using Playwright to interact with government portals and Python, FastAPI, and Flask to orchestrate the workflows. Built scalable, event-driven services on GCP (Cloud Run, Cloud Scheduler, Pub/Sub), reducing manual effort, accelerating customer onboarding, and improving automation reliability and error recovery.',
            },
            {
                company: 'Sidia Instituto de Ciência e Tecnologia',
                position: 'Mid-Level Software Developer',
                period: '07/2022 - 02/2026',
                location: 'Manaus, AM, Brazil',
                description: 'Full stack developer across three key projects: built a binary code validator that cut Samsung feature validation time from 2-3 days to ~10 minutes; developed an AI/NLP chatbot with LangChain, LLaMA, and Qdrant for secure semantic search over internal documents; and served as Tech Lead for the Android Sample Manager, owning client requirements, backlog, and team coordination.',
            },
            {
                company: 'Kodigos Software LTDA',
                position: 'Mid-Level Software Developer',
                period: '05/2021 - 06/2022',
                location: 'Manaus, AM, Brazil',
                description: 'Developed a web-based CRUD system for document management and version control. Implemented edit tracking, multi-level permissions, and full traceability. Used Vue.js, Vuetify, C#, Entity Framework, and SQL Server.',
            },
            {
                company: 'Womp Telecom',
                position: 'Junior Software Developer',
                period: '07/2018 - 04/2021',
                location: 'Manaus, AM, Brazil',
                description: "Developed a mobile application for corporate fleet drivers with fuel control, vehicle maintenance, and checklist features, plus an admin web dashboard. Built a streaming app using Flussonic to convert multicast to unicast for TV channel retransmission. Also created an urban mapping application for registering and monitoring city light poles, transformers, and fiber optic infrastructure, integrated with Google Maps.",
            },
        ],
        it: [
            {
                company: 'Contabilizei',
                position: 'Sviluppatore di Software Mid-Level',
                period: '02/2026 - Presente',
                location: 'Curitiba, PR, Brasile',
                description: `Sviluppo e mantengo oltre 21 bot di automazione per il processo di costituzione di imprese (CNPJ), utilizzando Playwright per interagire con i portali governativi e Python, FastAPI e Flask per orchestrare i flussi. Ho costruito servizi scalabili ed event-driven su GCP (Cloud Run, Cloud Scheduler, Pub/Sub), riducendo l'intervento manuale, accelerando l'onboarding dei clienti e migliorando l'affidabilità e il recupero degli errori delle automazioni.`,
            },
            {
                company: 'Sidia Instituto de Ciência e Tecnologia',
                position: 'Sviluppatore di Software Mid-Level',
                period: '07/2022 - 02/2026',
                location: 'Manaus, AM, Brasile',
                description: `Sviluppatore full stack su tre progetti principali: ho creato un validatore di codice binario che ha ridotto il tempo di validazione delle funzionalità Samsung da 2-3 giorni a circa 10 minuti; ho sviluppato un chatbot AI/NLP con LangChain, LLaMA e Qdrant per la ricerca semantica sicura su documenti interni; e ho ricoperto il ruolo di Tech Lead per l'Android Sample Manager, occupandomi di requisiti del cliente, backlog e coordinamento del team.`,
            },
            {
                company: 'Kodigos Software LTDA',
                position: 'Sviluppatore di Software Mid-Level',
                period: '05/2021 - 06/2022',
                location: 'Manaus, AM, Brasile',
                description: 'Ho sviluppato un sistema CRUD basato sul web per la gestione dei documenti e il controllo delle versioni. Ho implementato il tracciamento delle modifiche, le autorizzazioni multi-livello e la tracciabilità completa. Ho utilizzato Vue.js, Vuetify, C#, Entity Framework e SQL Server.',
            },
            {
                company: 'Womp Telecom',
                position: 'Sviluppatore di Software Junior',
                period: '07/2018 - 04/2021',
                location: 'Manaus, AM, Brasile',
                description: "Ho sviluppato un'applicazione mobile per autisti di flotte aziendali con controllo carburante, manutenzione veicoli e checklist, oltre a una dashboard web amministrativa. Ho creato un'app di streaming con Flussonic per la conversione da multicast a unicast per la ritrasmissione di canali TV. Ho inoltre sviluppato un'applicazione di mappatura urbana per la registrazione e il monitoraggio di pali della luce, trasformatori e reti in fibra ottica, integrata con Google Maps.",
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
                degree: 'Laurea triennale in Ingegneria Informatica',
                year: '07/2014 - 06/2021',
                location: 'Manaus, AM, Brasile',
            },
        ],
    };

    const languagesData = {
        pt: [
            { name: 'Português', level: 'Nativo' },
            { name: 'Inglês', level: 'Intermediário-Avançado (B2)' },
            { name: 'Italiano', level: 'Básico (A2)' },
        ],
        en: [
            { name: 'Portuguese', level: 'Native' },
            { name: 'English', level: 'Intermediate-Advanced (B2)' },
            { name: 'Italian', level: 'Basic (A2)' },
        ],
        it: [
            { name: 'Portoghese', level: 'Madrelingua' },
            { name: 'Inglese', level: 'Intermedio-Avanzato (B2)' },
            { name: 'Italiano', level: 'Base (A2)' },
        ],
    };

    const experiences = experiencesData[language as keyof typeof experiencesData] || experiencesData.pt;
    const education = educationData[language as keyof typeof educationData] || educationData.pt;
    const languagesList = languagesData[language as keyof typeof languagesData] || languagesData.pt;

    const skills = [
        {
            category: 'Frontend',
            skills: ['JavaScript', 'HTML', 'CSS', 'TypeScript', 'React', 'Next.js', 'Redux', 'Tailwind CSS', 'Styled-Components', 'Zustand', 'Axios', 'Playwright'],
        },
        {
            category: 'Backend',
            skills: ['Node.js', 'Express', 'Python', 'FastAPI', 'FlaskAPI', 'PostgreSQL', 'MongoDB', 'JWT'],
        },
        {
            category: 'DevOps & Cloud',
            skills: ['Docker', 'Git', 'CI/CD', 'Linux', 'GitHub Actions', 'Google Cloud Platform', 'Jenkins'],
        },
        {
            category: 'IA & Others',
            skills: ['LLM', 'LangChain', 'RAG', 'Qdrant', 'NLP', 'Botpress', 'Ollama'],
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

        {/* Languages Section */}
        <section>
            <div className='flex items-center gap-3 mb-8'>
                <div className='p-2 rounded-lg bg-green-400/20'>
                    <LanguagesIcon className='text-green-400' size={24} />
                </div>
                <h2 className='text-2xl font-bold text-white'>{t('resume.languages')}</h2>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
                {languagesList.map((lang, idx) => (
                    <div
                        key={idx}
                        className='group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-green-400/20 rounded-xl p-6 hover:border-green-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 hover:-translate-y-2'
                    >
                        <h3 className='text-white font-bold text-lg mb-1'>{lang.name}</h3>
                        <p className='text-green-400 text-sm'>{lang.level}</p>
                    </div>
                ))}
            </div>
        </section>
    </div>
    );
}