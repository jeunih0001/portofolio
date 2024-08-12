import type { Metadata } from "next";
import './globals.css'
import { Anton, Poppins as FontSans } from "next/font/google";
import ThemeProvider from "@/providers/ThemeProvider";
import { Toaster } from 'react-hot-toast';
import prisma from "@/lib/connect";

const fontSans = FontSans({ subsets: ["latin"] , weight: ['300','400','500','700','900'] });

const anton = Anton({weight: '400', subsets: ['latin'] , variable: '--font-anton'})

export async function generateMetadata(): Promise<Metadata>{
  const metadata = await prisma.seo.findFirst()
  if (!metadata) return {title: 'Jean Eudes'}
  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.tags,
    openGraph: {
      title: metadata.title,
      siteName: metadata.title,
      description: metadata.description,
      type: 'profile',
      images: [
        {
          url: metadata.image,
          alt: metadata.title,
          secureUrl: metadata.image
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      creator: `@${metadata.twitter}`,
      site: `@${metadata.twitter}`,
      title: metadata.title,
      description: metadata.description,
      images: [
        {
          alt: metadata.title,
          url: metadata.image,
          secureUrl: metadata.image,
        }
      ]

    }
  }
}

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
