import { Navigation } from "@/components/navigation"
import { ScreeningHub } from "@/components/screening/screening-hub"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, ClipboardList, TrendingUp, Shield, AlertTriangle, CheckCircle } from "lucide-react"

export default function ScreeningPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Brain className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Mental Health Screening Tools</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Take standardized psychological assessments to better understand your mental health and get personalized
              recommendations for support.
            </p>
          </div>

          {/* Screening Tools Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mx-auto mb-2 p-3 bg-blue-100 rounded-full w-fit">
                  <ClipboardList className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg">PHQ-9</CardTitle>
                <p className="text-sm text-muted-foreground">Depression Screening</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Patient Health Questionnaire for assessing depression severity and symptoms.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mx-auto mb-2 p-3 bg-green-100 rounded-full w-fit">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-lg">GAD-7</CardTitle>
                <p className="text-sm text-muted-foreground">Anxiety Assessment</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Generalized Anxiety Disorder scale for measuring anxiety levels and symptoms.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mx-auto mb-2 p-3 bg-purple-100 rounded-full w-fit">
                  <Shield className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-lg">GHQ-12</CardTitle>
                <p className="text-sm text-muted-foreground">General Health</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  General Health Questionnaire for overall psychological well-being assessment.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Important Information */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-6 w-6 text-blue-600 mt-0.5" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Important Information</h3>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• These screenings are for educational purposes and self-awareness</li>
                  <li>• Results are not a substitute for professional diagnosis</li>
                  <li>• All responses are confidential and anonymous</li>
                  <li>• High scores will include recommendations for professional support</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Main Screening Hub */}
          <ScreeningHub />

          {/* Benefits Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Benefits of Screening</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-sm">Early identification of mental health concerns</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-sm">Better understanding of your mental health status</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-sm">Personalized recommendations for support</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-sm">Track your mental health progress over time</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <span>Privacy & Confidentiality</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-sm">All responses are completely anonymous</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-sm">No personal information is stored with results</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-sm">Data used only for institutional analytics</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-sm">Secure and encrypted data transmission</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
