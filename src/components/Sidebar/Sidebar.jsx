import './Sidebar.css';
import Navigation from '../Navigation/Navigation';

function Sidebar({ closeSide, isSide }) {
  return (
    <section className={`sidebar-menu ${isSide && "sidebar-menu_opened"}`}>
      <nav className='navigation'>
        <Navigation navStyle={'sidebar-menu'} closeSide={closeSide} />
      </nav>
    </section>
  );
}

export default Sidebar;
