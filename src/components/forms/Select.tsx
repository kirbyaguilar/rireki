import { forwardRef, DetailedHTMLProps, SelectHTMLAttributes } from "react";
import classNames from "classnames";

export type SelectProps = {
  id: string;
  name: string;
  label: string;
  className?: string;
} & DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

export const Select: React.FC<SelectProps> = forwardRef<
  HTMLSelectElement,
  SelectProps
>(({ id, name, label, className = "", ...props }, ref) => {
  return (
    <select
      id={id}
      ref={ref}
      name={name}
      aria-label={label}
      className={classNames(
        "block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition",
        className,
      )}
      {...props}
    >
      {props.children}
    </select>
  );
});
