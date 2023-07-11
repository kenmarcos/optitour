import { HiOutlineCheckCircle } from "react-icons/hi2";

const TripHighlights = () => {
  return (
    <section className="p-5 flex-wrap">
      <h2 className="text-purple-dark font-semibold mb-2">Destaques</h2>

      <ul className="flex flex-wrap gap-y-3">
        <li className="basis-1/2">
          <HiOutlineCheckCircle
            size={18}
            className="text-purple-primary inline mr-1"
          />
          <span className="text-gray-dark text-xs">
            Café da manhã incluso masdklsa asdas asdsa dasdsaas
          </span>
        </li>

        <li className="basis-1/2">
          <HiOutlineCheckCircle
            size={18}
            className="text-purple-primary inline mr-1"
          />
          <span className="text-gray-dark text-xs">Café da manhã incluso</span>
        </li>

        <li className="basis-1/2">
          <HiOutlineCheckCircle
            size={18}
            className="text-purple-primary inline mr-1"
          />
          <span className="text-gray-dark text-xs">Café da manhã incluso</span>
        </li>

        <li className="basis-1/2">
          <HiOutlineCheckCircle
            size={18}
            className="text-purple-primary inline mr-1"
          />
          <span className="text-gray-dark text-xs">Café da manhã incluso</span>
        </li>
      </ul>
    </section>
  );
};

export default TripHighlights;
