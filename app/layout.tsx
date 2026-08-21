import "./globals.css";
import type { Metadata } from "next";
import { AgeGate } from "@/components/AgeGate";

export const metadata: Metadata = {
  title: "Velvet | Adults Only Directory",
  description: "A premium 18+ directory UI starter."
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <AgeGate />
        {children}
      </body>
    </html>
  );
}
