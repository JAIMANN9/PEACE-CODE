import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, HelpCircle } from "lucide-react"

interface ScreeningIntroductionProps {
  testName: string
  testTitle: string
  knowledge: {
    purpose: string
    content: string
    scoring: string
  }
  onStart: () => void
  onCancel: () => void
}

export function ScreeningIntroduction({
  testName,
  testTitle,
  knowledge,
  onStart,
  onCancel,
}: ScreeningIntroductionProps) {
  return (
    <Card className="border-primary/20">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
          <HelpCircle className="h-10 w-10 text-primary" />
        </div>
        <CardTitle className="text-2xl">About the {testName}</CardTitle>
        <p className="text-muted-foreground">{testTitle}</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">What It Measures</h3>
            <p className="text-muted-foreground">{knowledge.purpose}</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">How It Works</h3>
            <p className="text-muted-foreground">{knowledge.content}</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Understanding Your Score</h3>
            <p className="text-muted-foreground">{knowledge.scoring}</p>
          </div>
        </div>
        <Card className="bg-blue-50/50 border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base text-blue-800">
              <CheckCircle className="h-5 w-5" />
              Important Disclaimer
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-blue-700">
              This is a screening tool, not a diagnostic test. The results are intended to be a helpful starting point
              for understanding your mental health and are not a substitute for a professional evaluation by a licensed
              clinician.
            </p>
          </CardContent>
        </Card>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Button variant="outline" onClick={onCancel}>
            Back to Screenings
          </Button>
          <Button onClick={onStart}>
            Start Test
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
