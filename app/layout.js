import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import localFont from "next/font/local";
import About from "./about/page";

// Local Poppins font
const poppins = localFont({
  src: [
    {
      path: "./fonts/Poppins-ExtraBold.ttf", // adjust path if needed
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-poppins",
});

// Google fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ZiplyURL : Your trusted URL shortener",
  description: "ZiplyURL help shorten your url easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${poppins.variable}
          antialiased bg-purple-50
        `}
      >
        <Navbar />
        {children}
         <Footer />
      </body>
    </html>
  );
}
