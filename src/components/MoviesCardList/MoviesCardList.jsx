import './MoviesCardList.css';
import React from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import Button from '../Button/Button';
import { useContext, useState, useEffect } from 'react';
import { CurrentContext } from '../../utils/context/currentcontext';

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

  const filterMovie = isShortMovie ? trueMovies.filter((movie) => movie.duration <= 40) : trueMovies;
  const saveCurrentUser = saveMovies.filter(
    (movie) => movie.owner === currentUser._id
  );
  const filterSaveMovie = isShortMovie ? saveCurrentUser.filter((movie) => movie.duration <= 40) : saveCurrentUser;
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
    if (display > 1279) {
      setShownMovies(16)
    } else if (display > 767) {
      setShownMovies(8)
    } else {
      setShownMovies(5)
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
    console.log('dfdgfhg');
    const display = window.innerWidth
    if (display > 1279) {
      setShownMovies(shownMovies + 4)
    } else if (display > 767) {
      setShownMovies(shownMovies + 2)
    } else {
      setShownMovies(shownMovies + 2)
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
        <Button
          text={'Ещё'}
          type={'more'}
          onClick={expandMoviesDisplay}
      />
      }

    </>
  );
};

export default MoviesCardList;
