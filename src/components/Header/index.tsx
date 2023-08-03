"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiBars3 } from "react-icons/hi2";

import { useHeader } from "./useHeader";

const Header = () => {
  const { status, data, isOpen, setIsOpen, login, logout, toggleMenu } =
    useHeader();

  const path = usePathname();

  return (
    <header className="h-[89.22px] md:h-[97.16px]">
      <div className="container mx-auto p-5 flex justify-between items-center">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo do OptiTour"
            width={390}
            height={100}
            className="w-48 md:w-60"
          />
        </Link>

        <div className="relative">
          {status === "unauthenticated" && (
            <button
              onClick={login}
              className="text-purple-primary font-bold hover:text-purple-dark text-xl"
            >
              Login
            </button>
          )}

          {status === "authenticated" && (
            <>
              <button
                onClick={toggleMenu}
                className="flex border border-gray-primary rounded-full px-2 py-1 gap-2 text-gray-dark"
              >
                <HiBars3 size={24} className="sm:w-9 sm:h-9" />

                <Image
                  src={data?.user.image!}
                  alt="Imagem do usuário"
                  width={24}
                  height={24}
                  className="rounded-full sm:w-9"
                />
              </button>

              {isOpen && (
                <div className="flex flex-col text-purple-primary font-bold text-xl bg-gray-light text-right mt-1 p-5 gap-3 rounded absolute right-0 min-w-[220px] sm:w-36">
                  <Link
                    href="/my-trips"
                    onClick={() => setIsOpen(false)}
                    className={`${
                      path === "/my-trips" ? "text-purple-dark" : ""
                    } hover:text-purple-dark`}
                  >
                    Minhas viagens
                  </Link>

                  <button
                    onClick={logout}
                    className="hover:text-purple-dark text-right"
                  >
                    Logout
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
