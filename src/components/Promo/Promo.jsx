import './Promo.css';
import NavTab from '../NavTab/NavTab';
import promoImg from '../../images/promo-img.png';

const Main = () => {
  return (
    <section className='promo'>
      <div className='promo__container'>
        <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
        <p className='promo__text'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <NavTab />
      </div>
      <img src={promoImg} className='promo__img' alt='планета' />
    </section>
  );
};

export default Main;
