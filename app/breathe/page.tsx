"use client"

import { useState, useEffect, useRef } from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wind, Play, Pause, Settings, X } from "lucide-react"

const breathingTechniques = [
  {
    id: "box",
    name: "Box Breathing",
    description: "Equal counts for inhale, hold, exhale, hold",
    pattern: [4, 4, 4, 4], // inhale, hold, exhale, hold
    phases: ["Breathe In", "Hold", "Breathe Out", "Hold"],
  },
  {
    id: "478",
    name: "4-7-8 Technique",
    description: "Calming technique for anxiety and sleep",
    pattern: [4, 7, 8, 0], // inhale, hold, exhale, no hold
    phases: ["Breathe In", "Hold", "Breathe Out", ""],
  },
  {
    id: "simple",
    name: "Simple Breathing",
    description: "Basic in and out breathing",
    pattern: [4, 0, 4, 0], // inhale, no hold, exhale, no hold
    phases: ["Breathe In", "", "Breathe Out", ""],
  },
]

const sessionLengths = [
  { value: 1, label: "1 Minute", seconds: 60 },
  { value: 3, label: "3 Minutes", seconds: 180 },
  { value: 5, label: "5 Minutes", seconds: 300 },
  { value: 10, label: "10 Minutes", seconds: 600 },
]

