import './globals.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sakshi More — Frontend Developer',
  description: 'Portfolio of Sakshi More — Frontend Developer.',
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-20 max-w-6xl mx-auto px-6">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
