import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const useTripReservation = (maxGuests: number) => {
  const tripReservationSchema = z.object({
    startDate: z
      .date()
      .nullable()
      .refine((date) => !!date, "Data inválida"),
    endDate: z
      .date()
      .nullable()
      .refine((date) => !!date, "Data inválida"),
    guests: z
      .number()
      .positive("Quantidade inválida")
      .max(maxGuests, `Não pode ser maior do que ${maxGuests}`),
  });

  type TripReservationSchema = z.infer<typeof tripReservationSchema>;

  const {
    register,
    handleSubmit,
    watch,
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

  const submitForm = (data: TripReservationSchema) => {
    console.log(data);
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
