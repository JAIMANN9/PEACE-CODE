"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

interface CommentFormProps {
  postId: number
}

export function CommentForm({ postId }: CommentFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    content: "",
    isAnonymous: true,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate comment submission
    setTimeout(() => {
      setIsLoading(false)
      setFormData({ content: "", isAnonymous: true })
      // In real app, would refresh comments or add to list
    }, 1000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Textarea
        name="content"
        placeholder="Share your thoughts, experiences, or words of encouragement..."
        value={formData.content}
        onChange={handleInputChange}
        className="min-h-[100px]"
        required
      />

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Switch
            id="commentAnonymous"
            checked={formData.isAnonymous}
            onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, isAnonymous: checked }))}
          />
          <Label htmlFor="commentAnonymous" className="text-sm">
            Post anonymously
          </Label>
        </div>

        <Button type="submit" disabled={isLoading || !formData.content.trim()}>
          {isLoading ? "Posting..." : "Post Comment"}
        </Button>
      </div>

      <p className="text-xs text-muted-foreground">
        Remember to be supportive and respectful. Avoid giving medical advice.
      </p>
    </form>
  )
}
