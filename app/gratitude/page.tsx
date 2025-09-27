"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Heart, Plus, Send, Shield, Sparkles, Smile, Sun } from "lucide-react"

interface GratitudeNote {
  id: number
  content: string
  timestamp: string
  color: string
  height: number
}

const cardColors = [
  "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200",
  "bg-gradient-to-br from-green-50 to-green-100 border-green-200",
  "bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200",
  "bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200",
  "bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200",
  "bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-200",
  "bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200",
  "bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200",
]

const sampleNotes: GratitudeNote[] = [
  {
    id: 1,
    content:
      "Today I'm grateful for the warm cup of tea that started my morning perfectly. Sometimes it's the smallest things that bring the most joy.",
    timestamp: "2 hours ago",
    color: cardColors[0],
    height: 180,
  },
  {
    id: 2,
    content:
      "Grateful for my friend who listened to me vent today without judgment. True friendship is such a blessing.",
    timestamp: "4 hours ago",
    color: cardColors[1],
    height: 160,
  },
  {
    id: 3,
    content:
      "The sunset today was absolutely breathtaking. Nature has a way of reminding us how beautiful life can be.",
    timestamp: "6 hours ago",
    color: cardColors[2],
    height: 140,
  },
  {
    id: 4,
    content:
      "My professor extended the deadline for our project. I'm so thankful for understanding educators who care about student wellbeing.",
    timestamp: "8 hours ago",
    color: cardColors[3],
    height: 200,
  },
  {
    id: 5,
    content: "Found a quiet corner in the library today where I could actually focus. Grateful for peaceful spaces.",
    timestamp: "10 hours ago",
    color: cardColors[4],
    height: 150,
  },
  {
    id: 6,
    content: "My mom called just when I needed to hear her voice. Family love transcends distance.",
    timestamp: "12 hours ago",
    color: cardColors[5],
    height: 130,
  },
  {
    id: 7,
    content:
      "Grateful for the stranger who smiled at me on the bus today. Small acts of kindness make such a difference.",
    timestamp: "14 hours ago",
    color: cardColors[6],
    height: 170,
  },
  {
    id: 8,
    content:
      "Finally understood that difficult concept in my chemistry class. The feeling of breakthrough is incredible!",
    timestamp: "16 hours ago",
    color: cardColors[7],
    height: 160,
  },
  {
    id: 9,
    content: "Thankful for rainy days that give me permission to stay cozy indoors with a good book.",
    timestamp: "18 hours ago",
    color: cardColors[0],
    height: 140,
  },
  {
    id: 10,
    content:
      "My roommate surprised me with my favorite snack after a tough day. Grateful for thoughtful people in my life.",
    timestamp: "20 hours ago",
    color: cardColors[1],
    height: 180,
  },
  {
    id: 11,
    content:
      "The campus counselor was so understanding and helpful today. Mental health support makes all the difference.",
    timestamp: "22 hours ago",
    color: cardColors[2],
    height: 190,
  },
  {
    id: 12,
    content: "Grateful for second chances and the opportunity to learn from my mistakes.",
    timestamp: "1 day ago",
    color: cardColors[3],
    height: 120,
  },
]

