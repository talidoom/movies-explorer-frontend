import "./Techs.css";
import Title from "../Title/Title";

const Techs = () => {
  return (
    <section id="techs" className="techs">
      <Title title={"Технологии"} />
      <div className="techs__container">
        <h2 className="techs__title">7 технологий</h2>
        <p className="techs__subtitle">
        На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
        </p>

        <ul className="techs__lists">
          <li className="techs__list">
            <p className="techs__list-text">HTML</p>
          </li>
          <li className="techs__list">
            <p className="techs__list-text">CSS</p>
          </li>
          <li className="techs__list">
            <p className="techs__list-text">JS</p>
          </li>
          <li className="techs__list">
            <p className="techs__list-text">React</p>
          </li>
          <li className="techs__list">
            <p className="techs__list-text">Git</p>
          </li>
          <li className="techs__list">
            <p className="techs__list-text">Express.js</p>
          </li>
          <li className="techs__list">
            <p className="techs__list-text">mongoDB</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Techs;
