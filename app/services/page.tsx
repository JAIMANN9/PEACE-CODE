import { Metadata } from "next"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Bot,
  Heart,
  Users,
  Timer,
  Wind,
  Smile,
  NotebookPen,
  Brain,
  BookOpen,
  ChevronRight,
} from "lucide-react"

export const metadata: Metadata = {
  title: "All Services | Peace Code",
}

const services = [
  {
    href: "/ai-support",
    icon: Bot,
    title: "AI Chatbot",
    description: "24/7 emotional support powered by AI, always ready to listen.",
  },
  {
    href: "/counseling",
    icon: Heart,
    title: "Counseling",
    description: "Book confidential sessions with licensed professionals.",
  },
  {
    href: "/community",
    icon: Users,
    title: "Community",
    description: "Peer-support forums and group chats moderated for safety.",
  },
  {
    href: "/focus",
    icon: Timer,
    title: "Focus Timer",
    description: "Pomodoro-style timer with soothing visuals and sounds.",
  },
  {
    href: "/breathe",
    icon: Wind,
    title: "Breathing Exercises",
    description: "Guided breathwork to calm your nervous system in minutes.",
  },
  {
    href: "/gratitude",
    icon: Smile,
    title: "Gratitude Wall",
    description: "Share and read positive messages from the community.",
  },
  {
    href: "/journal",
    icon: NotebookPen,
    title: "Journal",
    description: "Private journaling tool with mood tracking.",
  },
  {
    href: "/screening",
    icon: Brain,
    title: "Screening",
    description: "Science-backed assessments for mental-health insights.",
  },
  {
    href: "/resources",
    icon: BookOpen,
    title: "Resource Hub",
    description: "Curated psychoeducational articles, videos, and more.",
  },
]

export default function ServicesPage() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center">Our Services</h1>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
          Explore the complete toolkit of Peace Code. Click a service to dive deeper.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.href} className="hover:shadow-lg transition-shadow group">
              <Link href={service.href} className="block h-full">
                <CardHeader>
                  <service.icon className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground flex-1">
                  {service.description}
                </CardContent>
                <div className="p-4 pt-0 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ChevronRight className="inline h-4 w-4" />
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
