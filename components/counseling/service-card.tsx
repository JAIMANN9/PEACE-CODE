import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { LucideIcon } from "lucide-react"
import Link from "next/link"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  duration: string
  price: string
}

export function ServiceCard({ icon: Icon, title, description, duration, price }: ServiceCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4 flex flex-col">
        <CardDescription className="text-center text-pretty flex-grow">{description}</CardDescription>

        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Duration:</span>
            <span className="font-medium">{duration}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Cost:</span>
            <span className="font-medium text-primary">{price}</span>
          </div>
        </div>

        <Button asChild className="w-full mt-auto">
          <Link href="/counseling/book">Get Started</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
