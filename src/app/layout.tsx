import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar/Navbar";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nilai",
  description:
    "expertos en comercialización online, marketing digital y gestión de e-commerce. Ofrecemos soluciones integrales para impulsar tu negocio en el mundo digital, desde la planificación estratégica hasta la implementación y optimización de tu tienda online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(`antialiased ${inter.className} text-black`)}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
