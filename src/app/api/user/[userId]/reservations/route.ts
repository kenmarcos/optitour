import { NextResponse } from "next/server";

import { prisma } from "lib/prisma";

export const GET = async (
  req: Request,
  { params: { userId } }: { params: { userId: string } }
) => {
  const reservations = await prisma.tripReservation.findMany({
    where: {
      userId,
    },
    include: {
      trip: true,
    },
  });

  return NextResponse.json(
    {
      reservations,
    },
    { status: 200 }
  );
};
