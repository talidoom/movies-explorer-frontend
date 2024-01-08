import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Header.css";
import Logo from '../Logo/Logo';
import menu from "../../images/burger-button.svg";
import Navigation from "../Navigation/Navigation";
import Button from "../Button/Button";

function Header({ isLoggedIn }) {
  const location = useLocation();
  const [isClicked, setIsClicked] = React.useState(false)

  const setActive = ({ isActive }) => isActive ? "header__button header__button_active" : "header__button"

  function openSide() {
    setIsClicked(true)
  }

  function closeSide() {
    setIsClicked(false)
  }

  return (
    <header  className={`header-wrapper ${
         location.pathname === "/" ? "header-wrapper_color" : ""
    }`}>
      {!isLoggedIn ? (
        <section className="header">
           <Logo />
          <div className="header__container">
            <Link to="/signup" className="header__button">
              Регистрация
            </Link>
            <Link to="/signin" className="header__button header__button-green">
              Войти
            </Link>
          </div>
        </section>
      ) : (
        <section className="header">
            <Logo />
          <div className="header__container header__container-movies">
            <NavLink to="/movies" className={setActive}>
              Фильмы
            </NavLink>

            <NavLink to="/saved-movies" className={setActive}>
              Сохранённые фильмы
            </NavLink>
          </div>
          <div className="header__container">
            <Button type={'account'} onClick={openSide} alt="кнопка аккаунта" />
            <button className="header__burger-button" onClick={openSide}>
              <img src={menu} alt="кнопка меню" />
            </button>
          </div>
          {isClicked ? <Navigation closeSide={closeSide} openSide={openSide}/> : ""}
        </section>
      )}
      </header>
  )
}

export default Header
