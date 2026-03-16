import { Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Login from './pages/Login';
import WelcomePage from './pages/WelcomePage';
import UserPage from './pages/UserPage';
import UserHomePage from './pages/UserHomePage';
import UserLibraryPage from './pages/UserLibraryPage';

const App = () => {
  return (
    <>

      <Routes>
        <Route path='/' element={<WelcomePage />} />
        <Route path='/api/auth/register' element={<SignIn />} />
        <Route path='/api/auth/login' element={<Login />} />

        {/* User Routes */}
        <Route path='/user' element={<UserPage />}>
          <Route path='/user/home' element={<UserHomePage />} />
          <Route path='/user/library' element={<UserLibraryPage />} />
        </Route>
      </Routes>

    </>
  )
}

export default App