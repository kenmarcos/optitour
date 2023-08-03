import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import Button from "components/Button";
import TripInfo from "components/TripInfo";

import { authOptions } from "app/api/auth/[...nextauth]/route";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { prisma } from "lib/prisma";
import { formatPrice } from "utils/format";

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

      {reservations.length > 0 &&
        reservations.map((reservation) => (
          <TripInfo.Card key={reservation.id}>
            <TripInfo.Header
              tripImage={reservation.trip.coverImage}
              tripName={reservation.trip.name}
              tripCountryCode={reservation.trip.countryCode}
              tripLocation={reservation.trip.location}
            />

            <TripInfo.Divider />

            <TripInfo.Content>
              <h4 className="font-semibold">Sobre a viagem</h4>

              <p className="mt-4">Data</p>
              <time>
                {format(reservation.startDate, "dd 'de' MMM", {
                  locale: ptBR,
                })}{" "}
                -{" "}
                {format(reservation.endDate, "dd 'de' MMM", {
                  locale: ptBR,
                })}
              </time>

              <p className="mt-4">Hóspedes</p>
              <p>
                {reservation.guests} hóspede{reservation.guests > 1 ? "s" : ""}{" "}
              </p>
            </TripInfo.Content>

            <TripInfo.Divider />

            <TripInfo.Content>
              <h4 className="font-semibold">Informações do pagamento</h4>

              <div className="flex justify-between mt-4">
                <p>Total:</p>
                <p className="font-semibold">
                  {formatPrice(Number(reservation.totalPaid))}
                </p>
              </div>

              <Button variant="danger" className="w-full mt-4">
                Cancelar
              </Button>
            </TripInfo.Content>
          </TripInfo.Card>
        ))}
    </section>
  );
};

export default MyTripReservations;
