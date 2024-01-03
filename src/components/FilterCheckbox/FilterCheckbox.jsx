import './FilterCheckbox.css';

const FilterCheckbox = () => {
  return (
    <section className='filter'>
      <label className='filter__switch'>
        <input className='filter__checkbox' type='checkbox' />
        <span className='filter__container'></span>
      </label>
      <p className='filter__title'>Короткометражки</p>
    </section>
  );
};

export default FilterCheckbox;
