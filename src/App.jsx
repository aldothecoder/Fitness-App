import Navbar from "./NavBar";
import Home from "./pages/Home";
import CalorieCalculator from "./pages/CalorieCalculator";
import Workouts from "./pages/Workouts";
import { Routes, Route } from "react-router-dom";
import WeightTraining from "./pages/WeightTraining";
import BenchPress from "./pages/BenchPress";
import BarbellSquat from "./pages/BarbellSquat";
import BicepCurl from "./pages/BicepCurl";
import CableTricepPulldowns from "./pages/CableTricepPulldowns";
import Cardio from "./pages/Cardio";
import ShoulderPress from "./pages/ShoulderPress";
import StairClimber from "./pages/StairClimber";
import WeightedLunges from "./pages/WeightedLunges";
import Swimming from "./pages/Swimming";
import Cycling from "./pages/Cycling";
import Boxing from "./pages/Boxing";
import Running from "./pages/Running";
import JumpRoping from "./pages/JumpRoping";
import Mobility from "./pages/Mobility";
import LegSwing from "./pages/LegSwing";
import ButterflyStretch from "./pages/ButterflyStretch";
import HipCircles from "./pages/HipCircles";
import DeepSquat from "./pages/DeepSquat";
import ChildsPose from "./pages/ChildsPose";
import SpinalTwist from "./pages/SpinalTwist";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="p-container">
        <Routes>
          <Route path="/Fitness-App/" element={<Home />} />
          <Route path="/Workouts" element={<Workouts />} />
          <Route path="/CalorieCalculator" element={<CalorieCalculator />} />
          <Route path="/WeightTraining" element={<WeightTraining />} />
          <Route path="/Cardio" element={<Cardio />} />
          <Route path="/BenchPress" element={<BenchPress />} />
          <Route path="/StairClimber" element={<StairClimber />} />
          <Route path="/BarbellSquat" element={<BarbellSquat />} />
          <Route path="/BicepCurl" element={<BicepCurl />} />
          <Route path="/Swimming" element={<Swimming />} />
          <Route path="/Cycling" element={<Cycling />} />
          <Route path="/HipCircles" element={<HipCircles />} />
          <Route path="/Boxing" element={<Boxing />} />
          <Route path="/Running" element={<Running />} />
          <Route path="/JumpRoping" element={<JumpRoping />} />
          <Route path="/DeepSquat" element={<DeepSquat />} />
          <Route path="/Mobility" element={<Mobility />} />
          <Route path="/ChildsPose" element={<ChildsPose />} />
          <Route path="/LegSwing" element={<LegSwing />} />
          <Route path="/SpinalTwist" element={<SpinalTwist />} />
          <Route path="/ButterflyStretch" element={<ButterflyStretch />} />
          <Route
            path="/CableTricepPulldowns"
            element={<CableTricepPulldowns />}
          />
          <Route path="/ShoulderPress" element={<ShoulderPress />} />
          <Route path="/WeightedLunges" element={<WeightedLunges />} />
        </Routes>
      </div>
    </>
  );
}
