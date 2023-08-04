import { NextResponse } from "next/server";

import { prisma } from "lib/prisma";

export const DELETE = async (
  req: Request,
  { params: { reservationId } }: { params: { reservationId: string } }
) => {
  if (!reservationId) {
    return NextResponse.json(
      {
        message: "Missing reservationId",
      },
      { status: 400 }
    );
  }

  await prisma.tripReservation.delete({
    where: {
      id: reservationId,
    },
  });

  return NextResponse.json(
    {
      message: "Reserva cancelada com sucesso",
    },
    { status: 200 }
  );
};
