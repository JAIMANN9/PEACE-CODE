"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

interface WelcomeAnimationProps {
  onStart: () => void
}

export function WelcomeAnimation({ onStart }: WelcomeAnimationProps) {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 z-[100] flex flex-col items-center justify-center p-4 text-center">
      <div className="animate-fade-in-up">
        <img
          src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGl6dGNwZ2k0a2VwczB6aHlqZDVrd3U2cGR2NnBqNm5tb29sYjZkZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/M9gU6uprqD1i2w44Ab/giphy.gif"
          alt="Friendly chatbot waving"
          className="w-48 h-48 mx-auto"
        />
        <h1 className="text-4xl font-bold text-gray-800 mt-4">Welcome! I'm your AI Companion.</h1>
        <p className="text-xl text-muted-foreground mt-2 max-w-2xl mx-auto">
          I'm here to help you with your mental health. You can talk to me about anything you're going through.
        </p>
        <Button size="lg" className="mt-8 text-lg" onClick={onStart}>
          Start Chatting
          <ArrowDown className="w-5 h-5 ml-2 animate-bounce" />
        </Button>
      </div>
    </div>
  )
}
