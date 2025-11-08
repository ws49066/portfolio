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
            p-5 
            bg-menu-gray
            font-jetbrains
            "
            
        >
            <ul className="flex w-1/3 justify-around">
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