"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Camera, Heart, TrendingUp, Lock, Sparkles, Save, BarChart3, Lightbulb, Star } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

// Mock data for mood trends
const moodData = [
  { date: "Mon", mood: 7 },
  { date: "Tue", mood: 6 },
  { date: "Wed", mood: 8 },
  { date: "Thu", mood: 5 },
  { date: "Fri", mood: 9 },
  { date: "Sat", mood: 8 },
  { date: "Sun", mood: 7 },
]

const guidedPrompts = [
  "What are three things you're grateful for today?",
  "Describe a moment when you felt truly peaceful.",
  "What challenge are you facing, and how might you approach it?",
  "Write about someone who made you smile recently.",
  "What would you tell your younger self?",
  "Describe your ideal day from start to finish.",
]

const premiumPrompts = [
  "Deep Self-Reflection Series: Understanding Your Core Values",
  "Anxiety Management: Identifying Your Triggers",
  "Building Resilience: Your Personal Strength Inventory",
  "Relationship Patterns: Understanding Your Connections",
]

const moodEmojis = [
  { emoji: "😢", label: "Very Sad", value: 1 },
  { emoji: "😔", label: "Sad", value: 2 },
  { emoji: "😐", label: "Okay", value: 3 },
  { emoji: "🙂", label: "Good", value: 4 },
  { emoji: "😊", label: "Happy", value: 5 },
  { emoji: "😄", label: "Very Happy", value: 6 },
  { emoji: "🥰", label: "Excellent", value: 7 },
]

