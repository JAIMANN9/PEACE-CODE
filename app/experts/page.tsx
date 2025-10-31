"use client"

import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useEffect, useState, useRef } from "react"
import { 
  Brain, 
  Heart, 
  Shield, 
  Award, 
  GraduationCap, 
  Users, 
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Star,
  Calendar,
  Clock,
  Globe,
  Languages,
  MessageSquare,
  BookOpen,
  Video,
  Phone
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ExpertsPage() {
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

  const experts = [
    {
      name: "Dr. Priya Sharma",
      title: "Clinical Psychologist & CBT Specialist",
      specialization: "Anxiety & Depression",
      experience: "12+ years",
      image: "/professional-counselor-therapy-session-mental-heal.jpg",
      credentials: ["Ph.D. Psychology", "CBT Certified", "Mindfulness Expert"],
      languages: ["English", "Hindi", "Tamil"],
      rating: 4.9,
      sessions: "10,000+",
      bio: "Specialized in helping students overcome academic stress and anxiety disorders. Trained in cognitive behavioral therapy with a focus on culturally-sensitive approaches."
    },
    {
      name: "Dr. Arjun Patel",
      title: "Psychiatrist & Mental Health Advocate",
      specialization: "Mood Disorders",
      experience: "15+ years",
      image: "/confident-young-man-student-mental-health-recovery.jpg",
      credentials: ["MD Psychiatry", "Board Certified", "Research Fellow"],
      languages: ["English", "Gujarati", "Hindi"],
      rating: 4.8,
      sessions: "15,000+",
      bio: "Leading expert in mood disorders and student mental health. Combines medication management with psychotherapy for comprehensive care."
    },
    {
      name: "Dr. Meera Nair",
      title: "Counseling Psychologist & Trauma Specialist",
      specialization: "Trauma & PTSD",
      experience: "10+ years",
      image: "/happy-young-woman-student-cultural-diversity-menta.jpg",
      credentials: ["M.Phil Psychology", "Trauma Certified", "EMDR Trained"],
      languages: ["English", "Malayalam", "Tamil"],
      rating: 4.95,
      sessions: "8,000+",
      bio: "Expert in trauma-informed care and helping students process difficult experiences. Specializes in culturally-responsive therapy for diverse populations."
    }
  ]

  const stats = [
    { label: "Expert Counselors", value: "150+", icon: Users },
    { label: "Years Combined Experience", value: "2,000+", icon: Award },
    { label: "Sessions Conducted", value: "500K+", icon: MessageSquare },
    { label: "Success Rate", value: "96%", icon: CheckCircle2 }
  ]

  const features = [
    {
      icon: Shield,
      title: "Verified Credentials",
      description: "All experts are licensed and verified by recognized mental health boards"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Access professional support whenever you need it, day or night"
    },
    {
      icon: Languages,
      title: "Multi-Language Support",
      description: "Communicate in your preferred language for better understanding"
    },
    {
      icon: Video,
      title: "Secure Video Sessions",
      description: "HIPAA-compliant video conferencing with end-to-end encryption"
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Book sessions that fit your academic schedule and timezone"
    },
    {
      icon: Heart,
      title: "Culturally Sensitive",
      description: "Experts trained in Indian cultural contexts and student life challenges"
    }
  ]

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />

      {/* Animated Background Elements */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(61, 108, 168, 0.05) 0%, transparent 50%)`
        }}
      />

      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            backgroundImage: "url(/peaceful-nature-landscape-mountains-meditation-su.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/10 to-background" />
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="scroll-reveal">
            <Badge 
              className="mb-8 px-6 py-3 text-lg bg-primary/20 text-primary border-primary/30 animate-float-in"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Expert Mental Health Support
            </Badge>
            
            <h1 className="text-6xl sm:text-7xl lg:text-9xl font-extrabold mb-8 text-balance leading-tight animate-text-gradient">
              Meet Our <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-shift bg-300%">Expert</span> Team
            </h1>
            
            <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up">
              World-class mental health professionals dedicated to your wellness journey. 
              Licensed, experienced, and culturally-aware experts ready to support you 24/7.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {["Licensed Professionals", "150+ Experts", "96% Success Rate", "10+ Languages"].map((tag, i) => (
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

            <div className="animate-bounce-slow">
              <Button size="lg" asChild className="text-xl px-12 py-6 bg-primary hover:bg-primary/90 shadow-2xl">
                <Link href="#experts">
                  Explore Experts <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center text-muted-foreground">
            <span className="text-sm mb-2">Scroll to Discover</span>
            <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-primary/5 to-background relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <Card 
                  key={index}
                  className="text-center p-8 bg-card/80 backdrop-blur-md border-primary/20 hover:shadow-2xl transition-all duration-500 scroll-reveal hover:scale-110 hover:border-primary/40 group"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="mb-4 flex justify-center">
                    <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2 animate-count-up">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Experts Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 scroll-reveal">
            <Badge variant="secondary" className="mb-6 px-6 py-2 text-base">
              Why Choose Our Experts
            </Badge>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              Excellence in Every <span className="text-primary">Session</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our team of mental health professionals brings decades of combined experience, 
              cutting-edge training, and deep cultural understanding to support your journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card
                  key={index}
                  className="p-8 bg-gradient-to-br from-card to-card/50 border-primary/10 hover:border-primary/30 hover:shadow-xl transition-all duration-500 scroll-reveal group hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Expert Profiles Section */}
      <section id="experts" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 scroll-reveal">
            <Badge variant="secondary" className="mb-6 px-6 py-2 text-base">
              Featured Experts
            </Badge>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              Your Trusted <span className="text-primary">Mental Health</span> Partners
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet some of our distinguished professionals who have helped thousands of students 
              navigate their mental health journey.
            </p>
          </div>

          <div className="space-y-32">
            {experts.map((expert, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center scroll-reveal ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="flex items-center gap-4">
                    <Badge variant="outline" className="px-4 py-2 bg-primary/10 text-primary border-primary/30">
                      <Star className="w-4 h-4 mr-2 fill-primary" />
                      Top Rated
                    </Badge>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-5 h-5 ${i < Math.floor(expert.rating) ? "fill-primary text-primary" : "text-muted-foreground"}`}
                        />
                      ))}
                      <span className="ml-2 font-semibold">{expert.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-4xl sm:text-5xl font-bold text-foreground">
                    {expert.name}
                  </h3>
                  
                  <p className="text-xl text-primary font-semibold">
                    {expert.title}
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {expert.bio}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <GraduationCap className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">{expert.experience}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MessageSquare className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">{expert.sessions} Sessions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Brain className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">{expert.specialization}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">{expert.languages.join(", ")}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {expert.credentials.map((cred, i) => (
                      <Badge key={i} variant="secondary" className="px-3 py-1">
                        {cred}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button size="lg" asChild className="flex-1">
                      <Link href="/counseling">
                        Book Session <Calendar className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <Link href="/counseling">
                        View Profile <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className={`relative ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent z-10" />
                    <img
                      src={expert.image}
                      alt={expert.name}
                      className="w-full h-[600px] object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute bottom-6 left-6 right-6 z-20">
                      <div className="bg-white/90 backdrop-blur-md rounded-xl p-4">
                        <div className="text-sm text-muted-foreground mb-1">Specialization</div>
                        <div className="text-lg font-bold text-foreground">{expert.specialization}</div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-8 -right-8 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-float" />
                  <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 scroll-reveal">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              Areas of <span className="text-primary">Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our experts specialize in a wide range of mental health areas to address your unique needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Anxiety Disorders", icon: Brain, color: "from-blue-500 to-blue-600" },
              { name: "Depression", icon: Heart, color: "from-purple-500 to-purple-600" },
              { name: "Academic Stress", icon: BookOpen, color: "from-green-500 to-green-600" },
              { name: "Relationship Issues", icon: Users, color: "from-pink-500 to-pink-600" },
              { name: "Trauma & PTSD", icon: Shield, color: "from-orange-500 to-orange-600" },
              { name: "Eating Disorders", icon: Heart, color: "from-red-500 to-red-600" },
              { name: "Sleep Disorders", icon: Clock, color: "from-indigo-500 to-indigo-600" },
              { name: "Substance Abuse", icon: Shield, color: "from-teal-500 to-teal-600" }
            ].map((area, index) => {
              const Icon = area.icon
              return (
                <Card
                  key={index}
                  className="p-6 bg-gradient-to-br border-2 hover:border-primary/50 transition-all duration-500 scroll-reveal group hover:scale-105 cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${area.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {area.name}
                  </h3>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary/90 to-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-20" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 scroll-reveal">
          <Brain className="w-20 h-20 text-white/20 mx-auto mb-8 animate-pulse" />
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            Ready to Start Your <span className="text-accent">Healing Journey</span>?
          </h2>
          <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
            Connect with a licensed mental health expert today and take the first step towards 
            better mental wellness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-xl px-12 py-6 bg-white text-primary hover:bg-white/90 shadow-2xl">
              <Link href="/counseling">
                Book Your Session <Calendar className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-xl px-12 py-6 border-2 border-white text-white hover:bg-white/10">
              <Link href="/about/about-peace-code">
                Learn More <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}