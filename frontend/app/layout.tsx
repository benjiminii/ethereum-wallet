import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import ToasterProvider from "@/components/shared/ToastProviders";

/* Robot Font */
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ethereum Wallet",
  description: "benjiminii ethereum wallet",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-black" data-theme="light">
      <body className={roboto.className}>
        <ToasterProvider />
        {children}
      </body>
    </html>
  );
}
