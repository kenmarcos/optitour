import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

import { authOptions } from "app/api/auth/[...nextauth]/route";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
});

export const POST = async (req: Request) => {
  const userSession = await getServerSession(authOptions);

  if (!userSession) {
    return NextResponse.json(
      {
        message: "Unauthorized",
      },
      { status: 401 }
    );
  }

  const body = await req.json();

  const {
    tripId,
    name,
    description,
    coverImage,
    startDate,
    endDate,
    guests,
    totalPrice,
  } = body;

  const session = await stripe.checkout.sessions.create({
    success_url: "http://localhost:3000/my-trips",
    metadata: {
      tripId,
      userId: userSession?.user.id,
      startDate,
      endDate,
      guests,
      totalPrice,
    },
    line_items: [
      {
        price_data: {
          currency: "brl",
          unit_amount: totalPrice * 100,
          product_data: {
            name,
            description,
            images: [coverImage],
          },
        },
        quantity: 1,
      },
    ],
    mode: "payment",
  });

  return NextResponse.json(
    {
      sessionId: session.id,
    },
    { status: 200 }
  );
};
