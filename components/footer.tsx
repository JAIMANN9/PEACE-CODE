"use client"

import Link from "next/link"
import { Facebook, Instagram, Linkedin, X } from "lucide-react"

const sections = [
  {
    title: "About Us",
    links: [
      { href: "/about/about-peace-code", label: "About Peace Code" },
      { href: "/about/careers", label: "Careers" },
      { href: "/about/media", label: "Media" },
      { href: "/about/team", label: "Team" },
      { href: "/about/contact", label: "Contact Us" },
      { href: "/about/faqs", label: "Help/FAQs" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/counseling", label: "Counseling" },
      { href: "/ai-support", label: "AI Chatbot" },
      { href: "/community", label: "Community" },
      { href: "/focus", label: "Focus Timer" },
      { href: "/breathe", label: "Breathing" },
      { href: "/gratitude", label: "Gratitude Wall" },
      { href: "/journal", label: "Journal" },
      { href: "/screening", label: "Screening" },
      { href: "/resources", label: "Resources" },
    ],
  },
  {
    title: "Partnerships",
    links: [
      { href: "/partners", label: "Corporate Well-being" },
      { href: "/partners", label: "College Programmes" },
      { href: "/partners", label: "Webinars" },
    ],
  },
  {
    title: "Experts",
    links: [
      { href: "/experts", label: "Therapists" },
      { href: "/experts", label: "Psychiatrists" },
      { href: "/experts", label: "Youth Experts" },
    ],
  },
  {
    title: "Library",
    links: [
      { href: "/resources", label: "All Resources" },
      { href: "/resources", label: "Articles" },
      { href: "/resources", label: "Videos" },
      { href: "/screening", label: "Assessments" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-12 gap-10">
        {/* link columns */}
        <div className="md:col-span-9 grid sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {sections.map((sec) => (
            <div key={sec.title}>
              <h4 className="uppercase text-xs font-semibold tracking-wider text-muted-foreground mb-4">
                {sec.title}
              </h4>
              <ul className="space-y-2 text-sm">
                {sec.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="hover:text-primary transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* app badges */}
        <div className="md:col-span-3 flex flex-col items-start md:items-end gap-6">
          <div>
            <p className="font-medium mb-2 max-w-xs">Build a good life for yourself with Peace Code</p>
            <img src="/placeholder.svg" alt="Award badge" className="h-12 mb-4" />
            <div className="space-y-3">
              <img src="/placeholder.svg" alt="Google Play" className="h-10" />
              <img src="/placeholder.svg" alt="App Store" className="h-10" />
            </div>
          </div>
        </div>
      </div>

      {/* certifications */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-wrap justify-center gap-8">
        {[
          { src: "/placeholder-logo.png", alt: "ISO" },
          { src: "/placeholder-logo.png", alt: "HIPAA" },
          { src: "/placeholder-logo.png", alt: "EU" },
        ].map((c) => (
          <img key={c.alt} src={c.src} alt={c.alt} className="h-12 opacity-80" />
        ))}
      </div>

      {/* bottom bar */}
      <div className="border-t border-border py-6 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-wrap">
            <span>© {new Date().getFullYear()} Peace Code</span>
            <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary">Terms & Conditions</Link>
            <Link href="/cancellation" className="hover:text-primary">Cancellation Policy</Link>
            <Link href="/sitemap.xml" className="hover:text-primary">Sitemap</Link>
            <Link href="/hall-of-fame" className="hover:text-primary">Hall of Fame</Link>
          </div>

          {/* socials */}
          <div className="flex items-center gap-4">
            <Link href="#" aria-label="X"><X className="h-5 w-5" /></Link>
            <Link href="#" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></Link>
            <Link href="#" aria-label="Facebook"><Facebook className="h-5 w-5" /></Link>
            <Link href="#" aria-label="Instagram"><Instagram className="h-5 w-5" /></Link>
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-4 px-4 max-w-5xl mx-auto">
          Disclaimer: Peace Code provides digital self-help resources and access to licensed
          professionals. We are not equipped for severe psychiatric crises. If you or someone you
          know is experiencing suicidal thoughts or life-threatening situations, please contact your
          local emergency services or a trusted helpline immediately.
        </p>

        <p className="text-center text-xs mt-4">Made with ♥ by JAI MANN</p>
      </div>
    </footer>
  )
}
