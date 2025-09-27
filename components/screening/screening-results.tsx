"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ClipboardList, TrendingUp, Shield, Calendar, AlertTriangle, CheckCircle } from "lucide-react"

interface ScreeningResult {
  type: "PHQ-9" | "GAD-7" | "GHQ-12"
  score: number
  severity: string
  date: Date
  recommendations: string[]
}

interface ScreeningResultsProps {
  results: ScreeningResult[]
}

export function ScreeningResults({ results }: ScreeningResultsProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case "PHQ-9":
        return <ClipboardList className="h-5 w-5" />
      case "GAD-7":
        return <TrendingUp className="h-5 w-5" />
      case "GHQ-12":
        return <Shield className="h-5 w-5" />
      default:
        return <ClipboardList className="h-5 w-5" />
    }
  }

  const getSeverityColor = (severity: string) => {
    if (severity.includes("Minimal") || severity.includes("Good")) return "bg-green-100 text-green-800"
    if (severity.includes("Mild")) return "bg-yellow-100 text-yellow-800"
    if (severity.includes("Moderate")) return "bg-orange-100 text-orange-800"
    return "bg-red-100 text-red-800"
  }

  const isHighRisk = (result: ScreeningResult) => {
    if (result.type === "PHQ-9") return result.score >= 15
    if (result.type === "GAD-7") return result.score >= 15
    if (result.type === "GHQ-12") return result.score >= 7
    return false
  }

  if (results.length === 0) {
    return (
      <div className="text-center py-12">
        <ClipboardList className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-lg font-medium text-foreground mb-2">No screening results yet</h3>
        <p className="text-muted-foreground mb-6">
          Complete a screening assessment to see your results and get personalized recommendations.
        </p>
        <Button>Take Your First Screening</Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Your Screening History</h3>
        <Badge variant="secondary">{results.length} completed</Badge>
      </div>

      <div className="grid gap-6">
        {results
          .sort((a, b) => b.date.getTime() - a.date.getTime())
          .map((result, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {getIcon(result.type)}
                    <div>
                      <CardTitle className="text-lg">{result.type} Assessment</CardTitle>
                      <div className="flex items-center space-x-2 mt-1">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{result.date.toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">
                      {result.score}/{result.type === "PHQ-9" ? "27" : result.type === "GAD-7" ? "21" : "12"}
                    </div>
                    <Badge className={getSeverityColor(result.severity)}>{result.severity}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {isHighRisk(result) && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                    <div className="flex items-start space-x-2">
                      <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-red-900">Professional Support Recommended</p>
                        <p className="text-xs text-red-700">
                          This assessment suggests you may benefit from professional mental health support.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div>
                  <h4 className="font-medium mb-2">Key Recommendations:</h4>
                  <ul className="space-y-1">
                    {result.recommendations.slice(0, 3).map((rec, recIndex) => (
                      <li key={recIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                        <span className="text-sm text-muted-foreground">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3 pt-2">
                  <Button size="sm" asChild>
                    <a href="/counseling">Book Counseling</a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a href="/ai-support">Get AI Support</a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a href="/resources">Browse Resources</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
      </div>

      <div className="bg-muted/50 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
          <div>
            <h4 className="font-semibold text-foreground mb-2">Understanding Your Results</h4>
            <p className="text-sm text-muted-foreground mb-3">
              These screening tools help identify potential mental health concerns and provide guidance for next steps.
              Remember that these are screening tools, not diagnostic instruments.
            </p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Results are completely confidential and anonymous</li>
              <li>• Higher scores suggest greater need for professional support</li>
              <li>• Regular screening can help track your mental health over time</li>
              <li>• Professional counselors can provide personalized assessment and treatment</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
