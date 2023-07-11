import TripHeader from "./components/TripHeader";
import TripReservation from "./components/TripReservation";

interface TripDetailsProps {
  params: { tripId: string };
}

const TripDetails = ({ params }: TripDetailsProps) => {
  return (
    <main className="container mx-auto">
      <TripHeader />

      <TripReservation />
    </main>
  );
};

export default TripDetails;
