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
    <>
      <TripHeader
        coverImage={data.coverImage}
        imagesUrl={data.imagesUrl}
        name={data.name}
        countryCode={data.countryCode}
        location={data.location}
        pricePerDay={parseFloat(data.pricePerDay.toString())}
      />

      <div className="lg:flex lg:mt-10 lg:gap-20">
        <div className="lg:order-2">
          <TripReservation
            tripId={data.id}
            pricePerDay={parseFloat(data.pricePerDay.toString())}
            tripStartDate={data.startDate}
            tripEndDate={data.endDate}
            maxGuests={data.maxGuests}
          />
        </div>

        <div className="lg:order-1">
          <TripDescription description={data.description} />

          <TripHighlights highlights={data.highlights} />
        </div>
      </div>

      <hr className="hidden border-gray-primary my-5 lg:block" />

      <TripLocation />
    </>
  );
};

export default TripDetails;
