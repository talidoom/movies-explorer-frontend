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
  handleLike,
  handleDislike,
  getSearchSave,
}) => {

  return (
    <>
      <Header isLoggedIn={isLoggedIn} openSide={openSide} />
      <section className='movies'>
        <SearchForm
          movies={movies}
          location={"movies"}
          setMovies={setMovies}
          isShortMovie={isShortMovie}
          getSearchSave={getSearchSave}
          setTrueMovies={setTrueMovies}
          isLoaderVisible={isLoaderVisible}
          setIsLoaderVisible={setIsLoaderVisible}
          setIsShortMovie={setIsShortMovie}
        />
        <MoviesCardList
          trueMovies={trueMovies}
          saveMovies={saveMovies}
          isShortMovie={isShortMovie}
          handleLike={handleLike}
          handleDislike={handleDislike}
          locationPath={"movie"}
        />
      </section>
      <Footer />
    </>
  );
};

export default Movies;
