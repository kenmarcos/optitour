"use client";

import React from "react";

import Button from "components/Button";
import DatePicker from "components/Inputs/DatePicker";
import Input from "components/Inputs/Input";

const TripReservation = () => {
  return (
    <section className="p-5 pb-10">
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

        <hr className="border-gray-primary mt-6" />
      </form>
    </section>
  );
};

export default TripReservation;
