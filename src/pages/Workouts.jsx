import { Link } from "react-router-dom";
import "./workouts.css";

export default function Workouts() {
  return (
    <>
      <div className="workouts-container">
        <div className="whole">
          <h1>Workouts</h1>
          <Link className="method-link" to="/WeightTraining">
            <div className="weight-training training-card">
              <h2 className="training-method-title">Weight-Training</h2>
            </div>
          </Link>
          <Link className="method-link" to="/Cardio">
            <div className="cardio training-card">
              <h2 className="training-method-title">Cardio</h2>
            </div>
          </Link>
          <Link className="method-link" to="/Mobility">
            <div className="mobility training-card">
              <h2 className="training-method-title">Mobility</h2>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
