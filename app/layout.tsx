import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  title: "Inspiration by Trazler | Lifestyle & Culture Blog",
  description:
    "Original stories curated by our group members. Explore community stories, lifestyle highlights, culture, art, and more.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/seun-kuti.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/seun-kuti.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/seun-kuti.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/seun-kuti.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#0b0b0b",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable}`}>
      <body className={`font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
