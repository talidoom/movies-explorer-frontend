import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { useState } from 'react';

const SavedMovies = ({
  isLoggedIn,
  openSide,
  saveMovies,
  isShortMovie,
  setIsShortMovie,
  trueMovies,
  setIsLoaderVisible,
  handleDelete,
  getSearchSave,
  searchSavedMovies }) => {

  return (
    <>
      <Header isLoggedIn={isLoggedIn} openSide={openSide} />
      <section className='saved-movies'>
        <SearchForm
          isShortMovie={isShortMovie}
          setIsShortMovie={setIsShortMovie}
          setIsLoaderVisible={setIsLoaderVisible}
          location={'saved'}
          getSearchSave={getSearchSave}
        />
        <MoviesCardList
          trueMovies={trueMovies}
          isShortMovie={isShortMovie}
          saveMovies={saveMovies}
          searchSavedMovies={searchSavedMovies}
          handleDelete={handleDelete}
        />
      </section>
      <Footer />
    </>
  );
};

export default SavedMovies;
