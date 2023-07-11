"use client";

import Button from "components/Button";
import CurrencyInput from "components/Inputs/CurrencyInput";
import DatePicker from "components/Inputs/DatePicker";
import Input from "components/Inputs/Input";

const Hero = () => {
  return (
    <section className="bg-hero bg-cover bg-center bg-no-repeat p-5 pb-0 lg:py-28">
      <h1 className="text-xl font-semibold mb-4 text-center lg:text-[40px] lg:mb-12">
        Encontre sua próxima{" "}
        <span className="text-purple-primary">viagem!</span>
      </h1>

      <form className="flex flex-col gap-4 lg:flex-row lg:bg-purple-light max-w-[938px] lg:mx-auto lg:p-4 lg:rounded-lg">
        <Input placeholder="Onde você quer ir?" />

        <div className="flex gap-4">
          <DatePicker onChange={() => {}} placeholderText="Data de ida" />

          <CurrencyInput placeholder="Orçamento" />
        </div>

        <Button className="lg:min-w-[210px]">Pesquisar</Button>
      </form>
    </section>
  );
};

export default Hero;
