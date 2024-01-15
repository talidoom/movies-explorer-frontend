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
  setSaveMovies,
  isShortMovie,
  setIsShortMovie,
  trueMovies,
  setIsLoaderVisible }) => {

  const [searchSavedMovies, setSearchSavedMovies] = useState("");

  const getSearchSave = (item) => {
    setSearchSavedMovies(item);
  };

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
          setSaveMovies={setSaveMovies}
          searchSavedMovies={searchSavedMovies}
        />
      </section>
      <Footer />
    </>
  );
};

export default SavedMovies;
