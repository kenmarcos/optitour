interface TripDescriptionProps {
  description: string;
}

const TripDescription = ({ description }: TripDescriptionProps) => {
  return (
    <section className="p-5 pt-0">
      <h2 className="text-purple-dark font-semibold mb-2 lg:text-xl">
        Sobre a viagem
      </h2>

      <p className="text-purple-dark text-xs leading-5 lg:text-base">
        {description}
      </p>
    </section>
  );
};

export default TripDescription;
