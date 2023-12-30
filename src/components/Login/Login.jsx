import './Login.css';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <section className='login'>
      <Logo />
      <h3 className='login__title'>Рады видеть!</h3>

      <form name='login' className='login__form'>
        <fieldset className='login__form-field'>

          <div className='login__input-container'>
            <label className='login__label'>E-mail</label>
            <input
              className='login__input'
              id='email-input'
              type='email'
              name='email'
              placeholder='Укажите email'
              required
            />
          </div>

          <div className='login__input-container'>
            <label className='login__label'>Пароль</label>
            <input
              className='login__input'
              id='password-input'
              type='password'
              name='password'
              placeholder='Введите пароль'
              minLength={8}
              required
            />
          </div>

        </fieldset>
        <Button text={'Войти'} type={'form-login'} buttonType='submit' />
      </form>

      <div className='login__link-container'>
        <p className='login__link-text'>Еще не зарегистрированы?</p>
        <Link className='login__link' to='/signup'>
          Регистрация
        </Link>
      </div>
    </section>
  );
};

export default Login;
