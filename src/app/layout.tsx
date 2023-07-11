import { Poppins } from "next/font/google";

import Header from "components/Header";

import "./globals.css";
import { NextAuthProvider } from "providers/auth";

import Footer from "components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "OptiTour",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        <NextAuthProvider>
          <Header />

          {children}

          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  );
}
