import './Logo.css';
import { Link } from 'react-router-dom';
import logoHeader from '../../images/logo-header.svg';

const Logo = () => {
  return (
    <Link className='logo' to='/'>
      <img className='logo__img' src={logoHeader} alt='Логотип сайта' />
    </Link>
  );
};

export default Logo;
