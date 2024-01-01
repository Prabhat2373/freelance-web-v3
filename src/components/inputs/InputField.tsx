interface InputFieldProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  icon?: any;
  label?: string;
  error?: string;
  type?: string;
}

const InputField = ({ icon, error, type, ...props }: InputFieldProps) => {
  // console.log("errorrrr", error);
  return (
    <>
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
      <div className="flex items-center py-2 px-4 rounded-lg border border-gray-300">
        <span className="px-2">{icon}</span>
        <input
          {...props}
          type={type}
          placeholder={props.label ? props.label : props.placeholder}
          className="flex-grow bg-transparent outline-none"
        />
      </div>

      {/* {error && <span className="text-red-500">{error}</span>} */}
    </>
  );
};

export default InputField;
