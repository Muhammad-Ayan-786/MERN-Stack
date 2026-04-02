import { Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Login from './pages/Login';
import WelcomePage from './pages/WelcomePage';
import UserPage from './pages/UserPage';
import UserHomePage from './pages/UserHomePage';
import UserLibraryPage from './pages/UserLibraryPage';
import ArtistPage from './pages/ArtistPage';
import ArtistHomePage from './pages/ArtistHomePage';
import ArtistUploadPage from './pages/ArtistUploadPage';
import ArtistAlbumPage from './pages/ArtistAlbumPage';
import ArtistSongPage from './pages/ArtistSongPage';
import ArtistLiberaryPage from './pages/ArtistLiberaryPage';

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

        {/* Artist Routes */}
        <Route path='/artist' element={<ArtistPage />}>
          <Route path='/artist/home' element={<ArtistHomePage />} />
          <Route path='/artist/liberary' element={<ArtistLiberaryPage />} />
          <Route path='/artist/upload' element={<ArtistUploadPage />} />
          <Route path='/artist/album' element={<ArtistAlbumPage />} />
          <Route path='/artist/song' element={<ArtistSongPage />} />
        </Route>

      </Routes>

    </>
  )
}

export default App