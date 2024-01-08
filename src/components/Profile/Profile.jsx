import './Profile.css';
import Header from '../Header/Header';
import Button from '../Button/Button';

function Profile({ isLoggedIn, openSideMenu }) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} openSideMenu={openSideMenu} />
      <section className='profile'>
        <h1 className='profile__title'>Привет, ____!</h1>

        <form className='profile__form' name='profile'>

          <fieldset className='profile__form-field'>
            <div className='profile__input-container'>
              <label className='profile__label'>Имя</label>
              <input
                className='profile__input'
                id='name-input'
                type='text'
                placeholder='Введите имя'
                name='name'
                required
                minLength={2}
              />
            </div>
            <div className='profile__input-container'>
              <label className='profile__label'>E-mail</label>
              <input
                className='profile__input'
                id='email-input'
                type='email'
                placeholder='Email'
                name='email'
                required
              />
            </div>
          </fieldset>

          <Button
            additionalClass={'button_disabled'}
            text={'Редактировать'}
            type={'profile-edit'}
            buttonType='submit'
          />
        </form>

        <Button text={'Выйти из аккаунта'} type={'profile-logout'} />
      </section>
    </>
  );
}

export default Profile;
