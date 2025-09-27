"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Heart, Users, Bot, LogIn, UserPlus, Crown, ClipboardList } from "lucide-react"
import { LanguageSelector } from "./language-selector"
import { useLanguage } from "@/lib/language-context"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">Peace Code</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/ai-support"
              className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
            >
              <Bot className="h-4 w-4" />
              <span>{t("nav.aiSupport")}</span>
            </Link>
            <Link
              href="/counseling"
              className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
            >
              <Heart className="h-4 w-4" />
              <span>{t("nav.counseling")}</span>
            </Link>
            <Link
              href="/community"
              className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
            >
              <Users className="h-4 w-4" />
              <span>{t("nav.community")}</span>
            </Link>
            <Link href="/screening" className="text-foreground hover:text-primary transition-colors">
              <ClipboardList className="h-4 w-4 inline mr-2" />
              {t("nav.screening")}
            </Link>
            <Link
              href="/pricing"
              className="flex items-center space-x-2 text-yellow-600 hover:text-yellow-700 transition-colors font-semibold"
            >
              <Crown className="h-4 w-4" />
              <span>Premium</span>
            </Link>
          </div>

          {/* Login and Signup buttons to desktop navigation */}
          <div className="hidden md:flex items-center space-x-4">
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
              <Link
                href="/ai-support"
                className="flex items-center space-x-2 px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Bot className="h-4 w-4" />
                <span>{t("nav.aiSupport")}</span>
              </Link>
              <Link
                href="/counseling"
                className="flex items-center space-x-2 px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Heart className="h-4 w-4" />
                <span>{t("nav.counseling")}</span>
              </Link>
              <Link
                href="/community"
                className="flex items-center space-x-2 px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Users className="h-4 w-4" />
                <span>{t("nav.community")}</span>
              </Link>
              <Link
                href="/screening"
                className="flex items-center space-x-2 px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <ClipboardList className="h-4 w-4" />
                <span>{t("nav.screening")}</span>
              </Link>
              <Link
                href="/pricing"
                className="flex items-center space-x-2 px-3 py-2 text-yellow-600 hover:text-yellow-700 hover:bg-muted rounded-md transition-colors font-semibold"
                onClick={() => setIsOpen(false)}
              >
                <Crown className="h-4 w-4" />
                <span>Premium</span>
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
