import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextJS Multiple Modals Demo",
  description: "This NextJS shows how multiple modals work using routing.",
};

export default function RootLayout({ children, modal }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {modal}
      </body>
    </html>
  );
}
