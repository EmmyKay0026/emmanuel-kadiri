import { cn } from "../../lib/utils";
import { InputProps } from "../../types";

const Input = ({
  className,
  min,
  type,
  placeholder,
  inputClassName,
  id,
  name,
  value,
  readOnly,
  required,
  onChange,
  autoComplete,
  label,
  htmlFor,
}: InputProps) => {
  return (
    <div className={cn("my-[16px]")}>
      <label
        className={cn(
          "text-black dark:text-white text-[1rem] md:text-[1.2rem]  font-monst",
          className
        )}
        htmlFor={htmlFor}
      >
        {label}
        <span className="text-red-600">*</span>
      </label>
      <input
        min={min}
        className={cn(
          "text-[.9rem] md:text-[1rem] outline-none border-b-[1.5px] rounded-[15px] border-solid text-black dark:text-white  border-secondary dark:border-accent w-full py-[10px] dark:placeholder:text-gray-400 placeholder:text-gray-600 ",
          inputClassName
        )}
        onChange={onChange}
        type={type}
        required={required}
        placeholder={placeholder}
        id={id}
        name={name}
        value={value}
        readOnly={readOnly}
        autoComplete={autoComplete}
      />
    </div>
  );
};
export default Input;
