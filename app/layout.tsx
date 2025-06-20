import type { Metadata } from "next";
import "./globals.css";
import Header from "./home/sections/Header";

export const metadata: Metadata = {
  title: "KLTL Studios",
  description: "Generated by create next app",
  icons: {
    icon: "res/icon/KLTL_Studios.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <footer className="nav-bottom">
          <div className="nav-bottom-left">
            <h2> &copy; 2025 KLTL Studios.</h2>
          </div>
          <div className="nav-bottom-right">
            <a href="https://github.com/kimtrm" target="_blank">GitHub</a>
            |
            <a href="https://www.linkedin.com/in/kim-louise-labrador/" target="_blank">LinkedIn</a>
            |
            <a href="https://youtube.com/@kltlstudios" target="_blank">YouTube</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
