"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import {
  Bot,
  Edit3,
  Wind,
  Timer,
  Sparkles,
  Heart,
  BookOpen,
  Users,
  ClipboardList,
  Crown,
  User,
  Target,
  Activity,
  Brain,
  Sun,
} from "lucide-react"
import Link from "next/link"

const sidebarItems = [
  {
    title: "AI Support",
    url: "/ai-support",
    icon: Bot,
    description: "Chat with AI companion",
  },
  {
    title: "Journal",
    url: "/journal",
    icon: Edit3,
    description: "Digital mood journal",
  },
  {
    title: "Breathe",
    url: "/breathe",
    icon: Wind,
    description: "Breathing exercises",
  },
  {
    title: "Focus",
    url: "/focus",
    icon: Timer,
    description: "Productivity timer",
  },
  {
    title: "Gratitude",
    url: "/gratitude",
    icon: Sparkles,
    description: "Gratitude wall",
  },
  {
    title: "Counseling",
    url: "/counseling",
    icon: Heart,
    description: "Professional support",
  },
  {
    title: "Resources",
    url: "/resources",
    icon: BookOpen,
    description: "Mental health resources",
  },
  {
    title: "Community",
    url: "/community",
    icon: Users,
    description: "Peer support",
  },
  {
    title: "Screening",
    url: "/screening",
    icon: ClipboardList,
    description: "Mental health assessment",
  },
  {
    title: "Premium",
    url: "/pricing",
    icon: Crown,
    description: "Upgrade your experience",
    className: "text-yellow-600 hover:text-yellow-700",
  },
]

const moodData = [
  { day: "Mon", mood: 7 },
  { day: "Tue", mood: 6 },
  { day: "Wed", mood: 8 },
  { day: "Thu", mood: 5 },
  { day: "Fri", mood: 9 },
  { day: "Sat", mood: 8 },
  { day: "Sun", mood: 7 },
]

