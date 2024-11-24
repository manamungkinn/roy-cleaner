import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from 'sonner';
import ButonScrollTop from "@/components/ButtonScrollTop";

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
  title: "RoyCleaner",
  description: "Bersihkan Semua Dengan RoyCeaner wkwk",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">  
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {<Toaster position="top-center"/>}
        {<Navbar/>}
        {children}
        {<Footer/>}
      <div className="fixed bottom-5 right-5 z-50">{<ButonScrollTop />}</div>
      </body>
    </html>
  );
}
