import Menu from "./components/Menu"
import AppRoutes from "./routes/routes"
import { useLocation } from "react-router"
import { LanguageProvider } from "./context/LanguageContext"


function App() {

  const location = useLocation()

  const hiddenMenu = location.pathname === '/404'

  return (
    <LanguageProvider>
      <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800">
        {!hiddenMenu && <Menu />}
        <main className={`${!hiddenMenu ? 'pt-20' : ''} px-4 md:px-8 lg:px-12 max-w-7xl mx-auto w-full`}>
          <AppRoutes />
        </main>
      </div>
    </LanguageProvider>
  )
}


export default App
