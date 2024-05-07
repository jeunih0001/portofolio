import { Navbar } from "@/components/Navbar";
import type { Metadata } from "next";
import './globals.css'
import { Anton, Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const anton = Anton({weight: '400', subsets: ['latin'] , variable: '--font-anton'})

export const metadata: Metadata = {
  title: "Jean Eudes",
  description: "Web developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anton.variable} ${inter.className} antialiased`} suppressHydrationWarning>
        <div>

        </div>
        <div>
          <Navbar />
          {children}
        </div>
      </body>
    </html>

  );
}
