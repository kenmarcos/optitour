import TripHeader from "./components/TripHeader";

interface TripDetailsProps {
  params: { tripId: string };
}

const TripDetails = ({ params }: TripDetailsProps) => {
  return (
    <main className="container mx-auto">
      <TripHeader />
    </main>
  );
};

export default TripDetails;
