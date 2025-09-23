import { useState } from "react";
import InputField from "./InputField";
import Result from "./Result";
import UnitsRadio from "./UnitsRadio";

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

const BMICalculator = () => {
  const [bodyMass, setBodyMass] = useState<bodyMassType>({
    weight: 0,
    height: 0,
  });
  const [impBodyMass, setImpBodyMass] = useState<impBodyMassType>({
    heightFt: 0,
    heightIn: 0,
    weightSt: 0,
    weightLbs: 0,
  });

  const [unit, setUnit] = useState<string>("metric");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (unit === "metric") {
      setBodyMass((prev) => ({ ...prev, [name]: Number(value) }));
    } else if (unit === "imperial") {
      setImpBodyMass((prev) => ({ ...prev, [name]: Number(value) }));
    }
  };

  return (
    <form className="text-blue-900 bg-white flex flex-col gap-6 rounded-2xl mx-auto p-6 shadow-1">
      <h2 className="text-preset-4">Enter your details below</h2>
      <UnitsRadio unit={unit} setUnit={setUnit} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {unit === "metric" ? (
          <>
            <InputField
              label="Height"
              name="height"
              type="number"
              unit="cm"
              onChange={handleChange}
            />
            <InputField
              label="Weight"
              name="weight"
              type="number"
              unit="kg"
              onChange={handleChange}
            />
          </>
        ) : (
          <>
            <div className=" col-span-2 flex items-end gap-6">
              <InputField
                label="Height"
                name="heightFt"
                type="number"
                unit="ft"
                onChange={handleChange}
              />
              <InputField
                label=""
                name="heightIn"
                type="number"
                unit="in"
                onChange={handleChange}
              />
            </div>
            <div className=" col-span-2 flex items-end gap-6">
              <InputField
                label="Weight"
                name="weightSt"
                type="number"
                unit="st"
                onChange={handleChange}
              />
              <InputField
                label=""
                name="weightLbs"
                type="number"
                unit="lbs"
                onChange={handleChange}
              />
            </div>
          </>
        )}
      </div>
      <Result bodyMass={bodyMass} impBodyMass={impBodyMass} unit={unit} />
    </form>
  );
};
export default BMICalculator;
