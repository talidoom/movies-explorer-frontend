import './Header.css';
import Logo from '../Logo/Logo';
import { Link, useLocation } from 'react-router-dom';
import Button from '../Button/Button';
import Navigation from '../Navigation/Navigation';
import BurgerButton from '../BurgerButton/BurgerButton';

const Header = ({ openSide, isLoggedIn }) => {
  const location = useLocation();

  return (
    <header
      className={`header ${
        location.pathname === "/" ? "header_color" : ""
      }`}
    >
      <div className='header__logo-container'>
        <Logo />
      </div>
      {isLoggedIn && (
        <div className='header__nav'>
          <Navigation navStyle={'header-menu'} />
        </div>
      )}
      <nav className='header__menu'>
        {!isLoggedIn && (
          <Link to='/signup' className='header__link'>
            Регистрация
          </Link>
        )}
        {!isLoggedIn ? (
          <Button text={'Войти'} type={'login'} />
        ) : (
          <div className='header__account'>
            <Button type={'account'} text={'Аккаунт'} />
          </div>
        )}
        {isLoggedIn && <BurgerButton openSide={openSide} />}
      </nav>
    </header>
  );
};

export default Header;
