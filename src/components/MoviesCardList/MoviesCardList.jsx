import './MoviesCardList.css';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import Button from '../Button/Button';

const MoviesCardList = ({ cards }) => {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/movies' && (
        <ul className='movies-cardlist'>
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
        </ul>
      )}
      {location.pathname === '/saved-movies' && (
        <ul className='movies-cardlist'>
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
        </ul>
      )}
      {location.pathname === '/movies' && <Button text={'Ещё'} type={'more'} />}
    </>
  );
};

export default MoviesCardList;
