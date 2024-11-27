import './globals.css'
import { Golos_Text as FontSans } from "next/font/google";
import { Toaster } from 'react-hot-toast';

const fontSans = FontSans({ subsets: ["latin"] , weight: ['400','500','600','700', '800','900'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='scroll-smooth'>
        <body className={`${fontSans.className} scroll-smooth antialiased text-foreground`} suppressHydrationWarning>
          {children}
          <Toaster />
        </body>
    </html>

  );
}
