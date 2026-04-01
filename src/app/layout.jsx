import { Geist, Geist_Mono, Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";

const notoBengal = Noto_Sans_Bengali({
  variable: "--font-noto-bengal",
  weight: ["400", "600", "500", "700"],
  subsets: ["bengali"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Practising Next.js.",
  description: "Waled Karim is the author of this webpage.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoBengal.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
