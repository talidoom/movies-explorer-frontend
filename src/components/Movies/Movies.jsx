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
  setSaveMovies,
  setMovies,
  trueMovies,
  setTrueMovies,
  isShortMovie,
  setIsShortMovie,
  setIsLoaderVisible,
  mobile,
  tablet }) => {

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
        />
        <MoviesCardList
          trueMovies={trueMovies}
          setIsLoaderVisible={setIsLoaderVisible}
          saveMovies={saveMovies}
          setSaveMovies={setSaveMovies}
          isShortMovie={isShortMovie}
          mobile={mobile}
          tablet={tablet}
        />
      </section>
      <Footer />
    </>
  );
};

export default Movies;
