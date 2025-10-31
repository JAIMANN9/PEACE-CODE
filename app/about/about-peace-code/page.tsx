"use client"

import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useEffect, useState, useRef } from "react"
import { 
  Heart, 
  Brain, 
  Shield, 
  Users, 
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Globe,
  Clock,
  Target,
  TrendingUp,
  Award,
  BookOpen,
  MessageSquare,
  Video,
  Lock,
  Zap,
  Lightbulb,
  Star,
  Calendar,
  Languages,
  Smile
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPeaceCodePage() {
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)

    // Intersection Observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed")
            entry.target.classList.add("animate-on-scroll")
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    )

    const scrollElements = document.querySelectorAll(".scroll-reveal")
    scrollElements.forEach((el) => observerRef.current?.observe(el))

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
      observerRef.current?.disconnect()
    }
  }, [])

  const values = [
    {
      icon: Heart,
      title: "Compassion First",
      description: "Every interaction is grounded in empathy and respect for lived experience. We understand that mental health journeys are deeply personal and unique.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Brain,
      title: "Science-Backed",
      description: "We iterate based on cutting-edge research, clinical data, and evidence-based best practices from leading mental health institutions worldwide.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Inclusivity",
      description: "Mental health is universal. Our platform embraces all identities, backgrounds, languages, and cultures with open arms and zero judgment.",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Lock,
      title: "Privacy & Trust",
      description: "User trust is sacred. We employ end-to-end encryption, strict data ethics, and HIPAA-compliant infrastructure to protect your information.",
      color: "from-green-500 to-emerald-500"
    }
  ]

  const achievements = [
    { label: "Active Users", value: "500K+", icon: Users },
    { label: "Sessions Completed", value: "2M+", icon: MessageSquare },
    { label: "Expert Counselors", value: "150+", icon: Award },
    { label: "Success Rate", value: "96%", icon: TrendingUp },
    { label: "Countries Reached", value: "50+", icon: Globe },
    { label: "Languages Supported", value: "10+", icon: Languages }
  ]

  const features = [
    {
      icon: Zap,
      title: "AI-Powered Support 24/7",
      description: "Confidential conversations with our GPT-trained chatbot any time you need to talk. Get instant support, crisis intervention, and personalized coping strategies.",
      image: "/happy-young-woman-student-cultural-diversity-menta.jpg"
    },
    {
      icon: Users,
      title: "Licensed Professionals",
      description: "Book video sessions with vetted therapists at student-friendly prices. All counselors are licensed, culturally-aware, and specialized in student mental health.",
      image: "/professional-counselor-therapy-session-mental-heal.jpg",
      reverse: true
    },
    {
      icon: Heart,
      title: "Community & Peer Groups",
      description: "Safe, moderated spaces to share experiences and feel understood. Connect with peers who understand your journey and build lasting support networks.",
      image: "/diverse-group-students-supporting-each-other-commu.jpg"
    },
    {
      icon: Sparkles,
      title: "Evidence-Based Tools",
      description: "Focus timer, breathing exercises, gratitude wall, journaling, and more––all in one place. Each tool is backed by clinical research and proven to improve mental wellness.",
      image: "/peaceful-writing-desk-with-journal-soft-lighting-m.jpg",
      reverse: true
    }
  ]

  const approach = [
    {
      icon: Award,
      title: "Led by Experts",
      description: "Our clinical board of psychologists and psychiatrists ensure every feature meets international evidence-based standards. We collaborate with leading mental health institutions."
    },
    {
      icon: Target,
      title: "Personalized Care",
      description: "Smart assessments tailor recommendations to your goals, schedule, cultural context, and unique challenges. Your journey is as individual as you are."
    },
    {
      icon: Users,
      title: "Community First",
      description: "We believe healing happens together. Moderated groups foster empathy, accountability, hope, and genuine connections that last beyond the platform."
    }
  ]

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />

      {/* Animated Background Elements */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(61, 108, 168, 0.03) 0%, transparent 50%)`
        }}
      />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            backgroundImage: "url(/peaceful-nature-landscape-mountains-meditation-su.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-primary/10 to-background" />
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="scroll-reveal">
            <Badge 
              className="mb-8 px-6 py-3 text-lg bg-primary/20 text-primary border-primary/30 animate-float-in"
            >
              <Heart className="w-4 h-4 mr-2" />
              Your Digital Sanctuary for Mental Wellness
            </Badge>
            
            <h1 className="text-6xl sm:text-7xl lg:text-9xl font-extrabold mb-8 text-balance leading-tight animate-text-gradient">
              About <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-shift bg-300%">Peace Code</span>
            </h1>
            
            <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 max-w-5xl mx-auto leading-relaxed animate-slide-up">
              Your digital sanctuary for mental wellness, resilience, and community. 
              Empowering students across India and beyond to take charge of their mental health journey.
            </p>

            <p className="text-lg sm:text-xl text-muted-foreground/80 mb-12 max-w-4xl mx-auto leading-relaxed">
              We bring together the latest science in clinical psychology with intuitive technology, 
              creating a holistic platform that supports you from first check-in to lasting growth.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {["Founded 2023", "500K+ Users", "150+ Experts", "96% Success Rate"].map((tag, i) => (
                <Badge 
                  key={i} 
                  variant="secondary"
                  className="px-6 py-2 text-base animate-scale-in"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <Button size="lg" asChild className="text-xl px-12 py-6 bg-primary hover:bg-primary/90 shadow-2xl">
              <Link href="/auth/signup">
                Join Our Community <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center text-muted-foreground">
            <span className="text-sm mb-2">Scroll to Explore</span>
            <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* THE PROBLEM SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-red-500 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1.5s" }} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 scroll-reveal">
            <Badge variant="outline" className="mb-6 px-6 py-2 text-base border-red-300 text-red-600 bg-red-50">
              The Challenge We're Solving
            </Badge>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 text-balance">
              The <span className="text-primary">Problem</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 scroll-reveal">
              <p className="text-xl sm:text-2xl leading-relaxed text-muted-foreground">
                <span className="font-bold text-foreground text-3xl">70%</span> of students worldwide report feeling overwhelmed by academic pressure, 
                social media comparison, and uncertainty about the future.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                Yet <strong className="text-foreground">stigma</strong>, lack of time, and limited access to affordable care stop many from getting help when they need it most. 
                The resulting mental-health crisis fuels dropout rates, loneliness, and lost potential.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {[
                  { stat: "70%", label: "Students Feel Overwhelmed" },
                  { stat: "85%", label: "Never Seek Professional Help" },
                  { stat: "60%", label: "Dropout Risk Due to Stress" },
                  { stat: "90%", label: "Face Stigma Barriers" }
                ].map((item, i) => (
                  <Card key={i} className="p-4 bg-card/80 border-primary/10">
                    <div className="text-3xl font-bold text-primary mb-1">{item.stat}</div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="relative scroll-reveal">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="/confident-young-man-student-mental-health-recovery.jpg"
                  alt="Student facing challenges"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR SOLUTION SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 scroll-reveal">
            <Badge variant="secondary" className="mb-6 px-6 py-2 text-base">
              Our Approach
            </Badge>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              The Peace Code <span className="text-primary">Solution</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Peace Code brings together the latest science in clinical psychology with intuitive technology, 
              empowering young people to take charge of their well-being wherever they are.
            </p>
          </div>

          <div className="space-y-32">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-16 items-center scroll-reveal ${
                    feature.reverse ? "lg:grid-flow-col-dense" : ""
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className={`space-y-8 ${feature.reverse ? "lg:col-start-2" : ""}`}>
                    <div className="flex items-center gap-4">
                      <div className="p-4 bg-primary/10 rounded-2xl">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <Badge variant="outline" className="px-4 py-2 text-sm bg-primary/5 border-primary/20">
                        Core Feature
                      </Badge>
                    </div>

                    <h3 className="text-4xl sm:text-5xl font-bold text-foreground text-balance">
                      {feature.title}
                    </h3>

                    <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>

                    <div className="flex gap-4">
                      <Button size="lg" asChild>
                        <Link href="/auth/signup">
                          Try It Now <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                      <Button size="lg" variant="outline" asChild>
                        <Link href="/services">
                          Learn More
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <div className={`relative ${feature.reverse ? "lg:col-start-1" : ""}`}>
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-[600px] object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
                    </div>
                    <div className="absolute -top-8 -right-8 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-float" />
                    <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 via-background to-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 scroll-reveal">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              Our <span className="text-primary">Impact</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Numbers that tell a story of growth, trust, and real-world change
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <Card 
                  key={index}
                  className="text-center p-6 bg-card/80 backdrop-blur-md border-primary/20 hover:shadow-xl transition-all duration-500 scroll-reveal hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {achievement.value}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground font-medium">
                    {achievement.label}
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* APPROACH CARDS SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 scroll-reveal">
            <Badge variant="secondary" className="mb-6 px-6 py-2 text-base">
              Our Methodology
            </Badge>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              Our <span className="text-primary">Approach</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We build holistic care pathways that follow you from first check-in to lasting growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {approach.map((item, index) => {
              const Icon = item.icon
              return (
                <Card
                  key={index}
                  className="p-8 bg-gradient-to-br from-card to-card/50 border-primary/10 hover:border-primary/30 hover:shadow-xl transition-all duration-500 scroll-reveal group hover:scale-105"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* MISSION & VISION SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <Card className="p-10 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 scroll-reveal hover:shadow-2xl transition-all duration-500">
              <div className="mb-6">
                <Target className="w-12 h-12 text-primary mb-4" />
                <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
                  Our Mission
                </h2>
              </div>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                To democratise mental-health support for every student and young professional, so 
                they can thrive academically, socially, and personally. We believe that access to 
                quality mental health care should be a right, not a privilege.
              </p>
            </Card>

            <Card className="p-10 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20 scroll-reveal hover:shadow-2xl transition-all duration-500">
              <div className="mb-6">
                <Lightbulb className="w-12 h-12 text-accent mb-4" />
                <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
                  Our Vision
                </h2>
              </div>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                A world where emotional resilience is taught as fundamentally as literacy, and help 
                is as close as your nearest device. A future where mental wellness is prioritized, 
                stigma is eliminated, and every individual has the tools and support they need to flourish.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 scroll-reveal">
            <Badge variant="secondary" className="mb-6 px-6 py-2 text-base">
              What Guides Us
            </Badge>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              Our <span className="text-primary">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that shape every decision, every feature, and every interaction on our platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card
                  key={index}
                  className="p-8 bg-gradient-to-br from-card to-card/50 border-2 hover:border-primary/50 transition-all duration-500 scroll-reveal group hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY & INNOVATION SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 scroll-reveal">
            <Badge variant="outline" className="mb-6 px-6 py-2 text-base">
              Powered by Innovation
            </Badge>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              Technology Meets <span className="text-primary">Compassion</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              We leverage cutting-edge technology to deliver personalized, accessible, and effective mental health support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Brain, title: "AI-Powered Insights", desc: "Machine learning helps personalize your journey" },
              { icon: Shield, title: "End-to-End Encryption", desc: "Military-grade security for your data" },
              { icon: Globe, title: "Global Infrastructure", desc: "Lightning-fast access from anywhere" },
              { icon: Zap, title: "Real-Time Support", desc: "Instant responses when you need them most" }
            ].map((tech, index) => {
              const Icon = tech.icon
              return (
                <Card
                  key={index}
                  className="p-6 text-center bg-card/80 border-primary/10 hover:border-primary/30 hover:shadow-xl transition-all duration-500 scroll-reveal hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-4 flex justify-center">
                    <div className="p-4 bg-primary/10 rounded-xl">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">{tech.title}</h3>
                  <p className="text-sm text-muted-foreground">{tech.desc}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary/90 to-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-20" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 scroll-reveal">
          <Smile className="w-20 h-20 text-white/20 mx-auto mb-8 animate-pulse" />
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            Ready to Begin Your <span className="text-accent">Journey</span>?
          </h2>
          <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of learners already building healthier habits with Peace Code. 
            Your path to mental wellness starts with a single step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-xl px-12 py-6 bg-white text-primary hover:bg-white/90 shadow-2xl">
              <Link href="/auth/signup">
                Create Your Free Account <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-xl px-12 py-6 border-2 border-white text-white hover:bg-white/10">
              <Link href="/services">
                Explore Services <Sparkles className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}