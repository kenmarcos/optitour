import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="h-[113.22px] bg-gray-light p-5 mt-14 flex flex-col items-center justify-center gap-2">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Logo do OptiTour"
          width={390}
          height={100}
          className="w-48"
        />
      </Link>
      <p className="text-xs">Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
