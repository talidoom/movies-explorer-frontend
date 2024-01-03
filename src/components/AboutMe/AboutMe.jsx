import "./AboutMe.css";
import Title from "../Title/Title";
import author from "../../images/photo-author.png";

const AboutMe = () => {
  return (
    <section id="student" className="about-me">
      <Title title={"Студент"} />
      <div className="about-me__content">
        <div className="about-me__block">
          <p className="about-me__name">Тори</p>
          <p className="about-me__job">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__text">
            Я родилась в городе Нижневартовск, затем переехала в Москву, где закончила МПГУ им. Ленина, как художник.
            Но уже по окончанию институ я поняла, что меня влечет область IT и программирование.
            Так я прошла пусть от художника и преподавателя до аналитика данных и веб-разработчика.
            На данный момент я работаю аналитиком, а также занимаюсь фриланс-заказами по front-end.
          </p>
          <a
          className="about-me__link hover-link"
          href="https://github.com/talidoom"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        </div>
        <img
          className="about-me__img"
          src={author}
          alt="Фотография разработчика"
        />
      </div>
    </section>
  );
};

export default AboutMe;
