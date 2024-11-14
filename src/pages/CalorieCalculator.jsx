import { useState } from "react";
import "../pages/calorieCalculator.css";

export default function CalorieCalculator() {
  const [formData, setFormData] = useState({
    weight: "",
    age: "",
    height: "",
    sex: "",
  });

  let caloriesToConsume = 0;

  let heightInCm = 0;

  let weightInKg = 0;

  const [finalCalsToConsume, setFinalCalsToConsume] = useState("");

  const [sexOption, setSexOption] = useState("");

  const [energyExpenditureOption, setEnergyExpenditureOption] = useState("");

  const [weightUnitOption, setWeightUnitOption] = useState("");

  const [weightGoalOption, setWeightGoalOption] = useState("");

  const [heightUnitOption, setHeightUnitOption] = useState("");

  const handleChangeForInputs = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleHeightUnitChange = (e) => {
    setHeightUnitOption(e.target.value);
  };

  const handleWeightGoalOptionChange = (e) => {
    setWeightGoalOption(e.target.value);
  };

  const handleTdeeOptionChange = (e) => {
    setEnergyExpenditureOption(e.target.value);
  };

  const handleSexOptionChange = (e) => {
    setSexOption(e.target.value);
  };

  const handleWeightUnitChange = (e) => {
    setWeightUnitOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (weightUnitOption === "poundsOption") {
      const kg = parseFloat(formData.weight) / 2.205;
      console.log(kg);
      weightInKg = kg;
    }
    if (heightUnitOption === "footInchOption") {
      const heightArray = formData.height.split(/['"]/);
      const feet = parseFloat(heightArray[0]);
      const inches = parseFloat(heightArray[1]);
      const cm = 2.54 * feet * 12 + inches * 2.54;
      console.log(cm);
      heightInCm = cm;
    }

    let basalMetabolicRate;
    if (sexOption === "maleOption") {
      console.log("weightInKg" + weightInKg);
      console.log("heightInCm" + heightInCm);
      console.log(parseFloat(formData.age));
      let maleBmrCalculcation =
        10 * weightInKg + 6.25 * heightInCm - 5 * parseFloat(formData.age) + 5;
      basalMetabolicRate = maleBmrCalculcation.toFixed(2);
    } else if (sexOption === "femaleOption") {
      let femaleBmrCalculation =
        10 * weightInKg +
        6.25 * heightInCm -
        5 * parseFloat(formData.age) -
        161;
      basalMetabolicRate = femaleBmrCalculation.toFixed(2);
    } else {
      basalMetabolicRate = null;
    }
    console.log("BMR", basalMetabolicRate);

    let tdeeCalculation = 0;
    let tdee = 0;
    if (energyExpenditureOption === "sedentaryOption") {
      tdeeCalculation = basalMetabolicRate * 1.2;
    } else if (energyExpenditureOption === "lightOption") {
      tdeeCalculation = basalMetabolicRate * 1.375;
    } else if (energyExpenditureOption === "moderateOption") {
      tdeeCalculation = basalMetabolicRate * 1.55;
    } else if (energyExpenditureOption === "activeOption") {
      tdeeCalculation = basalMetabolicRate * 1.725;
    } else if (energyExpenditureOption === "superActiveOption") {
      tdeeCalculation = basalMetabolicRate * 1.9;
    }
    tdee = Number(tdeeCalculation.toFixed(2));
    console.log("TDEE", tdee);

    let caloriesToConsumeCalculation = 0;
    if (weightGoalOption === "gainHalf") {
      caloriesToConsumeCalculation = tdee + 500;
    } else if (weightGoalOption === "gainOne") {
      caloriesToConsumeCalculation = tdee + 1000;
    } else if (weightGoalOption === "gainOneHalf") {
      caloriesToConsumeCalculation = tdee + 1500;
    } else if (weightGoalOption === "gainTwo") {
      caloriesToConsumeCalculation = tdee + 2000;
    } else if (weightGoalOption === "loseHalf") {
      caloriesToConsumeCalculation = tdee - 500;
    } else if (weightGoalOption === "loseOne") {
      caloriesToConsumeCalculation = tdee - 1000;
    } else if (weightGoalOption === "loseOneHalf") {
      caloriesToConsumeCalculation = tdee - 1500;
    } else if (weightGoalOption === "loseTwo") {
      caloriesToConsumeCalculation = tdee - 2000;
    } else {
      caloriesToConsumeCalculation = tdee;
    }
    caloriesToConsume = Number(caloriesToConsumeCalculation.toFixed(0));
    console.log("Calories to consume:", caloriesToConsume);
    setFinalCalsToConsume(caloriesToConsume);
  };

  return (
    <>
      <div className="form-container">
        <h1 className="cch1">Calorie Calculator</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="cals-to-consume-display">
            <p className="cals-to-consume">
              Calories to Consume: {finalCalsToConsume}
            </p>
          </div>

          <div className="form-group">
            <label htmlFor="weight">Weight: </label>
            <input
              type="text"
              id="weight"
              name="weight"
              value={formData.weight}
              onChange={handleChangeForInputs}
              required
            />
            <select
              id="weightUnit"
              value={weightUnitOption}
              onChange={handleWeightUnitChange}
            >
              <option value="">--Select an Option--</option>
              <option value="kgOption">kg</option>
              <option value="poundsOption">lbs</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="age">Age: </label>
            <input
              type="text"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChangeForInputs}
              required
            />
            <span> years</span>
          </div>
          <div className="form-group">
            <label htmlFor="heightInput">Height: </label>
            <input
              type="text"
              id="heightInput"
              name="height"
              value={formData.height}
              onChange={handleChangeForInputs}
              placeholder={`Ex: 5'11"`}
              required
            />
            <select
              id="heightUnit"
              value={heightUnitOption}
              onChange={handleHeightUnitChange}
            >
              <option value="">--Select an Option--</option>
              <option value="footInchOption">Feet & Inches</option>
              <option value="cmOption">cm</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="sex">Sex: </label>
            <select id="sex" value={sexOption} onChange={handleSexOptionChange}>
              <option value="">--Select an Option--</option>
              <option value="maleOption">Male</option>
              <option value="femaleOption">Female</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="tdee">Exercise Level: </label>
            <select
              id="tdee"
              value={energyExpenditureOption}
              onChange={handleTdeeOptionChange}
            >
              <option value="">--Select an Option--</option>
              <option value="sedentaryOption">
                Sedentary (little to no exercise)
              </option>
              <option value="lightOption">
                Lightly active (light exercise 1-3 days a week)
              </option>
              <option value="moderateOption">
                Moderately active (moderate exercise 3-5 days a week)
              </option>
              <option value="activeOption">
                Very active (hard exercise 6-7 days a week)
              </option>
              <option value="superActiveOption">
                Super active (very hard exercise, physical job, or training
                twice a day)
              </option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="weeklyWeightGoal">Gain/Lose: </label>
            <select
              id="weeklyWeightGoal"
              value={weightGoalOption}
              onChange={handleWeightGoalOptionChange}
            >
              <option value="">--Select an Option--</option>
              <option value="gainHalf">Gain 0.5 lbs(0.23 kg) per week</option>
              <option value="gainOne">Gain 1 lbs(0.45 kg) per week</option>
              <option value="gainOneHalf">
                Gain 1.5 lbs(0.68 kg) per week
              </option>
              <option value="gainTwo">Gain 2 lbs(0.9 kg) per week</option>
              <option value="loseHalf">Lose 0.5 lbs(0.23 kg) per week</option>
              <option value="loseOne">Lose 1 lbs(0.45 kg) per week</option>
              <option value="loseOneHalf">
                Lose 1.5 lbs(0.68 kg) per week
              </option>
              <option value="loseTwo">Lose 2 lbs(0.9 kg) per week</option>
            </select>
          </div>
          <button type="submit" className="formSubmitButton">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
