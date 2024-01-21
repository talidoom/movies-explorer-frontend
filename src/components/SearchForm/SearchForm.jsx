import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import moviesApi from "../../utils/MoviesApi";
import './SearchForm.css';

const SearchForm = ({
  isLoaderVisible,
  setIsLoaderVisible,
  movies,
  setMovies,
  setTrueMovies,
  isShortMovie,
  setIsShortMovie,
  location,
  getSearchSave,
  setToolTipState,
}) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (location.pathname === "/movies") {
      if (!location.search) {
        setInputValue("");
      }
    }
  }, [location]);

  const onSubmit = (searchdata) => {
        const lowerSearchData = searchdata.movieName.toLowerCase()
        const getFilteedMovies = (item) => { return item.nameRU.toLowerCase().includes(lowerSearchData) ||
          item.nameEN.toLowerCase().includes(lowerSearchData)}
        if (location === "saved") {
          getSearchSave(searchdata.movieName);
          localStorage.setItem("searchSavedMoviesValue", searchdata.movieName);
        } else {
          localStorage.removeItem("foundedMovies");
          if (!movies.length) {
            setIsLoaderVisible(true);
            moviesApi
              .getMovies()
              .then((res) => {
                setMovies(res);
                const foundedMovies = res.filter(getFilteedMovies);
                if (foundedMovies.length !== 0) {
                  setTrueMovies(foundedMovies);
                } else {
                  setTrueMovies([]);
                }
                localStorage.setItem("foundedMovies", JSON.stringify(foundedMovies));
              })
              .catch((err) => {
                console.log(`Ошибка ${err}`);
                setToolTipState({
                  isVisible: true,
                  isSuccessful: false,
                  text: "Возможно, проблема с соединением или сервер недоступен",
                });
              })
              .finally(() => {
                setIsLoaderVisible(false);
              });
          } else {
            const foundedMovies = movies.filter(getFilteedMovies);
            localStorage.setItem("foundedMovies", JSON.stringify(foundedMovies));
            setTrueMovies(foundedMovies);
          }
          localStorage.setItem("searchInputValue", searchdata.movieName);
        }
      };

  return (
    <section className="search">
      <form
        className="search__form"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit({ movieName: inputValue });
        }}
      >
        <div className="search__container">
          <input
            className="search__input"
            placeholder="Фильм"
            name="search"
            type="search"
            disabled={isLoaderVisible}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button
            type="search"
            buttonType="submit"
            disabled={isLoaderVisible}
          />
        </div>
        <FilterCheckbox
          isShortMovie={isShortMovie}
          setIsShortMovie={setIsShortMovie}
        />
      </form>
    </section>
  );
};

export default SearchForm;
