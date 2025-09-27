"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Bot, User, Send, RefreshCw, AlertTriangle } from "lucide-react"

interface Message {
  id: string
  type: "user" | "ai"
  content: string
  timestamp: Date
  needsProfessionalHelp?: boolean
}

const copingStrategies = {
  anxiety: [
    "Try the 4-7-8 breathing technique: Inhale for 4, hold for 7, exhale for 8",
    "Practice grounding: Name 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, 1 you can taste",
    "Progressive muscle relaxation: Tense and release each muscle group for 5 seconds",
  ],
  depression: [
    "Take a short walk outside, even for 5 minutes",
    "Reach out to a friend or family member",
    "Write down three things you're grateful for today",
    "Engage in a small, achievable task to build momentum",
  ],
  stress: [
    "Break large tasks into smaller, manageable steps",
    "Practice mindfulness meditation for 5-10 minutes",
    "Take regular breaks during study sessions",
    "Prioritize sleep and maintain a consistent sleep schedule",
  ],
  academic: [
    "Create a study schedule and stick to it",
    "Use the Pomodoro technique: 25 minutes study, 5 minutes break",
    "Form study groups with classmates",
    "Seek help from professors during office hours",
  ],
}

const crisisKeywords = ["suicide", "kill myself", "end it all", "hurt myself", "self-harm", "die", "death"]

