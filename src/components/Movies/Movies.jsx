import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import React from 'react';

const Movies = ({
  isLoggedIn,
  openSide,
  movies,
  isLoaderVisible,
  saveMovies,
  setMovies,
  trueMovies,
  setTrueMovies,
  isShortMovie,
  setIsShortMovie,
  setIsLoaderVisible,
  setToolTipState,
  handleLike,
  handleDislike,
 }) => {

  return (
    <>
      <Header isLoggedIn={isLoggedIn} openSide={openSide} />
      <section className='movies'>
        <SearchForm
          isLoaderVisible={isLoaderVisible}
          movies={movies}
          setMovies={setMovies}
          setIsLoaderVisible={setIsLoaderVisible}
          setTrueMovies={setTrueMovies}
          isShortMovie={isShortMovie}
          setIsShortMovie={setIsShortMovie}
          location={'all-movies'}
          setToolTipState={setToolTipState}
        />
        <MoviesCardList
          trueMovies={trueMovies}
          saveMovies={saveMovies}
          isShortMovie={isShortMovie}
          handleLike={handleLike}
          handleDislike={handleDislike}
        />
      </section>
      <Footer />
    </>
  );
};

export default Movies;
