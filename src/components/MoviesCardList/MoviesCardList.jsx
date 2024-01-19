import './MoviesCardList.css';
import React from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import Button from '../Button/Button';
import { useContext, useState, useEffect } from 'react';
import { CurrentContext } from '../../utils/context/currentcontext';
import { DESKTOP_CARDS_DISPLAY_LIMIT,
TABLET_CARDS_DISPLAY_LIMIT,
MOBILE_CARDS_DISPLAY_LIMIT,
MAX_SHORT_FILM_LENGTH,
DISPLAY_DESKTOP,
DISPLAY_TABLET,
DISPLAY_DESKTOP_COUNT_CARD,
DISPLAY_TABLET_COUNT_CARD,
DISPLAY_MOBILE_COUNT_CARD } from '../../utils/constants/constants';

const MoviesCardList = ({
  trueMovies,
  setIsLoaderVisible,
  saveMovies,
  setSaveMovies,
  isShortMovie,
  searchSavedMovies }) => {

  const location = useLocation();
  const currentUser = useContext(CurrentContext);
  const [shownMovies, setShownMovies] = useState(6)

  const filterMovie = isShortMovie ? trueMovies.filter((movie) => movie.duration <= MAX_SHORT_FILM_LENGTH) : trueMovies;
  const saveCurrentUser = saveMovies.filter(
    (movie) => movie.owner === currentUser._id
  );
  const filterSaveMovie = isShortMovie ? saveCurrentUser.filter((movie) => movie.duration <= MAX_SHORT_FILM_LENGTH) : saveCurrentUser;
  const filterSaveMovieSearch = searchSavedMovies !== ""
      ? filterSaveMovie.filter((movie) =>
          movie.nameRU.toLowerCase().includes(searchSavedMovies?.toLowerCase())
        ) : filterSaveMovie;

  function getSavedMovie(arr, movie) {
    return arr.find((item) => {
      return item.movieId === movie.id;
    });
  }

  function setMoviesShownCount() {
    const display = window.innerWidth
    if (display > DISPLAY_DESKTOP) {
      setShownMovies(DISPLAY_DESKTOP_COUNT_CARD)
    } else if (display > DISPLAY_TABLET) {
      setShownMovies(DISPLAY_TABLET_COUNT_CARD)
    } else {
      setShownMovies(DISPLAY_MOBILE_COUNT_CARD)
    }
  }

   useEffect(() => {
    setMoviesShownCount()
  }, [trueMovies])

  useEffect(() => {
    setTimeout(() => {
      window.removeEventListener("resize", setMoviesShownCount)
      window.addEventListener("resize", setMoviesShownCount)
    }, 100)
  }, [])

  function expandMoviesDisplay() {
    const display = window.innerWidth;
    if (display > DISPLAY_DESKTOP) {
      setShownMovies(shownMovies + DESKTOP_CARDS_DISPLAY_LIMIT)
    } else if (display > DISPLAY_TABLET) {
      setShownMovies(shownMovies + TABLET_CARDS_DISPLAY_LIMIT)
    } else {
      setShownMovies(shownMovies + MOBILE_CARDS_DISPLAY_LIMIT)
    }
  }

  return (
    <>
    {location.pathname === "/movies" &&
        localStorage.getItem("foundedMovies") &&
        filterMovie.length === 0 && (
          <p className="movies__not-found">Ничего не найдено</p>
    )}

    {location.pathname === "/saved-movies" &&
        filterSaveMovieSearch.length === 0 && (
          <p className="movies__not-found">Ничего нет</p>
    )}

    {location.pathname === "/movies" && (
        <ul className="movies-cardlist">
          {filterMovie?.slice(0, shownMovies).map((movie) => (
            <MoviesCard
              setIsLoaderVisible={setIsLoaderVisible}
              key={movie.id}
              movie={movie}
              saveMovies={saveMovies}
              setSaveMovies={setSaveMovies}
              saved={getSavedMovie(saveMovies, movie)}
            />
          ))}
        </ul>
      )}

      {location.pathname === "/saved-movies" && (
        <ul className="movies-cardlist">
          {filterSaveMovieSearch?.map((saveMovie) => (
            <MoviesCard
              setIsLoaderVisible={setIsLoaderVisible}
              setSaveMovies={setSaveMovies}
              key={saveMovie._id}
              movie={saveMovie}
            />
          ))}
        </ul>
      )}

      {location.pathname === '/movies'
        &&
        trueMovies.length > shownMovies ? (
          <Button
          text={'Ещё'}
          type={'more'}
          onClick={expandMoviesDisplay}
        />
        ) : (
          ""
        )
      }
    </>
  );
};

export default MoviesCardList;
