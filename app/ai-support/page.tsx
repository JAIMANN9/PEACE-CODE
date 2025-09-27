import { Navigation } from "@/components/navigation"
import { AIChatbot } from "@/components/ai-support/ai-chatbot"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, Heart, Shield, Clock, Users, Phone } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AISupportPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Bot className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">AI First-Aid Support</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Get immediate mental health support with our AI-powered chatbot. Available 24/7 to provide coping
              strategies and connect you with professional help when needed.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Chatbot Interface */}
            <div className="lg:col-span-2">
              <AIChatbot />
            </div>

            {/* Sidebar with Information */}
            <div className="space-y-6">
              {/* Features */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Heart className="h-5 w-5 text-primary" />
                    <span>How AI Support Helps</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">24/7 Availability</p>
                      <p className="text-sm text-muted-foreground">Get support anytime, day or night</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Confidential & Safe</p>
                      <p className="text-sm text-muted-foreground">Your conversations are private and secure</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Professional Referrals</p>
                      <p className="text-sm text-muted-foreground">Connected to real counselors when needed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Crisis Support */}
              <Card className="border-red-200 bg-red-50/50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-red-700">
                    <Phone className="h-5 w-5" />
                    <span>Crisis Support</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-red-600 mb-4">
                    If you're having thoughts of self-harm or suicide, please reach out for immediate help:
                  </p>
                  <div className="space-y-2">
                    <Button
                      variant="outline"
                      className="w-full border-red-200 text-red-700 hover:bg-red-50 bg-transparent"
                      asChild
                    >
                      <Link href="tel:988">Call 988 - Suicide & Crisis Lifeline</Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-red-200 text-red-700 hover:bg-red-50 bg-transparent"
                      asChild
                    >
                      <Link href="/counseling">Book Emergency Counseling</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                    <Link href="/counseling">Book Counseling Session</Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                    <Link href="/community">Join Peer Support</Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                    <Link href="/resources">Browse Resources</Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                    <Link href="/screening">Take Mental Health Screening</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
