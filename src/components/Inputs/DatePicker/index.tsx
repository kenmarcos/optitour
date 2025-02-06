"use client";

import { LegacyRef, forwardRef } from "react";
import ReactDatePickerComponent, {
  DatePickerProps as ReactDatePickerProps,
  registerLocale,
} from "react-datepicker";

import ptBR from "date-fns/locale/pt-BR";
import "react-datepicker/dist/react-datepicker.css";
import { twMerge } from "tailwind-merge";

registerLocale("pt-BR", ptBR);

type DatePickerProps = ReactDatePickerProps & {
  error?: boolean;
  errorMessage?: string;
};

const DatePicker = (
  { className, error, errorMessage, ...rest }: DatePickerProps,
  ref: LegacyRef<HTMLInputElement> | undefined
) => {
  const datePickerClassName = twMerge(
    "rounded-lg border border-gray-300 bg-white p-2 text-sm font-normal text-primaryDarker placeholder-black placeholder-opacity-20 outline-none transition-all focus:ring-1 focus:ring-primary",
    error ? "border-red-500" : "",
    className
  );

  return (
    <div className="flex w-full flex-col">
      <ReactDatePickerComponent
        className={datePickerClassName}
        locale="pt-BR"
        dateFormat="dd/MM/yyyy"
        enableTabLoop={false}
        {...rest}
      />

      {error && errorMessage && (
        <small className="text-red-primary mt-1">{errorMessage}</small>
      )}
    </div>
  );
};

export default forwardRef(DatePicker);
