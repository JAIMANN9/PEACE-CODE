"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Send } from "lucide-react"

const sampleMessages = {
  "depression-support": [
    { user: "Alex", message: "Hey everyone, just having a tough day and wanted to reach out.", time: "10:30 AM" },
    { user: "Jordan", message: "Hey Alex, sorry to hear that. We're here for you. Anything you want to talk about?", time: "10:32 AM" },
    { user: "Priya", message: "Sending you support, Alex. Remember that it's okay not to be okay. Taking a short walk really helped me yesterday.", time: "10:35 AM" },
    { user: "Sam", message: "I agree with Priya. Sometimes just a change of scenery helps. Also, has anyone tried the new journaling feature? It's been surprisingly helpful.", time: "10:40 AM" },
  ],
  "self-care": [
    { user: "Casey", message: "What's one small self-care act you did today?", time: "11:00 AM" },
    { user: "Taylor", message: "I made sure to take 15 minutes to just sit in the sun without my phone. It was amazing.", time: "11:02 AM" },
    { user: "Morgan", message: "I'm going to try that! I actually scheduled a counseling session for next week, which feels like a big step in self-care for me.", time: "11:05 AM" },
  ],
  "crisis-support": [
     { user: "Admin", message: "Welcome to the 24/7 Crisis Support channel. This is a moderated space for immediate peer support. If you are in crisis, please also consider reaching out to our professional services or calling 102.", time: "12:00 PM" },
     { user: "Jamie", message: "Feeling really overwhelmed right now and not sure what to do.", time: "12:01 PM" },
     { user: "Moderator", message: "Hi Jamie, we're here to listen. Thank you for reaching out. Can you tell us a bit more about what's happening?", time: "12:02 PM" },
  ],
}

interface ChatInterfaceProps {
  groupId: keyof typeof sampleMessages
  groupName: string
}

export function ChatInterface({ groupId, groupName }: ChatInterfaceProps) {
  const [messages, setMessages] = useState(sampleMessages[groupId] || [])
  const [input, setInput] = useState("")
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages])

  const handleSend = () => {
    if (!input.trim()) return
    const newMessage = {
      user: "You",
      message: input,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    }
    setMessages([...messages, newMessage])
    setInput("")
  }

  return (
    <div className="h-full flex flex-col">
      <header className="border-b border-border p-4">
        <h2 className="text-xl font-bold">{groupName}</h2>
      </header>
      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
        <div className="space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className="flex items-start gap-3">
              <Avatar>
                <AvatarFallback>{msg.user.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-bold">{msg.user}</span>
                  <span className="text-xs text-muted-foreground">{msg.time}</span>
                </div>
                <p className="text-foreground">{msg.message}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      <footer className="border-t border-border p-4">
        <div className="flex gap-2">
          <Input
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
          />
          <Button onClick={handleSend}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </footer>
    </div>
  )
}
