import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

const Movies = ({ isLoggedIn, isopenSide }) => {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} isopenSide={isopenSide} />
      <section className='movies'>
        <SearchForm />
        <MoviesCardList />
      </section>
      <Footer />
    </>
  );
};

export default Movies;
