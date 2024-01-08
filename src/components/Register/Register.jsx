import './Register.css';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <section className='register'>
      <Logo />
      <h1 className='register__title'>Добро пожаловать!</h1>

      <form name='register' className='register__form'>

        <fieldset className='register__form-field'>
          <div className='register__input-container'>
            <label className='register__label'>Имя</label>
            <input
              className='register__input'
              id='name-input'
              type='text'
              name='name'
              placeholder='Введите имя'
              minLength={2}
              required
            />
          </div>
          <div className='register__input-container'>
            <label className='register__label'>E-mail</label>
            <input
              className='register__input'
              id='email-input'
              type='email'
              name='email'
              placeholder='Укажите email'
              required
            />
          </div>
          <div className='register__input-container'>
            <label className='register__label'>Пароль</label>
            <input
              className='register__input'
              id='password-input'
              type='password'
              name='password'
              placeholder='Введите пароль'
              required
              minLength={8}
            />
          </div>
        </fieldset>

        <Button
          text={'Зарегистрироваться'}
          type={'form-register'}
          buttonType='submit'
        />
      </form>

      <div className='register__link-container'>
        <p className='register__link-text'>Уже зарегистрированы?</p>
        <Link className='register__link' to='/signin'>
          Войти
        </Link>
      </div>
    </section>
  );
};

export default Register;
