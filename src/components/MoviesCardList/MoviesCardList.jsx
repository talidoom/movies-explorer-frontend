import './MoviesCardList.css';
import React from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import Button from '../Button/Button';
import { useContext, useState } from 'react';
import { CurrentContext } from '../../utils/context/currentcontext';

const MoviesCardList = ({
  trueMovies,
  setIsLoaderVisible,
  saveMovies,
  setSaveMovies,
  isShortMovie,
  mobile,
  tablet }) => {

  const location = useLocation();
  const currentUser = useContext(CurrentContext);

  const [movie, setMovie] = useState([]);

React.useEffect(()=> {
  fetch('https://api.nomoreparties.co/beatfilm-movies')
  .then((res) => res.json())
  .then((arr) => {
    setMovie(arr);
    console.log(arr);
  })
},[])

  return (
    <>
      {location.pathname === '/movies' && (
        <ul className='movies-cardlist'>
          <MoviesCard/>
        </ul>
      )}
      {location.pathname === '/saved-movies' && (
        <ul className='movies-cardlist'>
          <MoviesCard />
        </ul>
      )}
      {location.pathname === '/movies' && <Button text={'Ещё'} type={'more'} />}
    </>
  );
};

export default MoviesCardList;
