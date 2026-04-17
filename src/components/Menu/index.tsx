import { NavLink } from "react-router"
import { useTranslation } from "../../hooks/useTranslation"
import { useLanguage } from "../../context/LanguageContext"
import { Globe, Menu as MenuIcon, X } from "lucide-react"
import { useState } from "react"

interface Link {
    name: string
    path: string
}

export default function Menu() {
    const { t } = useTranslation()
    const { language, setLanguage } = useLanguage()
    const [isOpen, setIsOpen] = useState(false)

    const LISTOFLINKS: Link[] = [
        { name: t('nav.home'), path: '/' },
        { name: t('nav.resume'), path: '/resume' },
        { name: t('nav.work'), path: '/work' },
        { name: t('nav.contact'), path: '/contact' },
    ]

    const linkIsActive = (isActive: boolean) => {
        return isActive ? 'text-green-400 border-b-2 border-green-400 py-2 transition-all duration-300' : 'hover:text-green-300 transition-all duration-300 py-2'
    }

    const languages = [
        { code: 'en', label: 'English' },
        { code: 'pt', label: 'Português' },
        { code: 'it', label: 'Italiano' },
    ] as const

    const handleNavClick = () => {
        setIsOpen(false)
    }

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900/95 to-slate-800/95 backdrop-blur-md border-b border-green-400/20 font-[JetBrainsMono]">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-2 text-green-400 text-2xl font-bold cursor-pointer hover:scale-110 transition-transform duration-300">
                    <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></div>
                    <span>WO</span>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 justify-center flex-nowrap">
                    {LISTOFLINKS.map((link) => (
                        <li key={link.path}>
                            <NavLink to={link.path} className={({isActive}) => linkIsActive(isActive)}>
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Desktop Language Selector */}
                <div className="hidden md:flex items-center gap-2 bg-slate-800/50 rounded-full p-1 border border-green-400/30">
                    <Globe size={18} className="text-green-400 ml-2" />
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => setLanguage(lang.code as 'en' | 'pt' | 'it')}
                            className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                                language === lang.code
                                    ? 'bg-green-400 text-slate-900'
                                    : 'text-gray-300 hover:text-green-300'
                            }`}
                        >
                            {lang.code.toUpperCase()}
                        </button>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-green-400 hover:text-green-300 transition-colors"
                >
                    {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-gradient-to-b from-slate-900 to-slate-800 border-b border-green-400/20 animate-in fade-in duration-300">
                    <div className="px-6 py-6 space-y-4">
                        <ul className="space-y-3 border-b border-green-400/20 pb-4">
                            {LISTOFLINKS.map((link) => (
                                <li key={link.path}>
                                    <NavLink 
                                        to={link.path} 
                                        onClick={handleNavClick}
                                        className={({isActive}) => 
                                            `block px-4 py-2 rounded-lg transition-all duration-300 ${
                                                isActive 
                                                    ? 'bg-green-400/20 text-green-400 border-l-2 border-green-400' 
                                                    : 'text-gray-300 hover:bg-slate-800/50 hover:text-green-300'
                                            }`
                                        }
                                    >
                                        {link.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>

                        {/* Mobile Language Selector */}
                        <div className="space-y-2">
                            <p className="text-sm text-gray-400 font-semibold">Idioma / Language</p>
                            <div className="flex gap-2">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => {
                                            setLanguage(lang.code as 'en' | 'pt' | 'it')
                                            setIsOpen(false)
                                        }}
                                        className={`flex-1 px-3 py-2 rounded-lg font-semibold transition-all duration-300 ${
                                            language === lang.code
                                                ? 'bg-green-400 text-slate-900'
                                                : 'bg-slate-800/50 text-gray-300 border border-green-400/30 hover:text-green-400'
                                        }`}
                                    >
                                        {lang.code.toUpperCase()}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}