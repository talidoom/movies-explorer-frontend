import './Sidebar.css';
import Navigation from '../Navigation/Navigation';
import Button from '../Button/Button';

function Sidebar({ isSide, closeSide }) {
  return (
    <section className={`sidebar-menu ${isSide && 'sidebar-menu_opened'}`}>
      <nav className='sidebar-menu__container'>
        <Button type={'close-menu'} onClick={closeSide} />
        <Navigation navStyle={'sidebar-menu'} closeSide={closeSide} />
        <Button
          type={'account'}
          text={'Аккаунт'}
          closeSide={closeSide}
        />
      </nav>
    </section>
  );
}

export default Sidebar;
