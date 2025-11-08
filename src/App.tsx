// import Menu from "./components/Menu"
import Menu from "./components/Menu"
import AppRoutes from "./routes/routes"
import { useLocation } from "react-router"


function App() {

  const location = useLocation()

  const hiddenMenu = location.pathname === '/404'

  return (
    <div className="w-full h-full px-70">
      {!hiddenMenu && <Menu />}
      <main className="">
        <AppRoutes />
      </main>
    </div>
  )
}


export default App
