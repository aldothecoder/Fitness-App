import Card from "../Card";
import "./training-type.css";
export default function Mobility() {
  const cards = [
    {
      imageUrl: "/images/butterflystretch.webp",
      link: "/ButterflyStretch",
      text: "Butterfly Stretch",
    },
    {
      imageUrl: "/images/childspose.webp",
      link: "/ChildsPose",
      text: "Child's Pose",
    },
    {
      imageUrl: "/images/deepsquat.webp",
      link: "/DeepSquat",
      text: "Deep Squat",
    },
  ];

  const cards2 = [
    {
      imageUrl: "/images/hipcircles.webp",
      link: "/HipCircles",
      text: "Hip Circles",
    },
    {
      imageUrl: "/images/legswing.webp",
      link: "/LegSwing",
      text: "Leg Swing",
    },
    {
      imageUrl: "/images/spinaltwist.webp",
      link: "/SpinalTwist",
      text: "Spinal Twist",
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
