import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
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
      <body className={`scroll-smooth ${inter.className}`}>
        {children}
        <ContactForm key={Math.random()}>
          {/* ... existing form content ... */}
        </ContactForm>
        <Analytics />
      </body>
    </html>
  );
}
