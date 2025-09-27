import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/lib/language-context"
import { FloatingChatbotButton } from "@/components/chatbot/floating-chatbot-button"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Peace Code - Your Digital Sanctuary for Mental Wellness",
  description:
    "India's most compassionate Digital Psychological Intervention System for students. Experience AI-guided support, professional counseling, peer community, and healing resources in 10+ regional languages.",
  generator: "v0.app",
  keywords: ["mental health", "student support", "AI counseling", "peer community", "wellness", "India"],
  authors: [{ name: "JAI MANN" }],
  creator: "JAI MANN",
  openGraph: {
    title: "Peace Code - Your Digital Sanctuary for Mental Wellness",
    description:
      "Compassionate mental health support for Indian students with AI guidance, professional counseling, and peer community.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
      <body className="font-sans">
        <LanguageProvider>
          {children}
          <FloatingChatbotButton />
        </LanguageProvider>
      </body>
    </html>
  )
}
