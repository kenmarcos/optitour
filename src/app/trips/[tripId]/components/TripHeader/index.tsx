import Image from "next/image";
import ReactCountryFlag from "react-country-flag";

import { formatPrice } from "utils/format";

interface TripHeaderProps {
  coverImage: string;
  name: string;
  countryCode: string;
  location: string;
  pricePerDay: number;
}

const TripHeader = ({
  coverImage,
  name,
  countryCode,
  location,
  pricePerDay,
}: TripHeaderProps) => {
  return (
    <section>
      <div className="h-[208px] mb-5 relative">
        <Image src={coverImage} alt={name} fill className="object-cover" />
      </div>

      <div className="text-gray-dark text-xs lg:text-sm space-y-1 px-5">
        <h1 className="text-xl font-semibold text-purple-dark">{name}</h1>

        <div className="flex gap-1 items-center">
          <ReactCountryFlag countryCode={countryCode} svg />
          <p>{location}</p>
        </div>

        <p>
          <span className="text-purple-primary font-semibold">
            {formatPrice(pricePerDay)}
          </span>{" "}
          por dia
        </p>
      </div>
    </section>
  );
};

export default TripHeader;
