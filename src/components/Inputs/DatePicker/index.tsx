"use client";

import { LegacyRef, forwardRef } from "react";
import DatePickerComponent, {
  ReactDatePickerProps,
  registerLocale,
} from "react-datepicker";

import ptBR from "date-fns/locale/pt-BR";
import { twMerge } from "tailwind-merge";

import "react-datepicker/dist/react-datepicker.css";

registerLocale("pt-BR", ptBR);

interface DatePickerProps extends ReactDatePickerProps {
  error?: boolean;
  errorMessage?: string;
}

const DatePicker = (
  {
    className = "",
    error = false,
    errorMessage = "",
    ...rest
  }: DatePickerProps,
  ref: LegacyRef<HTMLInputElement> | undefined
) => {
  const datePickerClassName = twMerge(
    "w-full rounded-lg border border-gray-primary p-2 text-sm font-normal text-gray-dark placeholder-black placeholder-opacity-20 outline-none transition-all focus:ring-1 focus:ring-primary",
    error ? "border-red-primary" : "",
    className
  );

  return (
    <div className="flex flex-col">
      <DatePickerComponent
        {...rest}
        className={datePickerClassName}
        locale="pt-BR"
        dateFormat="dd/MM/yyyy"
        enableTabLoop={false}
      />

      {error && errorMessage && (
        <small className="text-red-primary mt-1">{errorMessage}</small>
      )}
    </div>
  );
};

export default forwardRef(DatePicker);
