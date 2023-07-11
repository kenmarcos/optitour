import Image from "next/image";
import React from "react";

import Button from "components/Button";

const TripLocation = () => {
  return (
    <section className="p-5 text-purple-dark lg:p-0">
      <h2 className="font-semibold mb-2 lg:text-xl">Localização</h2>

      <div className="h-[246px] relative rounded overflow-hidden mb-2 lg:h-[480px]">
        <Image
          src="/map-mobile.png"
          alt="Mapa para mobile"
          fill
          className="object-cover lg:hidden"
        />

        <Image
          src="/map-desktop.png"
          alt="Mapa para desktop"
          fill
          className="object-cover hidden lg:block"
        />
      </div>

      <h3 className="mb-2 text-sm font-semibold lg:text-lg">
        Paraty, Rio de Janeiro, Brasil
      </h3>

      <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-10 lg:items-center">
        <p className="mb-5 text-sm lg:text-base lg:flex-1 lg:mb-0">
          Paraty, Rio de Janeiro, é uma encantadora cidade histórica com
          arquitetura colonial preservada, praias paradisíacas e uma atmosfera
          cultural única, perfeita para quem busca história, natureza e belas
          paisagens.
        </p>

        <div className="lg:flex-1">
          <Button variant="outlined" className="w-full">
            Ver no Google Maps
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TripLocation;
