import { NextResponse } from "next/server";

import { prisma } from "lib/prisma";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
});

export const POST = async (req: Request) => {
  const sig = req.headers.get("stripe-signature")!;

  const text = await req.text();

  const event = stripe.webhooks.constructEvent(
    text,
    sig,
    process.env.STRIPE_WEBHOOK_SECRET_KEY!
  );

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    if (!session.metadata) {
      return NextResponse.json(
        {
          message: "Invalid data",
        },
        { status: 400 }
      );
    }

    await prisma.tripReservation.create({
      data: {
        tripId: session.metadata.tripId,
        userId: session.metadata.userId,
        startDate: new Date(session.metadata.startDate),
        endDate: new Date(session.metadata.endDate),
        guests: Number(session.metadata.guests),
        totalPaid: Number(session.metadata.totalPrice),
      },
    });
  }

  return NextResponse.json(
    {
      receveid: true,
    },
    { status: 200 }
  );
};
