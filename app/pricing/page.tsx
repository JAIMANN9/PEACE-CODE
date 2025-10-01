"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Check,
  Lock,
  Star,
  Heart,
  Brain,
  Users,
  BookOpen,
  BarChart3,
  Shield,
  Headphones,
  Calendar,
  Download,
  Zap,
  Sparkles,
  Crown,
  Gift,
} from "lucide-react"

interface Feature {
  name: string
  free: boolean | "limited"
  premium: boolean | "unlimited"
  icon: any
  description?: string
  flagship?: boolean
}

const features: Feature[] = [
  {
    name: "AI Mental Health Support",
    free: true,
    premium: true,
    icon: Brain,
    description: "24/7 AI companion for immediate support",
  },
  {
    name: "Crisis Detection & Response",
    free: true,
    premium: true,
    icon: Shield,
    description: "Automatic crisis detection with immediate help",
  },
  {
    name: "Basic Screening Tools",
    free: true,
    premium: true,
    icon: BarChart3,
    description: "PHQ-9, GAD-7, and GHQ-12 assessments",
  },
  {
    name: "Community Support",
    free: true,
    premium: true,
    icon: Users,
    description: "Access to peer support forums",
  },
  {
    name: "Digital Journal",
    free: "limited",
    premium: "unlimited",
    icon: BookOpen,
    description: "Track your thoughts and emotions",
  },
  {
    name: "Guided Journaling Series",
    free: false,
    premium: true,
    icon: Star,
    description: "Professional-designed reflection prompts",
    flagship: true,
  },
  {
    name: "Personal Counseling Sessions",
    free: false,
    premium: true,
    icon: Heart,
    description: "1-on-1 sessions with licensed therapists",
    flagship: true,
  },
  {
    name: "Advanced Mood Analytics",
    free: false,
    premium: true,
    icon: BarChart3,
    description: "Detailed insights and progress tracking",
  },
  {
    name: "Premium Soundscapes",
    free: false,
    premium: true,
    icon: Headphones,
    description: "20+ ambient sounds for focus and relaxation",
  },
  {
    name: "Priority Support",
    free: false,
    premium: true,
    icon: Zap,
    description: "Faster response times and dedicated help",
  },
  {
    name: "Export & Backup",
    free: false,
    premium: true,
    icon: Download,
    description: "Download your data and journal entries",
  },
  {
    name: "Flexible Scheduling",
    free: false,
    premium: true,
    icon: Calendar,
    description: "Book counseling at your convenience",
  },
]

