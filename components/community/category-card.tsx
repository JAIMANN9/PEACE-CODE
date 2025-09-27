import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { LucideIcon } from "lucide-react"
import Link from "next/link"

interface CategoryCardProps {
  id: string
  name: string
  description: string
  posts: number
  members: number
  color: string
  icon: LucideIcon
}

export function CategoryCard({ id, name, description, posts, members, color, icon: Icon }: CategoryCardProps) {
  return (
    <Link href={`/community/category/${id}`}>
      <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
        <CardHeader>
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-lg ${color}`}>
              <Icon className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <CardTitle className="text-lg group-hover:text-primary transition-colors">{name}</CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-pretty mb-4">{description}</CardDescription>
          <div className="flex items-center space-x-4">
            <Badge variant="secondary" className="text-xs">
              {posts} posts
            </Badge>
            <Badge variant="outline" className="text-xs">
              {members} members
            </Badge>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
