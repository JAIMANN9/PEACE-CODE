import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, MessageCircle, Share, Flag } from "lucide-react"
import Link from "next/link"

interface CommunityPostProps {
  id: number
  title: string
  content: string
  author: string
  category: string
  timeAgo: string
  replies: number
  likes: number
  isAnonymous: boolean
}

export function CommunityPost({
  id,
  title,
  content,
  author,
  category,
  timeAgo,
  replies,
  likes,
  isAnonymous,
}: CommunityPostProps) {
  return (
    <Card className="group hover:shadow-md transition-all duration-200">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <Link href={`/community/post/${id}`}>
              <CardTitle className="text-lg group-hover:text-primary transition-colors cursor-pointer text-balance">
                {title}
              </CardTitle>
            </Link>
            <div className="flex items-center space-x-2 mt-2">
              <Badge variant="outline" className="text-xs">
                {category}
              </Badge>
              {isAnonymous && (
                <Badge variant="secondary" className="text-xs">
                  Anonymous
                </Badge>
              )}
            </div>
          </div>
          <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
            <Flag className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>

      <CardContent>
        <CardDescription className="text-pretty mb-4 line-clamp-3">{content}</CardDescription>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span>by {author}</span>
            <span>•</span>
            <span>{timeAgo}</span>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
              <Heart className="h-4 w-4 mr-1" />
              {likes}
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary" asChild>
              <Link href={`/community/post/${id}`}>
                <MessageCircle className="h-4 w-4 mr-1" />
                {replies}
              </Link>
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
              <Share className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
