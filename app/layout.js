import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-geist-sans`}
      >
        <Navbar /> {/* Navbar with links to pages, including Men's Clothing */}
        <main className="mx-auto min-h-[50vh]">
          {children} {/* This will render the specific page content, such as the Men page */}
        </main>
        <Footer />
      </body>
    </html>
  );
}
