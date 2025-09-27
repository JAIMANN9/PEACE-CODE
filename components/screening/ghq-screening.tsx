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

interface GHQScreeningProps {
  onComplete: (result: ScreeningResult) => void
}

const ghqQuestions = [
  "Been able to concentrate on whatever you're doing?",
  "Lost much sleep over worry?",
  "Felt that you were playing a useful part in things?",
  "Felt capable of making decisions about things?",
  "Felt constantly under strain?",
  "Felt you couldn't overcome your difficulties?",
  "Been able to enjoy your normal day-to-day activities?",
  "Been able to face up to problems?",
  "Been feeling unhappy or depressed?",
  "Been losing confidence in yourself?",
  "Been thinking of yourself as a worthless person?",
  "Been feeling reasonably happy, all things considered?",
]

const responseOptions = [
  { value: "0", label: "Better than usual", score: 0 },
  { value: "1", label: "Same as usual", score: 0 },
  { value: "2", label: "Less than usual", score: 1 },
  { value: "3", label: "Much less than usual", score: 1 },
]

const negativeQuestions = [1, 4, 5, 8, 9, 10] // Questions where higher scores indicate problems

export function GHQScreening({ onComplete }: GHQScreeningProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [responses, setResponses] = useState<number[]>(new Array(12).fill(-1))
  const [showResults, setShowResults] = useState(false)

  const handleResponse = (value: string) => {
    const newResponses = [...responses]
    newResponses[currentQuestion] = Number.parseInt(value)
    setResponses(newResponses)
  }

  const nextQuestion = () => {
    if (currentQuestion < ghqQuestions.length - 1) {
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
    let totalScore = 0

    responses.forEach((response, index) => {
      if (negativeQuestions.includes(index)) {
        // For negative questions, score 1 for "Less than usual" or "Much less than usual"
        totalScore += response >= 2 ? 1 : 0
      } else {
        // For positive questions, score 1 for "Less than usual" or "Much less than usual"
        totalScore += response >= 2 ? 1 : 0
      }
    })

    let severity = ""
    let recommendations: string[] = []

    if (totalScore <= 2) {
      severity = "Good Mental Health"
      recommendations = [
        "Your responses suggest good overall mental health",
        "Continue with your current self-care practices",
        "Consider our wellness resources to maintain good mental health",
        "Stay connected with supportive relationships",
      ]
    } else if (totalScore <= 4) {
      severity = "Mild Distress"
      recommendations = [
        "Your responses suggest mild psychological distress",
        "Consider stress management techniques and self-care",
        "Use our relaxation resources and mindfulness exercises",
        "Monitor your mental health and seek support if needed",
        "Maintain healthy lifestyle habits",
      ]
    } else if (totalScore <= 6) {
      severity = "Moderate Distress"
      recommendations = [
        "Your responses suggest moderate psychological distress",
        "We recommend speaking with a mental health professional",
        "Consider counseling to develop coping strategies",
        "Use our AI support for immediate assistance",
        "Engage in stress-reducing activities and social support",
      ]
    } else {
      severity = "Severe Distress"
      recommendations = [
        "Your responses suggest significant psychological distress",
        "Please seek professional mental health support promptly",
        "Consider both counseling and possible medical evaluation",
        "Reach out to trusted friends, family, or support services",
        "Use crisis resources if you feel overwhelmed",
        "Contact emergency services if you feel unsafe",
      ]
    }

    const result: ScreeningResult = {
      type: "GHQ-12",
      score: totalScore,
      severity,
      date: new Date(),
      recommendations,
    }

    setShowResults(true)
    onComplete(result)
  }

  const progress = ((currentQuestion + 1) / ghqQuestions.length) * 100

  if (showResults) {
    const totalScore = responses.reduce((sum, response, index) => {
      if (negativeQuestions.includes(index)) {
        return sum + (response >= 2 ? 1 : 0)
      } else {
        return sum + (response >= 2 ? 1 : 0)
      }
    }, 0)
    const isHighRisk = totalScore >= 7

    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <div className="flex items-center space-x-2">
            {isHighRisk ? (
              <AlertTriangle className="h-6 w-6 text-red-600" />
            ) : (
              <CheckCircle className="h-6 w-6 text-green-600" />
            )}
            <CardTitle>GHQ-12 Assessment Complete</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">{totalScore}/12</div>
            <p className="text-lg font-medium">
              {totalScore <= 2
                ? "Good Mental Health"
                : totalScore <= 4
                  ? "Mild Distress"
                  : totalScore <= 6
                    ? "Moderate Distress"
                    : "Severe Distress"}
            </p>
          </div>

          {isHighRisk && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-red-900">Professional Support Recommended</h4>
                  <p className="text-sm text-red-800 mt-1">
                    Your responses indicate significant distress. Please consider seeking professional support.
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="space-y-4">
            <h4 className="font-semibold">Recommendations:</h4>
            <ul className="space-y-2">
              {(totalScore <= 2
                ? [
                    "Your responses suggest good overall mental health",
                    "Continue with your current self-care practices",
                    "Consider our wellness resources to maintain good mental health",
                  ]
                : totalScore <= 4
                  ? [
                      "Your responses suggest mild psychological distress",
                      "Consider stress management techniques and self-care",
                      "Use our relaxation resources and mindfulness exercises",
                    ]
                  : [
                      "Your responses suggest significant psychological distress",
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
          <CardTitle>GHQ-12 General Health Screening</CardTitle>
          <span className="text-sm text-muted-foreground">
            Question {currentQuestion + 1} of {ghqQuestions.length}
          </span>
        </div>
        <Progress value={progress} className="w-full" />
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <p className="text-sm text-muted-foreground mb-4">
            We should like to know how your health has been in general over the past few weeks. Have you recently:
          </p>
          <h3 className="text-lg font-medium mb-6">{ghqQuestions[currentQuestion]}</h3>
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
            {currentQuestion === ghqQuestions.length - 1 ? "Complete Assessment" : "Next"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
