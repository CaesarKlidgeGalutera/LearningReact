import "./Hero.css";
import picgroup from "../images/picgroup.svg";

function Hero() {
  return (
    <section className="Hero">
      <img className="Hero-img" src={picgroup} alt="grouppic"></img>
      <div className="content">
        <p className="content__title">Online experiences</p>
        <p className="content__description">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </section>
  );
}

export default Hero;
