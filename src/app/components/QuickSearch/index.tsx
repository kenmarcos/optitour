import Link from "next/link";
import {
  HiBuildingOffice,
  HiBuildingOffice2,
  HiBuildingStorefront,
  HiHome,
  HiHomeModern,
} from "react-icons/hi2";

import SectionHeader from "../SectionHeader";

const QuickSearch = () => {
  return (
    <section className="container mx-auto p-5 pb-0">
      <SectionHeader title="Tente pesquisar por" />

      <nav>
        <ul className="flex overflow-y-hidden gap-2 justify-between lg:justify-around">
          <li className="basis-20 shrink-0 text-gray-dark text-sm lg:text-base">
            <Link href="#" className="flex flex-col items-center">
              <HiBuildingOffice2 size={40} />
              <p>Hotéis</p>
            </Link>
          </li>

          <li className="basis-20 shrink-0 text-gray-dark text-sm lg:text-base">
            <Link href="#" className="flex flex-col items-center">
              <HiBuildingOffice size={40} />
              <p>Resorts</p>
            </Link>
          </li>

          <li className="basis-20 shrink-0 text-gray-dark text-sm lg:text-base">
            <Link href="#" className="flex flex-col items-center">
              <HiBuildingStorefront size={40} />
              <p>Pousadas</p>
            </Link>
          </li>

          <li className="basis-20 shrink-0 text-gray-dark text-sm lg:text-base">
            <Link href="#" className="flex flex-col items-center">
              <HiHome size={40} />
              <p>Chalés</p>
            </Link>
          </li>

          <li className="basis-20 shrink-0 text-gray-dark text-sm lg:text-base">
            <Link href="#" className="flex flex-col items-center">
              <HiHomeModern size={40} />
              <p>Fazendas</p>
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default QuickSearch;
