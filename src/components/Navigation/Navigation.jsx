import React from "react"
import { Link, NavLink } from "react-router-dom"
import "./Navigation.css"
import account from "../../images/account-svg.svg"
import Button from "../Button/Button"

function Navigation({ closeSide }) {
  const setActive = ({ isActive }) =>
    isActive ? "navigation__link navigation__link_active" : "navigation__link"

  return (
    <div className="navigation__overlay">
      <div className="navigation__overlay-container"></div>
      <div className="navigation__menu">
        {/* <Button type={'close-menu'} onClick={closeSide} /> */}
        <nav className="navigation__links">
          <NavLink to="/" className={setActive}>
            Главная
          </NavLink>
          <NavLink to="/movies" onClick={closeSide} className={setActive}>
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            onClick={closeSide}
            className={setActive}
          >
            Сохранённые фильмы
          </NavLink>
        </nav>
        {/* <Link
          to="/profile"
          className="navigation__account-button"
          onClick={closeSide}
        >
          <img src={account} alt="аккаунт" />
        </Link> */}
      </div>
    </div>
  )
}

export default Navigation
