import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Next.js 14 Blog",
    // this will be used as a template for the other pages title
    // like the about page will have the title "About | Next.js 14 Blog"
    template: "%s | Next.js 14 Blog",
  },
  description: "A blog built with Next.js 14 and MongoDB",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
