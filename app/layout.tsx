import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EcoKids - Talleres Creativos para Niños en Concón | Experiencias sin Pantallas",
  description: "Talleres infantiles, cumpleaños y actividades creativas en Concón, V Región. Un ratito sin pantallas, un mundo de posibilidades. ¡Reserva tu experiencia EcoKids!",
  keywords: "talleres infantiles, cumpleaños niños, actividades creativas, Concón, V Región, talleres creativos, experiencias niños",
  openGraph: {
    title: "EcoKids - Experiencias Creativas",
    description: "Talleres, cumpleaños y actividades para niños en Concón",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
