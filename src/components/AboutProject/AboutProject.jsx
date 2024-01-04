import "./AboutProject.css";
import Title from "../Title/Title";

const AboutProject = () => {
  return (
    <section className="about-project" id="about-project">
      <Title title={"О проекте"} />
      <div className="about-project__block">
        <div className="about-project__info">
          <p className="about-project__info-title">
            Дипломный проект включал 5 этапов
          </p>
          <p className="about-project__info-text">
          Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__info">
          <p className="about-project__info-title">
            На выполнение диплома ушло 5 недель
          </p>
          <p className="about-project__info-text">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>

      <div className="about-project__timeline">
        <div className="about-project__stage about-project__stage_type_backend">
          1 неделя
        </div>
        <p className="about-project__text about-project__text_type_backend">
          Back-end
        </p>
        <div className="about-project__stage about-project__stage_type_frontend">
          4 недели
        </div>
        <p className="about-project__text about-project__text_type_frontend">
          Front-end
        </p>
      </div>
    </section>
  );
};

export default AboutProject;
