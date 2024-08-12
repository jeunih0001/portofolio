import './globals.css'
import { Anton, Poppins as FontSans } from "next/font/google";
import { Toaster } from 'react-hot-toast';

const fontSans = FontSans({ subsets: ["latin"] , weight: ['300','400','500','700','900'] });

const anton = Anton({weight: '400', subsets: ['latin'] , variable: '--font-anton'})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={`${anton.variable} ${fontSans.className} scroll-smooth antialiased text-foreground`} suppressHydrationWarning>
          {children}
          <Toaster />
        </body>
    </html>

  );
}
