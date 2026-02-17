import type { Metadata } from "next";
import { publicSans, clashGrotesk } from "@/app/font";
import "./globals.css";


export const metadata: Metadata = {
  title: "HROne - HR Software",
  description: "HROne - HR Software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${publicSans.variable} ${clashGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
