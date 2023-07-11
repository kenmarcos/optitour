import TripDescription from "./components/TripDescription";
import TripHeader from "./components/TripHeader";
import TripHighlights from "./components/TripHighlights/indext";
import TripLocation from "./components/TripLocation";
import TripReservation from "./components/TripReservation";

import { prisma } from "lib/prisma";

interface TripDetailsProps {
  params: { tripId: string };
}

const getTripDetails = async (tripId: string) => {
  const trip = await prisma.trip.findUnique({
    where: {
      id: tripId,
    },
  });

  return trip;
};

const TripDetails = async ({ params }: TripDetailsProps) => {
  const data = await getTripDetails(params.tripId);

  if (!data) return null;

  return (
    <main className="container mx-auto">
      <TripHeader
        coverImage={data?.coverImage}
        imagesUrl={data?.imagesUrl}
        name={data?.name}
        countryCode={data.countryCode}
        location={data.location}
        pricePerDay={parseFloat(data.pricePerDay.toString())}
      />

      <TripReservation />

      <TripDescription />

      <TripHighlights />

      <TripLocation />
    </main>
  );
};

export default TripDetails;
