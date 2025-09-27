import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SignupSuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="w-full max-w-md">
        <Card className="shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-green-600">Account Created Successfully!</CardTitle>
            <CardDescription className="text-gray-600">Please check your email to verify your account</CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-sm text-gray-600">
              We've sent a verification email to your inbox. Please click the link in the email to activate your
              account.
            </p>
            <div className="space-y-2">
              <Button asChild className="w-full">
                <Link href="/auth/login">Go to Login</Link>
              </Button>
              <Button variant="outline" asChild className="w-full bg-transparent">
                <Link href="/">Return to Home</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
