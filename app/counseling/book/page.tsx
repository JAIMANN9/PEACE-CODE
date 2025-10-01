import { Navigation } from "@/components/navigation"
import { BookingForm } from "@/components/counseling/booking-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Shield, Clock } from "lucide-react"

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Book Your <span className="text-primary">Counseling Session</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Take the first step towards better mental health. Schedule a session with one of our licensed
              professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Schedule Your Session</CardTitle>
                  <CardDescription>
                    Fill out the form below to book your counseling session. We'll confirm your appointment within 24
                    hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <BookingForm />
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What to Expect</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Heart className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium">Safe Environment</h4>
                      <p className="text-sm text-muted-foreground">A judgment-free space to share and heal</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium">Complete Privacy</h4>
                      <p className="text-sm text-muted-foreground">All sessions are confidential and secure</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium">Flexible Scheduling</h4>
                      <p className="text-sm text-muted-foreground">Sessions available to fit your schedule</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-destructive/20 bg-destructive/5">
                <CardHeader>
                  <CardTitle className="text-lg text-destructive">Need Immediate Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    If you're in crisis, don't wait for an appointment.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm">
                      <strong>Crisis Hotline:</strong>{" "}
                      <a href="tel:988" className="text-primary hover:underline">
                        988
                      </a>
                    </p>
                    <p className="text-sm">
                      <strong>Emergency:</strong>{" "}
                      <a href="tel:102" className="text-primary hover:underline">
                        102
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
