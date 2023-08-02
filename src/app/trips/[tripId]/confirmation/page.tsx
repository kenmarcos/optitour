import TripConfirmation from "./components/TripConfirmation";

interface ConfirmationProps {
  params: { tripId: string };
}

const Confirmation = ({ params }: ConfirmationProps) => {
  return (
    <main className="container mx-auto">
      <TripConfirmation tripId={params.tripId} />
    </main>
  );
};

export default Confirmation;
