"use client";

import Image from "next/image";
import Link from "next/link";
import { HiBars3 } from "react-icons/hi2";

import { useHeader } from "./useHeader";

const Header = () => {
  const { status, data, isOpen, login, logout, toggleMenu } = useHeader();

  return (
    <header className="max-h-[97.16px]">
      <div className="container mx-auto p-5 flex justify-between items-center">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo do OptiTour"
            width={150}
            height={44.99}
            className="sm:w-48 md:w-56"
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
                  src={data?.user?.image!}
                  alt="Imagem do usuário"
                  width={24}
                  height={24}
                  className="rounded-full sm:w-9"
                />
              </button>

              {isOpen && (
                <div className="bg-gray-light text-center mt-1 p-3 rounded absolute right-0 min-w-[120px] sm:w-36">
                  <button
                    onClick={logout}
                    className="text-purple-primary font-bold hover:text-purple-dark text-xl"
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
