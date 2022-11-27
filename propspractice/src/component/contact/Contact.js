import "./Contact.css";

function Contact({ img, name, contactNum, email }) {
  return (
    <div className="contacs">
      <div className="contact-card">
        <img src={img} alt="" />
        <h3>{name}</h3>
        <div className="info-group">
          <img src="" alt="" />
          <p>{contactNum}</p>
        </div>
        <div className="info-group">
          <img src="" alt="" />
          <p> {email}</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
