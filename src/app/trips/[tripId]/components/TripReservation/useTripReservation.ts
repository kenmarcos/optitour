import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

interface UseTripReservationProps {
  tripId: string;
  maxGuests: number;
}

export const useTripReservation = ({
  tripId,
  maxGuests,
}: UseTripReservationProps) => {
  const tripReservationSchema = z.object({
    startDate: z
      .date()
      .nullable()
      .refine((date) => !!date, "Data inválida"),
    endDate: z
      .date()
      .nullable()
      .refine((date) => !!date, "Data inválida"),
    guests: z.coerce
      .number()
      .positive("Quantidade inválida")
      .max(maxGuests, `Não pode ser maior do que ${maxGuests}`),
  });

  type TripReservationSchema = z.infer<typeof tripReservationSchema>;

  const {
    register,
    handleSubmit,
    watch,
    setError,
    control,
    formState: { errors },
  } = useForm<TripReservationSchema>({
    resolver: zodResolver(tripReservationSchema),
    defaultValues: {
      startDate: null,
      endDate: null,
      guests: undefined,
    },
  });

  const submitForm = async (data: TripReservationSchema) => {
    const response = await fetch("/api/trips/check", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        tripId,
      }),
    });

    const responseData = await response.json();

    if (
      response.status === 409 &&
      responseData.message === "Reserva já realizada"
    ) {
      setError("startDate", {
        type: "manual",
        message: "Está data já está reservada",
      });

      setError("endDate", {
        type: "manual",
        message: "Está data já está reservada",
      });

      return;
    }
  };

  const startDateSelected = watch("startDate");
  const endDateSelected = watch("endDate");

  return {
    register,
    handleSubmit,
    watch,
    control,
    errors,
    submitForm,
    startDateSelected,
    endDateSelected,
  };
};
