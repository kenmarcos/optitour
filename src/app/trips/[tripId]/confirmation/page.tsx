import TripConfirmation from "./components/TripConfirmation";

interface ConfirmationProps {
  params: { tripId: string };
}

const Confirmation = ({ params }: ConfirmationProps) => {
  return <TripConfirmation tripId={params.tripId} />;
};

export default Confirmation;
