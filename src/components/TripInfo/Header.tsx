import Image from "next/image";
import { ComponentProps } from "react";
import ReactCountryFlag from "react-country-flag";

import { twMerge } from "tailwind-merge";

interface HeaderProps extends ComponentProps<"header"> {
  tripImage: string;
  tripName: string;
  tripLocation: string;
  tripCountryCode: string;
}
const Header = ({
  tripImage,
  tripName,
  tripLocation,
  tripCountryCode,
  ...rest
}: HeaderProps) => {
  const headerClassName = twMerge("flex items-center gap-5", rest.className);

  return (
    <header {...rest} className={headerClassName}>
      <Image
        src={tripImage}
        alt={tripName}
        width={124}
        height={106}
        className="rounded-xl h-[94px] object-cover"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPcwvC/HgAFVwI0U4SedgAAAABJRU5ErkJggg=="
      />

      <div className="text-gray-dark text-xs lg:text-sm">
        <h3 className="text-purple-dark font-medium text-sm lg:text-base">
          {tripName}
        </h3>
        <div className="flex gap-1 items-center">
          <ReactCountryFlag countryCode={tripCountryCode} svg />
          <p>{tripLocation}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
