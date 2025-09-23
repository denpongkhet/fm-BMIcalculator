interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  unit: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({
  label,
  name,
  type = "text",
  unit,
  onChange,
}: InputFieldProps) => {
  return (
    <div className="flex flex-col ">
      <label htmlFor={name}>{label}</label>
      <div className="border text-preset-4 mt-2 p-4 border-grey-500 rounded-xl flex items-center justify-between has-focus:border-blue-500 hover:border-blue-500">
        <input
          type={type}
          id={name}
          name={name}
          aria-label={`${name} unit ${unit}`}
          placeholder="0"
          onChange={onChange}
          className="w-1/2 no-spinner focus:outline-none  "
        />
        <span className="text-blue-500">{unit}</span>
      </div>
    </div>
  );
};
export default InputField;
