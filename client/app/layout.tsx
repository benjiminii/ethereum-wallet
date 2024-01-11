import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";

/* Robot Font */
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Etheruem Wallet",
  description: "benjiminii etheruem wallet",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-black">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
