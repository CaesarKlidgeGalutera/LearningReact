import "./Card.css";

function Card(props) {
  console.log(props);
  return (
    <div className="MainCard">
      <div className="card card1">
        <img src={props.img} alt="pic1"></img>
        <p className=" desc desc--rating">
          <i class="fa-solid fa-star"></i> {props.rating}{" "}
          <span className="rating--star">{props.reviewCount} &#183; USA</span>
        </p>
        <p className="desc desc--title">{props.title}</p>
        <p className="desc desc--price">
          <span className="price_cost">{props.price} </span>/ person
        </p>
      </div>
    </div>
  );
}

export default Card;
