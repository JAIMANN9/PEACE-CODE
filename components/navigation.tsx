"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Menu,
  X,
  Heart,
  LogIn,
  UserPlus,
  Instagram,
  PhoneCall,
} from "lucide-react"
import { LanguageSelector } from "./language-selector"
import { useLanguage } from "@/lib/language-context"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          // Scrolling down
          setIsVisible(false)
        } else {
          // Scrolling up
          setIsVisible(true)
        }
        setLastScrollY(window.scrollY)
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar)

      return () => {
        window.removeEventListener("scroll", controlNavbar)
      }
    }
  }, [lastScrollY])

  return (
    <nav
      className={`fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50 transition-transform duration-300 ${
        isVisible ? "transform-none" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">Peace Code</span>
          </Link>

          {/* Primary navigation (desktop) */}
          <div className="hidden md:flex items-center space-x-8">
            {/* About Us dropdown */}
            <div className="relative group">
              <Button variant="ghost" className="px-0 hover:text-primary">
                About Us
              </Button>
              <div
                className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity absolute top-full left-1/2 -translate-x-1/2 w-48 rounded-md border border-border bg-card shadow-lg z-50"
              >
                <div className="flex flex-col py-2">
                  <Link href="/about/about-peace-code" className="flex items-center gap-2 px-4 py-2 hover:bg-muted" >
                    <span className="text-primary">›</span> About Peace Code
                  </Link>
                  <Link href="/about/team" className="flex items-center gap-2 px-4 py-2 hover:bg-muted"><span className="text-primary">›</span> Team</Link>
                  <Link href="/about/careers" className="flex items-center gap-2 px-4 py-2 hover:bg-muted"><span className="text-primary">›</span> Careers</Link>
                  <Link href="/about/media" className="flex items-center gap-2 px-4 py-2 hover:bg-muted"><span className="text-primary">›</span> Peace Code in Media</Link>
                  <Link href="/about/contact" className="flex items-center gap-2 px-4 py-2 hover:bg-muted"><span className="text-primary">›</span> Contact Us</Link>
                  <Link href="/about/faqs" className="flex items-center gap-2 px-4 py-2 hover:bg-muted"><span className="text-primary">›</span> FAQs</Link>
                </div>
              </div>
            </div>

            {/* Services dropdown */}
            <div className="relative group">
              <Button variant="ghost" className="px-0 hover:text-primary">
                Services
              </Button>
              <div
                className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity absolute top-full left-1/2 -translate-x-1/2 w-52 rounded-md border border-border bg-card shadow-lg z-50"
              >
                <div className="flex flex-col py-2">
                  <Link href="/services" className="flex items-center gap-2 px-4 py-2 hover:bg-muted font-medium"><span className="text-primary">›</span> All Services</Link>
                  <Link href="/ai-support" className="flex items-center gap-2 px-4 py-2 hover:bg-muted"><span className="text-primary">›</span> AI Chatbot</Link>
                  <Link href="/counseling" className="flex items-center gap-2 px-4 py-2 hover:bg-muted"><span className="text-primary">›</span> Counseling</Link>
                  <Link href="/community" className="flex items-center gap-2 px-4 py-2 hover:bg-muted"><span className="text-primary">›</span> Community</Link>
                  <Link href="/focus" className="flex items-center gap-2 px-4 py-2 hover:bg-muted"><span className="text-primary">›</span> Focus Timer</Link>
                  <Link href="/breathe" className="flex items-center gap-2 px-4 py-2 hover:bg-muted"><span className="text-primary">›</span> Breathing Exercises</Link>
                  <Link href="/gratitude" className="flex items-center gap-2 px-4 py-2 hover:bg-muted"><span className="text-primary">›</span> Gratitude Wall</Link>
                  <Link href="/journal" className="flex items-center gap-2 px-4 py-2 hover:bg-muted"><span className="text-primary">›</span> Journal</Link>
                  <Link href="/screening" className="flex items-center gap-2 px-4 py-2 hover:bg-muted"><span className="text-primary">›</span> Screening</Link>
                  <Link href="/resources" className="flex items-center gap-2 px-4 py-2 hover:bg-muted"><span className="text-primary">›</span> Resources</Link>
                </div>
              </div>
            </div>

            {/* Experts placeholder */}
            <Link href="/experts" className="hover:text-primary">Experts</Link>

            {/* Partners placeholder */}
            <Link href="/partners" className="hover:text-primary">Partners</Link>

            {/* Resources placeholder (duplicate main link for quick access) */}
            <Link href="/resources" className="hover:text-primary">Resources</Link>
          </div>

          {/* Right-side icons + auth buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="https://wa.me/" target="_blank" aria-label="WhatsApp" className="hover:opacity-80">
              <div className="h-9 w-9 rounded-full flex items-center justify-center bg-green-500/90 text-white">
                <PhoneCall className="h-4 w-4" />
              </div>
            </Link>
            <Link href="https://instagram.com/" target="_blank" aria-label="Instagram" className="hover:opacity-80">
              <div className="h-9 w-9 rounded-full flex items-center justify-center bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white">
                <Instagram className="h-4 w-4" />
              </div>
            </Link>
            <LanguageSelector />
            <Link href="/auth/login">
              <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                <LogIn className="h-4 w-4" />
                <span>Login</span>
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button size="sm" className="flex items-center space-x-2">
                <UserPlus className="h-4 w-4" />
                <span>Sign Up</span>
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card rounded-lg mt-2 border border-border">
              {/* Mobile nav links */}
              <Link href="/about/about-peace-code" className="block px-3 py-2 rounded-md hover:bg-muted" onClick={() => setIsOpen(false)}>
                About Us
              </Link>
              <Link href="/services" className="block px-3 py-2 rounded-md hover:bg-muted" onClick={() => setIsOpen(false)}>
                Services
              </Link>
              <Link href="/experts" className="block px-3 py-2 rounded-md hover:bg-muted" onClick={() => setIsOpen(false)}>
                Experts
              </Link>
              <Link href="/partners" className="block px-3 py-2 rounded-md hover:bg-muted" onClick={() => setIsOpen(false)}>
                Partners
              </Link>
              <Link href="/resources" className="block px-3 py-2 rounded-md hover:bg-muted" onClick={() => setIsOpen(false)}>
                Resources
              </Link>
              <div className="px-3 py-2">
                <LanguageSelector />
              </div>
              {/* Login and Signup buttons to mobile navigation */}
              <div className="border-t border-border pt-2 mt-2 space-y-1">
                <Link
                  href="/auth/login"
                  className="flex items-center space-x-2 px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <LogIn className="h-4 w-4" />
                  <span>Login</span>
                </Link>
                <Link
                  href="/auth/signup"
                  className="flex items-center space-x-2 px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <UserPlus className="h-4 w-4" />
                  <span>Sign Up</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
