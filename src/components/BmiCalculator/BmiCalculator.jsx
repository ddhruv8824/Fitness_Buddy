import React, { useState, useEffect } from 'react';
import './BmiCalculator.css';

const BmiCalculator = () => {
  const [height, setHeight] = useState(180);
  const [weight, setWeight] = useState(75);
  const [bmi, setBmi] = useState(0);
  const [bmiCategory, setBmiCategory] = useState(1); // Default to Normal

  useEffect(() => {
    calculateBmi(height, weight);
  }, [height, weight]);

  const calculateBmi = (h, w) => {
    const bmiValue = parseFloat(w / (h / 100) ** 2).toFixed(2);
    setBmi(bmiValue);

    const categories = [
      [0, 18.49],
      [18.5, 24.99],
      [25, 29.99],
      [30, 34.99],
      [35, 39.99],
      [40, 100],
    ];
    const categoryIndex = categories.findIndex(
      (range) => range[0] <= bmiValue && bmiValue < range[1]
    );
    setBmiCategory(categoryIndex);
  };

  const formatHeight = (h) => {
    const inches = (0.393700787 * h).toFixed(0);
    const feet = Math.floor(inches / 12);
    const remainingInches = inches % 12;
    return `${h} cm / ${feet}' ${remainingInches}"`;
  };

  const formatWeight = (w) => {
    const pounds = (2.2046 * w).toFixed(2);
    return `${w} kg / ${pounds} lb`;
  };

  return (
    <div className='a-bmi'>
        <h3 id='TitleBMi'>Check Your BMI Body Mass Index For Free</h3>
    <form className="c-bmi">
      <label className="c-bmi__label">
        <strong>Height</strong>
        <input
          className="c-bmi__range"
          type="range"
          name="h"
          min="150"
          max="230"
          step="0.5"
          value={height}
          onChange={(e) => setHeight(e.target.valueAsNumber)}
        />
        <output name="ho">{formatHeight(height)}</output>
      </label>

      <label className="c-bmi__label">
        <strong>Weight</strong>
        <input
          className="c-bmi__range"
          type="range"
          name="w"
          min="35"
          max="200"
          step="0.1"
          value={weight}
          onChange={(e) => setWeight(e.target.valueAsNumber)}
        />
        <output name="wo">{formatWeight(weight)}</output>
      </label>

      <div className="c-bmi__result">
        Your BMI Is: <output name="r">{bmi}</output>
      </div>

      <div className="c-bmi__groups">
        <input type="radio" id="bmi-g0" name="g" readOnly checked={bmiCategory === 0} />
        <label htmlFor="bmi-g0">Underweight</label>
        <div className="c-bmi__group-text">
          The WHO regards a BMI of less than 18.5 as underweight and may indicate malnutrition, an eating disorder, or other health problems.
        </div>

        <input type="radio" id="bmi-g1" name="g" readOnly checked={bmiCategory === 1} />
        <label htmlFor="bmi-g1">Normal</label>
        <div className="c-bmi__group-text">
          A BMI between 18.5 and 25 is considered normal and healthy.
        </div>

        <input type="radio" id="bmi-g2" name="g" readOnly checked={bmiCategory === 2} />
        <label htmlFor="bmi-g2">Pre-obesity</label>
        <div className="c-bmi__group-text">
          People who fall into this category may be at risk of developing obesity.<br />This was earlier classified as "overweight".
        </div>

        <input type="radio" id="bmi-g3" name="g" readOnly checked={bmiCategory === 3} />
        <label htmlFor="bmi-g3">Obese I</label>
        <div className="c-bmi__group-text">
          People who have BMI equal or over 30 may have obesity, which is defined as an abnormal or excessive accumulation of fat that may harm health.
        </div>

        <input type="radio" id="bmi-g4" name="g" readOnly checked={bmiCategory === 4} />
        <label htmlFor="bmi-g4">Obese II</label>
        <div className="c-bmi__group-text">
          People who have BMI equal or over 30 may have obesity, which is defined as an abnormal or excessive accumulation of fat that may harm health.
        </div>

        <input type="radio" id="bmi-g5" name="g" readOnly checked={bmiCategory === 5} />
        <label htmlFor="bmi-g5">Obese III</label>
        <div className="c-bmi__group-text">
          People who have BMI equal or over 30 may have obesity, which is defined as an abnormal or excessive accumulation of fat that may harm health.
        </div>
      </div>
    </form>
    </div>
  );
};

export default BmiCalculator;
