"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useLanguage } from "@/lib/language-context"

function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

function HomePage() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

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

    // Observe all scroll-reveal elements
    const scrollElements = document.querySelectorAll(".scroll-reveal")
    scrollElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src="/peaceful-ocean-waves-gentle-meditation-calming-bl.jpg" alt="Peaceful background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-blue-900/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div
            className={`transition-all duration-1200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            <Badge
              variant="secondary"
              className="px-8 py-3 text-lg font-medium bg-white/20 backdrop-blur-md text-white border-white/30 mb-8"
            >
              <span className="mr-2">✨</span>
              Your Digital Sanctuary
            </Badge>

            <h1 className="text-6xl sm:text-7xl lg:text-9xl font-bold text-white mb-8 text-balance leading-[0.9] text-shadow-soft">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent animate-gradient-shift">
                Peace Code
              </span>
            </h1>

            <p className="text-2xl sm:text-3xl text-white/90 mb-12 max-w-5xl mx-auto text-pretty leading-relaxed text-shadow-soft">
              India's most compassionate Digital Psychological Intervention System for students. Experience AI-guided
              support, professional counseling, and healing resources.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                asChild
                className="text-xl px-16 py-8 group bg-white text-primary hover:bg-white/90 hover:shadow-2xl transition-all duration-300"
              >
                <Link href="/ai-support">
                  <span className="mr-3">💙</span>
                  Find Your Peace Now
                  <span className="ml-3">→</span>
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="text-xl px-16 py-8 bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 transition-all duration-300"
              >
                <Link href="/screening">
                  <span className="mr-3">🧠</span>
                  Gentle Self-Assessment
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2">Discover More</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section with Parallax */}
      <section className="section-spacing bg-gradient-to-br from-primary/5 via-white to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 scroll-reveal">
            <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-8 text-balance">
              Transforming Lives <span className="text-primary">Across India</span>
            </h2>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
              Real impact, real results from our compassionate mental health platform
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {[
              { value: 50000, suffix: "+", label: "Hearts Healed", icon: "💙", description: "Students supported" },
              { value: 24, suffix: "/7", label: "Always Here", icon: "⏰", description: "Round-the-clock care" },
              { value: 10, suffix: "+", label: "Languages", icon: "🌍", description: "Regional support" },
              { value: 95, suffix: "%", label: "Find Peace", icon: "🌿", description: "Success rate" },
            ].map((stat, index) => (
              <Card
                key={index}
                className="text-center p-8 bg-white/80 backdrop-blur-sm border-primary/10 hover:shadow-2xl transition-all duration-500 scroll-reveal group"
              >
                <div className="mx-auto mb-6 p-6 bg-primary/10 rounded-3xl w-fit group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">{stat.icon}</span>
                </div>
                <div className="text-4xl font-bold text-primary mb-3">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{stat.label}</h3>
                <p className="text-muted-foreground">{stat.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Immersive Features Section with Images */}
      <section className="section-spacing-lg bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 scroll-reveal">
            <Badge variant="secondary" className="mb-8 px-8 py-3 text-lg bg-accent/10 text-accent border-accent/20">
              <span className="mr-2">🌿</span>
              Wellness Tools & Features
            </Badge>
            <h2 className="text-6xl sm:text-7xl font-bold text-foreground mb-12 text-balance">
              Your Journey to{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Wellness</span>
            </h2>
            <p className="text-2xl text-muted-foreground max-w-5xl mx-auto text-pretty leading-relaxed">
              Discover our comprehensive suite of mental health tools designed to support your daily wellness journey
            </p>
          </div>

          {/* Feature Cards with Large Images */}
          <div className="space-y-32">
            {[
              {
                icon: "📝",
                title: "Digital Journal",
                description:
                  "Express your thoughts and track your mood with our therapeutic journaling experience. Write freely in a safe, private space designed for healing.",
                href: "/journal",
                image: "/peaceful-writing-desk-with-journal-soft-lighting-m.jpg",
                features: ["Mood Tracking", "Private & Secure", "Guided Prompts", "Progress Insights"],
                reverse: false,
              },
              {
                icon: "🌬️",
                title: "Breathe Pacer",
                description:
                  "Guided breathing exercises to calm your mind and reduce anxiety instantly. Experience the power of mindful breathing with our immersive interface.",
                href: "/breathe",
                image: "/serene-meditation-breathing-exercise-calm-blue-atm.jpg",
                features: ["Multiple Techniques", "Customizable Sessions", "Calming Visuals", "Stress Relief"],
                reverse: true,
              },
              {
                icon: "⏱️",
                title: "Focus Flow",
                description:
                  "Pomodoro timer with ambient sounds to enhance your productivity and focus. Create the perfect environment for deep work and study sessions.",
                href: "/focus",
                image: "/focused-study-environment-productivity-timer-ambie.jpg",
                features: ["Pomodoro Timer", "Ambient Sounds", "Task Management", "Focus Analytics"],
                reverse: false,
              },
              {
                icon: "✨",
                title: "Gratitude Wall",
                description:
                  "Share and discover positive messages in our community gratitude space. Connect with others through the power of gratitude and positivity.",
                href: "/gratitude",
                image: "/community-gratitude-wall-positive-messages-hope-in.jpg",
                features: ["Anonymous Sharing", "Community Support", "Daily Inspiration", "Positive Vibes"],
                reverse: true,
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center scroll-reveal ${feature.reverse ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={`space-y-8 ${feature.reverse ? "lg:col-start-2" : ""}`}>
                  <div className="flex items-center space-x-4">
                    <div className="p-4 bg-primary/10 rounded-2xl">
                      <span className="text-3xl">{feature.icon}</span>
                    </div>
                    <Badge variant="outline" className="px-4 py-2 text-sm bg-primary/5 border-primary/20">
                      New Feature
                    </Badge>
                  </div>

                  <h3 className="text-5xl font-bold text-foreground text-balance">{feature.title}</h3>

                  <p className="text-xl text-muted-foreground leading-relaxed text-pretty">{feature.description}</p>

                  <div className="grid grid-cols-2 gap-4">
                    {feature.features.map((feat, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-foreground font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>

                  <Button asChild size="lg" className="text-lg px-8 py-4">
                    <Link href={feature.href}>
                      Try {feature.title}
                      <span className="ml-2">→</span>
                    </Link>
                  </Button>
                </div>

                <div className={`relative ${feature.reverse ? "lg:col-start-1" : ""}`}>
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                    <img
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
                  </div>
                  <div className="absolute -top-8 -right-8 w-24 h-24 bg-accent/20 rounded-full animate-parallax-float"></div>
                  <div
                    className="absolute -bottom-8 -left-8 w-16 h-16 bg-primary/20 rounded-full animate-parallax-float"
                    style={{ animationDelay: "2s" }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Section with static background image instead of video */}
      <section
        className="parallax-section relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage:
            "url(/placeholder.svg?height=1080&width=1920&query=peaceful nature landscape mountains meditation sunrise calm)",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-blue-900/50"></div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h2 className="text-6xl sm:text-7xl font-bold mb-8 text-shadow-soft text-balance">
            Mental Health <span className="text-blue-200">Matters Deeply</span>
          </h2>
          <p className="text-2xl mb-12 text-white/90 text-pretty leading-relaxed text-shadow-soft">
            Join thousands of students across India who have found support, community, and healing through our
            compassionate digital sanctuary
          </p>
          <Button size="lg" asChild className="text-xl px-12 py-6 bg-white text-primary hover:bg-white/90">
            <Link href="/ai-support">
              Start Your Healing Journey
              <span className="ml-3">→</span>
            </Link>
          </Button>
        </div>
      </section>

      {/* Testimonials & Stories Section */}
      <section className="section-spacing-lg bg-gradient-to-br from-accent/5 via-white to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 scroll-reveal">
            <h2 className="text-6xl font-bold text-foreground mb-8">
              Stories of <span className="text-primary">Healing</span>
            </h2>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto">
              Real experiences from students who found their path to wellness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                quote:
                  "Peace Code helped me through my darkest moments. The AI support was there when I needed it most, and the breathing exercises became my daily ritual.",
                author: "Priya, Engineering Student",
                location: "Mumbai",
                image: "/peaceful-young-woman-student-smiling-hope-recovery.jpg",
              },
              {
                quote:
                  "The community support and professional counseling changed my perspective on mental health. I'm no longer afraid to seek help.",
                author: "Arjun, Medical Student",
                location: "Delhi",
                image: "/confident-young-man-student-mental-health-recovery.jpg",
              },
              {
                quote:
                  "Having resources in my regional language made all the difference. Finally, mental health support that understands my culture.",
                author: "Meera, Arts Student",
                location: "Chennai",
                image: "/happy-young-woman-student-cultural-diversity-menta.jpg",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="p-8 bg-white/80 backdrop-blur-sm border-primary/10 hover:shadow-2xl transition-all duration-500 scroll-reveal"
              >
                <div className="mb-6">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                  />
                </div>
                <blockquote className="text-lg text-muted-foreground mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="text-center">
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Support Section */}
      <section className="section-spacing bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 scroll-reveal">
              <Badge variant="secondary" className="px-6 py-2 bg-primary/10 text-primary border-primary/20">
                Professional Care
              </Badge>
              <h2 className="text-5xl font-bold text-foreground text-balance">
                Licensed Counselors <span className="text-primary">Ready to Help</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Connect with qualified mental health professionals who understand the unique challenges faced by Indian
                students. Our counselors are trained in culturally sensitive approaches to mental health care.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: "🎓",
                    title: "Student-Focused",
                    desc: "Specialized in academic stress and student life challenges",
                  },
                  {
                    icon: "🌍",
                    title: "Cultural Understanding",
                    desc: "Counselors who understand Indian family dynamics and cultural context",
                  },
                  { icon: "🔒", title: "Complete Privacy", desc: "Confidential sessions with end-to-end encryption" },
                  { icon: "⏰", title: "Flexible Scheduling", desc: "Sessions that fit around your academic schedule" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <span className="text-xl">{item.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button size="lg" asChild className="text-lg px-8 py-4">
                <Link href="/counseling">
                  Book a Session
                  <span className="ml-2">→</span>
                </Link>
              </Button>
            </div>

            <div className="relative scroll-reveal">
              <img
                src="/professional-counselor-therapy-session-mental-heal.jpg"
                alt="Professional Counseling"
                className="w-full h-[700px] object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Community & Resources Section */}
      <section className="section-spacing-lg bg-gradient-to-br from-primary/5 via-accent/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 scroll-reveal">
            <h2 className="text-6xl font-bold text-foreground mb-8">
              A <span className="text-primary">Community</span> That Cares
            </h2>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto">
              Connect with peers, access resources, and build lasting support networks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                icon: "👥",
                title: "Peer Support Groups",
                description: "Join moderated discussion groups with fellow students facing similar challenges",
                image: "/diverse-group-students-supporting-each-other-commu.jpg",
                features: ["Anonymous Participation", "Moderated Discussions", "Safe Space"],
              },
              {
                icon: "📚",
                title: "Resource Library",
                description: "Access thousands of articles, videos, and guides on mental health and wellness",
                image: "/digital-library-mental-health-resources-books-know.jpg",
                features: ["10+ Languages", "Expert Content", "Regular Updates"],
              },
              {
                icon: "🎯",
                title: "Wellness Challenges",
                description: "Participate in community challenges designed to build healthy habits together",
                image: "/wellness-challenge-community-motivation-healthy-ha.jpg",
                features: ["Daily Challenges", "Community Progress", "Rewards System"],
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden bg-white/80 backdrop-blur-sm border-primary/10 hover:shadow-2xl transition-all duration-500 scroll-reveal group"
              >
                <div className="relative">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 p-3 bg-white/90 backdrop-blur-sm rounded-xl">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">{item.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{item.description}</p>
                  <div className="space-y-2">
                    {item.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/sunrise-hope-new-beginning-peaceful-nature-healin.jpg"
            alt="Healing journey background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-blue-900/40 to-blue-900/60"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <Badge
            variant="outline"
            className="mb-8 px-8 py-3 text-xl bg-white/20 backdrop-blur-md border-white/30 text-white"
          >
            <span className="mr-2">✨</span>
            Begin Your Healing Journey
          </Badge>

          <h2 className="text-6xl sm:text-7xl font-bold text-white mb-8 text-balance text-shadow-soft">
            Your Mental Health <span className="text-blue-200">Journey Starts Here</span>
          </h2>

          <p className="text-2xl text-white/90 mb-12 text-pretty max-w-5xl mx-auto leading-relaxed text-shadow-soft">
            Join thousands of students across India who have found support, community, and healing through our
            compassionate digital mental health sanctuary. Available 24/7 in your language, with your culture in mind.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button
              size="lg"
              asChild
              className="text-xl px-16 py-8 group bg-white text-primary hover:bg-white/90 hover:shadow-2xl transition-all duration-300"
            >
              <Link href="/ai-support">
                <span className="mr-3">💬</span>
                Start Healing Conversation
                <span className="ml-3">→</span>
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="text-xl px-16 py-8 bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 transition-all duration-300"
            >
              <Link href="/counseling">
                <span className="mr-3">💙</span>
                Connect with Professional Care
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: "🛡️", text: "100% Confidential & Safe" },
              { icon: "⏰", text: "24/7 Compassionate Support" },
              { icon: "🌍", text: "10+ Regional Languages" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center space-x-4 p-6 rounded-2xl bg-white/10 backdrop-blur-md"
              >
                <div className="p-4 bg-white/20 rounded-xl">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <span className="font-semibold text-white text-lg">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-foreground text-background py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-3xl">💙</span>
                <span className="text-3xl font-bold">Peace Code</span>
              </div>
              <p className="text-background/80 text-lg mb-8 leading-relaxed">
                Supporting student mental health through professional counseling, peer community, and comprehensive
                resources. Your journey to wellness starts here.
              </p>
              <div className="bg-background/10 rounded-2xl p-6">
                <h4 className="font-semibold mb-3 text-xl">Tale of the Site</h4>
                <p className="text-background/70 leading-relaxed">
                  Peace Code was born from a vision to make mental health support accessible to every student in India.
                  Through innovative technology and compassionate care, we're building bridges to wellness.
                </p>
                <p className="text-background/70 mt-4 font-medium">Site is developed by JAI MANN.</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-6 text-xl">Wellness Tools</h3>
              <ul className="space-y-4">
                {[
                  { name: "Digital Journal", href: "/journal" },
                  { name: "Breathe Pacer", href: "/breathe" },
                  { name: "Focus Flow Timer", href: "/focus" },
                  { name: "Gratitude Wall", href: "/gratitude" },
                ].map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-background/80 hover:text-background transition-colors text-lg"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-6 text-xl">Support</h3>
              <ul className="space-y-4">
                {[
                  { name: "Professional Counseling", href: "/counseling" },
                  { name: "Community Support", href: "/community" },
                  { name: "AI Companion", href: "/ai-support" },
                  { name: "Mental Health Screening", href: "/screening" },
                  { name: "Crisis Support", href: "/crisis" },
                ].map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-background/80 hover:text-background transition-colors text-lg"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8 text-center">
            <p className="text-background/70 text-lg">
              © 2025 Peace Code. All rights reserved. • If you're in crisis, please contact emergency services or call
              988.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage
