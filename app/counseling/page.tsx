import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CounselorCard } from "@/components/counseling/counselor-card"
import { ServiceCard } from "@/components/counseling/service-card"
import { Heart, Clock, Shield, Users, Video, MessageCircle, Calendar } from "lucide-react"
import Link from "next/link"

const counselors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    title: "Licensed Clinical Psychologist",
    specialties: ["Anxiety", "Depression", "Academic Stress"],
    experience: "8 years",
    rating: 4.9,
    reviews: 127,
    image: "/professional-woman-therapist.png",
    availability: "Available Today",
    bio: "Specializing in cognitive behavioral therapy and mindfulness-based interventions for students.",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    title: "Licensed Professional Counselor",
    specialties: ["ADHD", "Social Anxiety", "Relationship Issues"],
    experience: "6 years",
    rating: 4.8,
    reviews: 89,
    image: "/professional-man-therapist.png",
    availability: "Next Available: Tomorrow",
    bio: "Experienced in working with college students and young adults navigating life transitions.",
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    title: "Licensed Marriage & Family Therapist",
    specialties: ["Trauma", "PTSD", "Family Dynamics"],
    experience: "10 years",
    rating: 4.9,
    reviews: 156,
    image: "/professional-woman-therapist-hispanic.jpg",
    availability: "Available This Week",
    bio: "Trauma-informed care specialist with extensive experience in EMDR and somatic therapies.",
  },
]

const services = [
  {
    icon: Video,
    title: "Video Counseling",
    description: "One-on-one video sessions with licensed therapists from the comfort of your space.",
    duration: "50 minutes",
    price: "Covered by student health",
  },
  {
    icon: MessageCircle,
    title: "Chat Therapy",
    description: "Text-based therapy sessions for those who prefer written communication.",
    duration: "Ongoing support",
    price: "Covered by student health",
  },
  {
    icon: Users,
    title: "Group Therapy",
    description: "Join supportive group sessions with peers facing similar challenges.",
    duration: "90 minutes",
    price: "Covered by student health",
  },
  {
    icon: Calendar,
    title: "Crisis Support",
    description: "24/7 immediate support for mental health emergencies and crisis situations.",
    duration: "As needed",
    price: "Always free",
  },
]

export default function CounselingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Professional <span className="text-primary">Counseling</span> Services
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
                Connect with licensed mental health professionals who understand student life and are here to support
                your journey.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-200">
              <Button size="lg" asChild className="text-lg px-8 py-3">
                <Link href="/counseling/book">Book a Session</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-3 bg-transparent">
                <Link href="/crisis">Crisis Support</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="p-3 bg-primary/10 rounded-full mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">100% Confidential</h3>
              <p className="text-muted-foreground text-sm">All sessions are private and protected by HIPAA</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-3 bg-primary/10 rounded-full mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Licensed Professionals</h3>
              <p className="text-muted-foreground text-sm">All counselors are licensed and experienced</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-3 bg-primary/10 rounded-full mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Flexible Scheduling</h3>
              <p className="text-muted-foreground text-sm">Sessions available 7 days a week</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Counseling Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Choose the type of support that works best for you and your schedule.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Counselors Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Meet Our Counselors</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Our team of licensed professionals is here to support you through any challenge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {counselors.map((counselor) => (
              <CounselorCard key={counselor.id} {...counselor} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="/counseling/counselors">View All Counselors</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Emergency Support */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="border-destructive/20 bg-destructive/5">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-destructive">Need Immediate Help?</CardTitle>
              <CardDescription className="text-lg">
                If you're experiencing a mental health crisis, don't wait. Get help now.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button variant="destructive" size="lg" asChild>
                  <Link href="/crisis">Crisis Chat</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:988">Call 988</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:911">Emergency: 911</a>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Crisis support is available 24/7. You're not alone, and help is always available.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
