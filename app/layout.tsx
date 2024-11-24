
import "./globals.css";
import Footer from "./footer/page";
import Header from "./header/page";
import Link from "next/link";






export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
     
       
        <Header />
        
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
