"use client"

import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useEffect, useState, useRef } from "react"
import { 
  BookOpen, 
  Video, 
  Headphones, 
  FileText, 
  Globe, 
  Heart,
  Brain,
  Zap,
  Shield,
  Download,
  Play,
  Star,
  Clock,
  Users,
  Lightbulb,
  Target,
  Calendar,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Award,
  Sparkles,
  ArrowRight,
  Search,
  Filter,
  Bookmark,
  Share2,
  BarChart,
  BrainCircuit,
  Activity,
  Moon,
  Sunrise,
  Smile,
  Camera,
  Mic,
  FileCheck,
  GraduationCap,
  MessageSquare,
  Phone,
  Bell,
  Flame,
  Puzzle,
  Layers
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ResourcesPage() {
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

  const resourceCategories = [
    {
      icon: Video,
      title: "Video Masterclasses",
      count: "150+",
      description: "Expert-led video series on mental health topics, coping strategies, and wellness techniques",
      color: "from-blue-500 to-cyan-500",
      image: "/professional-counselor-therapy-session-mental-heal.jpg"
    },
    {
      icon: Headphones,
      title: "Audio Library",
      count: "200+",
      description: "Guided meditations, breathing exercises, sleep stories, and relaxation audio content",
      color: "from-purple-500 to-pink-500",
      image: "/serene-meditation-breathing-exercise-calm-blue-atm.jpg"
    },
    {
      icon: FileText,
      title: "Downloadable Guides",
      count: "100+",
      description: "Comprehensive PDFs, worksheets, and interactive tools for self-paced learning",
      color: "from-green-500 to-emerald-500",
      image: "/digital-library-mental-health-resources-books-know.jpg"
    },
    {
      icon: Brain,
      title: "Interactive Tools",
      count: "50+",
      description: "Self-assessment quizzes, mood trackers, goal-setting templates, and digital exercises",
      color: "from-orange-500 to-red-500",
      image: "/focused-study-environment-productivity-timer-ambie.jpg"
    },
    {
      icon: Shield,
      title: "Crisis Resources",
      count: "25+",
      description: "Immediate support guides, safety plans, and emergency mental health resources",
      color: "from-red-500 to-orange-500",
      image: "/peaceful-nature-landscape-mountains-meditation-su.jpg"
    },
    {
      icon: Users,
      title: "Peer Stories",
      count: "300+",
      description: "Real experiences, testimonials, and recovery stories from students like you",
      color: "from-indigo-500 to-purple-500",
      image: "/diverse-group-students-supporting-each-other-commu.jpg"
    }
  ]

  const featuredResources = [
    {
      title: "Anxiety Management Masterclass",
      type: "Video Series",
      duration: "8 episodes",
      expert: "Dr. Priya Sharma",
      rating: 4.9,
      views: "125K+",
      description: "Complete guide to understanding and managing anxiety with evidence-based techniques",
      language: "English, Hindi, Tamil",
      thumbnail: "/peaceful-young-woman-student-smiling-hope-recovery.jpg"
    },
    {
      title: "Sleep Stories Collection",
      type: "Audio Library",
      duration: "30+ stories",
      expert: "Multiple Experts",
      rating: 4.8,
      views: "200K+",
      description: "Soothing bedtime stories and sleep meditations for better rest and mental wellness",
      language: "10+ Languages",
      thumbnail: "/peaceful-ocean-waves-gentle-meditation-calming-bl.jpg"
    },
    {
      title: "Exam Stress Survival Kit",
      type: "Interactive Guide",
      duration: "Complete Toolkit",
      expert: "Student Support Team",
      rating: 4.9,
      views: "350K+",
      description: "Comprehensive toolkit with worksheets, audio guides, and stress management strategies",
      language: "All Regional Languages",
      thumbnail: "/confident-young-man-student-mental-health-recovery.jpg"
    }
  ]

  const uniqueFeatures = [
    {
      icon: Puzzle,
      title: "Personalized Learning Paths",
      description: "AI-powered recommendations based on your needs, progress, and preferences"
    },
    {
      icon: Layers,
      title: "Progressive Difficulty Levels",
      description: "Resources organized from beginner to advanced, tailored to your comfort level"
    },
    {
      icon: Bell,
      title: "Crisis Alerts & Reminders",
      description: "Smart notifications for wellness check-ins and important mental health updates"
    },
    {
      icon: Bookmark,
      title: "Save for Later",
      description: "Bookmark your favorite resources and build your personal wellness library"
    },
    {
      icon: Share2,
      title: "Share with Friends",
      description: "Easily share helpful resources with friends who might benefit"
    },
    {
      icon: BarChart,
      title: "Track Your Progress",
      description: "Monitor your learning journey with detailed progress analytics"
    }
  ]

  const popularTopics = [
    { name: "Anxiety Management", count: "45 resources", icon: Zap, color: "bg-yellow-100 text-yellow-700" },
    { name: "Depression Support", count: "38 resources", icon: Heart, color: "bg-red-100 text-red-700" },
    { name: "Stress Relief", count: "52 resources", icon: Brain, color: "bg-blue-100 text-blue-700" },
    { name: "Sleep Wellness", count: "28 resources", icon: Moon, color: "bg-indigo-100 text-indigo-700" },
    { name: "Academic Success", count: "40 resources", icon: GraduationCap, color: "bg-green-100 text-green-700" },
    { name: "Relationships", count: "32 resources", icon: Users, color: "bg-pink-100 text-pink-700" },
    { name: "Mindfulness", count: "35 resources", icon: Activity, color: "bg-purple-100 text-purple-700" },
    { name: "Crisis Support", count: "25 resources", icon: Shield, color: "bg-orange-100 text-orange-700" }
  ]

  const resourceTypes = [
    {
      icon: Video,
      title: "Educational Videos",
      count: "150+ videos",
      description: "Expert-led video series covering mental health topics, coping strategies, and wellness techniques",
      features: ["HD Quality", "Subtitles Available", "Downloadable", "Mobile Optimized"]
    },
    {
      icon: Headphones,
      title: "Relaxation Audio",
      count: "200+ audio files",
      description: "Guided meditations, breathing exercises, sleep stories, and calming soundscapes",
      features: ["Multiple Formats", "Offline Mode", "Variable Speeds", "Background Sounds"]
    },
    {
      icon: FileText,
      title: "Wellness Guides",
      count: "100+ PDF guides",
      description: "Comprehensive guides on mental health topics, self-care practices, and healthy habits",
      features: ["Printable", "Interactive", "Updated Regularly", "Evidence-Based"]
    },
    {
      icon: BrainCircuit,
      title: "Interactive Tools",
      count: "50+ tools",
      description: "Self-assessment quizzes, mood trackers, goal-setting templates, and digital exercises",
      features: ["Real-Time Feedback", "Progress Tracking", "Gamified", "Personalized"]
    },
    {
      icon: MessageSquare,
      title: "Crisis Resources",
      count: "25+ resources",
      description: "Immediate support guides, safety plans, and emergency mental health resources",
      features: ["24/7 Available", "Quick Access", "Multilingual", "Anonymous"]
    },
    {
      icon: Camera,
      title: "Visual Learning",
      count: "80+ infographics",
      description: "Beautifully designed infographics, diagrams, and visual aids for easy understanding",
      features: ["Shareable", "Printable", "Easy to Digest", "Culturally Relevant"]
    }
  ]

  const languages = [
    { name: "English", flag: "????", resources: "500+" },
    { name: "Hindi", flag: "????", resources: "300+" },
    { name: "Tamil", flag: "????", resources: "250+" },
    { name: "Bengali", flag: "????", resources: "200+" },
    { name: "Telugu", flag: "????", resources: "180+" },
    { name: "Marathi", flag: "????", resources: "150+" },
    { name: "Gujarati", flag: "????", resources: "120+" },
    { name: "Kannada", flag: "????", resources: "100+" }
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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            backgroundImage: "url(/digital-library-mental-health-resources-books-know.jpg)",
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
              <BookOpen className="w-4 h-4 mr-2" />
              Comprehensive Mental Health Resources
            </Badge>
            
            <h1 className="text-6xl sm:text-7xl lg:text-9xl font-extrabold mb-8 text-balance leading-tight animate-text-gradient">
              Your <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-shift bg-300%">Resource</span> Hub
            </h1>
            
            <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 max-w-5xl mx-auto leading-relaxed animate-slide-up">
              Access 600+ evidence-based resources including videos, audio guides, interactive tools, 
              and downloadable materials?all designed to support your mental wellness journey.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {["600+ Resources", "10+ Languages", "24/7 Access", "Expert-Curated"].map((tag, i) => (
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

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-bounce-slow">
              <Button size="lg" asChild className="text-xl px-12 py-6 bg-primary hover:bg-primary/90 shadow-2xl">
                <Link href="#explore">
                  Explore Resources <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-xl px-12 py-6 border-2">
                <Link href="#crisis">
                  Crisis Support <Shield className="ml-2 w-5 h-5" />
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

      {/* Resource Categories */}
      <section id="explore" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 scroll-reveal">
            <Badge variant="secondary" className="mb-6 px-6 py-2 text-base">
              Resource Categories
            </Badge>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              Everything You Need in <span className="text-primary">One Place</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our comprehensive collection of mental health resources, carefully curated 
              by experts and organized for easy access.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resourceCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <Card
                  key={index}
                  className="overflow-hidden bg-card/80 backdrop-blur-md border-primary/10 hover:border-primary/30 hover:shadow-2xl transition-all duration-500 scroll-reveal group hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-20`} />
                    <div className="absolute top-4 left-4">
                      <div className={`p-3 bg-gradient-to-br ${category.color} rounded-xl shadow-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <Badge className="absolute top-4 right-4 bg-white/90 text-foreground">
                      {category.count}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {category.description}
                    </p>
                    <Button variant="ghost" className="mt-4 group/btn">
                      Explore <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 scroll-reveal">
            <Badge variant="outline" className="mb-6 px-6 py-2 text-base border-primary/30 text-primary bg-primary/5">
              Most Popular
            </Badge>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              Featured <span className="text-primary">Resources</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our most accessed and highly-rated resources, trusted by thousands of students.
            </p>
          </div>

          <div className="space-y-12">
            {featuredResources.map((resource, index) => (
              <Card
                key={index}
                className={`overflow-hidden bg-gradient-to-br from-card to-card/50 border-primary/10 hover:border-primary/30 hover:shadow-2xl transition-all duration-500 scroll-reveal group ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } flex flex-col`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="lg:w-1/2 relative h-64 lg:h-auto overflow-hidden">
                  <img
                    src={resource.thumbnail}
                    alt={resource.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-white/90 text-foreground">
                    <Play className="w-3 h-3 mr-1" />
                    {resource.type}
                  </Badge>
                </div>
                <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-5 h-5 fill-primary text-primary" />
                    <span className="font-semibold">{resource.rating}</span>
                    <span className="text-muted-foreground">?</span>
                    <span className="text-muted-foreground">{resource.views} views</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {resource.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge variant="secondary">{resource.duration}</Badge>
                    <Badge variant="outline">By {resource.expert}</Badge>
                    <Badge variant="outline">{resource.language}</Badge>
                  </div>
                  <div className="flex gap-4">
                    <Button size="lg" className="flex-1">
                      <Play className="mr-2 w-4 h-4" />
                      Start Now
                    </Button>
                    <Button size="lg" variant="outline">
                      <Bookmark className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Types Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-muted/20 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 scroll-reveal">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              Diverse <span className="text-primary">Content Formats</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the format that works best for your learning style and schedule.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resourceTypes.map((type, index) => {
              const Icon = type.icon
              return (
                <Card
                  key={index}
                  className="p-8 bg-card/80 backdrop-blur-md border-primary/10 hover:border-primary/30 hover:shadow-xl transition-all duration-500 scroll-reveal group hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {type.title}
                  </h3>
                  <Badge variant="secondary" className="mb-4">{type.count}</Badge>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {type.description}
                  </p>
                  <div className="space-y-2">
                    {type.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 scroll-reveal">
            <Badge variant="secondary" className="mb-6 px-6 py-2 text-base">
              Trending Topics
            </Badge>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              Explore by <span className="text-primary">Topic</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find resources tailored to specific mental health topics and concerns.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {popularTopics.map((topic, index) => {
              const Icon = topic.icon
              return (
                <Card
                  key={index}
                  className="p-6 text-center bg-card/80 border-primary/10 hover:border-primary/30 hover:shadow-xl transition-all duration-500 scroll-reveal group hover:scale-105 cursor-pointer"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className={`${topic.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {topic.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{topic.count}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Multi-Language Support */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-reveal">
            <Badge variant="outline" className="mb-6 px-6 py-2 text-base border-primary/30 text-primary bg-primary/5">
              Cultural Accessibility
            </Badge>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              Resources in Your <span className="text-primary">Language</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Access mental health resources in your preferred language for better understanding and comfort.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {languages.map((lang, index) => (
              <Card
                key={index}
                className="p-4 text-center bg-card/80 border-primary/10 hover:border-primary/30 hover:shadow-lg transition-all duration-300 scroll-reveal group hover:scale-105"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="text-4xl mb-2">{lang.flag}</div>
                <div className="font-semibold text-sm mb-1">{lang.name}</div>
                <div className="text-xs text-muted-foreground">{lang.resources}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Unique Features */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse-slow" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 scroll-reveal">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              What Makes Us <span className="text-primary">Different</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Unique features that enhance your learning experience and make mental health resources more accessible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {uniqueFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card
                  key={index}
                  className="p-8 bg-gradient-to-br from-card to-card/50 border-primary/10 hover:border-primary/30 hover:shadow-xl transition-all duration-500 scroll-reveal group hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
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

      {/* Crisis Resources Section */}
      <section id="crisis" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-reveal">
              <Badge variant="destructive" className="mb-6 px-6 py-2 text-base">
                <AlertCircle className="w-4 h-4 mr-2" />
                Immediate Support
              </Badge>
              <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-balance">
                Crisis <span className="text-red-600">Resources</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                If you're in crisis, we have immediate resources and support available. 
                These tools are designed for urgent situations and can be accessed 24/7.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Crisis Safety Plans",
                  "Emergency Contact Guides",
                  "Coping Strategies for Crisis",
                  "24/7 Helpline Directory",
                  "Step-by-Step Crisis Support"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-600" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-4">
                <Button size="lg" variant="destructive" asChild>
                  <Link href="/ai-support">
                    Get Help Now <Phone className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#">
                    View Crisis Resources
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative scroll-reveal">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="/peaceful-nature-landscape-mountains-meditation-su.jpg"
                  alt="Crisis Support"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/30 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary/90 to-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-20" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 scroll-reveal">
          <BookOpen className="w-20 h-20 text-white/20 mx-auto mb-8 animate-pulse" />
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            Start Your Learning <span className="text-accent">Journey</span>
          </h2>
          <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Explore our comprehensive resource library and discover tools that can transform your mental wellness journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-xl px-12 py-6 bg-white text-primary hover:bg-white/90 shadow-2xl">
              <Link href="/auth/signup">
                Create Free Account <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-xl px-12 py-6 border-2 border-white text-white hover:bg-white/10">
              <Link href="/ai-support">
                Chat with AI <MessageSquare className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}