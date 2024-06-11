import type { Metadata } from "next";
import './globals.css'
import { Anton, Poppins as FontSans } from "next/font/google";
import ThemeProvider from "@/providers/ThemeProvider";
import { CSSProperties } from "react";

const fontSans = FontSans({ subsets: ["latin"] , weight: ['300','400','500','700','900'] });

const anton = Anton({weight: '400', subsets: ['latin'] , variable: '--font-anton'})

export const metadata: Metadata = {
  title: "Jean Eudes",
  description: "Web developer",
};

const BODYSTLES: CSSProperties ={
  backgroundImage: `url('https://res.cloudinary.com/dn7lqpl1x/image/upload/v1631080208/wrapped_k7g6ev.svg')`,
  backgroundSize: 'contain',
  backgroundPosition: 'right top',
  backgroundRepeat: 'no-repeat'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body style={BODYSTLES} className={`${anton.variable} ${fontSans.className} antialiased text-foreground`} suppressHydrationWarning>
          {children}
        </body>
      </ThemeProvider>
    </html>

  );
}
