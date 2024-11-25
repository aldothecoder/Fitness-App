import Card from "../Card";
import "./training-type.css";
export default function Cardio() {
  const cards = [
    {
      imageUrl: "/images/stair.webp",
      link: "/StairClimber",
      text: "Stair Climber",
    },
    {
      imageUrl: "/images/swimming.webp",
      link: "/Swimming",
      text: "Swimming",
    },
    { imageUrl: "/images/cycling.webp", link: "/Cycling", text: "Cycling" },
  ];

  const cards2 = [
    {
      imageUrl: "/images/boxing.webp",
      link: "/Boxing",
      text: "Boxing",
    },
    {
      imageUrl: "/images/running.webp",
      link: "/Running",
      text: "Running",
    },
    {
      imageUrl: "/images/jumproping.webp",
      link: "/JumpRoping",
      text: "Jump Roping",
    },
  ];

  return (
    <div className="container-holder">
      <div className="wt-container">
        {cards.map((card, index) => (
          <Card
            key={index}
            imageUrl={card.imageUrl}
            link={card.link}
            text={card.text}
          />
        ))}
      </div>
      <div className="wt-container">
        {cards2.map((card, index) => (
          <Card
            key={index}
            imageUrl={card.imageUrl}
            link={card.link}
            text={card.text}
          />
        ))}
      </div>
    </div>
  );
}
