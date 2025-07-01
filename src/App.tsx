import { Route, Routes } from "react-router"
import PlansPage from "./pages/PlansPage"
import AuthPage from "./pages/AuthPage"
import CompanyPage from "./pages/CompanyPage"
import MySubscribtionsPage from "./pages/MySubscribtionsPage"
import NavBar from "./components/NavBar"
import "./index.css"

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<PlansPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/mysubscriptions" element={<MySubscribtionsPage />} />
      </Routes>
    </>
  )
}

export default App
