"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Clock } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"]

const counselors = [
  { id: "1", name: "Dr. Sarah Johnson", specialty: "Anxiety & Depression" },
  { id: "2", name: "Dr. Michael Chen", specialty: "ADHD & Social Anxiety" },
  { id: "3", name: "Dr. Emily Rodriguez", specialty: "Trauma & PTSD" },
]

export function BookingForm() {
  const [date, setDate] = useState<Date>()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    counselor: "",
    sessionType: "",
    timeSlot: "",
    concerns: "",
    previousTherapy: false,
    emergencyContact: "",
    agreeToTerms: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate booking process
    setTimeout(() => {
      setIsLoading(false)
      // Redirect to confirmation page
      window.location.href = "/counseling/confirmation"
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
      {/* Personal Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Personal Information</h3>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} required />
          </div>
        </div>
      </div>

      {/* Session Details */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Session Details</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Preferred Counselor</Label>
            <Select onValueChange={(value) => handleSelectChange("counselor", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select a counselor" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">No preference</SelectItem>
                {counselors.map((counselor) => (
                  <SelectItem key={counselor.id} value={counselor.id}>
                    {counselor.name} - {counselor.specialty}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Session Type</Label>
            <Select onValueChange={(value) => handleSelectChange("sessionType", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select session type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="video">Video Session</SelectItem>
                <SelectItem value="phone">Phone Session</SelectItem>
                <SelectItem value="chat">Chat Session</SelectItem>
                <SelectItem value="in-person">In-Person (if available)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Preferred Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <Label>Preferred Time</Label>
            <Select onValueChange={(value) => handleSelectChange("timeSlot", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select time slot" />
              </SelectTrigger>
              <SelectContent>
                {timeSlots.map((time) => (
                  <SelectItem key={time} value={time}>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{time}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Additional Information</h3>

        <div className="space-y-2">
          <Label htmlFor="concerns">What would you like to discuss? (Optional)</Label>
          <Textarea
            id="concerns"
            name="concerns"
            placeholder="Briefly describe what you'd like to work on or any specific concerns..."
            value={formData.concerns}
            onChange={handleInputChange}
            className="min-h-[100px]"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="emergencyContact">Emergency Contact</Label>
          <Input
            id="emergencyContact"
            name="emergencyContact"
            placeholder="Name and phone number"
            value={formData.emergencyContact}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="previousTherapy"
            checked={formData.previousTherapy}
            onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, previousTherapy: checked as boolean }))}
          />
          <Label htmlFor="previousTherapy" className="text-sm">
            I have received mental health treatment before
          </Label>
        </div>
      </div>

      {/* Terms and Conditions */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="agreeToTerms"
            checked={formData.agreeToTerms}
            onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, agreeToTerms: checked as boolean }))}
          />
          <Label htmlFor="agreeToTerms" className="text-sm">
            I agree to the{" "}
            <a href="/terms" className="text-primary hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </a>
          </Label>
        </div>
      </div>

      <Button type="submit" className="w-full" disabled={isLoading || !formData.agreeToTerms} size="lg">
        {isLoading ? "Booking Session..." : "Book Session"}
      </Button>

      <p className="text-sm text-muted-foreground text-center">
        We'll send you a confirmation email within 24 hours with your session details.
      </p>
    </form>
  )
}
