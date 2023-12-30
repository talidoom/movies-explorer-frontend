import './Navigation.css';
import { NavLink } from 'react-router-dom';

const Navigation = ({ navStyle, closeSide }) => {
  return (
    <section>
      {navStyle === 'header-menu' && (
        <nav className={'navigation'}>
          <NavLink
            onClick={closeSide}
            to='/movies'
            className={({ isActive }) =>
              `navigation__link ${isActive ? 'navigation__link_active' : ''}`
            }
          >
            Фильмы
          </NavLink>
          <NavLink
            onClick={closeSide}
            to='/saved-movies'
            className={({ isActive }) =>
              `navigation__link ${isActive ? 'navigation__link_active' : ''}`
            }
          >
            Сохранённые фильмы
          </NavLink>
        </nav>
      )}
      {navStyle === 'side-menu' && (
        <nav className={'side-navigation'}>
          <NavLink
            onClick={closeSide}
            to='/'
            className={({ isActive }) =>
              `side-navigation__link ${isActive ? 'side-navigation__link_active' : ''}`
            }
          >
            Главная
          </NavLink>
          <NavLink
            onClick={closeSide}
            to='/movies'
            className={({ isActive }) =>
              `side-navigation__link ${isActive ? 'side-navigation__link_active' : ''}`
            }
          >
            Фильмы
          </NavLink>
          <NavLink
            onClick={closeSide}
            to='/saved-movies'
            className={({ isActive }) =>
              `side-navigation__link ${isActive ? 'side-navigation__link_active' : ''}`
            }
          >
            Сохраненные фильмы
          </NavLink>
        </nav>
      )}
    </section>
  );
};

export default Navigation;
