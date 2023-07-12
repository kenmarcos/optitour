"use client";

import { Controller } from "react-hook-form";

import Button from "components/Button";
import DatePicker from "components/Inputs/DatePicker";
import Input from "components/Inputs/Input";

import { useTripReservation } from "./useTripReservation";

import { differenceInDays } from "date-fns";
import { formatPrice } from "utils/format";

interface TripReservationProps {
  tripId: string;
  pricePerDay: number;
  tripStartDate: Date;
  tripEndDate: Date;
  maxGuests: number;
}

const TripReservation = ({
  tripId,
  pricePerDay,
  tripStartDate,
  tripEndDate,
  maxGuests,
}: TripReservationProps) => {
  const {
    register,
    handleSubmit,
    control,
    errors,
    submitForm,
    startDateSelected,
    endDateSelected,
  } = useTripReservation(maxGuests);

  return (
    <section className="p-5 pb-10 lg:pb-5 lg:w-[370px] lg:shadow lg:border lg:border-gray-primary lg:rounded-lg lg:sticky lg:top-0">
      <h2 className="text-gray-dark mb-4">
        <span className="text-purple-dark text-xl font-semibold">
          {formatPrice(pricePerDay)}
        </span>{" "}
        por dia
      </h2>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit(submitForm)}>
        <div className="flex gap-4">
          <Controller
            name="startDate"
            control={control}
            render={({ field }) => (
              <DatePicker
                placeholderText="Data de início"
                onChange={field.onChange}
                selected={field.value}
                locale={"pt-BR"}
                error={!!errors.startDate}
                errorMessage={errors.startDate?.message}
                minDate={tripStartDate}
              />
            )}
          />

          <Controller
            name="endDate"
            control={control}
            render={({ field }) => (
              <DatePicker
                placeholderText="Data final"
                onChange={field.onChange}
                selected={field.value}
                locale={"pt-BR"}
                error={!!errors.endDate}
                errorMessage={errors.endDate?.message}
                minDate={endDateSelected || tripStartDate}
                maxDate={tripEndDate}
              />
            )}
          />
        </div>

        <Input
          {...register("guests")}
          type="number"
          error={!!errors.guests}
          errorMessage={errors.guests?.message}
          placeholder="Quantidade de hóspedes"
        />

        <div className="flex justify-between text-sm text-purple-dark font-medium">
          <p>
            Total (
            {startDateSelected &&
              endDateSelected &&
              differenceInDays(endDateSelected, startDateSelected)}{" "}
            dias):
          </p>
          <p>
            {startDateSelected && endDateSelected
              ? formatPrice(
                  differenceInDays(endDateSelected, startDateSelected) *
                    pricePerDay
                )
              : "R$ 0,00"}
          </p>
        </div>

        <Button type="submit" className="w-full">
          Reservar agora
        </Button>

        <hr className="border-gray-primary mt-6 lg:hidden" />
      </form>
    </section>
  );
};

export default TripReservation;
