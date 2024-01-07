import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Paier college",
  description: "PaierCollege",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" type="image/x-icon"></link>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
