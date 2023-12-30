import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import Sidebar from '../Sidebar/Sidebar';
import NotFound from '../PageNotFound/NotFound';

const App = () => {
  const [isLoggedIn] = useState(true);
  const [isSide, setIsSide] = useState(false);

  const handleEscClick = (evt) => {
    if (evt.key === 'Escape') {
      closeSide();
    }
  };

  const openSide = () => {
    setIsSide(true);
    document.addEventListener('keydown', handleEscClick);
  };

  const closeSide = () => {
    setIsSide(false);
    document.removeEventListener('keydown', handleEscClick);
  };

  return (
    <section className='app'>
      <Sidebar
        isLoggedIn={isLoggedIn}
        isSide={isSide}
        closeSide={closeSide}
      />
      <Routes>
        <Route
          path='/'
          element={<Main isLoggedIn={isLoggedIn} openSide={openSide} />}
        />
        <Route
          path='/movies'
          element={
            <Movies isLoggedIn={isLoggedIn} openSide={openSide} />
          }
        />
        <Route
          path='/saved-movies'
          element={
            <SavedMovies isLoggedIn={isLoggedIn} openSide={openSide} />
          }
        />
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Register />} />
        <Route
          path='/profile'
          element={
            <Profile isLoggedIn={isLoggedIn} openSide={openSide} />
          }
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default App;
