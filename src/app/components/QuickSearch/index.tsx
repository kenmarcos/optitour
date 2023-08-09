import Link from "next/link";
import {
  HiBuildingOffice,
  HiBuildingOffice2,
  HiBuildingStorefront,
  HiHome,
  HiHomeModern,
} from "react-icons/hi2";

import SectionHeader from "../SectionHeader";
import QuickSearchItem from "./components/QuickSearchItem";

const QuickSearch = () => {
  return (
    <section className="p-5 pb-0">
      <SectionHeader title="Tente pesquisar por" />

      <nav>
        <ul className="flex overflow-y-hidden gap-2 justify-between lg:justify-around">
          <QuickSearchItem
            title="Hotéis"
            searchText="hotel"
            icon={<HiBuildingOffice2 size={40} />}
          />

          <QuickSearchItem
            title="Resorts"
            searchText="resort"
            icon={<HiBuildingOffice size={40} />}
          />

          <QuickSearchItem
            title="Pousadas"
            searchText="pousada"
            icon={<HiBuildingStorefront size={40} />}
          />

          <QuickSearchItem
            title="Chalés"
            searchText="chalé"
            icon={<HiHome size={40} />}
          />

          <QuickSearchItem
            title="Fazendas"
            searchText="fazenda"
            icon={<HiHomeModern size={40} />}
          />
        </ul>
      </nav>
    </section>
  );
};

export default QuickSearch;
