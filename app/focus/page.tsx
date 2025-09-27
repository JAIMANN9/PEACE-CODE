"use client"

import { useState, useEffect, useRef } from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import {
  Timer,
  Play,
  Pause,
  RotateCcw,
  Plus,
  Check,
  Trash2,
  Volume2,
  VolumeX,
  Settings,
  Coffee,
  Brain,
  Star,
  Lock,
  Zap,
} from "lucide-react"

interface Task {
  id: number
  text: string
  completed: boolean
  pomodorosCompleted: number
}

interface Soundscape {
  id: string
  name: string
  description: string
  isPremium: boolean
  icon: string
}

const soundscapes: Soundscape[] = [
  { id: "silence", name: "Silence", description: "Pure focus without sound", isPremium: false, icon: "🔇" },
  { id: "library", name: "Quiet Library", description: "Subtle ambient library sounds", isPremium: false, icon: "📚" },
  { id: "rain", name: "Gentle Rainfall", description: "Soft rain on leaves", isPremium: false, icon: "🌧️" },
  { id: "brown", name: "Brown Noise", description: "Deep, consistent background noise", isPremium: false, icon: "🌊" },
  // Premium soundscapes
  { id: "forest", name: "Forest Ambience", description: "Birds and rustling leaves", isPremium: true, icon: "🌲" },
  { id: "ocean", name: "Ocean Waves", description: "Rhythmic wave sounds", isPremium: true, icon: "🌊" },
  { id: "cafe", name: "Coffee Shop", description: "Bustling cafe atmosphere", isPremium: true, icon: "☕" },
  { id: "fireplace", name: "Crackling Fire", description: "Warm fireplace sounds", isPremium: true, icon: "🔥" },
  { id: "thunder", name: "Distant Thunder", description: "Gentle thunderstorm", isPremium: true, icon: "⛈️" },
  { id: "wind", name: "Mountain Wind", description: "Peaceful mountain breeze", isPremium: true, icon: "💨" },
]

const defaultSettings = {
  workDuration: 25,
  shortBreakDuration: 5,
  longBreakDuration: 15,
  longBreakInterval: 4,
}

