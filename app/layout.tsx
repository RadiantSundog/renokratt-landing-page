import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Inter } from "next/font/google";
import { ContactForm } from "./components/contact-form";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Renokratt",
  description: "Data-Powered Renovation Insights for YOUR Building.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
                {/* Favicon */}
                <link rel="icon" href="/renokratt-logo-circle.png" sizes="any" type="image/png" />
      </head>
      <body className={`scroll-smooth ${inter.className}`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
