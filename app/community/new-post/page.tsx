import { Navigation } from "@/components/navigation"
import { NewPostForm } from "@/components/community/new-post-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Heart, Users } from "lucide-react"

export default function NewPostPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Share Your <span className="text-primary">Story</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Your experiences can help others. Share what's on your mind in a safe, supportive environment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* New Post Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Create New Post</CardTitle>
                  <CardDescription>
                    Share your thoughts, ask questions, or offer support to fellow students.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <NewPostForm />
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Guidelines */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-primary" />
                    <span>Posting Guidelines</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Heart className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium">Be Supportive</h4>
                      <p className="text-sm text-muted-foreground">Offer encouragement and understanding</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium">Stay Anonymous</h4>
                      <p className="text-sm text-muted-foreground">Your identity is protected by default</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium">No Medical Advice</h4>
                      <p className="text-sm text-muted-foreground">Share experiences, not medical recommendations</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-destructive/20 bg-destructive/5">
                <CardHeader>
                  <CardTitle className="text-lg text-destructive">In Crisis?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    If you're having thoughts of self-harm, please reach out for immediate help.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm">
                      <strong>Crisis Hotline:</strong>{" "}
                      <a href="tel:988" className="text-primary hover:underline">
                        988
                      </a>
                    </p>
                    <p className="text-sm text-muted-foreground">For emergencies, call <a href="tel:102" className="text-primary hover:underline">102</a></p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
