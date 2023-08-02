import Image from "next/image";
import ReactCountryFlag from "react-country-flag";

import TripInfo from "components/TripInfo";
import Divider from "components/TripInfo/Divider";

const TripConfirmation = () => {
  return (
    <section className="p-5 space-y-5">
      <h2 className="text-purple-dark font-semibold text-xl leading-8">
        Sua viagem
      </h2>

      {/* CARD */}
      <TripInfo.Card>
        <TripInfo.Header />

        <Divider />

        <TripInfo.Content>
          <h4 className="font-semibold">Informações do preço</h4>

          <div className="flex justify-between">
            <p>Total:</p>
            <p className="font-semibold">R$ 3.390,00</p>
          </div>
        </TripInfo.Content>
      </TripInfo.Card>
    </section>
  );
};

export default TripConfirmation;