const testimonials = [
  {
    name: "Priya S.",
    role: "Engineering Student",
    content:
      "The premium counseling sessions changed my life. Having a professional to talk to made all the difference during my toughest semester.",
    plan: "Premium",
  },
  {
    name: "Rahul M.",
    role: "Medical Student",
    content: "Even the free features helped me so much. The AI support was there when I needed it most at 3 AM.",
    plan: "Free",
  },
  {
    name: "Ananya K.",
    role: "MBA Student",
    content:
      "The guided journaling series helped me understand my anxiety patterns. Worth every rupee for the insights I gained.",
    plan: "Premium",
  },
]

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false)

  const renderFeatureIcon = (feature: Feature) => {
    if (feature.free === true && feature.premium === true) {
      return <Check className="h-5 w-5 text-green-600" />
    } else if (feature.free === "limited") {
      return <div className="text-yellow-600 text-sm font-medium">Limited</div>
    } else if (feature.free === false && feature.premium === true) {
      if (feature.flagship) {
        return <Star className="h-5 w-5 text-accent fill-accent" />
      }
      return <Check className="h-5 w-5 text-green-600" />
    }
    return <Lock className="h-4 w-4 text-muted-foreground" />
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Badge
                variant="secondary"
                className="px-6 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20"
              >
                <Crown className="w-4 h-4 mr-2" />
                Choose Your Journey
              </Badge>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Simple, <span className="text-primary">Transparent</span> Pricing
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Start your mental wellness journey for free, or unlock deeper growth with premium features designed by
              mental health professionals.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={`text-sm ${!isAnnual ? "text-foreground font-medium" : "text-muted-foreground"}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  isAnnual ? "bg-primary" : "bg-muted"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isAnnual ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
              <span className={`text-sm ${isAnnual ? "text-foreground font-medium" : "text-muted-foreground"}`}>
                Annual
              </span>
              {isAnnual && (
                <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
                  <Gift className="w-3 h-3 mr-1" />
                  Save 20%
                </Badge>
              )}
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Free Plan */}
            <Card className="border-2 border-border hover:border-primary/50 transition-colors">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl mb-2">Free</CardTitle>
                <CardDescription className="text-lg mb-4">For Everyday Support</CardDescription>
                <div className="text-4xl font-bold text-foreground mb-2">₹0</div>
                <div className="text-muted-foreground">Forever free</div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-600" />
                    <span>24/7 AI Mental Health Support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-600" />
                    <span>Crisis Detection & Response</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-600" />
                    <span>Basic Screening Tools</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-600" />
                    <span>Community Support Forums</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-yellow-600 text-sm font-medium bg-yellow-100 px-2 py-1 rounded">Limited</div>
                    <span>Digital Journal (10 entries/month)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-600" />
                    <span>Basic Breathing Exercises</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-600" />
                    <span>3 Focus Soundscapes</span>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary/10 bg-transparent"
                >
                  Get Started Free
                </Button>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="border-2 border-primary shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-accent text-white px-4 py-1 text-sm font-medium">
                Most Popular
              </div>
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl mb-2">Premium</CardTitle>
                <CardDescription className="text-lg mb-4">For Deeper Growth</CardDescription>
                <div className="text-4xl font-bold text-foreground mb-2">₹{isAnnual ? "399" : "499"}</div>
                <div className="text-muted-foreground">per month{isAnnual && ", billed annually"}</div>
                {isAnnual && <div className="text-sm text-green-600 font-medium">Save ₹1,200 per year</div>}
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-600" />
                    <span className="font-medium">Everything in Free, plus:</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="h-5 w-5 text-accent fill-accent" />
                    <span>
                      <strong>Personal Counseling Sessions</strong> (2/month)
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="h-5 w-5 text-accent fill-accent" />
                    <span>
                      <strong>Guided Journaling Series</strong>
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-600" />
                    <span>Unlimited Journal Entries</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-600" />
                    <span>Advanced Mood Analytics</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-600" />
                    <span>20+ Premium Soundscapes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-600" />
                    <span>Priority Support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-600" />
                    <span>Export & Backup</span>
                  </div>
                </div>
                <Button className="w-full bg-calming-gradient hover:opacity-90 text-lg py-6">
                  Start Premium Journey
                </Button>
                <p className="text-center text-sm text-muted-foreground mt-3">7-day free trial • Cancel anytime</p>
              </CardContent>
            </Card>
          </div>

          {/* Feature Comparison Table */}
          <Card className="mb-16 border-primary/10">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl mb-2">Complete Feature Comparison</CardTitle>
              <CardDescription>See exactly what's included in each plan</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-4 px-4 font-medium">Features</th>
                      <th className="text-center py-4 px-4 font-medium">Free</th>
                      <th className="text-center py-4 px-4 font-medium">Premium</th>
                    </tr>
                  </thead>
                  <tbody>
                    {features.map((feature, index) => (
                      <tr key={index} className="border-b border-border/50 hover:bg-muted/30">
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-3">
                            <feature.icon className="h-5 w-5 text-primary" />
                            <div>
                              <div className="font-medium flex items-center gap-2">
                                {feature.name}
                                {feature.flagship && (
                                  <Badge variant="secondary" className="bg-accent/10 text-accent text-xs">
                                    <Star className="h-3 w-3 mr-1" />
                                    Flagship
                                  </Badge>
                                )}
                              </div>
                              {feature.description && (
                                <div className="text-sm text-muted-foreground">{feature.description}</div>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-center">
                          {feature.free === true ? (
                            <Check className="h-5 w-5 text-green-600 mx-auto" />
                          ) : feature.free === "limited" ? (
                            <div className="text-yellow-600 text-sm font-medium">Limited</div>
                          ) : (
                            <Lock className="h-4 w-4 text-muted-foreground mx-auto" />
                          )}
                        </td>
                        <td className="py-4 px-4 text-center">
                          {feature.premium === true ? (
                            feature.flagship ? (
                              <Star className="h-5 w-5 text-accent fill-accent mx-auto" />
                            ) : (
                              <Check className="h-5 w-5 text-green-600 mx-auto" />
                            )
                          ) : feature.premium === "unlimited" ? (
                            <div className="text-green-600 text-sm font-medium">Unlimited</div>
                          ) : (
                            <Lock className="h-4 w-4 text-muted-foreground mx-auto" />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Testimonials */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">What Students Are Saying</h2>
              <p className="text-muted-foreground">Real experiences from our community</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-primary/10">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <p className="text-foreground leading-relaxed">"{testimonial.content}"</p>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-foreground">{testimonial.name}</div>
                          <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        </div>
                        <Badge
                          variant={testimonial.plan === "Premium" ? "default" : "secondary"}
                          className={testimonial.plan === "Premium" ? "bg-primary/10 text-primary" : ""}
                        >
                          {testimonial.plan}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <Card className="mb-16 border-primary/10">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl mb-2">Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Is my data secure and private?</h4>
                    <p className="text-muted-foreground text-sm">
                      Absolutely. We use end-to-end encryption and follow strict privacy protocols. Your mental health
                      data is never shared without your explicit consent.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Can I cancel my premium subscription anytime?
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Yes, you can cancel anytime from your account settings. You'll continue to have premium access
                      until the end of your billing period.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Are the counselors licensed professionals?</h4>
                    <p className="text-muted-foreground text-sm">
                      Yes, all our counselors are licensed mental health professionals with specialized training in
                      student mental health and Indian cultural contexts.
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">What if I need help outside business hours?</h4>
                    <p className="text-muted-foreground text-sm">
                      Our AI support is available 24/7 for immediate assistance. For crisis situations, we provide
                      immediate access to emergency helplines.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Do you offer student discounts?</h4>
                    <p className="text-muted-foreground text-sm">
                      Our pricing is already student-friendly, and we offer additional discounts for students from
                      economically disadvantaged backgrounds.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Can I switch between plans?</h4>
                    <p className="text-muted-foreground text-sm">
                      Yes, you can upgrade to premium anytime. If you downgrade, you'll keep premium features until your
                      current billing period ends.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Final CTA */}
          <div className="text-center mb-16">
            <Card className="max-w-3xl mx-auto border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Begin Your Wellness Journey?</h2>
                <p className="text-muted-foreground mb-8 text-lg">
                  Join thousands of students who have found peace, support, and growth through our platform.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-calming-gradient hover:opacity-90 px-8">
                    Start Free Trial
                  </Button>
                  <Button variant="outline" size="lg" className="border-primary/20 bg-transparent px-8">
                    Continue with Free Plan
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  No credit card required • 7-day free trial • Cancel anytime
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
