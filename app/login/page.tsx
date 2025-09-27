import { LoginForm } from "@/components/auth/login-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        {/* Logo */}
        <div className="text-center">
          <Link href="/" className="inline-flex items-center space-x-2">
            <Heart className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">Peace Code</span>
          </Link>
          <p className="mt-2 text-muted-foreground">Welcome back to your safe space</p>
        </div>

        {/* Login Form */}
        <Card className="border-border shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Sign In</CardTitle>
            <CardDescription>Enter your credentials to access your account</CardDescription>
          </CardHeader>
          <CardContent>
            <LoginForm />
          </CardContent>
        </Card>

        {/* Sign up link */}
        <div className="text-center">
          <p className="text-muted-foreground">
            Don't have an account?{" "}
            <Link href="/signup" className="text-primary hover:underline font-medium">
              Create one here
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
