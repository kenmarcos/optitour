"use client";

import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import TripInfo from "components/TripInfo";
import Divider from "components/TripInfo/Divider";

import { Trip } from "@prisma/client";
import { formatPrice } from "utils/format";

interface TripConfirmationProps {
  tripId: string;
}

const TripConfirmation = ({ tripId }: TripConfirmationProps) => {
  const [trip, setTrip] = useState<Trip>({} as Trip);
  const [totalPrice, setTotalPrice] = useState(0);

  const { status, data } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();

  const fetchTrip = useCallback(async () => {
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
    }
  }, [searchParams, tripId, router]);

  useEffect(() => {
    fetchTrip();
  }, [fetchTrip]);

  if (status === "unauthenticated") {
    router.push("/");
    return;
  }

  return (
    <section className="p-5 space-y-5">
      <h2 className="text-purple-dark font-semibold text-xl leading-8">
        Sua viagem
      </h2>

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
    </section>
  );
};

export default TripConfirmation;
