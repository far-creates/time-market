import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title:
    "HerTime – A supportive space for women to share time and lighten daily tasks",
  description:
    "HerTime helps women find support with everyday errands, share their free time, and ease the load of daily life. Whether you need a hand or want to offer one, HerTime makes time feel a little lighter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="max-w-250 min-h-screen self-center bg-white m-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
