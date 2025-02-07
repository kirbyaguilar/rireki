import {
  Path,
  UseFormRegister,
  FieldValues,
  DeepMap,
  FieldError,
} from "react-hook-form";
import { Select, SelectProps } from "./Select";
import { ErrorMessage } from "@hookform/error-message";

export type FormSelectProps<TFormValues extends FieldValues> = {
  name: Path<TFormValues>;
  outerDivClassName?: string;
  innerDivClassName?: string;
  selectClassName?: string;
  register?: UseFormRegister<TFormValues>;
  errors?: Partial<DeepMap<TFormValues, FieldError>>;
  isErrorMessageDisplayed?: boolean; // use ONLY in cases where there are no error messages possible, or you want to display all of a form's errors away from individual inputs
} & Omit<SelectProps, "name">;

const FormSelect = <TFormValues extends FieldValues>({
  outerDivClassName,
  innerDivClassName,
  selectClassName,
  name,
  label,
  register,
  errors,
  isErrorMessageDisplayed = true,
  ...props
}: FormSelectProps<TFormValues>): JSX.Element => {
  return (
    <div className={outerDivClassName}>
      <div className={innerDivClassName}>
        <label htmlFor={name} className="text-xs">
          {label}
          {props.required && "*"}
        </label>
        <Select
          name={name}
          label={label}
          className={selectClassName}
          {...props}
          {...(register && register(name))}
        >
          {props.children}
        </Select>
      </div>
      {isErrorMessageDisplayed && (
        <ErrorMessage
          errors={errors}
          name={name as any}
          render={({ message }) => (
            <p className="text-xs text-red-500">{message}</p>
          )}
        />
      )}
    </div>
  );
};

export default FormSelect;
