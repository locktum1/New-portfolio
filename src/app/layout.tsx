import Navbar from "../../public/components/navbar";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      title="Portfolio"
      className="select-none bg-[#ececec] text-[3em] ${poppins.className}"
    >
      <nav>
        <Navbar />
      </nav>
      <body>{children}</body>
    </html>
  );
}
