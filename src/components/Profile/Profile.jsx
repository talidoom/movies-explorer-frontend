import './Profile.css';
import Header from '../Header/Header';
import Button from '../Button/Button';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import mainApi from '../../utils/MainApi';
import { CurrentContext } from '../../utils/context/currentcontext';
import { patternName, patternEmail } from '../../utils/constants/constants';

function Profile({
  isLoggedIn,
  openSide,
  logOut,
  setCurrentUser,
  setIsLoaderVisible,
  isLoaderVisible,
  setTooltipState }) {

  const currentUser = useContext(CurrentContext);
  const {
    register,
    formState: { errors, isValid, isDirty },
    handleSubmit,
  } = useForm({
        mode: "onChange",
        values: {
          firstName: currentUser.name,
          email: currentUser.email,
        },
  });

  const isDisabled = !isValid || !isDirty;

  const onSumbit = (data) => {
    setIsLoaderVisible(true);
    mainApi
      .setUserInfo(data.firstName, data.email)
      .then((res) => {
        setCurrentUser(res);
        setTooltipState({
          isVisible: true,
          isSuccessful: true,
          text: "Данные изменены",
        });
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`);
        setTooltipState({
          isVisible: true,
          isSuccessful: false,
          text: "Что-то пошло не так...",
        });
      })
      .finally(() => {
        setIsLoaderVisible(false);
      });
  };

  return (
    <>
      <Header isLoggedIn={isLoggedIn} openSideMenu={openSide} />
      <section className='profile'>
        <h1 className='profile__title'>{`Привет, ${currentUser.name}!`}</h1>

        <form className='profile__form' name='profile' onSubmit={handleSubmit(onSumbit)}>

          <fieldset className='profile__form-field'>
            <div className='profile__input-container'>
              <label className='profile__label'>Имя</label>
              <input
                className='profile__input'
                id='name-input'
                type='text'
                placeholder='Введите имя'
                name='name'
                disabled={isLoaderVisible}
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
            <div className="profile__errors-container">
              {errors?.firstName && (
                <p className="profile__error-message">
                  {errors?.firstName?.message}
                </p>
              )}
            </div>
            <div className='profile__input-container'>
              <label className='profile__label'>E-mail</label>
              <input
                className='profile__input'
                id='email-input'
                type='email'
                placeholder='Email'
                name='email'
                disabled={isLoaderVisible}
                {...register("email", {
                  required: true,
                  pattern: patternEmail,
                })}
              />
            </div>
            <div className="profile__errors-container">
            {errors?.email && (
              <p className="profile__error-message">Введён некорректный email</p>
            )}
          </div>
          </fieldset>

          <Button
            secondClass={isDisabled && "button_disabled"}
            text={'Редактировать'}
            type={'profile-edit'}
            buttonType='submit'
            disabled={isLoaderVisible}
          />
        </form>

        <Button
          text={'Выйти из аккаунта'}
          type={'profile-logout'}
          onClick={logOut}
        />
      </section>
    </>
  );
}

export default Profile;
