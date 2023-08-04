import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import UserReservationItem from "./components/UserReservationItem";

import { authOptions } from "app/api/auth/[...nextauth]/route";
import { prisma } from "lib/prisma";

const MyTripReservations = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  const reservations = await prisma.tripReservation.findMany({
    where: {
      userId: session.user.id,
    },
    include: {
      trip: true,
    },
  });

  return (
    <section className="p-5">
      <h2 className="text-purple-dark font-semibold text-xl leading-8">
        Minhas viagens
      </h2>

      {!reservations.length && (
        <p className="mt-4 text-gray-dark">Nenhuma viagem encontrada</p>
      )}

      {reservations.length > 0 && (
        <div className="gap-5 md:grid md:grid-cols-2 lg:grid-cols-3">
          {reservations.map((reservation) => (
            <UserReservationItem
              key={reservation.id}
              reservation={reservation}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default MyTripReservations;
