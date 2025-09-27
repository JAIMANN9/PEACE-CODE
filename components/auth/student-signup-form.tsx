"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff, Mail, User, Lock, GraduationCap } from "lucide-react"

export function StudentSignupForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    university: "",
    yearOfStudy: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

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

    try {
      const supabase = createClient()

      const { error: signUpError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          emailRedirectTo: process.env.NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL || `${window.location.origin}/community`,
          data: {
            full_name: `${formData.firstName} ${formData.lastName}`,
            role: "student",
            university: formData.university,
            year_of_study: formData.yearOfStudy,
          },
        },
      })

      if (signUpError) throw signUpError

      router.push("/auth/check-email")
    } catch (error: any) {
      setError(error.message || "An error occurred during signup")
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">{error}</div>}

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <div className="relative">
            <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="firstName"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleInputChange}
              className="pl-10"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Gmail Address</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your.email@gmail.com"
            value={formData.email}
            onChange={handleInputChange}
            className="pl-10"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="university">University/College</Label>
        <div className="relative">
          <GraduationCap className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            id="university"
            name="university"
            placeholder="Your university or college"
            value={formData.university}
            onChange={handleInputChange}
            className="pl-10"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="yearOfStudy">Year of Study</Label>
        <Select onValueChange={(value) => handleSelectChange("yearOfStudy", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select your year of study" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="freshman">Freshman (1st Year)</SelectItem>
            <SelectItem value="sophomore">Sophomore (2nd Year)</SelectItem>
            <SelectItem value="junior">Junior (3rd Year)</SelectItem>
            <SelectItem value="senior">Senior (4th Year)</SelectItem>
            <SelectItem value="graduate">Graduate Student</SelectItem>
            <SelectItem value="phd">PhD Student</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Create a strong password"
            value={formData.password}
            onChange={handleInputChange}
            className="pl-10 pr-10"
            required
          />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4 text-muted-foreground" />
            ) : (
              <Eye className="h-4 w-4 text-muted-foreground" />
            )}
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className="pl-10 pr-10"
            required
          />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? (
              <EyeOff className="h-4 w-4 text-muted-foreground" />
            ) : (
              <Eye className="h-4 w-4 text-muted-foreground" />
            )}
          </Button>
        </div>
      </div>

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

      <Button type="submit" className="w-full" disabled={isLoading || !formData.agreeToTerms}>
        {isLoading ? "Creating Account..." : "Create Student Account"}
      </Button>
    </form>
  )
}
