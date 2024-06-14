import type { Metadata } from "next";
import './globals.css'
import { Anton, Poppins as FontSans } from "next/font/google";
import ThemeProvider from "@/providers/ThemeProvider";

const fontSans = FontSans({ subsets: ["latin"] , weight: ['300','400','500','700','900'] });

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
      <ThemeProvider>
        <body className={`${anton.variable} ${fontSans.className} antialiased text-foreground`} suppressHydrationWarning>
          {children}
        </body>
      </ThemeProvider>
    </html>

  );
}
