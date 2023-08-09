"use client";

import { LegacyRef, forwardRef } from "react";
import DatePickerComponent, {
  ReactDatePicker,
  ReactDatePickerProps,
  registerLocale,
} from "react-datepicker";
import { StrictModifierNames } from "react-popper";

import { useDatePicker } from "./useDatePicker";

import ptBR from "date-fns/locale/pt-BR";

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
  ref: LegacyRef<ReactDatePicker<StrictModifierNames, undefined>> | undefined
) => {
  const { datePickerClassName } = useDatePicker({ error, className });

  return (
    <div className="flex w-full flex-col">
      <DatePickerComponent
        {...rest}
        className={datePickerClassName}
        locale="pt-BR"
        dateFormat="dd/MM/yyyy"
        enableTabLoop={false}
        ref={ref}
      />

      {error && errorMessage && (
        <small className="text-red-primary mt-1">{errorMessage}</small>
      )}
    </div>
  );
};

export default forwardRef(DatePicker);
