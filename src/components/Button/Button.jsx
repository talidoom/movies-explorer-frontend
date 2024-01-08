import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({ text, type, onClick }) => {
  return (
    <>
      {type === 'account' ? (
        <Link
          className='button button_type-account'
          to='/profile'
        >
          {text}
        </Link>
      ) :
      (
      <button
          onClick={onClick}
          className={`button
      ${type === 'form-login' && 'button_type-login'}
      ${type === 'header-login' && 'button_type-header-login'}
      ${type === 'form-register' && 'button_type-register'}
      ${type === 'search' && 'button_type-search'}
      ${type === 'more' && 'button_type-more'}
      ${type === 'profile-edit' && 'button_type-profile'}
      ${type === 'profile-logout' && 'button_type-logout'}
      ${type === 'movies-like' && 'button_movies-like'}
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
