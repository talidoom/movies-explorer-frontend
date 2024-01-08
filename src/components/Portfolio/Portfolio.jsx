import './Portfolio.css';

const Portfolio = () => {
  return (
    <section className='portfolio'>
      <h3 className='portfolio__title'>Портфолио</h3>
      <ul className='portfolio__lists'>
        <li className='portfolio__list'>
          <a
            className='portfolio__link'
            href='https://github.com/talidoom/how-to-learn'
            target='_blank'
            rel='noreferrer'
          >
            <p className='portfolio__link-text'>Статичный сайт</p>
            <p className='portfolio__link-point'>&#x2197;</p>
          </a>
        </li>
        <li className='portfolio__list'>
          <a
            className='portfolio__link'
            href='https://github.com/talidoom/russian-travel'
            target='_blank'
            rel='noreferrer'
          >
            <p className='portfolio__link-text'>Адаптивный сайт</p>
            <p className='portfolio__link-point'>&#x2197;</p>
          </a>
        </li>
        <li className='portfolio__list'>
          <a
            className='portfolio__link'
            href='https://github.com/talidoom/react-mesto-api-full-gha'
            target='_blank'
            rel='noreferrer'
          >
            <p className='portfolio__link-text'>Одностраничное приложение</p>
            <p className='portfolio__link-point'>&#x2197;</p>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
