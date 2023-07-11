import React from "react";

import Button from "components/Button";

const TripLocation = () => {
  return (
    <section className="p-5 text-purple-dark">
      <h2 className="font-semibold mb-2">Localização</h2>

      <div className="w-[353px] h-[246px] bg-red-500 mb-5"></div>

      <h3 className="mb-2 text-sm font-semibold">
        Paraty, Rio de Janeiro, Brasil
      </h3>

      <p className="mb-5 text-xs">
        Paraty, Rio de Janeiro, é uma encantadora cidade histórica com
        arquitetura colonial preservada, praias paradisíacas e uma atmosfera
        cultural única, perfeita para quem busca história, natureza e belas
        paisagens.
      </p>

      <Button variant="outlined" className="w-full">
        Ver no Google Maps
      </Button>
    </section>
  );
};

export default TripLocation;
