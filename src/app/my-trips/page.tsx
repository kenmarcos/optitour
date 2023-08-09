import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import MyTripReservations from "./components/MyTripList";

import { authOptions } from "app/api/auth/[...nextauth]/route";

const MyTrips = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  return <MyTripReservations />;
};

export default MyTrips;
