import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/nav/NavBar";
import { Montserrat } from "next/font/google";

export const metadata: Metadata = {
  title: "Gaming Store",
  description: "A platform for buying and selling video games",
};

const montserrat = Montserrat({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} dark antialiased`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
