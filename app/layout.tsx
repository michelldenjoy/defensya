import "./globals.css"
import Navbar from "../components/Navbar"
import Footer from "@/components/Footer"
import { ThemeProvider } from "@/components/ThemeProvider"

import { Barlow_Condensed, DM_Sans } from "next/font/google";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-display",
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html className={`${barlowCondensed.variable} ${dmSans.variable}`} lang="es" suppressHydrationWarning> 
      <body>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="system" 
          enableSystem
        >
          <div className="flex flex-col min-h-screen bg-white dark:bg-defensya-navy transition-colors duration-300">
            <Navbar />
            <main className="grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}