import { NextResponse } from "next/server";

import { differenceInDays, isAfter, isBefore } from "date-fns";
import { prisma } from "lib/prisma";

export const POST = async (req: Request) => {
  const body = await req.json();

  const trip = await prisma.trip.findUnique({
    where: {
      id: body.tripId,
    },
  });

  if (!trip) {
    return NextResponse.json(
      {
        message: "Trip not found",
      },
      { status: 404 }
    );
  }

  if (isAfter(new Date(trip.startDate), new Date(body.endDate))) {
    return NextResponse.json(
      {
        message: "Data inicial inválida",
      },
      { status: 409 }
    );
  }

  if (isBefore(new Date(trip.endDate), new Date(body.startDate))) {
    return NextResponse.json(
      {
        message: "Data final inválida",
      },
      { status: 409 }
    );
  }

  const reservations = await prisma.tripReservation.findMany({
    where: {
      tripId: body.tripId,
      startDate: {
        lte: new Date(body.endDate),
      },
      endDate: {
        gte: new Date(body.startDate),
      },
    },
  });

  if (reservations.length > 0) {
    return NextResponse.json(
      {
        message: "Reserva já realizada",
      },
      { status: 409 }
    );
  }

  return NextResponse.json(
    {
      message: "success",
      trip,
      totalPrice:
        differenceInDays(new Date(body.endDate), new Date(body.startDate)) *
        Number(trip.pricePerDay),
    },
    { status: 200 }
  );
};
