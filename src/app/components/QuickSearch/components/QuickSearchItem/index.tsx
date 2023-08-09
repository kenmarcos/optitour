import Link from "next/link";
import { ReactNode } from "react";

interface QuickSearchItemProps {
  icon: ReactNode;
  searchText: string;
  title: string;
}

const QuickSearchItem = ({ icon, searchText, title }: QuickSearchItemProps) => {
  return (
    <li className="basis-20 shrink-0 text-gray-dark text-sm lg:text-base">
      <Link
        href={`/trips/search?text=${searchText}`}
        className="flex flex-col items-center"
        prefetch={false}
      >
        {icon}
        <p>{title}</p>
      </Link>
    </li>
  );
};

export default QuickSearchItem;
