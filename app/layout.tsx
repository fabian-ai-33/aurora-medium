import type React from "react"
import type { Metadata } from "next"
import { BookProvider } from "@/context/BookContext"
import { Toaster } from "@/components/ui/sonner"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import Link from "next/link"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Reading List App",
  description: "An application to manage your reading lists and book collections",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-black"
        >
          Skip to main content
        </a>

        <BookProvider>
          <div className="container mx-auto">
            <header className="border-b border-gray-200 py-4 mb-4">
              <NavigationMenu aria-label="Main Navigation">
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                      <NavigationMenuLink>
                        <span>Home</span>
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/reading-list" legacyBehavior passHref>
                      <NavigationMenuLink>
                        <span>Reading List</span>
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>

                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link href="/public/reading-list" legacyBehavior passHref>
                      <NavigationMenuLink>
                        <span>Public Reading List</span>
                        <span className="sr-only">(View publicly shared reading lists)</span>
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </header>

            <Toaster />

            <main id="main-content" className="pb-8">
              {children}
            </main>
          </div>
        </BookProvider>
      </body>
    </html>
  )
}