export default function JournalPage() {
  const [currentEntry, setCurrentEntry] = useState("")
  const [selectedMood, setSelectedMood] = useState<number | null>(null)
  const [selectedPrompt, setSelectedPrompt] = useState<string | null>(null)
  const [entries, setEntries] = useState<any[]>([])
  const [showPrompts, setShowPrompts] = useState(false)

  const handleSaveEntry = () => {
    if (currentEntry.trim() || selectedMood) {
      const newEntry = {
        id: Date.now(),
        content: currentEntry,
        mood: selectedMood,
        date: new Date().toLocaleDateString(),
        prompt: selectedPrompt,
      }
      setEntries([newEntry, ...entries])
      setCurrentEntry("")
      setSelectedMood(null)
      setSelectedPrompt(null)
    }
  }

  const averageMood =
    entries.length > 0
      ? entries.filter((e) => e.mood).reduce((sum, e) => sum + e.mood, 0) / entries.filter((e) => e.mood).length
      : 0

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
                <BookOpen className="w-4 h-4 mr-2" />
                Your Digital Sanctuary
              </Badge>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Digital <span className="bg-calming-gradient bg-clip-text text-transparent">Journal</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A safe space to express your thoughts, track your emotions, and reflect on your journey toward wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Writing Area */}
            <div className="lg:col-span-2 space-y-6">
              {/* Writing Sanctuary */}
              <Card className="border-primary/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    Today's Entry
                  </CardTitle>
                  <CardDescription>Express yourself freely in this judgment-free space</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Mood Selector */}
                  <div>
                    <label className="text-sm font-medium text-foreground mb-3 block">How are you feeling today?</label>
                    <div className="flex flex-wrap gap-3">
                      {moodEmojis.map((mood) => (
                        <button
                          key={mood.value}
                          onClick={() => setSelectedMood(mood.value)}
                          className={`p-3 rounded-lg border-2 transition-all duration-200 hover:scale-110 ${
                            selectedMood === mood.value
                              ? "border-primary bg-primary/10"
                              : "border-border hover:border-primary/50"
                          }`}
                          title={mood.label}
                        >
                          <span className="text-2xl">{mood.emoji}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Guided Prompt Display */}
                  {selectedPrompt && (
                    <div className="p-4 bg-secondary/50 rounded-lg border border-primary/20">
                      <div className="flex items-start gap-3">
                        <Lightbulb className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium text-foreground mb-1">Writing Prompt</p>
                          <p className="text-muted-foreground">{selectedPrompt}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Text Editor */}
                  <div>
                    <Textarea
                      placeholder="Start writing your thoughts here... Let your mind flow freely."
                      value={currentEntry}
                      onChange={(e) => setCurrentEntry(e.target.value)}
                      className="min-h-[300px] text-base leading-relaxed resize-none border-primary/20 focus:border-primary"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    <Button
                      onClick={handleSaveEntry}
                      disabled={!currentEntry.trim() && !selectedMood}
                      className="bg-calming-gradient hover:opacity-90"
                    >
                      <Save className="h-4 w-4 mr-2" />
                      Save Entry
                    </Button>
                    <Button variant="outline" className="border-primary/20 bg-transparent">
                      <Camera className="h-4 w-4 mr-2" />
                      Add Photo
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setShowPrompts(!showPrompts)}
                      className="border-primary/20"
                    >
                      <Lightbulb className="h-4 w-4 mr-2" />
                      Get Inspired
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Guided Prompts */}
              {showPrompts && (
                <Card className="border-primary/10">
                  <CardHeader>
                    <CardTitle>Writing Prompts</CardTitle>
                    <CardDescription>Choose a prompt to guide your reflection</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-foreground mb-3">Free Prompts</h4>
                        <div className="grid gap-2">
                          {guidedPrompts.map((prompt, index) => (
                            <button
                              key={index}
                              onClick={() => {
                                setSelectedPrompt(prompt)
                                setShowPrompts(false)
                              }}
                              className="text-left p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-colors"
                            >
                              {prompt}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                          Premium Guided Series
                          <Badge variant="secondary" className="bg-accent/10 text-accent">
                            <Star className="h-3 w-3 mr-1" />
                            Premium
                          </Badge>
                        </h4>
                        <div className="grid gap-2">
                          {premiumPrompts.map((prompt, index) => (
                            <div
                              key={index}
                              className="relative p-3 rounded-lg border border-border bg-muted/30 opacity-75"
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-muted-foreground">{prompt}</span>
                                <Lock className="h-4 w-4 text-muted-foreground" />
                              </div>
                            </div>
                          ))}
                        </div>
                        <Button
                          variant="outline"
                          className="w-full mt-3 border-accent text-accent hover:bg-accent/10 bg-transparent"
                        >
                          Unlock Premium Prompts
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Recent Entries */}
              {entries.length > 0 && (
                <Card className="border-primary/10">
                  <CardHeader>
                    <CardTitle>Recent Entries</CardTitle>
                    <CardDescription>Your journey of self-reflection</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {entries.slice(0, 3).map((entry) => (
                        <div key={entry.id} className="p-4 border border-border rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-muted-foreground">{entry.date}</span>
                            {entry.mood && (
                              <span className="text-lg">{moodEmojis.find((m) => m.value === entry.mood)?.emoji}</span>
                            )}
                          </div>
                          {entry.prompt && <p className="text-sm text-primary mb-2 italic">"{entry.prompt}"</p>}
                          <p className="text-foreground line-clamp-3">{entry.content}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Mood Trends */}
              <Card className="border-primary/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Mood Trends
                  </CardTitle>
                  <CardDescription>Track your emotional journey</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-1">{averageMood.toFixed(1)}</div>
                      <p className="text-sm text-muted-foreground">Average Mood This Week</p>
                    </div>

                    <div className="h-48">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={moodData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                          <XAxis dataKey="date" stroke="#4a5568" />
                          <YAxis domain={[1, 10]} stroke="#4a5568" />
                          <Tooltip />
                          <Line
                            type="monotone"
                            dataKey="mood"
                            stroke="#3D6CA8"
                            strokeWidth={3}
                            dot={{ fill: "#3D6CA8", strokeWidth: 2, r: 4 }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Journal Stats */}
              <Card className="border-primary/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    Your Progress
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Entries This Month</span>
                        <span className="text-sm text-primary font-bold">{entries.length}/30</span>
                      </div>
                      <Progress value={(entries.length / 30) * 100} className="h-2" />
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Streak</span>
                        <span className="text-sm text-primary font-bold">3 days</span>
                      </div>
                      <Progress value={30} className="h-2" />
                    </div>

                    <div className="pt-4 border-t border-border">
                      <div className="text-center">
                        <Heart className="h-8 w-8 text-accent mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">Keep writing to maintain your wellness journey</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Premium Upgrade */}
              <Card className="border-accent/20 bg-gradient-to-br from-accent/5 to-primary/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-accent" />
                    Unlock Premium
                  </CardTitle>
                  <CardDescription>Enhanced journaling experience</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span>Guided Journaling Series</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span>Advanced Mood Analytics</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span>Export & Backup</span>
                    </div>
                    <Button className="w-full mt-4 bg-accent hover:bg-accent/90">Upgrade Now</Button>
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
