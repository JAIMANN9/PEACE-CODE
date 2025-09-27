import { Navigation } from "@/components/navigation"
import { ResourceHub } from "@/components/resources/resource-hub"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Video, Headphones, FileText, Globe, Heart } from "lucide-react"

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <BookOpen className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Psychoeducational Resource Hub</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Access comprehensive mental health resources including videos, audio guides, and wellness materials
              available in multiple regional languages.
            </p>
          </div>

          {/* Resource Categories Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mx-auto mb-2 p-3 bg-blue-100 rounded-full w-fit">
                  <Video className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Educational Videos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Expert-led videos on mental health topics, coping strategies, and wellness techniques.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mx-auto mb-2 p-3 bg-green-100 rounded-full w-fit">
                  <Headphones className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-lg">Relaxation Audio</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Guided meditations, breathing exercises, and calming soundscapes for stress relief.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mx-auto mb-2 p-3 bg-purple-100 rounded-full w-fit">
                  <FileText className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Wellness Guides</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Comprehensive guides on mental health topics, self-care practices, and healthy habits.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mx-auto mb-2 p-3 bg-orange-100 rounded-full w-fit">
                  <Globe className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-lg">Regional Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Content available in Hindi, Tamil, Telugu, Bengali, Marathi, and other regional languages.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Main Resource Hub */}
          <ResourceHub />

          {/* Additional Information */}
          <div className="mt-16 bg-primary/5 rounded-lg p-8">
            <div className="text-center">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-4">Need More Support?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                While these resources are helpful for general wellness and education, remember that professional support
                is available when you need it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/ai-support"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                >
                  Chat with AI Support
                </a>
                <a
                  href="/counseling"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                >
                  Book Professional Counseling
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
