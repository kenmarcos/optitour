interface SectionHeaderProps {
  title: string;
}

const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <header className="flex items-center gap-2 mb-5">
      <hr className="basis-full border-gray-dark" />
      <h2 className="whitespace-nowrap text-gray-dark lg:text-2xl">{title}</h2>
      <hr className="basis-full border-gray-dark" />
    </header>
  );
};

export default SectionHeader;
