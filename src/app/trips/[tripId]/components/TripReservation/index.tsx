"use client";

import React from "react";

import Button from "components/Button";
import DatePicker from "components/Inputs/DatePicker";
import Input from "components/Inputs/Input";

import { formatPrice } from "utils/format";

interface TripReservationProps {
  tripId: string;
  pricePerDay: number;
  startDate: Date;
  endDate: Date;
  maxGuests: number;
}

const TripReservation = ({
  tripId,
  pricePerDay,
  startDate,
  endDate,
  maxGuests,
}: TripReservationProps) => {
  return (
    <section className="p-5 pb-10 lg:pb-5 lg:w-[370px] lg:shadow lg:border lg:border-gray-primary lg:rounded-lg lg:sticky lg:top-0">
      <h2 className="text-gray-dark mb-4">
        <span className="text-purple-dark text-xl font-semibold">
          {formatPrice(pricePerDay)}
        </span>{" "}
        por dia
      </h2>

      <form className="flex flex-col gap-4">
        <div className="flex gap-4">
          <DatePicker onChange={() => {}} placeholderText="Data de início" />
          <DatePicker onChange={() => {}} placeholderText="Data final" />
        </div>

        <Input placeholder="Quantidade de hóspedes" />

        <div className="flex justify-between text-sm text-purple-dark font-medium">
          <p>Total (7 noites)</p>
          <p>R$ 2.660,00</p>
        </div>

        <Button className="w-full">Reservar agora</Button>

        <hr className="border-gray-primary mt-6 lg:hidden" />
      </form>
    </section>
  );
};

export default TripReservation;
