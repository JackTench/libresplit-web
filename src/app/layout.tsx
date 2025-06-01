import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LibreSplit",
  description:
    "Free speedrun timer with auto splitting and load removal for Linux.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
