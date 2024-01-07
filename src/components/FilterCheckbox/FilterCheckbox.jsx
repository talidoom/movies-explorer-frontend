import './FilterCheckbox.css';

const FilterCheckbox = () => {
  return (
    <section className='filter'>
      <label className='filter__switch'>
        <input className='filter__check' type='checkbox' />
        <span className='filter__container'></span>
      </label>
      <p className='filter__title'>Короткометражки</p>
    </section>
  );
};

export default FilterCheckbox;
