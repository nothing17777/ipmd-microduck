import type { Metadata, Viewport } from "next";
import { DM_Sans, Anton } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const anton = Anton({
  subsets: ["latin"],
  variable: "--font-anton",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "M - A tiny biped robot you can teach new tricks",
  description:
    "M is a 25 cm biped robot with 15 motors, a camera, LiDAR and a grasping beak. Playable out of the box, and its open-source stack lets you train new behaviours in simulation and run them on the robot. Pre-order at $399.",
  icons: {
    icon: "/assets/ipmd/ipmd-logo.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#FF9500",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${anton.variable}`}>
      <body>{children}</body>
    </html>
  );
}
