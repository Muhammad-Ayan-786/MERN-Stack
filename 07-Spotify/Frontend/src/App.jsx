import { Routes, Route } from 'react-router-dom';

// Default Routes
import SignIn from './pages/SignIn';
import Login from './pages/Login';
import WelcomePage from './pages/WelcomePage';

// User's Routes
import UserPage from './pages/UserPage';
import UserHomePage from './pages/UserHomePage';
import UserTrackPage from './pages/UserTrackPage';

// Artist's Routes
import ArtistPage from './pages/ArtistPage';
import ArtistHomePage from './pages/ArtistHomePage';
import ArtistSongPage from './pages/ArtistSongPage';
import ArtistUploadPage from './pages/ArtistUploadPage';
import ArtistMyAlbumPage from './pages/ArtistMyAlbumPage';
import ArtistMySongPage from './pages/ArtistMySongPage';

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
          <Route path='/user/track' element={<UserTrackPage />} />
        </Route>

        {/* Artist Routes */}
        <Route path='/artist' element={<ArtistPage />}>
          <Route path='/artist/home' element={<ArtistHomePage />} />
          <Route path='/artist/song' element={<ArtistSongPage />} />
          <Route path='/artist/upload' element={<ArtistUploadPage />} />
          <Route path='/artist/my-album' element={<ArtistMyAlbumPage />} />
          <Route path='/artist/my-song' element={<ArtistMySongPage />} />
        </Route>

      </Routes>
    </>
  )
}

export default App