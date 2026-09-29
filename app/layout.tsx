import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import { MobileNavigation } from "@/components/layout/MobileNavigation";
import { NavigationShortcuts } from "@/components/layout/NavigationShortcuts";
import { Sidebar } from "@/components/layout/Sidebar";

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
  title: {
    default: "Enes Gül",
    template: "%s · Enes Gül",
  },
  description: "The personal site of Enes Gül.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <NavigationShortcuts />
        <div className="site-shell">
          <Sidebar />
          <div className="site-main">
            <MobileNavigation />
            <main>
              <Container>{children}</Container>
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
