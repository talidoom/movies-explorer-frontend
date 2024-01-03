import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({ text, type, onClick }) => {
  return (
    <>
      {type === 'account' ? (
        <Link
          className='button button_type_account'
          to='/profile'
        >
          {text}
        </Link>
      ) :
      (
      <button
          onClick={onClick}
          className={`button
      ${type === 'form-login' && 'button_type_login'}
      ${type === 'header-login' && 'button_type_header-login'}
      ${type === 'form-register' && 'button_type_register'}
      ${type === 'search' && 'button_type_search'}
      ${type === 'more' && 'button_type_more'}
      ${type === 'profile-edit' && 'button_type_profile-edit'}
      ${type === 'profile-logout' && 'button_type_logout'}
      ${type === 'movies-like' && 'button_type_movies-like'}
      ${type === 'movies-delete' && 'button_type_movie-delete'}
      ${type === 'close-menu' && 'button_type_close'}
      `}
        >
          {text}
        </button>
      )}
    </>
  );
};

export default Button;
