"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"

const categories = [
  { id: "anxiety", name: "Anxiety & Stress" },
  { id: "depression", name: "Depression Support" },
  { id: "academic", name: "Academic Pressure" },
  { id: "relationships", name: "Relationships" },
  { id: "self-care", name: "Self-Care & Wellness" },
  { id: "crisis", name: "Crisis Support" },
  { id: "general", name: "General Discussion" },
]

export function NewPostForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "",
    isAnonymous: true,
    allowComments: true,
    triggerWarning: false,
    triggerWarningText: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate post creation
    setTimeout(() => {
      setIsLoading(false)
      // Redirect to the new post or community page
      window.location.href = "/community"
    }, 2000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Post Title */}
      <div className="space-y-2">
        <Label htmlFor="title">Post Title</Label>
        <Input
          id="title"
          name="title"
          placeholder="What would you like to discuss?"
          value={formData.title}
          onChange={handleInputChange}
          required
        />
      </div>

      {/* Category */}
      <div className="space-y-2">
        <Label>Category</Label>
        <Select onValueChange={(value) => handleSelectChange("category", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category.id} value={category.id}>
                {category.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Post Content */}
      <div className="space-y-2">
        <Label htmlFor="content">Your Message</Label>
        <Textarea
          id="content"
          name="content"
          placeholder="Share your thoughts, experiences, or questions. Remember, this is a safe space for support and understanding."
          value={formData.content}
          onChange={handleInputChange}
          className="min-h-[200px]"
          required
        />
        <p className="text-sm text-muted-foreground">
          Be respectful and supportive. Avoid giving medical advice - share experiences instead.
        </p>
      </div>

      {/* Trigger Warning */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="triggerWarning"
            checked={formData.triggerWarning}
            onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, triggerWarning: checked as boolean }))}
          />
          <Label htmlFor="triggerWarning" className="text-sm">
            This post contains potentially triggering content
          </Label>
        </div>

        {formData.triggerWarning && (
          <div className="space-y-2">
            <Label htmlFor="triggerWarningText">Trigger Warning Description</Label>
            <Input
              id="triggerWarningText"
              name="triggerWarningText"
              placeholder="e.g., mentions of self-harm, eating disorders, etc."
              value={formData.triggerWarningText}
              onChange={handleInputChange}
            />
          </div>
        )}
      </div>

      {/* Post Settings */}
      <div className="space-y-4 p-4 bg-muted/30 rounded-lg">
        <h3 className="font-medium">Post Settings</h3>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="isAnonymous">Post Anonymously</Label>
            <p className="text-sm text-muted-foreground">Your identity will be hidden from other users</p>
          </div>
          <Switch
            id="isAnonymous"
            checked={formData.isAnonymous}
            onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, isAnonymous: checked }))}
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="allowComments">Allow Comments</Label>
            <p className="text-sm text-muted-foreground">Let others respond to your post</p>
          </div>
          <Switch
            id="allowComments"
            checked={formData.allowComments}
            onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, allowComments: checked }))}
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex items-center space-x-4">
        <Button type="submit" disabled={isLoading} className="flex-1">
          {isLoading ? "Posting..." : "Share Post"}
        </Button>
        <Button type="button" variant="outline" onClick={() => window.history.back()}>
          Cancel
        </Button>
      </div>

      <p className="text-sm text-muted-foreground">
        By posting, you agree to our community guidelines and terms of service. Posts are moderated to ensure a safe
        environment.
      </p>
    </form>
  )
}
