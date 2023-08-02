"use client";

import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { HiArrowPath } from "react-icons/hi2";

import Button from "components/Button";
import TripInfo from "components/TripInfo";
import Divider from "components/TripInfo/Divider";

import { Trip } from "@prisma/client";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { formatPrice } from "utils/format";

interface TripConfirmationProps {
  tripId: string;
}

const TripConfirmation = ({ tripId }: TripConfirmationProps) => {
  const [trip, setTrip] = useState<Trip>({} as Trip);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const { status, data } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();

  const fetchTrip = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/trips/check", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tripId: tripId,
          startDate: searchParams.get("startDate"),
          endDate: searchParams.get("endDate"),
        }),
      });

      const data = await response.json();

      setTrip(data.trip);
      setTotalPrice(data.totalPrice);
    } catch (error) {
      console.log(error);
      router.push("/");
    } finally {
      setIsLoading(false);
    }
  }, [searchParams, tripId, router]);

  useEffect(() => {
    fetchTrip();
  }, [fetchTrip]);

  if (status === "unauthenticated") {
    router.push("/");
    return;
  }

  const startDate = new Date(searchParams.get("startDate") as string);
  const endDate = new Date(searchParams.get("endDate") as string);
  const guests = searchParams.get("guests");

  return (
    <section className="p-5 space-y-5 max-w-[505px] mx-auto">
      <h2 className="text-purple-dark font-semibold text-xl leading-8">
        Sua viagem
      </h2>

      {isLoading && (
        <div className="flex justify-center items-center h-56">
          <HiArrowPath size={80} className="text-purple-primary animate-spin" />
        </div>
      )}

      {!isLoading && (
        <>
          {/* CARD */}
          <TripInfo.Card>
            <TripInfo.Header
              tripImage={trip?.coverImage}
              tripName={trip?.name}
              tripCountryCode={trip?.countryCode}
              tripLocation={trip?.location}
            />

            <Divider />

            <TripInfo.Content>
              <h4 className="font-semibold">Informações do preço</h4>

              <div className="flex justify-between">
                <p>Total:</p>
                <p className="font-semibold">{formatPrice(totalPrice)}</p>
              </div>
            </TripInfo.Content>
          </TripInfo.Card>

          <div className="text-purple-dark leading-6 space-y-4">
            <div>
              <p>Data</p>
              <time>
                {format(startDate, "dd 'de' MMM", { locale: ptBR })} -{" "}
                {format(endDate, "dd 'de' MMM", { locale: ptBR })}
              </time>
            </div>

            <div>
              <p>Hóspedes</p>
              <p>
                {guests} hóspede{Number(guests) > 1 ? "s" : ""}
              </p>
            </div>
          </div>

          <Button className="w-full">Finalizar Compra</Button>
        </>
      )}
    </section>
  );
};

export default TripConfirmation;
