import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { LucideIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Crown, ArrowRight } from "lucide-react"

interface CategoryCardProps {
  id: string
  name: string
  description: string
  posts: number
  members: number
  color: string
  icon: LucideIcon
  premium?: boolean
}

export function CategoryCard({ id, name, description, posts, members, color, icon: Icon, premium }: CategoryCardProps) {
  const destination = premium ? "/pricing" : `/community/group/${id}`

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-lg ${color}`}>
              <Icon className="h-5 w-5" />
            </div>
            <CardTitle className="text-lg group-hover:text-primary transition-colors">{name}</CardTitle>
          </div>
          {premium && (
            <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 border-yellow-200">
              <Crown className="h-4 w-4 mr-1" />
              Premium
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <CardDescription className="text-pretty mb-4 flex-grow">{description}</CardDescription>
        <div className="flex items-center space-x-4 mb-6">
          <Badge variant="secondary" className="text-xs">
            {members.toLocaleString()} members
          </Badge>
          <Badge variant="outline" className="text-xs">
            {posts.toLocaleString()} posts
          </Badge>
        </div>
        <Button asChild variant={premium ? "default" : "outline"} className="w-full">
          <Link href={destination}>
            {premium ? "Unlock with Premium" : "Join Group"}
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
