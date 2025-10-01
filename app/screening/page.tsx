import { Navigation } from "@/components/navigation"
import { ScreeningHub } from "@/components/screening/screening-hub"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, ClipboardList, TrendingUp, Shield, AlertTriangle, CheckCircle, HelpCircle, ChevronRight, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

const screeningTools = [
  {
    id: "phq9",
    name: "PHQ-9",
    title: "Depression Screening",
    icon: ClipboardList,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    knowledge: {
      purpose: "To screen for the presence and severity of depression over the last 2 weeks.",
      content:
        "The PHQ-9 is a 9-question tool based on the diagnostic criteria for major depressive disorder in the DSM-5. It asks about issues like loss of interest, sleep problems, and changes in appetite.",
      scoring:
        "Scores are interpreted as minimal (1-4), mild (5-9), moderate (10-14), moderately severe (15-19), and severe (20-27) depression. It is a reliable tool for monitoring depression severity.",
    },
  },
  {
    id: "gad7",
    name: "GAD-7",
    title: "Anxiety Assessment",
    icon: TrendingUp,
    color: "text-green-600",
    bgColor: "bg-green-100",
    knowledge: {
      purpose: "To screen for and measure the severity of generalized anxiety disorder.",
      content: "It assesses the frequency of common anxiety symptoms over the last 2 weeks, such as feeling nervous, excessive worry, restlessness, and irritability.",
      scoring: "Scores of 5, 10, and 15 are taken as the cut-off points for mild, moderate, and severe anxiety, respectively.",
    },
  },
  {
    id: "ghq",
    name: "GHQ-12",
    title: "General Health Questionnaire",
    icon: Shield,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    knowledge: {
      purpose: "To screen for general, non-specific psychological distress and identify short-term changes in mental health.",
      content: "It asks 12 questions about feelings of strain, depression, inability to cope, and anxiety compared to your usual state.",
      scoring:
        "A score above a certain threshold (typically 11-12 depending on the method) suggests the presence of psychological distress that may warrant further evaluation.",
    },
  },
]

const premiumScreeningTools = [
  {
    name: "ADHD Test",
    description: "Based on the Adult ADHD Self-Report Scale (ASRS) to screen for symptoms of ADHD.",
  },
  {
    name: "OCD Test",
    description: "Uses principles from the Yale-Brown Obsessive Compulsive Scale (Y-BOCS) to assess symptom severity.",
  },
  {
    name: "Bipolar Test",
    description: "Adapted from the Mood Disorder Questionnaire (MDQ) to identify potential bipolar spectrum disorders.",
  },
  {
    name: "Psychosis & Schizophrenia Test",
    description: "Screens for early psychosis indicators using questions from tools like the Prodromal Questionnaire (PQ-B).",
  },
  {
    name: "Eating Disorder Test",
    description: "Based on the SCOFF Questionnaire to screen for core symptoms of eating disorders.",
  },
  {
    name: "PTSD Test",
    description: "Uses the PTSD Checklist for DSM-5 (PCL-5) framework to measure symptoms of PTSD.",
  },
  {
    name: "Addiction Test",
    description: "Screens for substance use issues, adapted from the CAGE-AID questionnaire.",
  },
  {
    name: "Gambling Addiction Test",
    description: "Based on the South Oaks Gambling Screen (SOGS) to identify problem gambling behaviors.",
  },
  {
    name: "Postpartum Depression Test",
    description: "Uses the Edinburgh Postnatal Depression Scale (EPDS) to screen new and expecting parents.",
  },
  {
    name: "Parent Test: Your Child’s Mental Health",
    description: "Based on the Strengths and Difficulties Questionnaire (SDQ) for parents to assess their child's well-being.",
  },
]