export default function StudentDashboard() {
  const [currentTime, setCurrentTime] = useState(new Date())

  // Mock user data
  const userData = {
    name: "Priya Sharma",
    email: "priya.sharma@student.edu",
    joinDate: "January 2024",
    streak: 12,
    totalSessions: 45,
    currentMood: 7,
    weeklyGoal: 5,
    completedSessions: 3,
  }

  const getGreeting = () => {
    const hour = currentTime.getHours()
    if (hour < 12) return "Good Morning"
    if (hour < 17) return "Good Afternoon"
    return "Good Evening"
  }

  const getMoodEmoji = (mood: number) => {
    if (mood >= 8) return "😊"
    if (mood >= 6) return "🙂"
    if (mood >= 4) return "😐"
    return "😔"
  }

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <Sidebar>
          <SidebarHeader className="border-b border-border">
            <div className="flex items-center space-x-2 px-2 py-4">
              <Heart className="h-8 w-8 text-primary" />
              <div>
                <h2 className="text-lg font-bold text-foreground">Peace Code</h2>
                <p className="text-sm text-muted-foreground">Student Dashboard</p>
              </div>
            </div>
          </SidebarHeader>

          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Wellness Tools</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {sidebarItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild className={item.className}>
                        <Link href={item.url}>
                          <item.icon className="h-4 w-4" />
                          <div>
                            <div className="font-medium">{item.title}</div>
                            <div className="text-xs text-muted-foreground">{item.description}</div>
                          </div>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter className="border-t border-border">
            <div className="p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">{userData.name}</p>
                  <p className="text-xs text-muted-foreground">{userData.email}</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full bg-transparent">
                <Link href="/profile" className="flex items-center">
                  View Profile
                </Link>
              </Button>
            </div>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset className="flex-1">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b border-border px-6">
            <SidebarTrigger className="-ml-1" />
            <div className="flex-1">
              <h1 className="text-lg font-semibold">
                {getGreeting()}, {userData.name.split(" ")[0]}! 👋
              </h1>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="flex items-center space-x-1">
                <Sparkles className="h-3 w-3" />
                <span>{userData.streak} day streak</span>
              </Badge>
            </div>
          </header>

          <main className="flex-1 overflow-auto p-6">
            <div className="max-w-7xl mx-auto space-y-8">
              {/* Welcome Section */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Sun className="h-5 w-5 text-yellow-500" />
                      <span>Your Wellness Journey</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{userData.totalSessions}</div>
                        <div className="text-sm text-muted-foreground">Total Sessions</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">{userData.streak}</div>
                        <div className="text-sm text-muted-foreground">Day Streak</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{userData.currentMood}/10</div>
                        <div className="text-sm text-muted-foreground">Current Mood</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl">{getMoodEmoji(userData.currentMood)}</div>
                        <div className="text-sm text-muted-foreground">Feeling</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Target className="h-5 w-5 text-primary" />
                      <span>Weekly Goal</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between text-sm">
                        <span>Sessions this week</span>
                        <span>
                          {userData.completedSessions}/{userData.weeklyGoal}
                        </span>
                      </div>
                      <Progress value={(userData.completedSessions / userData.weeklyGoal) * 100} />
                      <p className="text-xs text-muted-foreground">
                        {userData.weeklyGoal - userData.completedSessions} more sessions to reach your goal!
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Actions */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { title: "Start AI Chat", icon: Bot, href: "/ai-support", color: "bg-blue-500" },
                    { title: "Breathing Exercise", icon: Wind, href: "/breathe", color: "bg-green-500" },
                    { title: "Write Journal", icon: Edit3, href: "/journal", color: "bg-purple-500" },
                    { title: "Focus Session", icon: Timer, href: "/focus", color: "bg-orange-500" },
                  ].map((action, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                      <Link href={action.href}>
                        <CardContent className="p-6 text-center">
                          <div
                            className={`w-12 h-12 ${action.color} rounded-full flex items-center justify-center mx-auto mb-3`}
                          >
                            <action.icon className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="font-medium">{action.title}</h3>
                        </CardContent>
                      </Link>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Mood Tracking */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Activity className="h-5 w-5 text-primary" />
                      <span>Weekly Mood Trend</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {moodData.map((day, index) => (
                        <div key={index} className="flex items-center space-x-4">
                          <div className="w-12 text-sm font-medium">{day.day}</div>
                          <div className="flex-1">
                            <Progress value={day.mood * 10} className="h-2" />
                          </div>
                          <div className="w-8 text-sm">{day.mood}/10</div>
                          <div className="w-8">{getMoodEmoji(day.mood)}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Brain className="h-5 w-5 text-primary" />
                      <span>Recent Activities</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { activity: "Completed breathing exercise", time: "2 hours ago", icon: Wind },
                        { activity: "Wrote journal entry", time: "Yesterday", icon: Edit3 },
                        { activity: "AI support session", time: "2 days ago", icon: Bot },
                        { activity: "Focus session completed", time: "3 days ago", icon: Timer },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                            <item.icon className="h-4 w-4 text-primary" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium">{item.activity}</p>
                            <p className="text-xs text-muted-foreground">{item.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Recommendations */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <span>Personalized Recommendations</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      {
                        title: "Try a 5-minute breathing exercise",
                        description: "Based on your recent stress levels",
                        action: "Start Now",
                        href: "/breathe",
                      },
                      {
                        title: "Connect with the community",
                        description: "Share your gratitude with others",
                        action: "Join Discussion",
                        href: "/community",
                      },
                      {
                        title: "Schedule a counseling session",
                        description: "Professional support is available",
                        action: "Book Session",
                        href: "/counseling",
                      },
                    ].map((rec, index) => (
                      <Card key={index} className="border-primary/20">
                        <CardContent className="p-4">
                          <h4 className="font-medium mb-2">{rec.title}</h4>
                          <p className="text-sm text-muted-foreground mb-4">{rec.description}</p>
                          <Button size="sm" asChild>
                            <Link href={rec.href}>{rec.action}</Link>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
