import './MoviesCard.css';
import Button from '../Button/Button';
import cover from '../../images/33-slova-o-dizaine.png';
import { useLocation } from 'react-router-dom';

const MoviesCard = () => {
  const location = useLocation();
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
          src={cover}
          alt={'Обложка фильма - 33 слова о дизайне'}
        />
      </a>
      <div className='movies-card__info'>
        <div className='movies-card__wrapper'>
          <p className='movies-card__title'>
          33 слова о дизайне
          </p>
          <div className='movies-card__time'>1ч 42м</div>
        </div>
        {location.pathname === '/movies' ? (
          <Button text={''} type={'movies-like'} />
        ) : (
          <Button text={''} type={'movies-delete'} />
        )}
      </div>
    </section>
  );
};

export default MoviesCard;