const faqs = [
  {
    question: "Are my results confidential?",
    answer:
      "Yes, 100%. All your responses are completely anonymous. We do not store any personal information with your results. Your privacy is our top priority.",
  },
  {
    question: "Is this a professional diagnosis?",
    answer:
      "No. These are screening tools, not diagnostic tests. They are designed to be an educational starting point to help you understand your mental health. A formal diagnosis can only be made by a qualified healthcare professional.",
  },
  {
    question: "How long does each screening take?",
    answer: "Most of our screenings are quick and can be completed in under 5-7 minutes. The goal is to provide a simple, low-pressure way to check in with yourself.",
  },
  {
    question: "What happens after I get my results?",
    answer:
      "You will receive a score and an interpretation of what that score may indicate. Based on your results, we will provide personalized, anonymous recommendations, which may include self-help resources, peer support communities, or suggestions to connect with a professional counselor.",
  },
]

export default function ScreeningPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
              <Brain className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              Understand Your Mind
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These confidential screening tools are a quick way to explore your mental health and find personalized
              support resources.
            </p>
            <Button size="lg" asChild className="mt-8">
              <Link href="#screening-hub">
                Start a Screening
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          {/* In-depth look at tools */}
          <section className="py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800">A Closer Look at Our Screening Tools</h2>
              <p className="text-lg text-muted-foreground mt-2">
                Evidence-based assessments to provide you with valuable insights.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {screeningTools.map((tool) => (
                <Card key={tool.id} className="flex flex-col">
                  <CardHeader className="text-center">
                    <div className={`mx-auto mb-4 p-3 ${tool.bgColor} rounded-full w-fit`}>
                      <tool.icon className={`h-8 w-8 ${tool.color}`} />
                    </div>
                    <CardTitle className="text-xl">{tool.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-grow flex flex-col">
                    <div className="space-y-3 flex-grow">
                      <p>
                        <strong>Purpose:</strong> {tool.knowledge.purpose}
                      </p>
                      <p>
                        <strong>How it works:</strong> {tool.knowledge.content}
                      </p>
                    </div>
                    <Button variant="outline" asChild className="mt-4 w-full">
                      <Link href="#screening-hub">Take the {tool.name} Assessment</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
          
          {/* Why it Matters */}
          <section className="py-16 bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-8">
              <div className="space-y-6">
                <Badge variant="secondary" className="bg-green-100 text-green-700">
                  Why Screening Matters
                </Badge>
                <h2 className="text-3xl font-bold text-gray-800">Your First Step Towards Wellness</h2>
                <p className="text-muted-foreground text-lg">
                  Taking a mental health screening is like a regular check-up for your mind. It's a proactive, positive
                  step towards understanding your emotional well-being and identifying areas where you might need more
                  support.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Gain Self-Awareness</h4>
                      <p className="text-muted-foreground">Understand your feelings and behaviors from a clinical perspective.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Track Your Progress</h4>
                      <p className="text-muted-foreground">Monitor your mental health over time to see how you're improving.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Facilitate Conversations</h4>
                      <p className="text-muted-foreground">
                        Results can make it easier to talk to friends, family, or a professional about what you're experiencing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <img
                  src="/serene-meditation-breathing-exercise-calm-blue-atm.jpg"
                  alt="A person meditating peacefully"
                  className="rounded-lg shadow-md w-full h-auto object-cover max-h-96"
                />
              </div>
            </div>
          </section>

          {/* Main Screening Hub */}
          <section id="screening-hub" className="py-16">
            <div className="bg-white p-2 sm:p-4 rounded-xl border border-gray-200 shadow-xl">
              <ScreeningHub />
            </div>
          </section>

          {/* Premium Assessments Section */}
          <section className="py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800">Premium Assessments for Deeper Insights</h2>
              <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
                Unlock specialized tools to explore specific mental health concerns with our Premium plan.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {premiumScreeningTools.map((tool, index) => (
                <Link key={index} href="/pricing" className="group">
                  <Card className="flex flex-col h-full border-2 border-transparent hover:border-primary hover:shadow-lg transition-all">
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-xl">{tool.name}</CardTitle>
                        <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 border-yellow-200">
                          <Crown className="w-4 h-4 mr-2" />
                          Premium
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground">{tool.description}</p>
                    </CardContent>
                    <div className="p-6 pt-0">
                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        Unlock with Premium
                      </Button>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground mt-2">
                Everything you need to know about our screening process.
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="bg-white">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-start gap-3">
                      <HelpCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground pl-9">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
