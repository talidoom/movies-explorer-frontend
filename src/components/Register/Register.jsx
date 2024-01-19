import './Register.css';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import mainApi from '../../utils/MainApi';
import { patternEmail} from '../../utils/constants/constants';

const Register = ({ handleLogin, isLoaderVisible, setIsLoaderVisible, setToolTipState, setIsLoading }) => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({ mode: "onChange" });

  const onSumbit = (formdata) => {
    setIsLoaderVisible(true);
    mainApi
      .register(formdata.firstName, formdata.email, formdata.password)
      .then(() => {
        mainApi.login(formdata.password, formdata.email).then((data) => {
          if (data.token) {
            localStorage.setItem("token", data.token);
            handleLogin();
            setToolTipState({
              isVisible: true,
              isSuccessful: true,
              text: "Вы успешно зарегистрировались!",
            });
            reset();
          }
        });
      })
      .catch((err) => {
        console.log(`Err ${err}`);
        setToolTipState({
          isVisible: true,
          isSuccessful: false,
          text: "При регистрации указан email, который уже существует на сервере!",
        });
      })
      .finally(() => {
        setIsLoaderVisible(false);
        setIsLoading(false);
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
              id='name'
              type='text'
              name='name'
              disabled={isLoaderVisible}
              placeholder='Введите имя'
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
              })}
            />
          </div>
          <div className="register__errors-container">
            {errors?.firstName && (
              <p className="register__error-message">
                {errors?.firstName?.message || "Недопустимые символы"}
              </p>
            )}
          </div>

          <div className='register__input-container'>
            <label className='register__label'>E-mail</label>
            <input
              className='register__input'
              disabled={isLoaderVisible}
              id='email'
              type='email'
              name='email'
              placeholder='Укажите e-mail'
              {...register("email", {
                required: true,
                pattern: patternEmail,
              })}
            />
          </div>
          <div className="register__errors-container">
            {errors?.email && (
              <p className="register__error-message">Введён некорректный email</p>
            )}
          </div>

          <div className='register__input-container'>
            <label className='register__label'>Пароль</label>
            <input
              className='register__input'
              id='password'
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
          <div className="register__errors-container">
            {errors?.password && (
              <p className="register__error-message">
                {errors?.password?.message || "Что-то пошло не так.."}
              </p>
            )}
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
