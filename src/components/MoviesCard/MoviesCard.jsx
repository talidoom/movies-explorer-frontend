import './MoviesCard.css';
import Button from '../Button/Button';
import { useLocation } from 'react-router-dom';
import { urlMove } from '../../utils/urlApi';

const MoviesCard = ({
  movie,
  saved,
  handleLike,
  handleDislike,
  handleDelete }) => {
  const location = useLocation();

  function handleLikeMovie () {
    handleLike(movie);
  }

  function handleDislikeMovie () {
    handleDislike(movie)
  }

  function handleDeleteMovies () {
    handleDelete(movie)
  }

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
            onClick={saved ? handleDislikeMovie : handleLikeMovie}
          />
        ) : (
          <Button
            text={''}
            type={'movies-delete'}
            onClick={handleDeleteMovies}
          />
        )}
      </div>
    </section>
  );
};

export default MoviesCard;
