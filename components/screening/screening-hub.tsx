"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PHQ9Screening } from "./phq9-screening"
import { GAD7Screening } from "./gad7-screening"
import { GHQScreening } from "./ghq-screening"
import { ScreeningResults } from "./screening-results"
import { ClipboardList, TrendingUp, Shield, Clock, Users, BarChart3 } from "lucide-react"
import { ScreeningIntroduction } from "./screening-introduction"

interface ScreeningResult {
  type: "PHQ-9" | "GAD-7" | "GHQ-12"
  score: number
  severity: string
  date: Date
  recommendations: string[]
}

const screeningTools = [
  {
    id: "phq9",
    name: "PHQ-9",
    title: "Depression Screening",
    description: "Patient Health Questionnaire for depression assessment",
    icon: <ClipboardList className="h-6 w-6" />,
    duration: "5-7 minutes",
    questions: 9,
    color: "blue",
    knowledge: {
      purpose: "To screen for the presence and severity of depression.",
      content: "It covers the 9 diagnostic criteria for major depressive disorder.",
      scoring:
        "Scores are interpreted as minimal (1-4), mild (5-9), moderate (10-14), moderately severe (15-19), and severe (20-27) depression.",
    },
  },
  {
    id: "gad7",
    name: "GAD-7",
    title: "Anxiety Assessment",
    description: "Generalized Anxiety Disorder scale",
    icon: <TrendingUp className="h-6 w-6" />,
    duration: "3-5 minutes",
    questions: 7,
    color: "green",
    knowledge: {
      purpose: "To screen for and measure the severity of generalized anxiety disorder.",
      content: "It assesses symptoms like excessive worry, restlessness, and irritability.",
      scoring: "Scores are interpreted as mild (5-9), moderate (10-14), and severe (15-21) anxiety.",
    },
  },
  {
    id: "ghq",
    name: "GHQ-12",
    title: "General Health Questionnaire",
    description: "Overall psychological well-being assessment",
    icon: <Shield className="h-6 w-6" />,
    duration: "4-6 minutes",
    questions: 12,
    color: "purple",
    knowledge: {
      purpose: "To screen for general, non-specific psychological distress and identify short-term changes in mental health.",
      content: "It asks about feelings of strain, depression, inability to cope, and anxiety.",
      scoring:
        "A score above a certain threshold (typically 11-12) suggests the presence of psychological distress that may warrant further evaluation.",
    },
  },
]

export function ScreeningHub() {
  const [activeScreening, setActiveScreening] = useState<string | null>(null)
  const [viewingKnowledgeFor, setViewingKnowledgeFor] = useState<string | null>(null)
  const [completedScreenings, setCompletedScreenings] = useState<ScreeningResult[]>([])
  const [activeTab, setActiveTab] = useState("available")

  const handleScreeningComplete = (result: ScreeningResult) => {
    setCompletedScreenings((prev) => [...prev, result])
    setActiveScreening(null)
    setActiveTab("results")
  }

  const handleStartIntro = (toolId: string) => {
    setViewingKnowledgeFor(toolId)
  }

  const handleStartTest = () => {
    if (viewingKnowledgeFor) {
      setActiveScreening(viewingKnowledgeFor)
      setViewingKnowledgeFor(null)
    }
  }

  const selectedTool = screeningTools.find((tool) => tool.id === viewingKnowledgeFor)

  if (viewingKnowledgeFor && selectedTool) {
    return (
      <ScreeningIntroduction
        testName={selectedTool.name}
        testTitle={selectedTool.title}
        knowledge={selectedTool.knowledge}
        onStart={handleStartTest}
        onCancel={() => setViewingKnowledgeFor(null)}
      />
    )
  }

  if (activeScreening) {
    return (
      <div className="fixed inset-0 bg-background z-[100] p-4 sm:p-6 lg:p-8 overflow-y-auto">
        <div className="max-w-2xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">{screeningTools.find((tool) => tool.id === activeScreening)?.title}</h2>
              <Button variant="outline" onClick={() => setActiveScreening(null)}>
                Cancel Test
              </Button>
            </div>

            {activeScreening === "phq9" && <PHQ9Screening onComplete={handleScreeningComplete} />}
            {activeScreening === "gad7" && <GAD7Screening onComplete={handleScreeningComplete} />}
            {activeScreening === "ghq" && <GHQScreening onComplete={handleScreeningComplete} />}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="available">Available Screenings</TabsTrigger>
          <TabsTrigger value="results">My Results ({completedScreenings.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="available" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {screeningTools.map((tool) => (
              <Card key={tool.id} className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className={`p-2 rounded-lg bg-${tool.color}-100`}>{tool.icon}</div>
                    <Badge variant="secondary">{tool.questions} questions</Badge>
                  </div>
                  <CardTitle className="text-xl">{tool.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{tool.title}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{tool.description}</p>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{tool.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>Anonymous</span>
                    </div>
                  </div>

                  <Button
                    className="w-full group-hover:bg-primary/90 transition-colors"
                    onClick={() => handleStartIntro(tool.id)}
                  >
                    Start {tool.name} Assessment
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 bg-muted/50 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <BarChart3 className="h-6 w-6 text-primary mt-0.5" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">How Screening Helps</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  These standardized tools help identify potential mental health concerns and provide personalized
                  recommendations. Your anonymous data also helps our institution understand student mental health
                  trends and improve support services.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Evidence-based assessments</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Personalized recommendations</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Professional referrals when needed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="results" className="mt-6">
          <ScreeningResults results={completedScreenings} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
