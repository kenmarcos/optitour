"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { HiArrowPath } from "react-icons/hi2";

import Button from "components/Button";

import UserReservationItem from "./components/UserReservationItem";

import { Trip, TripReservation } from "@prisma/client";

interface Reservation extends TripReservation {
  trip: Trip;
}
const MyTripReservations = () => {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();

  const { data } = useSession();

  const fetchMyReservations = useCallback(async () => {
    try {
      const response = await fetch(`/api/user/${data?.user.id}/reservations`);

      const dataResponse = await response.json();

      setReservations(dataResponse.reservations);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [data]);

  useEffect(() => {
    fetchMyReservations();
  }, [fetchMyReservations]);

  return (
    <section className="p-5 space-y-5">
      <h2 className="text-purple-dark font-semibold text-xl leading-8">
        Minhas viagens
      </h2>

      {isLoading && (
        <div className="flex justify-center items-center h-56">
          <HiArrowPath size={80} className="text-purple-primary animate-spin" />
        </div>
      )}

      {!isLoading && (
        <>
          {reservations?.length === 0 && (
            <>
              <p className="mt-4 text-gray-dark">Nenhuma viagem encontrada</p>
              <Button
                onClick={() => router.push("/")}
                className="w-full md:w-72"
              >
                Fazer reserva
              </Button>
            </>
          )}

          {reservations?.length > 0 && (
            <div className="gap-5 md:grid md:grid-cols-2 lg:grid-cols-3">
              {reservations.map((reservation) => (
                <UserReservationItem
                  key={reservation.id}
                  reservation={reservation}
                  setReservations={setReservations}
                />
              ))}
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default MyTripReservations;
