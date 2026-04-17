import { useTranslation } from '../../hooks/useTranslation';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
    };

    const contactMethods = [
        {
            icon: Mail,
            label: t('contact.email'),
            value: 'wanderson@example.com',
            link: 'mailto:wanderson@example.com',
        },
        {
            icon: Phone,
            label: t('contact.phone'),
            value: '+55 (11) 99999-9999',
            link: 'tel:+5511999999999',
        },
        {
            icon: MapPin,
            label: t('contact.location'),
            value: 'São Paulo, Brasil',
            link: '#',
        },
    ];

    return (
        <div className='font-[JetBrainsMono] py-12 space-y-16'>
            {/* Header */}
            <div className='mb-16 text-center'>
                <h1 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent mb-4'>
                    {t('contact.title')}
                </h1>
                <p className='text-gray-400 text-base md:text-lg'>{t('contact.subtitle')}</p>
            </div>

            {/* Contact Methods */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {contactMethods.map((method, idx) => {
                    const Icon = method.icon;
                    return (
                        <a
                            key={idx}
                            href={method.link}
                            className='group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-green-400/20 rounded-xl p-8 hover:border-green-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 overflow-hidden'
                        >
                            <div className='absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                            
                            <div className='relative'>
                                <div className='p-3 rounded-lg bg-green-400/20 group-hover:bg-green-400/30 transition-all duration-300 w-fit mb-4 group-hover:scale-110 transform'>
                                    <Icon className='text-green-400 group-hover:text-green-300 transition-colors' size={28} />
                                </div>
                                <h3 className='text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300'>{method.label}</h3>
                                <p className='text-gray-300 text-sm hover:text-green-400 transition-colors duration-300 break-all'>{method.value}</p>
                            </div>
                        </a>
                    );
                })}
            </div>

            {/* Contact Form */}
            <div className='bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-green-400/20 rounded-2xl p-8 lg:p-12 hover:border-green-400/30 transition-all duration-300'>
                <h2 className='text-2xl lg:text-3xl font-bold text-white mb-8'>Envie uma mensagem</h2>

                {submitted && (
                    <div className='mb-8 p-4 bg-green-400/20 border border-green-400/50 rounded-lg flex items-center gap-3 animate-pulse'>
                        <CheckCircle className='text-green-400' size={24} />
                        <span className='text-green-400 font-semibold'>Mensagem enviada com sucesso!</span>
                    </div>
                )}

                <form onSubmit={handleSubmit} className='space-y-6'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className='group'>
                            <label htmlFor='name' className='block text-sm font-semibold text-gray-300 mb-2 group-focus-within:text-green-400 transition-colors'>
                                Nome *
                            </label>
                            <input
                                type='text'
                                id='name'
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                                placeholder='Seu nome'
                                className='w-full bg-slate-900/50 border border-green-400/30 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-green-400 focus:shadow-lg focus:shadow-green-500/20 transition-all duration-300'
                                required
                            />
                        </div>
                        <div className='group'>
                            <label htmlFor='email' className='block text-sm font-semibold text-gray-300 mb-2 group-focus-within:text-green-400 transition-colors'>
                                Email *
                            </label>
                            <input
                                type='email'
                                id='email'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                placeholder='seu@email.com'
                                className='w-full bg-slate-900/50 border border-green-400/30 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-green-400 focus:shadow-lg focus:shadow-green-500/20 transition-all duration-300'
                                required
                            />
                        </div>
                    </div>

                    <div className='group'>
                        <label htmlFor='subject' className='block text-sm font-semibold text-gray-300 mb-2 group-focus-within:text-green-400 transition-colors'>
                            Assunto *
                        </label>
                        <input
                            type='text'
                            id='subject'
                            name='subject'
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder='Assunto do projeto'
                            className='w-full bg-slate-900/50 border border-green-400/30 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-green-400 focus:shadow-lg focus:shadow-green-500/20 transition-all duration-300'
                            required
                        />
                    </div>

                    <div className='group'>
                        <label htmlFor='message' className='block text-sm font-semibold text-gray-300 mb-2 group-focus-within:text-green-400 transition-colors'>
                            Mensagem *
                        </label>
                        <textarea
                            id='message'
                            name='message'
                            value={formData.message}
                            onChange={handleChange}
                            placeholder='Conte-me sobre seu projeto...'
                            rows={5}
                            className='w-full bg-slate-900/50 border border-green-400/30 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-green-400 focus:shadow-lg focus:shadow-green-500/20 transition-all duration-300 resize-none'
                            required
                        />
                    </div>

                    <button
                        type='submit'
                        className='w-full inline-flex items-center justify-center gap-2 text-white bg-gradient-to-r from-green-500 to-emerald-500 px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 active:scale-95'
                    >
                        <Send size={20} />
                        {t('contact.send')}
                    </button>
                </form>
            </div>

            {/* Additional Info */}
            <div className='bg-gradient-to-r from-green-500/10 via-emerald-500/5 to-teal-500/10 border border-green-400/30 rounded-2xl p-8 text-center'>
                <p className='text-gray-300 text-base'>
                    Respondo a todos os emails dentro de 24 horas. Fico ansioso para saber mais sobre seu projeto!
                </p>
            </div>
        </div>
    );
}