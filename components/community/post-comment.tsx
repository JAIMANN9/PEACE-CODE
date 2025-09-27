import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Flag, Reply } from "lucide-react"

interface PostCommentProps {
  id: number
  content: string
  author: string
  timeAgo: string
  likes: number
  isAnonymous: boolean
}

export function PostComment({ id, content, author, timeAgo, likes, isAnonymous }: PostCommentProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="font-medium text-sm">{author}</span>
            {isAnonymous && (
              <Badge variant="secondary" className="text-xs">
                Anonymous
              </Badge>
            )}
            <span className="text-xs text-muted-foreground">•</span>
            <span className="text-xs text-muted-foreground">{timeAgo}</span>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Flag className="h-3 w-3" />
          </Button>
        </div>

        <p className="text-foreground mb-4 text-pretty">{content}</p>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary h-8">
            <Heart className="h-3 w-3 mr-1" />
            {likes}
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary h-8">
            <Reply className="h-3 w-3 mr-1" />
            Reply
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
