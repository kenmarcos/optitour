import TripConfirmation from "./components/TripConfirmation";

interface ConfirmationProps {
  params: { tripId: string };
}

const Confirmation = ({ params }: ConfirmationProps) => {
  return (
    <main className="container mx-auto min-h-[calc(100vh-89.22px-169.22px)] md:min-h-[calc(100vh-97.16px-169.22px)]">
      <TripConfirmation tripId={params.tripId} />
    </main>
  );
};

export default Confirmation;
