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
import { Box } from "@mui/material"
import AddFeatureForm from "./components/AddFeatureForm"
import AddPlanForm from "./components/AddPlanForm"
import ProtectedRoute from "./components/ProtectedRoute"
import ProtectedCompanyRoute from "./components/ProtectedCompanyRoute"
import { ToastContainer, toast} from 'react-toastify';

function App() {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get('users/me');
        setUser(res.data || null);
      } catch (error) {
        toast.warn("You're Logged out. Please Login")
        console.log(error);
      }
    }
    fetchUser();
  }, [])

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh'
          }}
        >
          <NavBar />
          <Box sx={{ flex: 1, overflow: 'auto' }}>
            <Routes>
              <Route index element={<PlansPage />} />
              <Route path="signin" element={<SignInForm />} />
              <Route path="signup" element={<SignUpForm />} />
              <Route element={<ProtectedCompanyRoute />}>
                <Route path="/company" element={<CompanyPage />} />
                <Route path="/company/addfeature" element={<AddFeatureForm />} />
                <Route path="/company/addplan" element={<AddPlanForm />} />
              </Route>
              <Route element={<ProtectedRoute />} >
                <Route path="/mysubscriptions" element={<MySubscribtionsPage />} />
              </Route>
            </Routes>
          </Box>
          <ToastContainer />
        </Box>
      </UserContext.Provider>
    </>
  )
}

export default App