export function AIChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "ai",
      content:
        "Hello! I'm your AI mental health support assistant. I'm here to listen and provide coping strategies. How are you feeling today?",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages])

  const detectCrisis = (message: string): boolean => {
    return crisisKeywords.some((keyword) => message.toLowerCase().includes(keyword))
  }

  const generateResponse = (userMessage: string): { content: string; needsProfessionalHelp: boolean } => {
    const lowerMessage = userMessage.toLowerCase()

    // Crisis detection
    if (detectCrisis(userMessage)) {
      return {
        content:
          "I'm very concerned about what you've shared. Please reach out for immediate help:\n\n• Call 988 (Suicide & Crisis Lifeline)\n• Contact emergency services (911)\n• Reach out to a trusted friend, family member, or counselor\n\nYour life has value, and there are people who want to help you. Would you like me to help you find local crisis resources?",
        needsProfessionalHelp: true,
      }
    }

    // Anxiety responses
    if (
      lowerMessage.includes("anxious") ||
      lowerMessage.includes("anxiety") ||
      lowerMessage.includes("worried") ||
      lowerMessage.includes("panic")
    ) {
      const strategy = copingStrategies.anxiety[Math.floor(Math.random() * copingStrategies.anxiety.length)]
      return {
        content: `I understand you're feeling anxious. Here's a coping strategy that might help:\n\n${strategy}\n\nAnxiety is very common among students. If these feelings persist or interfere with your daily life, I'd recommend speaking with a counselor. Would you like me to help you book an appointment?`,
        needsProfessionalHelp: false,
      }
    }

    // Depression responses
    if (
      lowerMessage.includes("depressed") ||
      lowerMessage.includes("depression") ||
      lowerMessage.includes("sad") ||
      lowerMessage.includes("hopeless")
    ) {
      const strategy = copingStrategies.depression[Math.floor(Math.random() * copingStrategies.depression.length)]
      return {
        content: `I hear that you're going through a difficult time. Here's something that might help:\n\n${strategy}\n\nRemember, you're not alone in feeling this way. Many students experience similar challenges. If these feelings continue, please consider reaching out to a professional counselor. Would you like information about our counseling services?`,
        needsProfessionalHelp: lowerMessage.includes("hopeless") || lowerMessage.includes("worthless"),
      }
    }

    // Stress responses
    if (
      lowerMessage.includes("stressed") ||
      lowerMessage.includes("stress") ||
      lowerMessage.includes("overwhelmed") ||
      lowerMessage.includes("pressure")
    ) {
      const strategy = copingStrategies.stress[Math.floor(Math.random() * copingStrategies.stress.length)]
      return {
        content: `Stress is a common part of student life, but there are ways to manage it:\n\n${strategy}\n\nRemember to be kind to yourself. If stress is significantly impacting your studies or well-being, our counselors can help you develop personalized coping strategies.`,
        needsProfessionalHelp: false,
      }
    }

    // Academic stress
    if (
      lowerMessage.includes("exam") ||
      lowerMessage.includes("study") ||
      lowerMessage.includes("grades") ||
      lowerMessage.includes("academic")
    ) {
      const strategy = copingStrategies.academic[Math.floor(Math.random() * copingStrategies.academic.length)]
      return {
        content: `Academic challenges can be stressful. Here's a strategy that many students find helpful:\n\n${strategy}\n\nRemember, your worth isn't defined by your grades. If you're struggling academically, consider reaching out to your professors, academic advisors, or our counseling services for additional support.`,
        needsProfessionalHelp: false,
      }
    }

    // General supportive response
    return {
      content:
        "Thank you for sharing that with me. It takes courage to reach out when you're struggling. While I can provide some general support and coping strategies, I want to remind you that professional counselors are available if you need more personalized help.\n\nCould you tell me more about what you're experiencing? Are you feeling anxious, stressed, sad, or something else?",
      needsProfessionalHelp: false,
    }
  }

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate AI thinking time
    setTimeout(
      () => {
        const response = generateResponse(input)
        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          type: "ai",
          content: response.content,
          timestamp: new Date(),
          needsProfessionalHelp: response.needsProfessionalHelp,
        }

        setMessages((prev) => [...prev, aiMessage])
        setIsTyping(false)
      },
      1000 + Math.random() * 2000,
    )
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const clearChat = () => {
    setMessages([
      {
        id: "1",
        type: "ai",
        content:
          "Hello! I'm your AI mental health support assistant. I'm here to listen and provide coping strategies. How are you feeling today?",
        timestamp: new Date(),
      },
    ])
  }

  return (
    <Card className="h-[600px] flex flex-col">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="flex items-center space-x-2">
          <Bot className="h-5 w-5 text-primary" />
          <span>AI Mental Health Assistant</span>
        </CardTitle>
        <Button variant="ghost" size="sm" onClick={clearChat}>
          <RefreshCw className="h-4 w-4" />
        </Button>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col space-y-4">
        <ScrollArea className="flex-1 pr-4" ref={scrollAreaRef}>
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`flex items-start space-x-2 max-w-[80%] ${
                    message.type === "user" ? "flex-row-reverse space-x-reverse" : ""
                  }`}
                >
                  <div className={`p-2 rounded-full ${message.type === "user" ? "bg-primary" : "bg-muted"}`}>
                    {message.type === "user" ? (
                      <User className="h-4 w-4 text-primary-foreground" />
                    ) : (
                      <Bot className="h-4 w-4 text-muted-foreground" />
                    )}
                  </div>
                  <div
                    className={`p-3 rounded-lg ${
                      message.type === "user"
                        ? "bg-primary text-primary-foreground"
                        : message.needsProfessionalHelp
                          ? "bg-red-50 border border-red-200"
                          : "bg-muted"
                    }`}
                  >
                    {message.needsProfessionalHelp && (
                      <div className="flex items-center space-x-2 mb-2 text-red-600">
                        <AlertTriangle className="h-4 w-4" />
                        <span className="text-sm font-medium">Professional Help Recommended</span>
                      </div>
                    )}
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    <p className="text-xs opacity-70 mt-1">{message.timestamp.toLocaleTimeString()}</p>
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <div className="p-2 rounded-full bg-muted">
                    <Bot className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="p-3 rounded-lg bg-muted">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        <div className="flex space-x-2">
          <Input
            placeholder="Type your message here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={isTyping}
          />
          <Button onClick={handleSend} disabled={isTyping || !input.trim()}>
            <Send className="h-4 w-4" />
          </Button>
        </div>

        <p className="text-xs text-muted-foreground text-center">
          This AI assistant provides general support. For serious mental health concerns, please consult a professional
          counselor.
        </p>
      </CardContent>
    </Card>
  )
}
