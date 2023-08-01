import Image from "next/image";
import ReactCountryFlag from "react-country-flag";

import { formatPrice } from "utils/format";

interface TripHeaderProps {
  coverImage: string;
  imagesUrl: string[];
  name: string;
  countryCode: string;
  location: string;
  pricePerDay: number;
}

const TripHeader = ({
  coverImage,
  imagesUrl,
  name,
  countryCode,
  location,
  pricePerDay,
}: TripHeaderProps) => {
  return (
    <section className="flex flex-col">
      <div className="h-[208px] mb-5 relative lg:hidden">
        <Image
          src={coverImage}
          alt={name}
          fill
          className="object-cover"
          sizes="100%"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPcwvC/HgAFVwI0U4SedgAAAABJRU5ErkJggg=="
        />
      </div>

      <div className="hidden lg:grid grid-cols-[2fr,1fr,1fr] grid-rows-2 gap-2 rounded-2xl overflow-hidden order-2">
        <div className="relative row-span-2">
          <Image
            src={coverImage}
            alt={name}
            fill
            className="object-cover"
            sizes="100%"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPcwvC/HgAFVwI0U4SedgAAAABJRU5ErkJggg=="
          />
        </div>

        <div className="relative h-[200px] w-full">
          <Image
            src={imagesUrl[0]}
            alt={name}
            fill
            className="object-cover"
            sizes="100%"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPcwvC/HgAFVwI0U4SedgAAAABJRU5ErkJggg=="
          />
        </div>

        <div className="relative h-[200px] w-full">
          <Image
            src={imagesUrl[1]}
            alt={name}
            fill
            className="object-cover"
            sizes="100%"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPcwvC/HgAFVwI0U4SedgAAAABJRU5ErkJggg=="
          />
        </div>

        <div className="relative col-span-2">
          <Image
            src={imagesUrl[2]}
            alt={name}
            fill
            className="object-cover"
            sizes="100%"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPcwvC/HgAFVwI0U4SedgAAAABJRU5ErkJggg=="
          />
        </div>
      </div>

      <div className="text-gray-dark text-xs lg:text-sm space-y-1 px-5 lg:order-1 lg:px-0 lg:my-10">
        <h1 className="text-xl font-semibold text-purple-dark lg:text-3xl">
          {name}
        </h1>

        <div className="flex gap-1 items-center">
          <ReactCountryFlag countryCode={countryCode} svg />
          <p>{location}</p>
        </div>

        <p className="lg:hidden">
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
