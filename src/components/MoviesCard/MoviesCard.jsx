import './MoviesCard.css';
import Button from '../Button/Button';
import { useLocation } from 'react-router-dom';
import mainApi from '../../utils/MainApi';

const MoviesCard = ({
  setIsLoaderVisible,
  movie,
  saveMovies,
  setSaveMovies,
  saved
}) => {

  const location = useLocation();
  const urlMove = 'https://api.nomoreparties.co'

  const handleLike = () => {
    setIsLoaderVisible(true);
    mainApi
      .createMovie(
        movie.country,
        movie.director,
        movie.duration,
        movie.year,
        movie.description,
        `${urlMove}${movie.image.url}`,
        movie.trailerLink,
        movie.nameRU,
        movie.nameEN,
        `${urlMove}${movie.image.url}`,
        movie.id
      )
      .then((res) => {
        setSaveMovies([res, ...saveMovies]);
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`);
      })
      .finally(() => {
        setIsLoaderVisible(false);
      });
  };

  const handleDislike = () => {
    setIsLoaderVisible(true);
    const saveMovie = saveMovies?.find((item) => item.movieId === movie.id);
    mainApi
      .deleteMovie(saveMovie._id)
      .then(() => {
        setSaveMovies((newMovies) =>
          newMovies.filter((m) => m.movieId !== movie.id)
        );
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`);
      })
      .finally(() => {
        setIsLoaderVisible(false);
      });
  };

  const handleDelete = () => {
    mainApi
      .deleteMovie(movie._id)
      .then(() => {
        setSaveMovies((newMovies) =>
          newMovies.filter((m) => m._id !== movie._id)
        );
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`);
      })
  };

  return (
    <section className='movies-card'>
      <a
        className='movies-card__link'
        rel='noreferrer'
        target='_blank'
        href={movie.trailerLink}
      >
        <img
          className='movies-card__image'
          src={
            movie.image.url ? `${urlMove}${movie.image.url}` : movie.image
          }
          alt={`Обложка фильма - ${movie.nameRU}`}
        />
      </a>
      <div className='movies-card__info'>
        <div className='movies-card__wrapper'>
          <p className='movies-card__title'>
            {movie.nameRU}
          </p>
          <div className='movies-card__time'>
            {`${Math.floor(movie.duration / 60)}ч ${movie.duration % 60}м`}
          </div>
        </div>
        {location.pathname === '/movies' ? (
          <Button
            text={''}
            type={'movies-like'}
            secondClass={ saved ? "button_movies-like-active" : "" }
            onClick={saved ? handleDislike : handleLike}
          />
        ) : (
          <Button
            text={''}
            type={'movies-delete'}
            onClick={handleDelete}
          />
        )}
      </div>
    </section>
  );
};

export default MoviesCard;
