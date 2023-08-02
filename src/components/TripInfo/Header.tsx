import Image from "next/image";
import { ComponentProps } from "react";
import ReactCountryFlag from "react-country-flag";

import { twMerge } from "tailwind-merge";

interface HeaderProps extends ComponentProps<"header"> {
  tripImage?: string;
  tripName?: string;
  tripLocation?: string;
  tripCountryCode?: string;
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
        src="/Rectangle 9.png"
        alt="trip image"
        width={124}
        height={106}
        className="rounded-xl"
      />

      <div className="text-gray-dark text-xs lg:text-sm">
        <h3 className="text-purple-dark font-medium text-sm lg:text-base">
          Hotel Maravista
        </h3>
        <div className="flex gap-1 items-center">
          <ReactCountryFlag countryCode="BR" svg />
          <p>Rio de Janeiro, Brasil</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
