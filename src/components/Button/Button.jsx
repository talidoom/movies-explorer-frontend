import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({ text, type, onClick, closeSide, buttonType, secondClass }) => {
  return (
    <>
      {type === 'account' ? (
        <Link
          className='button button_type-account'
          onClick={closeSide}
          to='/profile'
        >
          {text}
        </Link>
      ) :
      (
      <button
          onClick={onClick}
          type={buttonType || "button"}
          className={`button
      ${type === 'form-login' && 'button_type-login'}
      ${type === 'header-login' && `button_type-header-login ${secondClass}`}
      ${type === 'form-register' && `button_type-register ${secondClass}`}
      ${type === 'search' && 'button_type-search'}
      ${type === 'more' && 'button_type-more'}
      ${type === 'profile-edit' && `button_type-profile ${secondClass}`}
      ${type === 'profile-logout' && `button_type-logout ${secondClass}`}
      ${type === 'movies-like' && `button_movies-like ${secondClass}`}
      ${type === 'movies-delete' && 'button_movie-delete'}
      ${type === 'close-menu' && 'button_type-close'}
      `}
        >
          {text}
        </button>
      )}
    </>
  );
};

export default Button;
