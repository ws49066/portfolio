import { NavLink } from "react-router";
import { Home } from "lucide-react";

export default function NotFound() {
    return (
        <main className="w-full h-screen flex justify-center items-center px-6 py-24 sm:py-32 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800">
            <div className="text-center">
                <div className="mb-6">
                    <p className="text-7xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">404</p>
                </div>
                <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white sm:text-7xl">Page not found</h1>
                <p className="mt-6 text-lg font-medium text-gray-400 sm:text-xl/8">Sorry, we couldn't find the page you're looking for.</p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <NavLink 
                        to="/" 
                        className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 px-8 py-3 text-base font-semibold text-white shadow-lg hover:shadow-green-500/50 transition-all duration-300 hover:scale-105"
                    >
                        <Home size={20} />
                        Go back home
                    </NavLink>
                </div>
            </div>
        </main>
    )
}
