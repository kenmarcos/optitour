import { NextResponse } from "next/server";

import { prisma } from "lib/prisma";

const generateSearchQuery = (
  text: string,
  startDate?: string | null,
  budget?: string | null
) => {
  let searchQuery: any = {
    OR: [
      {
        name: {
          contains: text.split(" ").join("&"),
          mode: "insensitive",
        },
      },
      {
        description: {
          contains: text.split(" ").join("&"),
          mode: "insensitive",
        },
      },
      {
        location: {
          contains: text.split(" ").join("&"),
          mode: "insensitive",
        },
      },
    ],
    AND: [],
  };

  if (startDate !== null) {
    searchQuery = {
      ...searchQuery,
      AND: [
        ...searchQuery.AND,
        {
          startDate: {
            gte: startDate,
          },
        },
      ],
    };
  }

  if (budget !== null) {
    searchQuery = {
      ...searchQuery,
      AND: [
        ...searchQuery.AND,
        {
          pricePerDay: {
            lte: Number(budget),
          },
        },
      ],
    };
  }

  return searchQuery;
};

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);

  const text = searchParams.get("text");
  const startDate = searchParams.get("startDate");
  const budget = searchParams.get("budget");

  if (!text) {
    return NextResponse.json(
      {
        message: "Missing location parameter",
      },
      {
        status: 400,
      }
    );
  }

  const trips = await prisma.trip.findMany({
    where: generateSearchQuery(text, startDate, budget),
  });

  return NextResponse.json(trips, { status: 200 });
};