export default function BreathePage() {
  const [isSessionActive, setIsSessionActive] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [selectedTechnique, setSelectedTechnique] = useState(breathingTechniques[0])
  const [selectedDuration, setSelectedDuration] = useState(sessionLengths[1])
  const [currentPhase, setCurrentPhase] = useState(0)
  const [phaseProgress, setPhaseProgress] = useState(0)
  const [sessionTimeLeft, setSessionTimeLeft] = useState(0)
  const [cycleCount, setCycleCount] = useState(0)
  const [showSettings, setShowSettings] = useState(false)

  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const phaseIntervalRef = useRef<NodeJS.Timeout | null>(null)

  const startSession = () => {
    setIsSessionActive(true)
    setSessionTimeLeft(selectedDuration.seconds)
    setCycleCount(0)
    setCurrentPhase(0)
    setPhaseProgress(0)
    startBreathingCycle()
  }

  const pauseSession = () => {
    setIsPaused(!isPaused)
    if (isPaused) {
      startBreathingCycle()
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current)
      if (phaseIntervalRef.current) clearInterval(phaseIntervalRef.current)
    }
  }

  const stopSession = () => {
    setIsSessionActive(false)
    setIsPaused(false)
    if (intervalRef.current) clearInterval(intervalRef.current)
    if (phaseIntervalRef.current) clearInterval(phaseIntervalRef.current)
    setCurrentPhase(0)
    setPhaseProgress(0)
    setCycleCount(0)
  }

  const startBreathingCycle = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    if (phaseIntervalRef.current) clearInterval(phaseIntervalRef.current)

    // Session timer
    intervalRef.current = setInterval(() => {
      setSessionTimeLeft((prev) => {
        if (prev <= 1) {
          stopSession()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    // Breathing phase cycle
    const runPhase = (phaseIndex: number) => {
      const phaseDuration = selectedTechnique.pattern[phaseIndex]
      if (phaseDuration === 0) {
        // Skip phases with 0 duration
        const nextPhase = (phaseIndex + 1) % selectedTechnique.pattern.length
        if (nextPhase === 0) setCycleCount((prev) => prev + 1)
        setCurrentPhase(nextPhase)
        runPhase(nextPhase)
        return
      }

      setCurrentPhase(phaseIndex)
      setPhaseProgress(0)

      let progress = 0
      const progressInterval = 50 // Update every 50ms for smooth animation
      const totalSteps = (phaseDuration * 1000) / progressInterval

      phaseIntervalRef.current = setInterval(() => {
        progress += 1
        setPhaseProgress((progress / totalSteps) * 100)

        if (progress >= totalSteps) {
          if (phaseIntervalRef.current) clearInterval(phaseIntervalRef.current)
          const nextPhase = (phaseIndex + 1) % selectedTechnique.pattern.length
          if (nextPhase === 0) setCycleCount((prev) => prev + 1)
          runPhase(nextPhase)
        }
      }, progressInterval)
    }

    runPhase(0)
  }

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      if (phaseIntervalRef.current) clearInterval(phaseIntervalRef.current)
    }
  }, [])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const getCircleScale = () => {
    if (!isSessionActive || isPaused) return 1

    const phase = currentPhase
    const progress = phaseProgress / 100

    // Inhale phases (expand)
    if (phase === 0) {
      return 1 + progress * 0.8 // Scale from 1 to 1.8
    }
    // Hold phases (maintain)
    else if (phase === 1 && selectedTechnique.pattern[1] > 0) {
      return 1.8
    }
    // Exhale phases (contract)
    else if (phase === 2) {
      return 1.8 - progress * 0.8 // Scale from 1.8 to 1
    }
    // Second hold phase
    else if (phase === 3 && selectedTechnique.pattern[3] > 0) {
      return 1
    }

    return 1
  }

  if (isSessionActive && !showSettings) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center relative">
        {/* Minimal controls overlay */}
        <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-10">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowSettings(true)}
            className="text-muted-foreground hover:text-foreground"
          >
            <Settings className="h-4 w-4" />
          </Button>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">{formatTime(sessionTimeLeft)}</div>
            <div className="text-sm text-muted-foreground">{cycleCount} cycles</div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={stopSession}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Main breathing circle */}
        <div className="flex flex-col items-center justify-center">
          <div
            className="relative w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-4 border-primary/30 shadow-2xl transition-transform duration-1000 ease-in-out"
            style={{
              transform: `scale(${getCircleScale()})`,
              boxShadow: `0 0 ${60 * getCircleScale()}px rgba(61, 108, 168, 0.3)`,
            }}
          >
            {/* Inner circle */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/20">
              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{selectedTechnique.phases[currentPhase]}</div>
                  <div className="text-lg text-muted-foreground">{selectedTechnique.name}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Control buttons */}
          <div className="flex gap-4 mt-12">
            <Button
              onClick={pauseSession}
              variant="outline"
              size="lg"
              className="rounded-full w-16 h-16 border-primary/20 hover:border-primary/40 bg-transparent"
            >
              {isPaused ? <Play className="h-6 w-6" /> : <Pause className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Settings overlay */}
        {showSettings && (
          <div className="absolute inset-0 bg-background/95 backdrop-blur-sm flex items-center justify-center z-20">
            <Card className="w-full max-w-md mx-4">
              <CardHeader>
                <CardTitle>Session Settings</CardTitle>
                <CardDescription>Adjust your breathing session</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-3 block">Technique</label>
                  <div className="space-y-2">
                    {breathingTechniques.map((technique) => (
                      <button
                        key={technique.id}
                        onClick={() => setSelectedTechnique(technique)}
                        className={`w-full text-left p-3 rounded-lg border transition-colors ${
                          selectedTechnique.id === technique.id
                            ? "border-primary bg-primary/10"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <div className="font-medium">{technique.name}</div>
                        <div className="text-sm text-muted-foreground">{technique.description}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-3 block">Duration</label>
                  <div className="grid grid-cols-2 gap-2">
                    {sessionLengths.map((length) => (
                      <button
                        key={length.value}
                        onClick={() => setSelectedDuration(length)}
                        className={`p-3 rounded-lg border transition-colors ${
                          selectedDuration.value === length.value
                            ? "border-primary bg-primary/10"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        {length.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button onClick={() => setShowSettings(false)} variant="outline" className="flex-1">
                    Continue
                  </Button>
                  <Button onClick={stopSession} variant="destructive" className="flex-1">
                    End Session
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <Badge
                variant="secondary"
                className="px-6 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20"
              >
                <Wind className="w-4 h-4 mr-2" />
                Mindful Breathing
              </Badge>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Breathe <span className="bg-calming-gradient bg-clip-text text-transparent">Pacer</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find your calm with guided breathing exercises. Choose your technique and let the gentle rhythm guide you
              to peace.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Technique Selection */}
            <Card className="border-primary/10">
              <CardHeader>
                <CardTitle>Choose Your Technique</CardTitle>
                <CardDescription>Select a breathing pattern that feels right for you</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {breathingTechniques.map((technique) => (
                    <button
                      key={technique.id}
                      onClick={() => setSelectedTechnique(technique)}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                        selectedTechnique.id === technique.id
                          ? "border-primary bg-primary/10 shadow-md"
                          : "border-border hover:border-primary/50 hover:bg-primary/5"
                      }`}
                    >
                      <div className="font-semibold text-foreground mb-2">{technique.name}</div>
                      <div className="text-sm text-muted-foreground mb-3">{technique.description}</div>
                      <div className="flex gap-2">
                        {technique.pattern.map(
                          (count, index) =>
                            count > 0 && (
                              <Badge key={index} variant="outline" className="text-xs">
                                {technique.phases[index]}: {count}s
                              </Badge>
                            ),
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Session Setup */}
            <Card className="border-primary/10">
              <CardHeader>
                <CardTitle>Session Length</CardTitle>
                <CardDescription>How long would you like to practice?</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    {sessionLengths.map((length) => (
                      <button
                        key={length.value}
                        onClick={() => setSelectedDuration(length)}
                        className={`p-4 rounded-lg border-2 transition-all duration-200 text-center ${
                          selectedDuration.value === length.value
                            ? "border-primary bg-primary/10 shadow-md"
                            : "border-border hover:border-primary/50 hover:bg-primary/5"
                        }`}
                      >
                        <div className="font-semibold text-foreground">{length.label}</div>
                      </button>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-border">
                    <div className="text-center space-y-4">
                      <div className="p-4 bg-secondary/50 rounded-lg">
                        <div className="font-medium text-foreground mb-2">Ready to Begin</div>
                        <div className="text-sm text-muted-foreground">
                          {selectedTechnique.name} • {selectedDuration.label}
                        </div>
                      </div>

                      <Button
                        onClick={startSession}
                        size="lg"
                        className="w-full bg-calming-gradient hover:opacity-90 text-lg py-6"
                      >
                        <Play className="h-5 w-5 mr-2" />
                        Start Breathing Session
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Benefits Section */}
          <Card className="mt-8 border-primary/10">
            <CardHeader>
              <CardTitle>Benefits of Mindful Breathing</CardTitle>
              <CardDescription>
                Regular breathing practice can help improve your mental and physical well-being
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Wind className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Reduces Stress</h4>
                  <p className="text-sm text-muted-foreground">
                    Activates your body's relaxation response and lowers cortisol levels
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <div className="w-6 h-6 bg-accent rounded-full"></div>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Improves Focus</h4>
                  <p className="text-sm text-muted-foreground">
                    Enhances concentration and mental clarity through mindful attention
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <div className="w-6 h-6 bg-primary/60 rounded-full"></div>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Better Sleep</h4>
                  <p className="text-sm text-muted-foreground">
                    Calms the nervous system and prepares your body for rest
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
