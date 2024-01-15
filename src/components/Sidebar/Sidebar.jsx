import './Sidebar.css';
import Navigation from '../Navigation/Navigation';
import Button from '../Button/Button';

function Sidebar({ closeSide, isSide }) {
  return (
    <section className={`sidebar-menu ${isSide && "sidebar-menu_opened"}`}>
      <nav className='navigation'>
        {/* <Button type={'close-menu'} onClick={closeSide} /> */}
        <Navigation navStyle={'sidebar-menu'} closeSide={closeSide} />
        {/* <Button
          type={'account'}
          text={'Аккаунт'}
          closeSide={closeSide}
        /> */}
      </nav>
    </section>
  );
}

export default Sidebar;
