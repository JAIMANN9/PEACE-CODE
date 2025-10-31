"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Metadata } from "next"
import { useEffect, useState } from "react"
import { 
  Heart, 
  Users, 
  Handshake, 
  Globe, 
  Award, 
  Target, 
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  Sparkles
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Template Partner Data - Easy to edit
const partners = [
  {
    id: 1,
    name: "Mindful Youth Foundation",
    logo: "/diverse-group-students-supporting-each-other-commu.jpg",
    type: "Mental Health NGO",
    location: "Mumbai, Maharashtra",
    description: "A leading non-profit organization dedicated to providing mental health support and resources to young people across India. They focus on creating awareness, reducing stigma, and offering accessible counseling services.",
    specialties: ["Student Mental Health", "Anxiety Support", "Depression Care", "Peer Counseling"],
    website: "https://example-ngo-1.org",
    email: "contact@example-ngo-1.org",
    phone: "+91-XX-XXXX-XXXX",
    impact: "Served 25,000+ students across 15 states",
    partnershipFocus: "Regional outreach and awareness campaigns",
    image: "/diverse-group-students-supporting-each-other-commu.jpg"
  },
  {
    id: 2,
    name: "Hope & Healing Network",
    logo: "/peaceful-young-woman-student-smiling-hope-recovery.jpg",
    type: "Wellness Organization",
    location: "Delhi, NCR",
    description: "Committed to transforming mental health care through innovative programs and community-driven initiatives. They specialize in crisis intervention and long-term wellness support.",
    specialties: ["Crisis Support", "Wellness Programs", "Community Building", "Therapy Access"],
    website: "https://example-ngo-2.org",
    email: "info@example-ngo-2.org",
    phone: "+91-XX-XXXX-XXXX",
    impact: "Provided 50,000+ hours of free counseling",
    partnershipFocus: "Crisis support integration and resource sharing",
    image: "/peaceful-young-woman-student-smiling-hope-recovery.jpg"
  },
  {
    id: 3,
    name: "Campus Wellness Initiative",
    logo: "/happy-young-woman-student-cultural-diversity-menta.jpg",
    type: "Educational Support",
    location: "Bangalore, Karnataka",
    description: "Working directly with educational institutions to implement comprehensive mental health programs. They provide training, resources, and support systems for college communities.",
    specialties: ["Campus Programs", "Faculty Training", "Student Support", "Prevention Programs"],
    website: "https://example-ngo-3.org",
    email: "connect@example-ngo-3.org",
    phone: "+91-XX-XXXX-XXXX",
    impact: "Partnered with 200+ educational institutions",
    partnershipFocus: "Campus integration and program development",
    image: "/happy-young-woman-student-cultural-diversity-menta.jpg"
  },
  {
    id: 4,
    name: "Inner Peace Collective",
    logo: "/serene-meditation-breathing-exercise-calm-blue-atm.jpg",
    type: "Mindfulness & Meditation",
    location: "Pune, Maharashtra",
    description: "Promoting mental wellness through mindfulness practices, meditation, and holistic healing approaches. They offer workshops and retreats for stress management and emotional balance.",
    specialties: ["Mindfulness Training", "Meditation Programs", "Stress Management", "Holistic Healing"],
    website: "https://example-ngo-4.org",
    email: "peace@example-ngo-4.org",
    phone: "+91-XX-XXXX-XXXX",
    impact: "Trained 10,000+ individuals in mindfulness",
    partnershipFocus: "Wellness tool integration and content creation",
    image: "/serene-meditation-breathing-exercise-calm-blue-atm.jpg"
  },
  {
    id: 5,
    name: "Student Support Alliance",
    logo: "/confident-young-man-student-mental-health-recovery.jpg",
    type: "Peer Support Network",
    location: "Chennai, Tamil Nadu",
    description: "Building a nationwide network of peer support groups and student ambassadors. They empower students to support each other through trained peer counselors and community programs.",
    specialties: ["Peer Counseling", "Student Ambassadors", "Support Groups", "Youth Empowerment"],
    website: "https://example-ngo-5.org",
    email: "support@example-ngo-5.org",
    phone: "+91-XX-XXXX-XXXX",
    impact: "Created 500+ peer support groups nationwide",
    partnershipFocus: "Community platform integration and peer training",
    image: "/confident-young-man-student-mental-health-recovery.jpg"
  },
  {
    id: 6,
    name: "Mental Health Access Foundation",
    logo: "/professional-counselor-therapy-session-mental-heal.jpg",
    type: "Access & Equity",
    location: "Hyderabad, Telangana",
    description: "Dedicated to making mental health services accessible to underserved communities. They provide free or low-cost counseling, multilingual support, and culturally-sensitive care.",
    specialties: ["Affordable Counseling", "Multilingual Support", "Cultural Sensitivity", "Rural Outreach"],
    website: "https://example-ngo-6.org",
    email: "access@example-ngo-6.org",
    phone: "+91-XX-XXXX-XXXX",
    impact: "Made counseling accessible in 8 regional languages",
    partnershipFocus: "Language localization and accessibility features",
    image: "/professional-counselor-therapy-session-mental-heal.jpg"
  },
  {
    id: 7,
    name: "Resilience & Recovery Hub",
    logo: "/wellness-challenge-community-motivation-healthy-ha.jpg",
    type: "Recovery Support",
    location: "Kolkata, West Bengal",
    description: "Supporting individuals on their recovery journey through comprehensive rehabilitation programs, group therapy, and ongoing support networks. They focus on long-term wellness and relapse prevention.",
    specialties: ["Recovery Programs", "Group Therapy", "Relapse Prevention", "Long-term Support"],
    website: "https://example-ngo-7.org",
    email: "recovery@example-ngo-7.org",
    phone: "+91-XX-XXXX-XXXX",
    impact: "Supported 8,000+ individuals in recovery",
    partnershipFocus: "Long-term care pathways and follow-up systems",
    image: "/wellness-challenge-community-motivation-healthy-ha.jpg"
  },
  {
    id: 8,
    name: "Digital Wellness Partnership",
    logo: "/digital-library-mental-health-resources-books-know.jpg",
    type: "Technology & Innovation",
    location: "Gurgaon, Haryana",
    description: "Bridging the gap between traditional mental health care and digital innovation. They develop tech solutions, conduct research, and create evidence-based digital interventions.",
    specialties: ["Digital Tools", "Research & Development", "Evidence-based Programs", "Tech Innovation"],
    website: "https://example-ngo-8.org",
    email: "innovation@example-ngo-8.org",
    phone: "+91-XX-XXXX-XXXX",
    impact: "Developed 15+ evidence-based digital programs",
    partnershipFocus: "Technology collaboration and research initiatives",
    image: "/digital-library-mental-health-resources-books-know.jpg"
  }
]

const partnershipTypes = [
  {
    icon: "🤝",
    title: "Strategic Partnerships",
    description: "Long-term collaborations with organizations sharing our mission and values",
    benefits: ["Joint program development", "Resource sharing", "Co-marketing opportunities"]
  },
  {
    icon: "💡",
    title: "Program Collaborations",
    description: "Working together on specific initiatives and community programs",
    benefits: ["Combined expertise", "Expanded reach", "Shared outcomes"]
  },
  {
    icon: "🌐",
    title: "Regional Networks",
    description: "Building localized support networks across different regions of India",
    benefits: ["Local expertise", "Cultural relevance", "Community engagement"]
  },
  {
    icon: "🔬",
    title: "Research Partnerships",
    description: "Collaborating on research and data-driven improvements to mental health care",
    benefits: ["Evidence-based insights", "Impact measurement", "Continuous improvement"]
  }
]

const partnershipBenefits = [
  {
    title: "Expanded Reach",
    description: "Together, we can reach millions more students across India who need mental health support",
    stat: "10M+",
    statLabel: "Combined Reach"
  },
  {
    title: "Shared Resources",
    description: "Pooling expertise, tools, and networks to create more comprehensive support systems",
    stat: "500+",
    statLabel: "Shared Resources"
  },
  {
    title: "Cultural Understanding",
    description: "Partnering with local organizations ensures culturally-sensitive and regionally-relevant care",
    stat: "15+",
    statLabel: "Regional Languages"
  },
  {
    title: "Innovation",
    description: "Collaborative innovation leads to better tools, programs, and approaches to mental health",
    stat: "25+",
    statLabel: "Joint Programs"
  }
]

export default function PartnersPage() {
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
      { threshold: 0.1 }
    )

    const scrollElements = document.querySelectorAll(".scroll-reveal")
    scrollElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/peaceful-nature-landscape-mountains-meditation-su.jpg" 
            alt="Peaceful partnership" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/80"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <Badge
              variant="secondary"
              className="px-8 py-3 text-lg font-medium bg-white/20 backdrop-blur-md text-white border-white/30 mb-8"
            >
              <Handshake className="h-5 w-5 mr-2 inline" />
              Together We Make a Difference
            </Badge>

            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white mb-8 text-balance leading-tight text-shadow-soft">
              Our Trusted Partners
            </h1>

            <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-4xl mx-auto text-pretty leading-relaxed text-shadow-soft">
              Building a stronger mental health ecosystem through meaningful partnerships with NGOs, educational institutions, and wellness organizations across India
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-spacing bg-gradient-to-b from-primary/5 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
              Why Partnerships Matter
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed text-pretty">
              At Peace Code, we believe that mental health support requires a collaborative approach. Our partnerships with dedicated NGOs and organizations across India allow us to:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Globe className="h-8 w-8" />,
                title: "Expand Reach",
                description: "Reach students in remote and underserved areas through local partnerships"
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Cultural Sensitivity",
                description: "Provide culturally-relevant care that understands local contexts and needs"
              },
              {
                icon: <Heart className="h-8 w-8" />,
                title: "Comprehensive Care",
                description: "Offer a full spectrum of services from prevention to recovery support"
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Innovation",
                description: "Collaborate on research and development of new tools and approaches"
              }
            ].map((item, index) => (
              <Card 
                key={index}
                className="text-center p-8 bg-white/80 backdrop-blur-sm border-primary/10 hover:shadow-xl transition-all duration-300 scroll-reveal hover:scale-105"
              >
                <div className="mx-auto mb-6 p-4 bg-primary/10 rounded-2xl w-fit text-primary">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Grid Section */}
      <section className="section-spacing-lg bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <Badge variant="secondary" className="mb-6 px-8 py-3 text-lg bg-primary/10 text-primary border-primary/20">
              <Sparkles className="h-5 w-5 mr-2 inline" />
              Our Partner Organizations
            </Badge>
            <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 text-balance">
              Working Together for <span className="text-primary">Mental Wellness</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Meet the incredible organizations we collaborate with to bring comprehensive mental health support to students across India
            </p>
          </div>

          <div className="space-y-12">
            {partners.map((partner, index) => (
              <Card
                key={partner.id}
                className={`overflow-hidden bg-white border-primary/10 hover:shadow-2xl transition-all duration-500 scroll-reveal ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } flex flex-col lg:flex`}
              >
                <div className="lg:w-1/3 relative h-64 lg:h-auto overflow-hidden">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
                  <Badge className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-primary border-primary/20">
                    {partner.type}
                  </Badge>
                </div>

                <div className="lg:w-2/3 p-8 lg:p-12">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-3xl font-bold text-foreground mb-2">{partner.name}</h3>
                      <div className="flex items-center text-muted-foreground mb-4">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{partner.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {partner.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    {partner.specialties.map((specialty, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{specialty}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-muted-foreground">
                      <Target className="h-4 w-4 mr-2" />
                      <span className="text-sm"><strong className="text-foreground">Impact:</strong> {partner.impact}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Handshake className="h-4 w-4 mr-2" />
                      <span className="text-sm"><strong className="text-foreground">Partnership Focus:</strong> {partner.partnershipFocus}</span>
                    </div>
                  </div>

                  <Separator className="my-6" />

                  <div className="flex flex-wrap gap-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href={partner.website} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Visit Website
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={`mailto:${partner.email}`}>
                        <Mail className="h-4 w-4 mr-2" />
                        Contact
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types Section */}
      <section className="section-spacing bg-gradient-to-br from-primary/5 via-accent/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
              Types of Partnerships
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              We work with organizations in various capacities to create maximum impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipTypes.map((type, index) => (
              <Card
                key={index}
                className="p-8 bg-white/80 backdrop-blur-sm border-primary/10 hover:shadow-xl transition-all duration-300 scroll-reveal"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-4 bg-primary/10 rounded-2xl text-3xl">
                    {type.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{type.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{type.description}</p>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-foreground mb-2">Key Benefits:</p>
                  {type.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Statistics Section */}
      <section className="section-spacing bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
              The Power of <span className="text-primary">Collaboration</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Our partnerships create measurable impact through combined efforts and shared vision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center p-8 bg-gradient-to-br from-primary/5 to-white border-primary/10 hover:shadow-2xl transition-all duration-300 scroll-reveal hover:scale-105"
              >
                <div className="text-5xl font-bold text-primary mb-3">
                  {benefit.stat}
                </div>
                <div className="text-sm text-muted-foreground mb-4">{benefit.statLabel}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process Section */}
      <section className="section-spacing bg-gradient-to-b from-primary/10 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
              How We Partner
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Our partnership process is designed to create meaningful, mutually beneficial collaborations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Initial Discussion",
                description: "We start with a conversation to understand your organization's mission, goals, and how we can collaborate effectively"
              },
              {
                step: "02",
                title: "Alignment Check",
                description: "We evaluate alignment of values, objectives, and capacity to work together toward shared mental health goals"
              },
              {
                step: "03",
                title: "Partnership Design",
                description: "Together, we design a customized partnership framework that leverages both organizations' strengths"
              },
              {
                step: "04",
                title: "Implementation & Growth",
                description: "We launch initiatives, monitor progress, and continuously refine our collaboration for maximum impact"
              }
            ].map((step, index) => (
              <div key={index} className="scroll-reveal">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 text-8xl font-bold text-primary/10">
                    {step.step}
                  </div>
                  <Card className="p-8 bg-white/80 backdrop-blur-sm border-primary/10 hover:shadow-xl transition-all duration-300 relative z-10">
                    <h3 className="text-2xl font-bold text-foreground mb-4">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        className="section-spacing relative min-h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage: "url(/sunrise-hope-new-beginning-peaceful-nature-healin.jpg)",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-primary/70"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto scroll-reveal">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance text-shadow-soft">
            Interested in Partnering?
          </h2>
          <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed text-shadow-soft">
            If your organization shares our mission to improve mental health support for students, we'd love to explore how we can work together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90">
              <Link href="/about/contact">
                <Mail className="h-5 w-5 mr-2" />
                Get in Touch
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20">
              <Link href="/about/about-peace-code">
                Learn More About Us
                <ExternalLink className="h-5 w-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