export default function GratitudePage() {
  const [notes, setNotes] = useState<GratitudeNote[]>(sampleNotes)
  const [newNote, setNewNote] = useState("")
  const [showForm, setShowForm] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const submitNote = async () => {
    if (!newNote.trim()) return

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      const note: GratitudeNote = {
        id: Date.now(),
        content: newNote.trim(),
        timestamp: "Just now",
        color: cardColors[Math.floor(Math.random() * cardColors.length)],
        height: Math.floor(Math.random() * 100) + 120, // Random height between 120-220
      }

      setNotes([note, ...notes])
      setNewNote("")
      setShowForm(false)
      setIsSubmitting(false)
    }, 1000)
  }

  // Create masonry columns
  const createMasonryColumns = (items: GratitudeNote[], columns: number) => {
    const cols: GratitudeNote[][] = Array.from({ length: columns }, () => [])
    const colHeights = Array(columns).fill(0)

    items.forEach((item) => {
      const shortestColIndex = colHeights.indexOf(Math.min(...colHeights))
      cols[shortestColIndex].push(item)
      colHeights[shortestColIndex] += item.height + 24 // Add gap
    })

    return cols
  }

  const masonryColumns = createMasonryColumns(notes, 3)

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
                <Heart className="w-4 h-4 mr-2" />
                Community Positivity
              </Badge>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Gratitude <span className="bg-calming-gradient bg-clip-text text-transparent">Wall</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              A space for sharing anonymous moments of gratitude, joy, and positivity. Add your own note of thanks to
              brighten someone's day.
            </p>

            {/* Add Note Button */}
            <Button
              onClick={() => setShowForm(!showForm)}
              size="lg"
              className="bg-calming-gradient hover:opacity-90 mb-8"
            >
              <Plus className="h-5 w-5 mr-2" />
              Share Your Gratitude
            </Button>
          </div>

          {/* Add Note Form */}
          {showForm && (
            <Card className="max-w-2xl mx-auto mb-12 border-primary/20 shadow-lg">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-foreground">Share Something You're Grateful For</h3>
                  </div>

                  <Textarea
                    placeholder="What brought joy to your heart today? Share your moment of gratitude anonymously..."
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                    className="min-h-[120px] border-primary/20 focus:border-primary resize-none"
                    maxLength={500}
                  />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Shield className="h-4 w-4" />
                      <span>Anonymous & Moderated</span>
                    </div>
                    <div className="text-sm text-muted-foreground">{newNote.length}/500</div>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      onClick={submitNote}
                      disabled={!newNote.trim() || isSubmitting}
                      className="bg-calming-gradient hover:opacity-90"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sharing...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Share Gratitude
                        </>
                      )}
                    </Button>
                    <Button
                      onClick={() => setShowForm(false)}
                      variant="outline"
                      className="border-primary/20 bg-transparent"
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Gratitude Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center p-6 border-primary/10">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary mb-1">{notes.length}</div>
              <div className="text-sm text-muted-foreground">Gratitude Notes</div>
            </Card>

            <Card className="text-center p-6 border-primary/10">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Smile className="h-6 w-6 text-accent" />
              </div>
              <div className="text-2xl font-bold text-accent mb-1">2.4K</div>
              <div className="text-sm text-muted-foreground">Smiles Shared</div>
            </Card>

            <Card className="text-center p-6 border-primary/10">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Sun className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary mb-1">98%</div>
              <div className="text-sm text-muted-foreground">Positive Vibes</div>
            </Card>
          </div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {masonryColumns.map((column, columnIndex) => (
              <div key={columnIndex} className="space-y-6">
                {column.map((note) => (
                  <Card
                    key={note.id}
                    className={`${note.color} border-2 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1`}
                    style={{ minHeight: `${note.height}px` }}
                  >
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <p className="text-foreground leading-relaxed text-pretty">{note.content}</p>

                        <div className="flex items-center justify-between pt-4 border-t border-current/10">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-white/50 rounded-full flex items-center justify-center">
                              <Heart className="h-4 w-4 text-primary" />
                            </div>
                            <span className="text-sm text-muted-foreground">Anonymous</span>
                          </div>
                          <span className="text-xs text-muted-foreground">{note.timestamp}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ))}
          </div>

          {/* Moderation Notice */}
          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto border-primary/10 bg-primary/5">
              <CardContent className="p-6">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold text-foreground">Community Guidelines</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  This is a safe space for sharing positivity and gratitude. All posts are anonymous and moderated to
                  ensure a supportive environment. Please keep your messages uplifting, respectful, and focused on
                  gratitude.
                </p>
                <div className="flex items-center justify-center gap-6 mt-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Moderated 24/7</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Anonymous Posts</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Positive Vibes Only</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
