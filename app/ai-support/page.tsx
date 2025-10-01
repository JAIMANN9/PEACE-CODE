"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { AIChatbot } from "@/components/ai-support/ai-chatbot"
import { Button } from "@/components/ui/button"
import { MessageSquare, Wind, Edit3, ClipboardList, ShieldCheck, Heart, Info, UserCheck, Clock } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  { icon: ShieldCheck, title: "Anxiety & Stress", description: "Learn coping strategies for academic pressure and worry." },
  { icon: Heart, title: "Feeling Down", description: "A safe space to talk when you're feeling sad or hopeless." },
  { icon: Edit3, title: "Building Habits", description: "Get tips on self-care, mindfulness, and staying positive." },
  { icon: Wind, title: "Mindfulness", description: "Explore techniques to stay present and focused." },
]

export default function AISupportPage() {
  const [isChatVisible, setIsChatVisible] = useState(false)

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed")
          }
        })
      },
      { threshold: 0.1 },
    )
    const scrollElements = document.querySelectorAll(".scroll-reveal")
    scrollElements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  if (isChatVisible) {
    return (
      <div className="h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 grid grid-cols-10 gap-8 p-8 pt-24 overflow-hidden">
          {/* Chatbot Section (70%) */}
          <div className="col-span-7 h-full">
            <AIChatbot />
          </div>

          {/* Information Sidebar (30%) */}
          <aside className="col-span-3 h-full overflow-y-auto space-y-6">
            <h2 className="text-2xl font-bold">Good to Know</h2>
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader className="flex flex-row items-center gap-3">
                <UserCheck className="w-6 h-6 text-primary" />
                <CardTitle>Your Privacy Matters</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your conversation is anonymous and secure. We do not store personal data from your chats.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-yellow-50 border-yellow-200">
              <CardHeader className="flex flex-row items-center gap-3">
                <Info className="w-6 h-6 text-yellow-700" />
                <CardTitle>This is Not a Diagnosis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-yellow-800">
                  MindBot is a supportive companion, not a medical professional. For a diagnosis, please consult a licensed therapist.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-3">
                <Clock className="w-6 h-6 text-foreground" />
                <CardTitle>Available 24/7</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  I'm always here to listen, whether it's day or night.
                </p>
              </CardContent>
            </Card>
            <Button onClick={() => setIsChatVisible(false)}>End Chat & Go Back</Button>
          </aside>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <video
              src="/1.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-40 h-40 mx-auto rounded-full"
            />
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-4">Meet MindBot, Your AI Companion</h1>
            <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
              I'm here to listen and help you navigate the ups and downs of student life. Ready to talk?
            </p>
            <Button size="lg" className="mt-8 text-lg" onClick={() => setIsChatVisible(true)}>
              <MessageSquare className="w-6 h-6 mr-2" />
              Start Chat
            </Button>
          </div>
        </section>

          {/* How I can help section */}
          <section className="py-16">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold">What We Can Talk About</h2>
                <p className="text-muted-foreground mt-2">I can provide support and strategies for a range of topics.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <Card key={index} className="bg-white/60 backdrop-blur-sm border-primary/10 scroll-reveal">
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Explore Other Tools Section */}
          <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold">A Whole Universe of Support</h2>
              <p className="text-muted-foreground mt-2 mb-8">
                MindBot is just the beginning. Explore our other tools to build a complete wellness routine.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="lg">
                  <Link href="/breathe">Breathing Exercises</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/journal">Digital Journal</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/screening">Self-Assessments</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/community">Peer Community</Link>
                </Button>
              </div>
            </div>
          </section>

        {/* Final CTA */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
            <p className="text-muted-foreground mt-2 mb-8">Click the button below to start your confidential conversation with MindBot.</p>
            <Button size="lg" className="text-lg" onClick={() => setIsChatVisible(true)}>
              <MessageSquare className="w-6 h-6 mr-2" />
              Chat Now
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
