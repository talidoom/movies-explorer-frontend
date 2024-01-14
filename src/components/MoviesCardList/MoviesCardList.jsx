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
  const filterSavedMovie = isShortMovie ? saveCurrentUser.filter((movie) => movie.duration <= 40) : saveCurrentUser;
  const filterSavedMovieSearch = searchSavedMovies !== ""
      ? filterSavedMovie.filter((movie) =>
          movie.nameRU.toLowerCase().includes(searchSavedMovies?.toLowerCase())
        ) : filterSavedMovie;

  function getSavedMovie(arr, movie) {
    return arr.find((item) => {
      return item.movieId === movie.id;
    });
  }

  return (
    <>
      {location.pathname === '/movies' && (
        <ul className='movies-cardlist'>
          <MoviesCard/>
        </ul>
      )}
      {location.pathname === '/saved-movies' && (
        <ul className='movies-cardlist'>
          <MoviesCard />
        </ul>
      )}
      {location.pathname === '/movies' && <Button text={'Ещё'} type={'more'} />}
    </>
  );
};

export default MoviesCardList;
