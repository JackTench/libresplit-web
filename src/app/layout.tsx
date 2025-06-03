import type { Metadata } from "next";
import "./globals.css";
import { AppThemeProvider } from "@/lib/libresplit-web/AppThemeProvider";
import { AppNav } from "@/components/libresplit-web/AppNav";

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
    <html lang="en" suppressHydrationWarning>
      <body>
        <AppThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AppNav />
          {children}
        </AppThemeProvider>
      </body>
    </html>
  );
}
