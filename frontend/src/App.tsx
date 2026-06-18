
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from './pages/LoginPage'
import ProtectedRoute from './routes/ProtectedRoute'
import DashboardPage from './pages/DashboardPage'
import ProfilePage from './pages/ProfilePage'
// import Navbar from './components/Navbar'
import SignupPage from './pages/SignupPage'

function App() {

  return (
    <>
      <BrowserRouter>

      <Routes>

          <Route
            path="/signup"
            element={<SignupPage/>}
           />

            <Route
            path="/login"
            element={
            <LoginPage/>
          }
         
           />

          <Route
            path="/dashboard"
            element={
               <ProtectedRoute>
                   <DashboardPage/>
               </ProtectedRoute>
            }
            />
             <Route
             path="/profile"
             element={
                <ProtectedRoute>
                   <ProfilePage/>
                </ProtectedRoute>
             }
          />
        

      </Routes>
      </BrowserRouter> 
    
     
    </>
  )
}

export default App
