"use client";

import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { HiArrowPath } from "react-icons/hi2";

import TripItem from "components/TripItem";

import { Trip } from "@prisma/client";

const TripsSearch = () => {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const searchParams = useSearchParams();

  const text = searchParams.get("text");
  const startDate = searchParams.get("startDate");
  const budget = searchParams.get("budget");

  const fetchTrips = useCallback(async () => {
    try {
      const response = await fetch(
        `/api/trips/search?text=${text}${
          startDate ? `&startDate=${startDate}` : ""
        }${budget ? `&budget=${budget}` : ""}`
      );

      const data = await response.json();

      setTrips(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [text, startDate, budget]);

  useEffect(() => {
    fetchTrips();
  }, [fetchTrips]);

  return (
    <section className="p-5 space-y-5">
      <div className="text-center md:text-start">
        <h2 className="text-purple-dark font-semibold text-xl leading-8">
          Hospedagens encontradas
        </h2>

        <h3 className="text-gray-dark mt-4">
          Listamos os melhores locais exclusivamente para você!
        </h3>
      </div>

      {isLoading && (
        <div className="flex justify-center items-center h-56">
          <HiArrowPath size={80} className="text-purple-primary animate-spin" />
        </div>
      )}

      {!isLoading && (
        <>
          {trips?.length === 0 && (
            <p className="mt-4 text-gray-dark">Nenhuma viagem encontrada</p>
          )}

          <ul className="md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-4 xl:grid-cols-5">
            {trips?.length > 0 &&
              trips.map((trip) => (
                <li key={trip.name}>{<TripItem trip={trip} />}</li>
              ))}
          </ul>
        </>
      )}
    </section>
  );
};

export default TripsSearch;
