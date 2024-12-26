'use client'; // Ye line add karein

import localFont from "next/font/local";
import './globals.css';
import Navbar from '../src/Components/Navbar';
import Footer from '../src/Components/Footer';
import { CartProvider } from '../src/Components/CartContext';

// Local fonts ko import karenge
const geistSans = localFont({
  src: '/fonts/GeistMonoVF.woff', // Direct path from the public folder
  variable: '--font-geist-mono',
  weight: '100 900',
});


// Root Layout function jo CartProvider ke saath wrap hoga
export default function RootLayout({ children }) {
  return (
    <CartProvider>
      <html lang="en">
      <body
          className={`${geistSans.variable} antialiased font-geist-sans`}
        >
          <Navbar /> {/* Navbar with links to pages */}
          <main className="mx-auto min-h-[50vh]">
            {children} {/* Specific page content yahan render hoga */}
          </main>
          <Footer /> {/* Footer include karenge */}
        </body>
      </html>
    </CartProvider>
  );
}
