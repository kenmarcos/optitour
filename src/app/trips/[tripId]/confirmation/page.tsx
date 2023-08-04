import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import TripConfirmation from "./components";

import { authOptions } from "app/api/auth/[...nextauth]/route";

interface ConfirmationProps {
  params: { tripId: string };
}

const Confirmation = async ({ params }: ConfirmationProps) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  return <TripConfirmation tripId={params.tripId} />;
};

export default Confirmation;
