import "./home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Workouts");
  };

  return (
    <>
      <div className="container">
        <h1>Start Your Fit Journey!</h1>
        <h2 className="home-p">
          FitLife Hub is a comprehensive fitness platform designed to help you
          achieve your health goals through a variety of workout options and
          tools. Whether you want to build strength, lose weight, or improve
          your flexibility, FitLife Hub offers weight training exercises, cardio
          routines, and mobility workouts suitable for all fitness levels. The
          platform also includes a calorie tracker tool to guide your
          nutritional intake, whether your goal is weight loss, muscle gain, or
          maintenance. With the combination of structured exercise routines and
          nutrition tracking, FitLife Hub provides everything you need to stay
          fit and healthy in one place.
        </h2>

        <button onClick={handleClick}>View Workouts</button>
        <h2 className="home-p">
          Dont forget to check out the Calorie Calculator Tool. Exercise is
          great for burning calories however calorie intake from food is also
          very important to track for better results!
        </h2>
      </div>
    </>
  );
}
