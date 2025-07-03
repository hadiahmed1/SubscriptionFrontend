import { Route, Routes } from "react-router"
import PlansPage from "./pages/PlansPage"
import CompanyPage from "./pages/CompanyPage"
import MySubscribtionsPage from "./pages/MySubscribtionsPage"
import NavBar from "./components/NavBar"
import "./index.css"
import SignInForm from "./components/SignInForm"
import SignUpForm from "./components/SignUpForm"
import type { User } from "./types/user.type"
import { useEffect, useState } from "react"
import UserContext from "./contexts/UserContext"
import api from "./utils/axiosInstace"

function App() {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get('users/me');
        console.log(res);
        setUser(res.data|| null);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUser();
  }, [])

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <NavBar />
        <Routes>
          <Route index element={<PlansPage />} />
          <Route path="signin" element={<SignInForm />} />
          <Route path="signup" element={<SignUpForm />} />

          <Route path="/company" element={<CompanyPage />} />
          <Route path="/mysubscriptions" element={<MySubscribtionsPage />} />
        </Routes>
      </UserContext.Provider>
    </>
  )
}

export default App
