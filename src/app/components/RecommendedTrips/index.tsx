import TripItem from "components/TripItem";

import SectionHeader from "../SectionHeader";

import { prisma } from "lib/prisma";

const getRecommendedTrips = async () => {
  const recommendedTrips = await prisma.trip.findMany({
    where: {
      recommended: true,
    },
  });

  return recommendedTrips;
};

const RecommendedTrips = async () => {
  const data = await getRecommendedTrips();

  return (
    <section className="p-5 pb-0">
      <SectionHeader title="Destinos recomendados" />

      <ul className="flex justify-center gap-10 flex-wrap lg:justify-between">
        {data.map((trip) => (
          <li key={trip.id} className="basis-[280px]">
            <TripItem trip={trip} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RecommendedTrips;
