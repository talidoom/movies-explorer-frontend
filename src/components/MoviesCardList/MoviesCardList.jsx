import './MoviesCardList.css';
import React from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import Button from '../Button/Button';
import { useContext, useState } from 'react';
import { CurrentContext } from '../../utils/context/currentcontext';

const MoviesCardList = ({
  trueMovies,
  setIsLoaderVisible,
  saveMovies,
  setSaveMovies,
  isShortMovie,
  mobile,
  tablet,
  searchSavedMovies }) => {

  const location = useLocation();
  const currentUser = useContext(CurrentContext);

  const filterMovie = isShortMovie ? trueMovies.filter((movie) => movie.duration <= 40) : trueMovies;
  const saveCurrentUser = saveMovies.filter(
    (movie) => movie.owner === currentUser._id
  );
  const filterSaveMovie = isShortMovie ? saveCurrentUser.filter((movie) => movie.duration <= 40) : saveCurrentUser;
  const filterSaveMovieSearch = searchSavedMovies !== ""
      ? filterSaveMovie.filter((movie) =>
          movie.nameRU.toLowerCase().includes(searchSavedMovies?.toLowerCase())
        ) : filterSaveMovie;

  const [displayState, setDisplayState] = useState({
    showedMovies: 4,
    loadMoreMovies: 4,
  });

  function getSavedMovie(arr, movie) {
    return arr.find((item) => {
      return item.movieId === movie.id;
    });
  }

  React.useEffect(() => {
    if (mobile) {
      setDisplayState({
        showedMovies: 5,
        loadMoreMovies: 5,
      });
    } else if (tablet) {
      setDisplayState({
        showedMovies: 4,
        loadMoreMovies: 4,
      });
    } else {
      setDisplayState({
        showedMovies: 4,
        loadMoreMovies: 4,
      });
    }
  }, [mobile, tablet]);

  const handleMore = () => {
    setDisplayState((prevState) => ({
      ...prevState,
      showedMovies:
      displayState.showedMovies + displayState.loadMoreMovies,
    }));
  };

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
          {filterMovie?.slice(0, displayState.showedMovies).map((movie) => (
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


      {/* {location.pathname === '/movies' && (
        <ul className='movies-cardlist'>
          <MoviesCard/>
        </ul>
      )}
      {location.pathname === '/saved-movies' && (
        <ul className='movies-cardlist'>
          <MoviesCard />
        </ul>
      )} */}
      {location.pathname === '/movies'
        && <Button
          text={'Ещё'}
          type={'more'}
          onClick={handleMore}
      />}
    </>
  );
};

export default MoviesCardList;
