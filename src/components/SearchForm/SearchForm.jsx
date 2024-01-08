import './SearchForm.css';
import Button from '../Button/Button';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const SearchForm = () => {
  return (
    <section className='search'>
      <form className='search__form'>

        <div className='search__container'>
          <input
            className='search__input'
            placeholder='Фильм'
            name='search'
            minLength='1'
            required
            type='search'
          />
          <Button type='search' buttonType='submit' />
        </div>

        <FilterCheckbox />
      </form>
    </section>
  );
};

export default SearchForm;
