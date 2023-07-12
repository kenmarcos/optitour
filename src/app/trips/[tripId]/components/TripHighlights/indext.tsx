import { HiOutlineCheckCircle } from "react-icons/hi2";

interface TripHighLightsProps {
  highlights: string[];
}

const TripHighlights = ({ highlights }: TripHighLightsProps) => {
  return (
    <section className="p-5 flex-wrap lg:pl-0">
      <h2 className="text-purple-dark font-semibold mb-2 lg:text-xl">
        Destaques
      </h2>

      <ul className="flex flex-wrap gap-y-3">
        {highlights.map((item) => (
          <li key={item} className="basis-1/2">
            <HiOutlineCheckCircle
              size={18}
              className="text-purple-primary inline mr-1"
            />
            <span className="text-gray-dark text-xs lg:align-middle lg:text-base">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TripHighlights;
