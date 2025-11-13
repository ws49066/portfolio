import { NavLink } from "react-router"

interface Link {
    name: string
    path: string
}

const LISTOFLINKS: Link[] = [
    { name: 'Home', path: '/' },
    { name: 'Resume', path: '/resume' },
    { name: 'Work', path: '/work' },
    { name: 'Contact', path: '/contact' },
    { name: 'Hire me', path: '/hire' },
]

const linkIsActive = (isActive: boolean) => {
    return isActive ? 'text-green-400 border-b-2 py-2' : ''
}


export default function Menu() {
    return (
        <nav className="
            flex 
            justify-end
            text-base
            font-medium
            p-10
            mb-12
            bg-menu-gray
            font-[JetBrainsMono]
            "
            
        >
            <ul className="flex gap-5 justify-between flex-nowrap ">
                {
                    LISTOFLINKS.map((link) => (
                        <li key={link.path}>
                            <NavLink to={link.path} className={({isActive}) => linkIsActive(isActive)}>{link.name}</NavLink>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}