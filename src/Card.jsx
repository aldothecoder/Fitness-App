import { Link } from "react-router-dom";
import "./card.css";

export default function Card({ imageUrl, link, text }) {
  return (
    <div className="link-container">
      <Link to={link} className="links">
        <div className="card">
          <img src={imageUrl} alt={text} loading="lazy" className="card-img" />
        </div>
      </Link>
      <h2 className="card-name">{text}</h2>
    </div>
  );
}
