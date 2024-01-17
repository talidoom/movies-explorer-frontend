import './Login.css';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import mainApi from '../../utils/MainApi';
import { patternEmail } from '../../utils/constants/constants';

const Login = ({ isLoaderVisible, handleLogin, setIsLoaderVisible, setTooltipState}) => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({ mode: "onChange" });

  const onSumbit = (formdata) => {
    setIsLoaderVisible(true);
    mainApi
      .login(formdata.password, formdata.email)
      .then((data) => {
        setTooltipState({
          isVisible: true,
          isSuccessful: true,
          text: "Авторизация прошла успешно",
        });
        localStorage.setItem("token", data.token);
        handleLogin();
        reset();
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`);
        setTooltipState({
          isVisible: true,
          isSuccessful: false,
          text: "Неправильная почта или пароль",
        });
      })
      .finally(() => {
        setIsLoaderVisible(false);
      });
  };


  return (
    <section className='login'>
      <Logo />
      <h1 className='login__title'>Рады видеть!</h1>

      <form name='login' className='login__form' onSubmit={handleSubmit(onSumbit)}>
        <fieldset className='login__form-field'>

          <div className='login__input-container'>
            <label className='login__label'>E-mail</label>
            <input
              className='login__input'
              id='email-input'
              type='email'
              name='email'
              placeholder='Укажите email'
              disabled={isLoaderVisible}
              {...register("email", {
                required: true,
                pattern: patternEmail,
              })}
            />
          </div>
          <div className="login__errors-container">
            {errors?.email && (
              <p className="login__error-message">Введён некорректный email</p>
            )}
          </div>

          <div className='login__input-container'>
            <label className='login__label'>Пароль</label>
            <input
              className='login__input'
              id='password-input'
              type='password'
              name='password'
              placeholder='Введите пароль'
              disabled={isLoaderVisible}
              {...register("password", {
                required: 'Поле обязательно для заполнения',
                minLength: {
                  value: 8,
                  message: 'Минимальная длина пароля 8 символов',
                },
              })}
            />
          </div>
          <div className="login__errors-container">
            {errors?.password && (
              <p className="login__error-message">
                {errors?.password?.message || "Error"}
              </p>
            )}
          </div>

        </fieldset>
        <Button
          text={'Войти'}
          type={'form-login'}
          buttonType='submit'
          secondClass={!isValid && "button_disabled"}
          disabled={isLoaderVisible}
        />
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
