import './App.css';
import { useState } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import Sidebar from '../Sidebar/Sidebar';
import NotFound from '../PageNotFound/NotFound';
import { useMediaQuery } from 'react-responsive';
import { TABLET_WIDTH, MOBILE_WIDTH } from '../../utils/constants/constants';

import { CurrentContext } from '../../utils/context/currentcontext';
import Preloader from "../Preloader/Preloader";

const App = () => {
  const [isLoggedIn] = useState(true);
  const [isSide, setIsSide] = useState(false);

  const [currentUser, setCurrentUser] = useState({});
  const [isLoaderVisible, setIsLoaderVisible] = useState(false);

  const tablet = useMediaQuery({ query: TABLET_WIDTH });
  const mobile = useMediaQuery({ query: MOBILE_WIDTH });

  const navigate = useNavigate();

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
    <CurrentContext.Provider value={currentUser}>
    <section className='app'>
    <Preloader isLoaderVisible={isLoaderVisible} />
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
    </CurrentContext.Provider>
  );
};

export default App;
