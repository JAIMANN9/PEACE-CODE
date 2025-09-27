"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { useState } from "react"
import { Heart } from "lucide-react"

export default function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "student",
    institution: "",
    yearOfStudy: "",
    mentalHealthGoals: "",
    communicationPreference: "",
    emergencyContact: "",
    emergencyPhone: "",
    hasTherapyExperience: false,
    agreedToTerms: false,
  })
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    // Frontend validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      setIsLoading(false)
      return
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long")
      setIsLoading(false)
      return
    }

    if (!formData.agreedToTerms) {
      setError("Please agree to the terms and conditions")
      setIsLoading(false)
      return
    }

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Store form data in localStorage for demo purposes
      localStorage.setItem(
        "peacecode_user",
        JSON.stringify({
          ...formData,
          id: Date.now(),
          createdAt: new Date().toISOString(),
        }),
      )

      alert("Account created successfully! (Frontend demo - no actual database)")
    } catch (error: unknown) {
      setError("An error occurred during signup")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="w-full max-w-2xl">
        <Card className="shadow-xl">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Heart className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-gray-800">Peace Code</span>
            </div>
            <CardTitle className="text-2xl font-bold text-gray-800">Join Our Community</CardTitle>
            <CardDescription className="text-gray-600">
              Create your account to access mental health support and resources
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSignup} className="space-y-6">
              {/* Basic Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">Basic Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@university.edu"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Account Type *</Label>
                  <Select value={formData.role} onValueChange={(value) => handleInputChange("role", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select account type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="student">Student</SelectItem>
                      <SelectItem value="administrator">Administrator</SelectItem>
                      <SelectItem value="counselor">Counselor</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Academic Information */}
              {formData.role === "student" && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">Academic Information</h3>
                  <div className="space-y-2">
                    <Label htmlFor="institution">Institution/University</Label>
                    <Input
                      id="institution"
                      type="text"
                      placeholder="e.g., University of California"
                      value={formData.institution}
                      onChange={(e) => handleInputChange("institution", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="yearOfStudy">Year of Study</Label>
                    <Select
                      value={formData.yearOfStudy}
                      onValueChange={(value) => handleInputChange("yearOfStudy", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="freshman">Freshman</SelectItem>
                        <SelectItem value="sophomore">Sophomore</SelectItem>
                        <SelectItem value="junior">Junior</SelectItem>
                        <SelectItem value="senior">Senior</SelectItem>
                        <SelectItem value="graduate">Graduate Student</SelectItem>
                        <SelectItem value="phd">PhD Student</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}

              {/* Mental Health & Support Preferences */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">Support Preferences</h3>
                <div className="space-y-2">
                  <Label htmlFor="mentalHealthGoals">What are your mental health goals? (Optional)</Label>
                  <Textarea
                    id="mentalHealthGoals"
                    placeholder="e.g., Managing stress, improving sleep, building coping strategies..."
                    value={formData.mentalHealthGoals}
                    onChange={(e) => handleInputChange("mentalHealthGoals", e.target.value)}
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="communicationPreference">Preferred Communication Style</Label>
                  <Select
                    value={formData.communicationPreference}
                    onValueChange={(value) => handleInputChange("communicationPreference", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="How would you like to receive support?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="text-based">Text-based chat</SelectItem>
                      <SelectItem value="video-calls">Video calls</SelectItem>
                      <SelectItem value="phone-calls">Phone calls</SelectItem>
                      <SelectItem value="in-person">In-person meetings</SelectItem>
                      <SelectItem value="mixed">Mixed approach</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="hasTherapyExperience"
                    checked={formData.hasTherapyExperience}
                    onCheckedChange={(checked) => handleInputChange("hasTherapyExperience", checked as boolean)}
                  />
                  <Label htmlFor="hasTherapyExperience" className="text-sm">
                    I have previous experience with therapy or counseling
                  </Label>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">Emergency Contact (Optional but Recommended)</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="emergencyContact">Emergency Contact Name</Label>
                    <Input
                      id="emergencyContact"
                      type="text"
                      placeholder="Full name"
                      value={formData.emergencyContact}
                      onChange={(e) => handleInputChange("emergencyContact", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="emergencyPhone">Emergency Contact Phone</Label>
                    <Input
                      id="emergencyPhone"
                      type="tel"
                      placeholder="Phone number"
                      value={formData.emergencyPhone}
                      onChange={(e) => handleInputChange("emergencyPhone", e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Password */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">Account Security</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="password">Password *</Label>
                    <Input
                      id="password"
                      type="password"
                      required
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password *</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      required
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="agreedToTerms"
                  checked={formData.agreedToTerms}
                  onCheckedChange={(checked) => handleInputChange("agreedToTerms", checked as boolean)}
                />
                <Label htmlFor="agreedToTerms" className="text-sm">
                  I agree to the{" "}
                  <Link href="/terms" className="text-primary hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                </Label>
              </div>

              {error && (
                <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">{error}</div>
              )}

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Creating account..." : "Create Account"}
              </Button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link href="/auth/login" className="font-medium text-blue-600 hover:text-blue-500">
                Sign in here
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
