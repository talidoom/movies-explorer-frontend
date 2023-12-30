import './NotFound.css';
import { useNavigate, Link } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);

  return (
    <div className='not-found'>
      <h1 className='not-found__title'>404</h1>
      <p className='not-found__text'>Страница не найдена</p>
      <Link className='not-found__link' onClick={handleBack}>
        Назад
      </Link>
    </div>
  );
};

export default NotFound;