export default function FocusPage() {
  const [isActive, setIsActive] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [timeLeft, setTimeLeft] = useState(defaultSettings.workDuration * 60)
  const [isBreak, setIsBreak] = useState(false)
  const [completedPomodoros, setCompletedPomodoros] = useState(0)
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTask, setNewTask] = useState("")
  const [selectedSoundscape, setSelectedSoundscape] = useState(soundscapes[0])
  const [soundEnabled, setSoundEnabled] = useState(false)
  const [settings, setSettings] = useState(defaultSettings)
  const [showSettings, setShowSettings] = useState(false)

  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const getCurrentDuration = () => {
    if (isBreak) {
      return completedPomodoros > 0 && completedPomodoros % settings.longBreakInterval === 0
        ? settings.longBreakDuration
        : settings.shortBreakDuration
    }
    return settings.workDuration
  }

  const startTimer = () => {
    setIsActive(true)
    setIsPaused(false)

    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          // Timer completed
          if (!isBreak) {
            setCompletedPomodoros((prev) => prev + 1)
            setIsBreak(true)
            const nextDuration =
              (completedPomodoros + 1) % settings.longBreakInterval === 0
                ? settings.longBreakDuration
                : settings.shortBreakDuration
            return nextDuration * 60
          } else {
            setIsBreak(false)
            return settings.workDuration * 60
          }
        }
        return prev - 1
      })
    }, 1000)
  }

  const pauseTimer = () => {
    setIsPaused(!isPaused)
    if (isPaused) {
      startTimer()
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }

  const resetTimer = () => {
    setIsActive(false)
    setIsPaused(false)
    setIsBreak(false)
    setTimeLeft(settings.workDuration * 60)
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          text: newTask.trim(),
          completed: false,
          pomodorosCompleted: 0,
        },
      ])
      setNewTask("")
    }
  }

  const toggleTask = (id: number) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const getProgress = () => {
    const totalDuration = getCurrentDuration() * 60
    return ((totalDuration - timeLeft) / totalDuration) * 100
  }

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <Badge
                variant="secondary"
                className="px-6 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20"
              >
                <Timer className="w-4 h-4 mr-2" />
                Productivity Flow
              </Badge>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Focus <span className="bg-calming-gradient bg-clip-text text-transparent">Flow</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Boost your productivity with the Pomodoro Technique. Work in focused intervals, take mindful breaks, and
              track your progress.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Timer Section */}
            <div className="lg:col-span-2 space-y-6">
              {/* Main Timer */}
              <Card className="border-primary/10">
                <CardContent className="p-8">
                  <div className="text-center space-y-6">
                    {/* Timer Display */}
                    <div className="relative">
                      <div className="w-64 h-64 mx-auto relative">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                          <circle
                            cx="50"
                            cy="50"
                            r="45"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            className="text-border"
                          />
                          <circle
                            cx="50"
                            cy="50"
                            r="45"
                            stroke="currentColor"
                            strokeWidth="3"
                            fill="none"
                            strokeDasharray={`${2 * Math.PI * 45}`}
                            strokeDashoffset={`${2 * Math.PI * 45 * (1 - getProgress() / 100)}`}
                            className="text-primary transition-all duration-1000 ease-out"
                            strokeLinecap="round"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-5xl font-bold text-foreground mb-2">{formatTime(timeLeft)}</div>
                            <div className="text-lg text-muted-foreground">
                              {isBreak
                                ? completedPomodoros % settings.longBreakInterval === 0
                                  ? "Long Break"
                                  : "Short Break"
                                : "Focus Time"}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Session Info */}
                    <div className="flex items-center justify-center gap-8">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{completedPomodoros}</div>
                        <div className="text-sm text-muted-foreground">Completed</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-accent">
                          {Math.floor(completedPomodoros / settings.longBreakInterval)}
                        </div>
                        <div className="text-sm text-muted-foreground">Cycles</div>
                      </div>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center justify-center gap-4">
                      <Button
                        onClick={isActive ? pauseTimer : startTimer}
                        size="lg"
                        className="bg-calming-gradient hover:opacity-90 px-8"
                        disabled={isPaused && !isActive}
                      >
                        {isActive && !isPaused ? <Pause className="h-5 w-5 mr-2" /> : <Play className="h-5 w-5 mr-2" />}
                        {isActive && !isPaused ? "Pause" : "Start"}
                      </Button>
                      <Button
                        onClick={resetTimer}
                        variant="outline"
                        size="lg"
                        className="border-primary/20 bg-transparent"
                      >
                        <RotateCcw className="h-5 w-5 mr-2" />
                        Reset
                      </Button>
                    </div>

                    {/* Current Phase Indicator */}
                    <div className="flex items-center justify-center">
                      <Badge
                        variant={isBreak ? "secondary" : "default"}
                        className={`px-4 py-2 ${isBreak ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary"}`}
                      >
                        {isBreak ? <Coffee className="h-4 w-4 mr-2" /> : <Brain className="h-4 w-4 mr-2" />}
                        {isBreak ? "Break Time - Relax & Recharge" : "Focus Time - Deep Work Mode"}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Soundscape Selection */}
              <Card className="border-primary/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Volume2 className="h-5 w-5 text-primary" />
                    Ambient Soundscapes
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSoundEnabled(!soundEnabled)}
                      className="ml-auto"
                    >
                      {soundEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
                    </Button>
                  </CardTitle>
                  <CardDescription>Choose background sounds to enhance your focus</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {soundscapes.slice(0, 4).map((sound) => (
                      <button
                        key={sound.id}
                        onClick={() => setSelectedSoundscape(sound)}
                        disabled={sound.isPremium}
                        className={`p-4 rounded-lg border-2 transition-all duration-200 text-center ${
                          selectedSoundscape.id === sound.id
                            ? "border-primary bg-primary/10"
                            : "border-border hover:border-primary/50 hover:bg-primary/5"
                        }`}
                      >
                        <div className="text-2xl mb-2">{sound.icon}</div>
                        <div className="font-medium text-sm">{sound.name}</div>
                      </button>
                    ))}
                  </div>

                  {/* Premium Soundscapes */}
                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-medium text-foreground">Premium Soundscapes</h4>
                      <Badge variant="secondary" className="bg-accent/10 text-accent">
                        <Star className="h-3 w-3 mr-1" />
                        Premium
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {soundscapes.slice(4, 10).map((sound) => (
                        <div
                          key={sound.id}
                          className="relative p-4 rounded-lg border border-border bg-muted/30 opacity-75 text-center"
                        >
                          <div className="text-2xl mb-2">{sound.icon}</div>
                          <div className="font-medium text-sm text-muted-foreground">{sound.name}</div>
                          <Lock className="h-4 w-4 text-muted-foreground absolute top-2 right-2" />
                        </div>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      className="w-full mt-4 border-accent text-accent hover:bg-accent/10 bg-transparent"
                    >
                      <Star className="h-4 w-4 mr-2" />
                      Unlock Premium Sounds
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Task List */}
              <Card className="border-primary/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    Focus Tasks
                  </CardTitle>
                  <CardDescription>Track what you want to accomplish</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Add Task */}
                    <div className="flex gap-2">
                      <Input
                        placeholder="Add a task..."
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && addTask()}
                        className="border-primary/20"
                      />
                      <Button onClick={addTask} size="sm" className="shrink-0">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Task List */}
                    <div className="space-y-2 max-h-64 overflow-y-auto">
                      {tasks.map((task) => (
                        <div
                          key={task.id}
                          className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-muted/50"
                        >
                          <Checkbox checked={task.completed} onCheckedChange={() => toggleTask(task.id)} />
                          <span
                            className={`flex-1 text-sm ${task.completed ? "line-through text-muted-foreground" : "text-foreground"}`}
                          >
                            {task.text}
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => deleteTask(task.id)}
                            className="text-muted-foreground hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                      {tasks.length === 0 && (
                        <div className="text-center py-8 text-muted-foreground">
                          <Check className="h-8 w-8 mx-auto mb-2 opacity-50" />
                          <p className="text-sm">No tasks yet. Add one above!</p>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Session Stats */}
              <Card className="border-primary/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    Today's Progress
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Pomodoros</span>
                        <span className="text-sm text-primary font-bold">{completedPomodoros}/8</span>
                      </div>
                      <Progress value={(completedPomodoros / 8) * 100} className="h-2" />
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Tasks Completed</span>
                        <span className="text-sm text-accent font-bold">
                          {tasks.filter((t) => t.completed).length}/{tasks.length}
                        </span>
                      </div>
                      <Progress
                        value={tasks.length > 0 ? (tasks.filter((t) => t.completed).length / tasks.length) * 100 : 0}
                        className="h-2"
                      />
                    </div>

                    <div className="pt-4 border-t border-border text-center">
                      <div className="text-2xl font-bold text-primary mb-1">
                        {Math.floor((completedPomodoros * 25) / 60)}h {(completedPomodoros * 25) % 60}m
                      </div>
                      <p className="text-sm text-muted-foreground">Focus time today</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Settings */}
              <Card className="border-primary/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5 text-primary" />
                    Timer Settings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Work Duration (minutes)</label>
                      <Input
                        type="number"
                        value={settings.workDuration}
                        onChange={(e) =>
                          setSettings({ ...settings, workDuration: Number.parseInt(e.target.value) || 25 })
                        }
                        className="border-primary/20"
                        min="1"
                        max="60"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Short Break (minutes)</label>
                      <Input
                        type="number"
                        value={settings.shortBreakDuration}
                        onChange={(e) =>
                          setSettings({ ...settings, shortBreakDuration: Number.parseInt(e.target.value) || 5 })
                        }
                        className="border-primary/20"
                        min="1"
                        max="30"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Long Break (minutes)</label>
                      <Input
                        type="number"
                        value={settings.longBreakDuration}
                        onChange={(e) =>
                          setSettings({ ...settings, longBreakDuration: Number.parseInt(e.target.value) || 15 })
                        }
                        className="border-primary/20"
                        min="1"
                        max="60"
                      />
                    </div>
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
