import TripDescription from "./components/TripDescription";
import TripHeader from "./components/TripHeader";
import TripHighlights from "./components/TripHighlights/indext";
import TripLocation from "./components/TripLocation";
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

      <TripLocation />
    </main>
  );
};

export default TripDetails;
