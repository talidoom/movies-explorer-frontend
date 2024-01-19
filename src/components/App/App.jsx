import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes, Navigate, useNavigate, useLocation } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import Sidebar from '../Sidebar/Sidebar';
import NotFound from '../PageNotFound/NotFound';
import mainApi from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import InfoToolTip from '../InfoTooltip/InfoToolTip';
import { CurrentContext } from '../../utils/context/currentcontext';
import Preloader from "../Preloader/Preloader";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const [isSide, setIsSide] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoaderVisible, setIsLoaderVisible] = useState(false);
  const [saveMovies, setSaveMovies] = useState([]);
  const [trueMovies, setTrueMovies] = useState([]);
  const [movies, setMovies] = useState([]);

  const [isShortMovie, setIsShortMovie] = useState(
    JSON.parse(localStorage.getItem("checkboxState")) || false
  );

  const [toolTipState, setToolTipState] = useState({
    isVisible: false,
    isSuccessful: false,
    text: "",
  });

  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  const checkToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      mainApi.currentToken = token;
      mainApi
        .checkToken(token)
        .then((res) => {
          if (!res.message) {
            setIsLoaderVisible(true);
            setCurrentUser(res);
            setIsLoggedIn(true);
            mainApi.getMovies().then((movies) => {
              setSaveMovies(movies.reverse());
            })
            navigate(path)
          }
        })
        .catch((res) => {
          setIsLoggedIn(false);
          localStorage.clear();
          navigate("/signin");
        })
        .finally(() => {
          setIsLoaderVisible(false);
        });
      if (localStorage.getItem("foundedMovies")) {
        setTrueMovies(JSON.parse(localStorage.getItem("foundedMovies")) || "[]");
      }
    }
  };

  const handleLogin = () => {
    checkToken();
    setIsLoading(true);
    setIsLoggedIn(true);
    localStorage.setItem("loggedIn", true);
    navigate("/movies", {replace: true});
  };

  const logOut = () => {
    setMovies([]);
    setTrueMovies([]);
    setIsLoggedIn(false);
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    checkToken();
  }, []);

  // _________________

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
      <InfoToolTip toolTipState={toolTipState} setToolTipState={setToolTipState} />
      <Sidebar
        isLoggedIn={isLoggedIn}
        closeSide={closeSide}
        isSide={isSide}
      />
      <Routes>
        <Route
          path='/'
          element={<Main isLoggedIn={isLoggedIn} openSide={openSide} />}
        />

        <Route
          path="/signin"
          element={
            isLoggedIn ? (
              <Navigate to="/movies" />
            ) : (
              <Login
                handleLogin={handleLogin}
                isLoaderVisible={isLoaderVisible}
                setIsLoaderVisible={setIsLoaderVisible}
                setToolTipState={setToolTipState}
              />
            )
          }
        />
        <Route
          path="/signup"
          element={
            isLoggedIn ? (
              <Navigate to="/movies" />
            ) : (
              <Register
                handleLogin={handleLogin}
                setIsLoading={setIsLoading}
                isLoaderVisible={isLoaderVisible}
                setIsLoaderVisible={setIsLoaderVisible}
                setToolTipState={setToolTipState}
              />
            )
          }
        />

        <Route
        path='/movies'
        element={
          <ProtectedRoute
              element={Movies}
              isLoggedIn={isLoggedIn}
              openSide={openSide}
              isLoaderVisible={isLoaderVisible}
              movies={movies}
              saveMovies={saveMovies}
              setSaveMovies={setSaveMovies}
              setMovies={setMovies}
              trueMovies={trueMovies}
              setTrueMovies={setTrueMovies}
              isShortMovie={isShortMovie}
              setIsShortMovie={setIsShortMovie}
              setIsLoaderVisible={setIsLoaderVisible}
            />
        }
      />
      <Route
        path='/saved-movies'
        element={
          <ProtectedRoute
              element={SavedMovies}
              isLoggedIn={isLoggedIn}
              openSide={openSide}
              saveMovies={saveMovies}
              setSaveMovies={setSaveMovies}
              isShortMovie={isShortMovie}
              setIsShortMovie={setIsShortMovie}
              trueMovies={trueMovies}
              setIsLoaderVisible={setIsLoaderVisible}
            />
        }
      />
      <Route
        path='/profile'
        element={
          <ProtectedRoute
              element={Profile}
              isLoggedIn={isLoggedIn}
              openSide={openSide}
              logOut={logOut}
              setCurrentUser={setCurrentUser}
              setIsLoaderVisible={setIsLoaderVisible}
              isLoaderVisible={isLoaderVisible}
              setToolTipState={setToolTipState}
            />
        }
      />
      <Route path='*' element={<NotFound />} />
      </Routes>
    </section>
    </CurrentContext.Provider>
  );
};

export default App;
