import { Route, Routes } from "react-router"
import PlansPage from "./pages/PlansPage"
import CompanyPage from "./pages/CompanyPage"
import MySubscribtionsPage from "./pages/MySubscribtionsPage"
import NavBar from "./components/NavBar"
import "./index.css"
import SignInForm from "./components/SignInForm"
import SignUpForm from "./components/SignUpForm"

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<PlansPage />} />
        <Route path="signin" element={<SignInForm />} />
        <Route path="signup" element={<SignUpForm />} />
        
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/mysubscriptions" element={<MySubscribtionsPage />} />
      </Routes>
    </>
  )
}

export default App
