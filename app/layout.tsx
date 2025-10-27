import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DOVA-PATBM — EV Charging Optimization",
  description: "Intelligent, adaptive, and scalable EV charging optimization.",
  openGraph: {
    title: "DOVA-PATBM — EV Charging Optimization",
    description: "Intelligent, adaptive, and scalable EV charging optimization.",
    images: ["/og.png"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
