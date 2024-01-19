import './SearchForm.css';
import Button from '../Button/Button';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import moviesApi from '../../utils/MoviesApi'

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
}) => {
  const { pathname } = useLocation();
  const {
    register,
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
            console.log(res)
            setMovies(res);
            const foundedMovies = res.filter(getFilteedMovies);
            if (foundedMovies.length !== 0) {
              setTrueMovies(foundedMovies);
            } else {
              setTrueMovies([])
            }
            localStorage.setItem("foundedMovies", JSON.stringify(foundedMovies));
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
    <section className='search'>
      <form className='search__form' onSubmit={handleSubmit(onSubmit)}>

        <div className='search__container'>
          <input
            className='search__input'
            placeholder='Фильм'
            name='search'
            type='search'
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
            type='search'
            buttonType='submit'
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
