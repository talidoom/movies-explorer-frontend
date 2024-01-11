import './Register.css';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import mainApi from '../../utils/MainApi';
import { patternName, patternEmail} from '../../utils/constants/constants';

const Register = ({ handleLogin, isLoaderVisible, setIsLoaderVisible }) => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({ mode: "onChange" });

  const onSumbit = (data) => {
    setIsLoaderVisible(true);
    mainApi
      .register(data.firstName, data.email, data.password)
      .then(() => {
        mainApi.login(data.password, data.email)
        .then((data) => {
          if (data.token) {
            localStorage.setItem("token", data.token);
            handleLogin();
            reset();
          }
        });
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`);
      })
      .finally(() => {
        setIsLoaderVisible(false);
      });
  };

  return (
    <section className='register'>
      <Logo />
      <h1 className='register__title'>Добро пожаловать!</h1>

      <form
        name='register'
        className='register__form'
        onSubmit={handleSubmit(onSumbit)}
      >

        <fieldset className='register__form-field'>
          <div className='register__input-container'>
            <label className='register__label'>Имя</label>
            <input
              className='register__input'
              id='name-input'
              type='text'
              name='name'
              disabled={isLoaderVisible}
              placeholder='Введите имя'
              minLength={2}
              {...register("firstName", {
                required: 'Поле обязательно для заполнения',
                minLength: {
                  value: 2,
                  message: 'Минимальная длина 2 символа',
                },
                maxLength: {
                  value: 30,
                  message: 'Максимальная длина 30 символов',
                },
                pattern: patternName,
              })}
            />
          </div>
          <div className='register__input-container'>
            <label className='register__label'>E-mail</label>
            <input
              className='register__input'
              disabled={isLoaderVisible}
              id='email-input'
              type='email'
              name='email'
              placeholder='Укажите email'
              {...register("email", {
                required: true,
                pattern: patternEmail,
              })}
            />
          </div>
          <div className='register__input-container'>
            <label className='register__label'>Пароль</label>
            <input
              className='register__input'
              id='password-input'
              disabled={isLoaderVisible}
              type='password'
              name='password'
              placeholder='Введите пароль'
              {...register("password", {
                required: 'Поле обязательно для заполнения',
                minLength: {
                  value: 8,
                  message: 'Минимальная длина пароля 8 символов',
                },
              })}
            />
          </div>
        </fieldset>

        <Button
          text={'Зарегистрироваться'}
          type={'form-register'}
          buttonType='submit'
          disabled={isLoaderVisible}
          secondClass={!isValid && "button_disabled"}
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
