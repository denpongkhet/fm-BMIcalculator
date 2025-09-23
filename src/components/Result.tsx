import { useEffect, useState } from "react";

interface bodyMassType {
  weight: number;
  height: number;
}
interface impBodyMassType {
  heightFt: number;
  heightIn: number;
  weightSt: number;
  weightLbs: number;
}
interface idealWeightType {
  min: number;
  max: number;
}

interface ResultProps {
  bodyMass: bodyMassType;
  impBodyMass: impBodyMassType;
  unit: string;
}

const Result = ({ bodyMass, impBodyMass, unit }: ResultProps) => {
  const { weight, height } = bodyMass;
  const { weightSt, weightLbs, heightFt, heightIn } = impBodyMass;
  const [bmi, setBmi] = useState<number>(0);
  const [idealWeight, setIdealWeight] = useState<idealWeightType>({
    min: 0,
    max: 0,
  });

  const bmiCal = () => {
    if (unit === "metric") {
      const resutl = weight / (height / 100) ** 2;
      setBmi(resutl);
    } else if (unit === "imperial") {
      const inch = heightFt * 12 + heightIn;
      const pound = weightSt * 14 + weightLbs;
      const result = (pound / inch ** 2) * 703;
      setBmi(result);
    }
  };

  const idealWeightCal = () => {
    if (unit === "metric") {
      const minResult = 18.4 * (height / 100) ** 2;
      const maxResult = 24 * (height / 100) ** 2;

      setIdealWeight({
        min: minResult,
        max: maxResult,
      });
    } else if (unit === "imperial") {
      const inch = heightFt * 12 + heightIn;
      const minResult = (18.4 * inch ** 2) / 703;
      const maxResult = (24 * inch ** 2) / 703;

      setIdealWeight({
        min: minResult,
        max: maxResult,
      });
    }
  };

  useEffect(() => {
    bmiCal();
    idealWeightCal();
  }, [bodyMass, impBodyMass]);

  return (
    <div className="p-8 bg-blue-500 rounded-2xl md:rounded-l-r-full text-white">
      {bmi === 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <h3 className="text-preset-6 font-semibold mb-2">Your BMI is...</h3>
            <span className="text-preset-1-2">{bmi.toFixed(1)}</span>
          </div>
          <p className="text-preset-7-reg mt-6">
            Your BMI suggests you're a healthy weight. Your ideal weight is
            between{" "}
            <span className="text-preset-7">
              {idealWeight.min.toFixed(1)}
              {unit === "metric" ? "kgs" : "lbs"}. -{" "}
              {idealWeight.max.toFixed(1)}
              {unit === "metric" ? "kgs" : "lbs"}.
            </span>
          </p>
        </div>
      ) : (
        <>
          <h3 className="text-preset-6 font-semibold mb-2">Welcome!</h3>
          <p className="text-preset-7-reg mt-6">
            Enter your height and weight and you'll see your BMI result here
          </p>
        </>
      )}
    </div>
  );
};
export default Result;
