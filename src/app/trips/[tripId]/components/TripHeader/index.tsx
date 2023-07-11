import ReactCountryFlag from "react-country-flag";

const TripHeader = () => {
  return (
    <section>
      <div className="bg-red-500 h-[208px] mb-5">IMAGEM</div>

      <div className="text-gray-dark text-xs lg:text-sm space-y-1 px-5">
        <h1 className="text-xl font-semibold text-purple-dark">
          Nome do Hotel
        </h1>

        <div className="flex gap-1 items-center">
          {/* <ReactCountryFlag countryCode={trip.countryCode} svg /> */}
          <span>Bandeira</span>
          <p>Rio de Janeiro, Brasil</p>
        </div>

        <p>
          <span className="text-purple-primary font-semibold">
            {/* {formatPrice(parseFloat(trip.pricePerDay.toString()))} */}
            R$ 250,00
          </span>{" "}
          por dia
        </p>
      </div>
    </section>
  );
};

export default TripHeader;
