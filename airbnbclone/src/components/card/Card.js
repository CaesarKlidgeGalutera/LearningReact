import "./Card.css";
import image12 from "../images/image12.svg";

function Card() {
  return (
    <div className="MainCard">
      <div className="card card1">
        <img src={image12} alt="pic1"></img>
        <p className=" desc desc--rating">
          <i class="fa-solid fa-star"></i> 5.0{" "}
          <span className="rating--star">(6) &#183; USA</span>
        </p>
        <p className="desc desc--title">Life lessons with Katie Zafares</p>
        <p className="desc desc--price">
          <span className="price_cost">From $136 </span>/ person
        </p>
      </div>
    </div>
  );
}

export default Card;
