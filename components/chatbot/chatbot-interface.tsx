"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send, Bot, User, X, Minimize2, Heart, Brain, Coffee, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

interface Message {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

interface ChatbotInterfaceProps {
  isOpen: boolean
  onClose: () => void
  onMinimize: () => void
}

const quickResponses = [
  { text: "I'm feeling anxious", icon: Brain, category: "anxiety" },
  { text: "I'm stressed about exams", icon: Zap, category: "academic" },
  { text: "I need someone to talk to", icon: Heart, category: "support" },
  { text: "I'm having trouble sleeping", icon: Coffee, category: "wellness" },
]

export function ChatbotInterface({ isOpen, onClose, onMinimize }: ChatbotInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm here to support you with your mental health journey. How are you feeling today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showQuickResponses, setShowQuickResponses] = useState(true)
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const sendMessage = async (messageText?: string) => {
    const messageToSend = messageText || inputMessage
    if (!messageToSend.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: messageToSend,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setIsLoading(true)
    setShowQuickResponses(false)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: messageToSend }),
      })

      const data = await response.json()

      if (response.ok) {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: data.response,
          sender: "bot",
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, botMessage])
      } else {
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: "I'm sorry, I'm having trouble responding right now. Please try again in a moment.",
          sender: "bot",
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, errorMessage])
      }
    } catch (error) {
      console.error("Error sending message:", error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I'm sorry, I'm having trouble connecting right now. Please try again later.",
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const handleQuickResponse = (responseText: string) => {
    sendMessage(responseText)
  }

  if (!isOpen) return null

  return (
    <Card className="fixed bottom-4 right-4 w-96 h-[600px] shadow-2xl border-2 border-primary/20 bg-white z-50 animate-in slide-in-from-bottom-4 duration-300">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 bg-calming-gradient text-white rounded-t-lg">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <div className="relative">
            <Bot className="h-5 w-5" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          Mental Health Support
        </CardTitle>
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={onMinimize}
            className="h-8 w-8 p-0 text-white hover:bg-white/20 transition-all duration-200 hover:scale-110"
          >
            <Minimize2 className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="h-8 w-8 p-0 text-white hover:bg-white/20 transition-all duration-200 hover:scale-110"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col h-[calc(100%-5rem)] p-0">
        <ScrollArea ref={scrollAreaRef} className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex gap-3 max-w-[85%] animate-in fade-in-0 slide-in-from-bottom-2 duration-300",
                  message.sender === "user" ? "ml-auto flex-row-reverse" : "mr-auto",
                )}
              >
                <div
                  className={cn(
                    "flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-full transition-all duration-200",
                    message.sender === "user"
                      ? "bg-primary text-white shadow-md"
                      : "bg-calming-gradient text-white shadow-md",
                  )}
                >
                  {message.sender === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                </div>
                <div
                  className={cn(
                    "rounded-lg px-4 py-3 text-sm shadow-sm transition-all duration-200 hover:shadow-md",
                    message.sender === "user"
                      ? "bg-primary text-white"
                      : "bg-gray-50 text-gray-900 border border-gray-200",
                  )}
                >
                  {message.content}
                  <div className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3 max-w-[85%] mr-auto animate-in fade-in-0 slide-in-from-bottom-2 duration-300">
                <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-full bg-calming-gradient text-white shadow-md">
                  <Bot className="h-4 w-4" />
                </div>
                <div className="rounded-lg px-4 py-3 text-sm bg-gray-50 text-gray-900 border border-gray-200 shadow-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-primary rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-primary rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {showQuickResponses && messages.length === 1 && (
          <div className="px-4 pb-2">
            <div className="text-xs text-muted-foreground mb-2 font-medium">Quick responses:</div>
            <div className="grid grid-cols-1 gap-2">
              {quickResponses.map((response, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => handleQuickResponse(response.text)}
                  className="justify-start text-left h-auto py-2 px-3 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
                >
                  <response.icon className="h-4 w-4 mr-2 text-primary" />
                  <span className="text-sm">{response.text}</span>
                </Button>
              ))}
            </div>
          </div>
        )}

        <div className="border-t p-4 bg-gray-50/50">
          <div className="flex gap-2">
            <Input
              ref={inputRef}
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              disabled={isLoading}
              className="flex-1 border-primary/20 focus:border-primary transition-colors duration-200"
            />
            <Button
              onClick={() => sendMessage()}
              disabled={isLoading || !inputMessage.trim()}
              size="sm"
              className="bg-calming-gradient hover:opacity-90 transition-all duration-200 hover:scale-105"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <div className="text-xs text-muted-foreground mt-2 text-center">
            Available 24/7 • Confidential • Professional support available
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
