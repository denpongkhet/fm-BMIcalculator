interface UnitsRadioProps {
  unit: string;
  setUnit: React.Dispatch<React.SetStateAction<string>>;
}

const UnitsRadio = ({ unit, setUnit }: UnitsRadioProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUnit(value);
  };
  return (
    <fieldset className="flex items-center gap-8">
      <legend className="sr-only">Select your unit </legend>
      <label className="flex items-center gap-4 has-[:focus-visible]:outline has-[:focus-visible]:outline-blue-500">
        <input
          type="radio"
          name="unit"
          value={"metric"}
          checked={unit === "metric"}
          onChange={handleChange}
          className="sr-only peer"
        />
        <span className="w-8 h-8 flex items-center justify-center border border-grey-500 rounded-full peer-[:checked]:bg-blue-100 peer-[:checked]:border-blue-100 peer-[:checked]:[&>span]:block peer-[:hover]:border-blue-500">
          <span className="w-4 h-4 bg-blue-500 rounded-full hidden" />
        </span>
        <span className="text-preset-6-reg font-semibold">Metric</span>
      </label>

      <label className="flex items-center gap-4 mx-auto has-[:focus-visible]:outline has-[:focus-visible]:outline-blue-500">
        <input
          type="radio"
          name="unit"
          value={"imperial"}
          checked={unit === "imperial"}
          onChange={handleChange}
          className="sr-only peer"
        />
        <span className="w-8 h-8 flex items-center justify-center border border-grey-500 rounded-full peer-[:checked]:bg-blue-100 peer-[:checked]:border-blue-100 peer-[:checked]:[&>span]:block peer-[:hover]:border-blue-500  ">
          <span className="w-4 h-4 bg-blue-500 rounded-full hidden" />
        </span>
        <span className="text-preset-6-reg font-semibold">Imperial</span>
      </label>
    </fieldset>
  );
};
export default UnitsRadio;
