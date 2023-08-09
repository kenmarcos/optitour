import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";

export const useHeader = () => {
  const { status, data } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  const login = () => signIn();

  const logout = () => signOut();

  const toggleMenu = () => setIsOpen(!isOpen);

  return {
    status,
    data,
    isOpen,
    setIsOpen,
    login,
    logout,
    toggleMenu,
  };
};
