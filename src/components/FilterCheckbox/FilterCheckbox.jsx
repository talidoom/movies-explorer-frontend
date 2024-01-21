import './FilterCheckbox.css';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const FilterCheckbox = ({ setIsShortMovie, isShortMovie }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/movies") {
      setIsShortMovie(JSON.parse(localStorage.getItem("checkboxState")) || false);
    }
    else {
      setIsShortMovie(
        JSON.parse(localStorage.getItem("savedCheckboxState")) || false
      );
    }
  }, [pathname, setIsShortMovie]);

  const handleCheckbox = () => {
    setIsShortMovie(!isShortMovie);
    if (pathname === "/saved-movies") {
      localStorage.setItem("savedCheckboxState", !isShortMovie);
    } else {
      localStorage.setItem("checkboxState", !isShortMovie);
    }
  };

  return (
    <section className='filter'>
      <label className='filter__switch'>
        <input
          className='filter__check'
          checked={isShortMovie}
          onChange={handleCheckbox}
          type='checkbox'
        />
        <span className='filter__container'></span>
      </label>
      <p className='filter__title'>Короткометражки</p>
    </section>
  );
};

export default FilterCheckbox;
