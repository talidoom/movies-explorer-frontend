import './MoviesCard.css';
import Button from '../Button/Button';
// import cover from '../../images/33-slova-o-dizaine.png';
import { useLocation } from 'react-router-dom';

const MoviesCard = ({
  setIsLoaderVisible,
  movie,
  saveMovies,
  setSaveMovies,
  saved
}) => {

  const location = useLocation();
  const urlMove = 'https://api.nomoreparties.co'

  return (
    <section className='movies-card'>
      <a
        className='movies-card__link'
        rel='noreferrer'
        target='_blank'
        href='https://www.kinopoisk.ru/film/1302273/'
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
          />
        ) : (
          <Button text={''} type={'movies-delete'} />
        )}
      </div>
    </section>
  );
};

export default MoviesCard;
