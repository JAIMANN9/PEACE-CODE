import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PostComment } from "@/components/community/post-comment"
import { CommentForm } from "@/components/community/comment-form"
import { Badge } from "@/components/ui/badge"
import { Heart, MessageCircle, Share, Flag, ArrowLeft } from "lucide-react"
import Link from "next/link"

// Mock data - in real app this would come from database
const post = {
  id: 1,
  title: "How do you deal with exam anxiety?",
  content: `Finals are coming up and I'm feeling overwhelmed. My heart races every time I think about studying, and I can't seem to focus on anything. I've tried deep breathing exercises, but they only help temporarily.

I know I'm not the only one going through this, but it feels so isolating. Sometimes I wonder if I'm cut out for college at all. The pressure to perform well is constant, and I feel like I'm drowning.

Has anyone found strategies that actually work for managing this kind of anxiety? I'm open to trying anything at this point.`,
  author: "Anonymous Student",
  category: "Anxiety & Stress",
  timeAgo: "2 hours ago",
  replies: 12,
  likes: 24,
  isAnonymous: true,
  isLiked: false,
}

const comments = [
  {
    id: 1,
    content:
      "I completely understand what you're going through. What helped me was breaking study sessions into smaller chunks - like 25 minutes of studying followed by a 5-minute break. It made everything feel more manageable.",
    author: "Anonymous Student",
    timeAgo: "1 hour ago",
    likes: 8,
    isAnonymous: true,
  },
  {
    id: 2,
    content:
      "Have you tried the 4-7-8 breathing technique? Breathe in for 4, hold for 7, exhale for 8. It activates your parasympathetic nervous system and really helps calm anxiety. Also, remember that your worth isn't determined by your grades.",
    author: "Anonymous Student",
    timeAgo: "45 minutes ago",
    likes: 12,
    isAnonymous: true,
  },
  {
    id: 3,
    content:
      "I felt the same way during my sophomore year. What really helped was talking to a counselor at the student health center. They taught me some cognitive techniques for managing anxious thoughts. You're definitely not alone in this.",
    author: "Anonymous Student",
    timeAgo: "30 minutes ago",
    likes: 6,
    isAnonymous: true,
  },
]

export default function PostPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/community">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Community
            </Link>
          </Button>

          {/* Main Post */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-2xl text-balance mb-4">{post.title}</CardTitle>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                    {post.isAnonymous && (
                      <Badge variant="secondary" className="text-xs">
                        Anonymous
                      </Badge>
                    )}
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <Flag className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>

            <CardContent>
              <div className="prose prose-sm max-w-none mb-6">
                {post.content.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="text-foreground mb-4 text-pretty">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="flex items-center justify-between border-t border-border pt-4">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <span>by {post.author}</span>
                  <span>•</span>
                  <span>{post.timeAgo}</span>
                </div>

                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                    <Heart className="h-4 w-4 mr-1" />
                    {post.likes}
                  </Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground">
                    <MessageCircle className="h-4 w-4 mr-1" />
                    {post.replies}
                  </Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                    <Share className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Comments Section */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">Comments ({comments.length})</h2>
            </div>

            {/* Comment Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Add Your Support</CardTitle>
                <CardDescription>Share your experiences or offer encouragement to help this student.</CardDescription>
              </CardHeader>
              <CardContent>
                <CommentForm postId={post.id} />
              </CardContent>
            </Card>

            {/* Comments List */}
            <div className="space-y-4">
              {comments.map((comment) => (
                <PostComment key={comment.id} {...comment} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
