import { Poppins } from "next/font/google";

import Footer from "components/Footer";
import Header from "components/Header";

import "./globals.css";
import { NextAuthProvider } from "providers/auth";
import ToastProvider from "providers/toast";

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
          <ToastProvider>
            <Header />
            <main className="container mx-auto min-h-[calc(100vh-89.22px-169.22px)] md:min-h-[calc(100vh-97.16px-169.22px)]">
              {children}
            </main>

            <Footer />
          </ToastProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
