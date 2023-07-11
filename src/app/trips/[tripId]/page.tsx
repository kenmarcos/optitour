import TripDescription from "./components/TripDescription";
import TripHeader from "./components/TripHeader";
import TripHighlights from "./components/TripHighlights/indext";
import TripReservation from "./components/TripReservation";

interface TripDetailsProps {
  params: { tripId: string };
}

const TripDetails = ({ params }: TripDetailsProps) => {
  return (
    <main className="container mx-auto">
      <TripHeader />

      <TripReservation />

      <TripDescription />

      <TripHighlights />
    </main>
  );
};

export default TripDetails;
