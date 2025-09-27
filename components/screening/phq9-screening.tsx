"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle, CheckCircle } from "lucide-react"

interface ScreeningResult {
  type: "PHQ-9" | "GAD-7" | "GHQ-12"
  score: number
  severity: string
  date: Date
  recommendations: string[]
}

interface PHQ9ScreeningProps {
  onComplete: (result: ScreeningResult) => void
}

const phq9Questions = [
  "Little interest or pleasure in doing things",
  "Feeling down, depressed, or hopeless",
  "Trouble falling or staying asleep, or sleeping too much",
  "Feeling tired or having little energy",
  "Poor appetite or overeating",
  "Feeling bad about yourself or that you are a failure or have let yourself or your family down",
  "Trouble concentrating on things, such as reading the newspaper or watching television",
  "Moving or speaking so slowly that other people could have noticed, or the opposite - being so fidgety or restless that you have been moving around a lot more than usual",
  "Thoughts that you would be better off dead, or of hurting yourself",
]

const responseOptions = [
  { value: "0", label: "Not at all", score: 0 },
  { value: "1", label: "Several days", score: 1 },
  { value: "2", label: "More than half the days", score: 2 },
  { value: "3", label: "Nearly every day", score: 3 },
]

export function PHQ9Screening({ onComplete }: PHQ9ScreeningProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [responses, setResponses] = useState<number[]>(new Array(9).fill(-1))
  const [showResults, setShowResults] = useState(false)

  const handleResponse = (value: string) => {
    const newResponses = [...responses]
    newResponses[currentQuestion] = Number.parseInt(value)
    setResponses(newResponses)
  }

  const nextQuestion = () => {
    if (currentQuestion < phq9Questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      calculateResults()
    }
  }

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const calculateResults = () => {
    const totalScore = responses.reduce((sum, score) => sum + score, 0)
    let severity = ""
    let recommendations: string[] = []

    if (totalScore <= 4) {
      severity = "Minimal Depression"
      recommendations = [
        "Your responses suggest minimal depressive symptoms",
        "Continue with healthy lifestyle habits",
        "Consider our wellness resources for maintaining good mental health",
        "Monitor your mood and seek help if symptoms worsen",
      ]
    } else if (totalScore <= 9) {
      severity = "Mild Depression"
      recommendations = [
        "Your responses suggest mild depressive symptoms",
        "Consider speaking with a counselor for support and coping strategies",
        "Engage in regular physical activity and maintain social connections",
        "Use our AI support chat for immediate coping strategies",
        "Explore our psychoeducational resources on depression management",
      ]
    } else if (totalScore <= 14) {
      severity = "Moderate Depression"
      recommendations = [
        "Your responses suggest moderate depressive symptoms",
        "We strongly recommend scheduling an appointment with a mental health professional",
        "Consider both counseling and possibly medication evaluation",
        "Reach out to friends, family, or support groups",
        "Use crisis support resources if you feel overwhelmed",
      ]
    } else if (totalScore <= 19) {
      severity = "Moderately Severe Depression"
      recommendations = [
        "Your responses suggest moderately severe depressive symptoms",
        "Please schedule an appointment with a mental health professional as soon as possible",
        "Consider both psychotherapy and medication evaluation",
        "Inform a trusted friend or family member about how you're feeling",
        "If you have thoughts of self-harm, seek immediate help",
      ]
    } else {
      severity = "Severe Depression"
      recommendations = [
        "Your responses suggest severe depressive symptoms",
        "Please seek immediate professional help",
        "Contact a mental health crisis line if you're having thoughts of self-harm",
        "Consider going to an emergency room if you feel unsafe",
        "Inform someone you trust about your current state",
        "Call 988 (Suicide & Crisis Lifeline) if needed",
      ]
    }

    const result: ScreeningResult = {
      type: "PHQ-9",
      score: totalScore,
      severity,
      date: new Date(),
      recommendations,
    }

    setShowResults(true)
    onComplete(result)
  }

  const progress = ((currentQuestion + 1) / phq9Questions.length) * 100

  if (showResults) {
    const totalScore = responses.reduce((sum, score) => sum + score, 0)
    const isHighRisk = totalScore >= 15 || responses[8] > 0 // High score or suicidal ideation

    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <div className="flex items-center space-x-2">
            {isHighRisk ? (
              <AlertTriangle className="h-6 w-6 text-red-600" />
            ) : (
              <CheckCircle className="h-6 w-6 text-green-600" />
            )}
            <CardTitle>PHQ-9 Assessment Complete</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">{totalScore}/27</div>
            <p className="text-lg font-medium">
              {totalScore <= 4
                ? "Minimal Depression"
                : totalScore <= 9
                  ? "Mild Depression"
                  : totalScore <= 14
                    ? "Moderate Depression"
                    : totalScore <= 19
                      ? "Moderately Severe Depression"
                      : "Severe Depression"}
            </p>
          </div>

          {isHighRisk && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-red-900">Immediate Support Recommended</h4>
                  <p className="text-sm text-red-800 mt-1">
                    Your responses indicate you may benefit from immediate professional support. Please consider
                    reaching out for help.
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="space-y-4">
            <h4 className="font-semibold">Recommendations:</h4>
            <ul className="space-y-2">
              {(totalScore <= 4
                ? [
                    "Your responses suggest minimal depressive symptoms",
                    "Continue with healthy lifestyle habits",
                    "Consider our wellness resources for maintaining good mental health",
                  ]
                : totalScore <= 9
                  ? [
                      "Your responses suggest mild depressive symptoms",
                      "Consider speaking with a counselor for support",
                      "Use our AI support chat for coping strategies",
                    ]
                  : [
                      "Your responses suggest significant depressive symptoms",
                      "We strongly recommend professional mental health support",
                      "Please schedule an appointment with a counselor",
                    ]
              ).map((rec, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span className="text-sm">{rec}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-4">
            <Button asChild className="flex-1">
              <a href="/counseling">Book Counseling</a>
            </Button>
            <Button variant="outline" asChild className="flex-1 bg-transparent">
              <a href="/ai-support">Get AI Support</a>
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>PHQ-9 Depression Screening</CardTitle>
          <span className="text-sm text-muted-foreground">
            Question {currentQuestion + 1} of {phq9Questions.length}
          </span>
        </div>
        <Progress value={progress} className="w-full" />
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <p className="text-sm text-muted-foreground mb-4">
            Over the last 2 weeks, how often have you been bothered by the following problem:
          </p>
          <h3 className="text-lg font-medium mb-6">{phq9Questions[currentQuestion]}</h3>
        </div>

        <RadioGroup value={responses[currentQuestion]?.toString()} onValueChange={handleResponse}>
          {responseOptions.map((option) => (
            <div key={option.value} className="flex items-center space-x-2">
              <RadioGroupItem value={option.value} id={option.value} />
              <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                {option.label}
              </Label>
            </div>
          ))}
        </RadioGroup>

        <div className="flex justify-between">
          <Button variant="outline" onClick={previousQuestion} disabled={currentQuestion === 0}>
            Previous
          </Button>
          <Button onClick={nextQuestion} disabled={responses[currentQuestion] === -1}>
            {currentQuestion === phq9Questions.length - 1 ? "Complete Assessment" : "Next"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
