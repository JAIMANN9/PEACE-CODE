import { Navigation } from "@/components/navigation"
import { AdminDashboard } from "@/components/admin/admin-dashboard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, Users, TrendingUp, Shield, AlertTriangle, Target } from "lucide-react"

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Admin Analytics Dashboard</h1>
                <p className="text-lg text-muted-foreground">
                  Anonymous mental health data insights for institutional planning and intervention strategies
                </p>
              </div>
            </div>
          </div>

          {/* Key Features Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Population Insights</CardTitle>
                    <p className="text-sm text-muted-foreground">Anonymous student mental health trends</p>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Trend Analysis</CardTitle>
                    <p className="text-sm text-muted-foreground">Identify patterns and seasonal variations</p>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Target className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Intervention Planning</CardTitle>
                    <p className="text-sm text-muted-foreground">Data-driven policy recommendations</p>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>

          {/* Privacy Notice */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <div className="flex items-start space-x-3">
              <Shield className="h-6 w-6 text-blue-600 mt-0.5" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Privacy & Data Protection</h3>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• All data is completely anonymous and aggregated</li>
                  <li>• No individual student information is stored or displayed</li>
                  <li>• Data is used solely for institutional mental health planning</li>
                  <li>• Complies with privacy regulations and ethical guidelines</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Main Dashboard */}
          <AdminDashboard />

          {/* Action Items */}
          <div className="mt-12 bg-primary/5 rounded-lg p-8">
            <div className="text-center">
              <AlertTriangle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-4">Recommended Actions</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Based on current data trends, consider implementing these evidence-based interventions to support
                student mental health.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Increase Counseling Capacity</h4>
                    <p className="text-sm text-muted-foreground">
                      High screening scores suggest need for additional mental health professionals
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Stress Management Workshops</h4>
                    <p className="text-sm text-muted-foreground">
                      Implement campus-wide stress reduction and coping skills programs
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Peer Support Training</h4>
                    <p className="text-sm text-muted-foreground">
                      Train student volunteers to provide peer mental health support
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
