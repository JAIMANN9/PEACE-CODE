import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"
import Link from "next/link"

interface FeatureBubbleProps {
  icon: LucideIcon
  title: string
  description: string
  href: string
  color: string
}

export function FeatureBubble({ icon: Icon, title, description, href, color }: FeatureBubbleProps) {
  return (
    <div className="scroll-reveal">
      <Link href={href}>
        <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-full ${color}`}>
                <Icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="text-muted-foreground">{description}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </div>
  )
}
