"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Shield } from "lucide-react"

interface RoleSelectionProps {
  onRoleSelect: (role: "student" | "administrator") => void
}

export function RoleSelection({ onRoleSelect }: RoleSelectionProps) {
  return (
    <div className="space-y-4">
      <p className="text-center text-muted-foreground mb-6">Please select your role to continue with registration</p>

      <div className="grid grid-cols-1 gap-4">
        <Card
          className="cursor-pointer hover:shadow-md transition-all duration-200 hover:border-primary/50 group"
          onClick={() => onRoleSelect("student")}
        >
          <CardHeader className="text-center pb-2">
            <div className="mx-auto mb-2 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-lg">Student</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <CardDescription className="text-center text-sm">
              Join as a student to access counseling services, connect with peers, and find mental health resources.
            </CardDescription>
          </CardContent>
        </Card>

        <Card
          className="cursor-pointer hover:shadow-md transition-all duration-200 hover:border-primary/50 group"
          onClick={() => onRoleSelect("administrator")}
        >
          <CardHeader className="text-center pb-2">
            <div className="mx-auto mb-2 p-3 bg-secondary/10 rounded-full w-fit group-hover:bg-secondary/20 transition-colors">
              <Shield className="h-6 w-6 text-secondary-foreground" />
            </div>
            <CardTitle className="text-lg">Administrator</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <CardDescription className="text-center text-sm">
              Join as an administrator to manage the platform, moderate discussions, and provide oversight.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
