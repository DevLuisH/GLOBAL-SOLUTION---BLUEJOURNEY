import type { Metadata } from "next";
import "./globals.css";
import Header from "./Components/Header/page";
import Footer from "./Components/Footer/page";


export const metadata: Metadata = {
  title: "BlueJourney",
  description: "BlueJourney e Fiap",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
