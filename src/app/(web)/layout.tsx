import prisma from '@/lib/prisma'
import ThemeProvider from '@/providers/ThemeProvider'
import { Metadata } from 'next'
import React, { ReactNode } from 'react'

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

export default function WebLayout({children}: {children: ReactNode}) {
  return (
    <ThemeProvider>{children}</ThemeProvider>
  )
}
