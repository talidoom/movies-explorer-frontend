import Button from '../Button/Button';
import './BurgerButton.css';

function BurgerButton({ openSide }) {
  const handleClick = () => {
    openSide();
  };

  return (
    <nav className='burger'>
      <Button onClick={handleClick} type={'burger-button'} />
    </nav>
  );
}

export default BurgerButton;
