import './Footer.css';
import { nowDate } from '../../utils/constants/constants';

const Footer = () => {
  return (
    <footer className='footer'>
      <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>

      <div className='footer__container'>
        <p className='footer__copyright'>&copy; {nowDate}</p>

        <ul className='footer__lists'>
          <li className='footer__list'>
            <a
              href='https://praktikum.yandex.ru/'
              rel='noreferrer'
              target='_blank'
              className='footer__link'
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className='footer__list'>
            <a
              href='https://github.com/talidoom'
              rel='noreferrer'
              target='_blank'
              className='footer__link'
            >
              Github
            </a>
          </li>
        </ul>

      </div>
    </footer>
  );
};

export default Footer;
