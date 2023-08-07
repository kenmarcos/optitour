import Image from "next/image";
import Link from "next/link";
import ReactCountryFlag from "react-country-flag";

import { Trip } from "@prisma/client";
import { formatPrice } from "utils/format";

interface TripItemProps {
  trip: Trip;
}

const TripItem = ({ trip }: TripItemProps) => {
  return (
    <Link href={`/trips/${trip.id}`} className="block group">
      <div className="relative h-[280px] mb-3">
        <Image
          src={trip.coverImage}
          alt={trip.name}
          fill
          sizes="100%"
          className="object-cover rounded-2xl transition-all group-hover:scale-[1.02]"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPcwvC/HgAFVwI0U4SedgAAAABJRU5ErkJggg=="
        />
      </div>

      <div className="text-gray-dark text-xs lg:text-sm space-y-1">
        <h3 className="text-purple-dark font-medium text-sm lg:text-base">
          {trip.name}
        </h3>
        <div className="flex gap-1 items-center">
          <ReactCountryFlag countryCode={trip.countryCode} svg />
          <p>{trip.location}</p>
        </div>
        <p>
          <span className="text-purple-primary font-semibold">
            {formatPrice(parseFloat(trip.pricePerDay.toString()))}
          </span>{" "}
          por dia
        </p>
      </div>
    </Link>
  );
};

export default TripItem;
