import { NextResponse } from "next/server";

import { prisma } from "lib/prisma";

export const POST = async (req: Request) => {
  const body = await req.json();

  const { tripId, userId, startDate, endDate, guests, totalPaid } = body;

  const trip = await prisma.trip.findUnique({
    where: {
      id: tripId,
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

  await prisma.tripReservation.create({
    data: {
      tripId,
      userId,
      startDate,
      endDate,
      guests,
      totalPaid,
    },
  });

  return NextResponse.json(
    {
      message: "Reserva realizada com sucesso",
    },
    { status: 201 }
  );
};
