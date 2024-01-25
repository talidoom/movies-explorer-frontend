import "./SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import { useState, useEffect } from "react";

const SavedMovies = ({
  movies,
  isLoggedIn,
  openSide,
  saveMovies,
  isShortMovie,
  setIsShortMovie,
  trueMovies,
  setIsLoaderVisible,
  handleDelete,
  getSearchSave,
  setMovies,
  setTrueMovies,
  isLoaderVisible,
  searchSavedMovies,
}) => {
  //console.log(saveMovies);
  /*useEffect(() => {
console.log('обновленный массив сохраненных фильмов', ...saveMovies);
},[...saveMovies])*/

  useEffect(() => {
    //console.log(location)
    // Сбросить фильтры и поле поиска при возвращении на страницу сохраненных фильмов
    //localStorage.removeItem("savedCheckboxState");
    //localStorage.removeItem("searchSavedMoviesValue");
    //localStorage.setItem("foundedMovies", JSON.stringify(saveMovies));
  }, []);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} openSide={openSide} />
      <section className="saved-movies">
        <SearchForm
          movies={movies}
          isShortMovie={isShortMovie}
          setIsShortMovie={setIsShortMovie}
          setIsLoaderVisible={setIsLoaderVisible}
          getSearchSave={getSearchSave}
          location={"saved"}
          setMovies={setMovies}
          setTrueMovies={setTrueMovies}
          isLoaderVisible={isLoaderVisible}
        />
        <MoviesCardList
          trueMovies={trueMovies}
          isShortMovie={isShortMovie}
          saveMovies={saveMovies}
          searchSavedMovies={searchSavedMovies}
          handleDelete={handleDelete}
          locationPath={"saved"}
        />
      </section>
      <Footer />
    </>
  );
};

export default SavedMovies;
