import { Link } from "react-router-dom";
import "./card.css";

export default function Card({ imageUrl, link, text }) {
  return (
    <div className="link-container">
      <Link to={link} className="links">
        <div
          className="card"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "50% 30%",
          }}
        ></div>
      </Link>
      <h2 className="card-name">{text}</h2>
    </div>
  );
}
