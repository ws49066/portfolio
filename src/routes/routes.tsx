import { Routes, Route, Navigate } from 'react-router'

import Home from '../pages/Home/index.tsx'
import Resume from '../pages/Resume/index.tsx'
import Work from '../pages/Work/indes.tsx'
import Contact from '../pages/Contact/index.tsx'
import HireMe from '../pages/Hire me/index.tsx'
import NotFound from '../pages/404/index.tsx'

export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Home' element={<Navigate to="/" replace/>} />
            <Route path='/resume' element={<Resume />} />
            <Route path='/work' element={<Work />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/hire' element={<HireMe />} />
            <Route path='/404' element={<NotFound />} />
            <Route path='*' element={<Navigate to="/404" replace />} />
        </Routes>
    )
}
