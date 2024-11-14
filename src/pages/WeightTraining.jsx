import Card from "../Card";
import "./training-type.css";
export default function WeightTraining() {
  const cards = [
    {
      imageUrl: "/images/bench-press.webp",
      link: "/BenchPress",
      text: "Bench Press",
    },
    {
      imageUrl: "/images/squat.webp",
      link: "/BarbellSquat",
      text: "Barbell Squat",
    },
    {
      imageUrl: "/images/biceps.webp",
      link: "/BicepCurl",
      text: "Bicep Curls",
    },
  ];

  const cards2 = [
    {
      imageUrl: "/images/tri2.webp",
      link: "/CableTricepPulldowns",
      text: "Cable Tricep Pulldowns",
    },
    {
      imageUrl: "/images/shoulder-press.webp",
      link: "/ShoulderPress",
      text: "Shoulder Press",
    },
    {
      imageUrl: "/images/lunges4.webp",
      link: "/WeightedLunges",
      text: "Weighted Lunges",
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
