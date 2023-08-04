"use client";

import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";

import Button from "components/Button";
import TripInfo from "components/TripInfo";

import { Trip, TripReservation } from "@prisma/client";
import { Decimal, GetResult } from "@prisma/client/runtime";
import * as Dialog from "@radix-ui/react-dialog";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { formatPrice } from "utils/format";

interface Reservation extends TripReservation {
  trip: Trip;
}
interface UserReservationItemProps {
  reservation: TripReservation & { trip: Trip };
  setReservations: Dispatch<SetStateAction<Reservation[]>>;
}

const UserReservationItem = ({
  reservation,
  setReservations,
}: UserReservationItemProps) => {
  const router = useRouter();
  const deleteReservation = async () => {
    try {
      fetch(`/api/trips/reservation/${reservation.id}`, {
        method: "DELETE",
      });

      setReservations((currentState) => {
        const reservations = currentState.filter(
          (item) => item.id !== reservation.id
        );

        return reservations;
      });

      toast.success("Reserva cancelada com sucesso!");
    } catch (error) {
      console.log(error);

      toast.error("Não foi possível cancelar a reserva");
    }
  };

  return (
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
          {format(new Date(reservation.startDate), "dd 'de' MMM", {
            locale: ptBR,
          })}{" "}
          -{" "}
          {format(new Date(reservation.endDate), "dd 'de' MMM", {
            locale: ptBR,
          })}
        </time>

        <p className="mt-4">Hóspedes</p>
        <p>
          {reservation.guests} hóspede
          {reservation.guests > 1 ? "s" : ""}{" "}
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

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button variant="danger" className="w-full mt-4">
              Cancelar
            </Button>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="bg-modal-overlay fixed inset-0" />

            <Dialog.Content className="bg-purple-light fixed rounded-md shadow-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-xl p-6">
              <Dialog.Title className="text-purple-primary text-2xl font-semibold border-b border-b-gray-primary pb-5">
                Cancelar reserva
              </Dialog.Title>

              <Dialog.Description className="py-8">
                <p className="text-gray-dark text-lg">
                  Você tem certeza que deseja cancelar esta reserva?
                </p>
              </Dialog.Description>

              <div className="flex flex-col-reverse sm:flex-row gap-4 sm:justify-end">
                <Dialog.Close>
                  <Button variant="outlined" className="w-full sm:w-auto">
                    Manter a reserva
                  </Button>
                </Dialog.Close>

                <Button
                  onClick={deleteReservation}
                  className="w-full sm:w-auto"
                >
                  Cancelar a reserva
                </Button>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </TripInfo.Content>
    </TripInfo.Card>
  );
};

export default UserReservationItem;
