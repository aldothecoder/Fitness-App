import Card from "../Card";
import "./training-type.css";
export default function Mobility() {
  const cards = [
    {
      imageUrl: "/Fitness-App/images/butterflystretch.webp",
      link: "/ButterflyStretch",
      text: "Butterfly Stretch",
    },
    {
      imageUrl: "/Fitness-App/images/childspose.webp",
      link: "/ChildsPose",
      text: "Child's Pose",
    },
    {
      imageUrl: "/Fitness-App/images/deepsquat.webp",
      link: "/DeepSquat",
      text: "Deep Squat",
    },
  ];

  const cards2 = [
    {
      imageUrl: "/Fitness-App/images/hipcircles.webp",
      link: "/HipCircles",
      text: "Hip Circles",
    },
    {
      imageUrl: "/Fitness-App/images/legswing.webp",
      link: "/LegSwing",
      text: "Leg Swing",
    },
    {
      imageUrl: "/Fitness-App/images/spinaltwist.webp",
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
