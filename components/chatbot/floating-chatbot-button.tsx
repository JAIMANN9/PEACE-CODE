"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, Sparkles } from "lucide-react"
import { ChatbotInterface } from "./chatbot-interface"
import { cn } from "@/lib/utils"

export function FloatingChatbotButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)

  const handleToggle = () => {
    if (isMinimized) {
      setIsMinimized(false)
      setIsOpen(true)
    } else {
      setIsOpen(!isOpen)
    }
  }

  const handleClose = () => {
    setIsOpen(false)
    setIsMinimized(false)
  }

  const handleMinimize = () => {
    setIsOpen(false)
    setIsMinimized(true)
  }

  return (
    <>
      {/* Floating Button */}
      <Button
        onClick={handleToggle}
        className={cn(
          "fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-xl transition-all duration-500 hover:scale-110 hover:shadow-2xl z-40",
          "bg-calming-gradient hover:opacity-90 group",
          "border-2 border-white/20 backdrop-blur-sm",
          isOpen && !isMinimized && "opacity-0 pointer-events-none scale-95",
          isMinimized &&
            "animate-pulse bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600",
        )}
        size="lg"
      >
        {isMinimized ? (
          <MessageCircle className="h-7 w-7 text-white animate-pulse" />
        ) : (
          <div className="relative">
            <MessageCircle className="h-7 w-7 text-white transition-transform group-hover:scale-110" />
            <Sparkles className="h-4 w-4 text-white/80 absolute -top-1 -right-1 animate-pulse" />
          </div>
        )}
      </Button>

      {/* Notification Badge for minimized state */}
      {isMinimized && (
        <div className="fixed bottom-24 right-6 bg-red-500 text-white text-xs px-3 py-2 rounded-full animate-bounce z-40 shadow-lg">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
            Chat minimized
          </div>
        </div>
      )}

      {/* Chatbot Interface */}
      <ChatbotInterface isOpen={isOpen} onClose={handleClose} onMinimize={handleMinimize} />
    </>
  )
}
