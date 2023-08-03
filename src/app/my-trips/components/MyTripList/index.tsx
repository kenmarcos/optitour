"use client";

import { useCallback, useEffect } from "react";

import Button from "components/Button";
import TripInfo from "components/TripInfo";

const MyTripReservations = () => {
  const fetchReservations = useCallback(async () => {
    try {
      const response = await fetch("/api/trips");
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {}, []);

  return (
    <section className="p-5">
      <h2 className="text-purple-dark font-semibold text-xl leading-8">
        Minhas viagens
      </h2>

      <TripInfo.Card>
        {/* <TripInfo.Header
              tripImage={trip?.coverImage}
              tripName={trip?.name}
              tripCountryCode={trip?.countryCode}
              tripLocation={trip?.location}
            /> */}

        <TripInfo.Divider />

        <TripInfo.Content>
          <h4 className="font-semibold">Sobre a viagem</h4>

          <p className="mt-4">Data</p>
          <time>12 de Jul - 16 de Jul</time>

          <p className="mt-4">Hóspedes</p>
          <p>2 hóspedes </p>
        </TripInfo.Content>

        <TripInfo.Divider />

        <TripInfo.Content>
          <h4 className="font-semibold">Informações do pagamento</h4>

          <div className="flex justify-between mt-4">
            <p>Total:</p>
            <p className="font-semibold">R$ 200,00</p>
          </div>

          <Button variant="danger" className="w-full mt-4">
            Cancelar
          </Button>
        </TripInfo.Content>
      </TripInfo.Card>
    </section>
  );
};

export default MyTripReservations;
