import { Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Login from './pages/Login';

const App = () => {
  return (
    <>

      <Routes>
        <Route path='/api/auth/register' element={<SignIn />} />
        <Route path='/api/auth/login' element={<Login />} />
      </Routes>


    </>
  )
}

export default App