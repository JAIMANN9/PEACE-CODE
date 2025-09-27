"use client"

import { useState } from "react"
import { RoleSelection } from "@/components/auth/role-selection"
import { StudentSignupForm } from "@/components/auth/student-signup-form"
import { AdminSignupForm } from "@/components/auth/admin-signup-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

type UserRole = "student" | "administrator" | null

export default function SignupPage() {
  const [selectedRole, setSelectedRole] = useState<UserRole>(null)

  const handleRoleSelect = (role: UserRole) => {
    setSelectedRole(role)
  }

  const handleBack = () => {
    setSelectedRole(null)
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        {/* Logo */}
        <div className="text-center">
          <Link href="/" className="inline-flex items-center space-x-2">
            <Heart className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">Peace Code</span>
          </Link>
          <p className="mt-2 text-muted-foreground">Join our supportive community</p>
        </div>

        {/* Signup Content */}
        <Card className="border-border shadow-lg">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center space-x-2">
              {selectedRole && (
                <Button variant="ghost" size="icon" onClick={handleBack} className="mr-2">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
              )}
              <div className="flex-1">
                <CardTitle className="text-2xl font-bold">
                  {!selectedRole
                    ? "Create Account"
                    : selectedRole === "student"
                      ? "Student Registration"
                      : "Administrator Registration"}
                </CardTitle>
                <CardDescription>
                  {!selectedRole
                    ? "Choose your role to get started"
                    : selectedRole === "student"
                      ? "Fill in your details to join as a student"
                      : "Fill in your details to join as an administrator"}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {!selectedRole && <RoleSelection onRoleSelect={handleRoleSelect} />}
            {selectedRole === "student" && <StudentSignupForm />}
            {selectedRole === "administrator" && <AdminSignupForm />}
          </CardContent>
        </Card>

        {/* Sign in link */}
        <div className="text-center">
          <p className="text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="text-primary hover:underline font-medium">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
