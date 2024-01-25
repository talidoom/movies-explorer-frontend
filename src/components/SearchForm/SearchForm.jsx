import "./SearchForm.css";
import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import moviesApi from "../../utils/MoviesApi";
import SavedMovies from "../SavedMovies/SavedMovies";

const SearchForm = ({
  isLoaderVisible,
  setIsLoaderVisible,
  movies,
  setMovies,
  setTrueMovies,
  isShortMovie,
  setIsShortMovie,
  getSearchSave,
  location,
}) => {
  const { pathname } = useLocation();

  const {
    register,
    setValue,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "onChange",
    values: {
      movieName:
        pathname === "/movies"
          ? localStorage.getItem("searchInputValue")
          : localStorage.getItem("searchSavedMoviesValue"),
    },
  });

  const [resetFilters, setResetFilters] = useState(true);

  useEffect(() => {
    if (location === "saved" && resetFilters) {
      // Сбросить фильтры и поле поиска при возвращении на страницу сохраненных фильмов
      //setResetFilters(true);
      setIsShortMovie(false);
      setValue("movieName", "");
      getSearchSave("");
      localStorage.removeItem("savedCheckboxState");
      localStorage.removeItem("searchSavedMoviesValue");
      localStorage.setItem("foundedMovies", JSON.stringify([]));

      // Сбросить флаг
      setResetFilters(false);
    } else if (location !== "saved") {
      setResetFilters(true);
    }
  }, [location]);

  const onSubmit = (searchdata) => {
    const lowerSearchData = searchdata.movieName.toLowerCase();
    const getFilteedMovies = (item) => {
      return (
        item.nameRU.toLowerCase().includes(lowerSearchData) ||
        item.nameEN.toLowerCase().includes(lowerSearchData)
      );
    };
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
            //console.log(res);
            setMovies(res);
            const foundedMovies = res.filter(getFilteedMovies);
            if (foundedMovies.length !== 0) {
              setTrueMovies(foundedMovies);
            } else {
              setTrueMovies([]);
            }
            localStorage.setItem(
              "foundedMovies",
              JSON.stringify(foundedMovies)
            );
          })
          .catch((err) => {
            console.log(`Ошибка ${err}`);
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
      <form className="search__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="search__container">
          <input
            className="search__input"
            placeholder="Фильм"
            name="search"
            type="search"
            disabled={isLoaderVisible}
            {...register("movieName", {
              required: "Нужно ввести ключевое слово",
              maxLength: {
                value: 30,
                message: "Максимальная длина 30 символов",
              },
            })}
          />

          <Button
            type="search"
            buttonType="submit"
            disabled={isLoaderVisible}
            additionalClass={!isValid && "button_disabled"}
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
