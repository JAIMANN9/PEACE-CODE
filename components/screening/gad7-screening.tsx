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

interface GAD7ScreeningProps {
  onComplete: (result: ScreeningResult) => void
}

const gad7Questions = [
  "Feeling nervous, anxious, or on edge",
  "Not being able to stop or control worrying",
  "Worrying too much about different things",
  "Trouble relaxing",
  "Being so restless that it is hard to sit still",
  "Becoming easily annoyed or irritable",
  "Feeling afraid, as if something awful might happen",
]

const responseOptions = [
  { value: "0", label: "Not at all", score: 0 },
  { value: "1", label: "Several days", score: 1 },
  { value: "2", label: "More than half the days", score: 2 },
  { value: "3", label: "Nearly every day", score: 3 },
]

export function GAD7Screening({ onComplete }: GAD7ScreeningProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [responses, setResponses] = useState<number[]>(new Array(7).fill(-1))
  const [showResults, setShowResults] = useState(false)

  const handleResponse = (value: string) => {
    const newResponses = [...responses]
    newResponses[currentQuestion] = Number.parseInt(value)
    setResponses(newResponses)
  }

  const nextQuestion = () => {
    if (currentQuestion < gad7Questions.length - 1) {
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
      severity = "Minimal Anxiety"
      recommendations = [
        "Your responses suggest minimal anxiety symptoms",
        "Continue with healthy stress management practices",
        "Consider our relaxation resources for maintaining calm",
        "Monitor your anxiety levels and seek help if symptoms increase",
      ]
    } else if (totalScore <= 9) {
      severity = "Mild Anxiety"
      recommendations = [
        "Your responses suggest mild anxiety symptoms",
        "Consider learning anxiety management techniques",
        "Try our guided relaxation audio resources",
        "Speak with a counselor if symptoms interfere with daily activities",
        "Practice regular exercise and mindfulness",
      ]
    } else if (totalScore <= 14) {
      severity = "Moderate Anxiety"
      recommendations = [
        "Your responses suggest moderate anxiety symptoms",
        "We recommend scheduling an appointment with a mental health professional",
        "Consider both counseling and anxiety management strategies",
        "Use our AI support for immediate coping techniques",
        "Practice deep breathing and grounding exercises",
      ]
    } else {
      severity = "Severe Anxiety"
      recommendations = [
        "Your responses suggest severe anxiety symptoms",
        "Please seek professional help as soon as possible",
        "Consider both therapy and possible medication evaluation",
        "Use crisis support resources if anxiety feels overwhelming",
        "Inform a trusted person about your anxiety levels",
        "Contact emergency services if you feel unsafe",
      ]
    }

    const result: ScreeningResult = {
      type: "GAD-7",
      score: totalScore,
      severity,
      date: new Date(),
      recommendations,
    }

    setShowResults(true)
    onComplete(result)
  }

  const progress = ((currentQuestion + 1) / gad7Questions.length) * 100

  if (showResults) {
    const totalScore = responses.reduce((sum, score) => sum + score, 0)
    const isHighRisk = totalScore >= 15

    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <div className="flex items-center space-x-2">
            {isHighRisk ? (
              <AlertTriangle className="h-6 w-6 text-red-600" />
            ) : (
              <CheckCircle className="h-6 w-6 text-green-600" />
            )}
            <CardTitle>GAD-7 Assessment Complete</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">{totalScore}/21</div>
            <p className="text-lg font-medium">
              {totalScore <= 4
                ? "Minimal Anxiety"
                : totalScore <= 9
                  ? "Mild Anxiety"
                  : totalScore <= 14
                    ? "Moderate Anxiety"
                    : "Severe Anxiety"}
            </p>
          </div>

          {isHighRisk && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-red-900">Professional Support Recommended</h4>
                  <p className="text-sm text-red-800 mt-1">
                    Your anxiety levels suggest you would benefit from professional support and intervention.
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
                    "Your responses suggest minimal anxiety symptoms",
                    "Continue with healthy stress management practices",
                    "Consider our relaxation resources for maintaining calm",
                  ]
                : totalScore <= 9
                  ? [
                      "Your responses suggest mild anxiety symptoms",
                      "Consider learning anxiety management techniques",
                      "Try our guided relaxation audio resources",
                    ]
                  : [
                      "Your responses suggest significant anxiety symptoms",
                      "We recommend professional mental health support",
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
              <a href="/resources">Browse Resources</a>
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
          <CardTitle>GAD-7 Anxiety Screening</CardTitle>
          <span className="text-sm text-muted-foreground">
            Question {currentQuestion + 1} of {gad7Questions.length}
          </span>
        </div>
        <Progress value={progress} className="w-full" />
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <p className="text-sm text-muted-foreground mb-4">
            Over the last 2 weeks, how often have you been bothered by the following problem:
          </p>
          <h3 className="text-lg font-medium mb-6">{gad7Questions[currentQuestion]}</h3>
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
            {currentQuestion === gad7Questions.length - 1 ? "Complete Assessment" : "Next"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
