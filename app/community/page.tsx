import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CommunityPost } from "@/components/community/community-post"
import { CategoryCard } from "@/components/community/category-card"
import { Input } from "@/components/ui/input"
import { Search, Plus, Users, MessageCircle, Heart, Shield } from "lucide-react"
import Link from "next/link"

const categories = [
  {
    id: "anxiety",
    name: "Anxiety & Stress",
    description: "Share experiences and coping strategies for anxiety and academic stress",
    posts: 234,
    members: 1205,
    color: "bg-blue-100 text-blue-700",
    icon: Heart,
  },
  {
    id: "depression",
    name: "Depression Support",
    description: "A safe space to discuss depression and find peer support",
    posts: 189,
    members: 892,
    color: "bg-purple-100 text-purple-700",
    icon: Users,
  },
  {
    id: "academic",
    name: "Academic Pressure",
    description: "Dealing with academic stress, perfectionism, and burnout",
    posts: 156,
    members: 743,
    color: "bg-green-100 text-green-700",
    icon: MessageCircle,
  },
  {
    id: "relationships",
    name: "Relationships",
    description: "Navigating friendships, family, and romantic relationships",
    posts: 98,
    members: 567,
    color: "bg-pink-100 text-pink-700",
    icon: Heart,
  },
  {
    id: "self-care",
    name: "Self-Care & Wellness",
    description: "Tips and discussions about mental health maintenance",
    posts: 145,
    members: 623,
    color: "bg-yellow-100 text-yellow-700",
    icon: Shield,
  },
  {
    id: "crisis",
    name: "Crisis Support",
    description: "Immediate peer support for those in crisis (moderated 24/7)",
    posts: 67,
    members: 234,
    color: "bg-red-100 text-red-700",
    icon: Shield,
  },
]

const recentPosts = [
  {
    id: 1,
    title: "How do you deal with exam anxiety?",
    content:
      "Finals are coming up and I'm feeling overwhelmed. My heart races every time I think about studying. What strategies have worked for you?",
    author: "Anonymous Student",
    category: "Anxiety & Stress",
    timeAgo: "2 hours ago",
    replies: 12,
    likes: 24,
    isAnonymous: true,
  },
  {
    id: 2,
    title: "Feeling isolated in college",
    content:
      "I'm a sophomore and still struggling to make meaningful connections. Sometimes I feel like everyone else has it figured out except me.",
    author: "Anonymous Student",
    category: "Depression Support",
    timeAgo: "4 hours ago",
    replies: 18,
    likes: 31,
    isAnonymous: true,
  },
  {
    id: 3,
    title: "Meditation apps that actually work?",
    content:
      "I've tried a few meditation apps but can't seem to stick with them. Looking for recommendations that have helped other students.",
    author: "Anonymous Student",
    category: "Self-Care & Wellness",
    timeAgo: "6 hours ago",
    replies: 9,
    likes: 15,
    isAnonymous: true,
  },
]

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Student <span className="text-primary">Community</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Connect with fellow students, share experiences, and find support in a safe, moderated environment.
            </p>
          </div>

          {/* Community Guidelines */}
          <Card className="mb-8 border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-primary" />
                <span>Community Guidelines</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Be respectful and supportive</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>No medical advice - seek professionals</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Anonymous posting is encouraged</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Search */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Search Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search posts..." className="pl-10" />
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button asChild className="w-full">
                    <Link href="/community/new-post">
                      <Plus className="h-4 w-4 mr-2" />
                      New Post
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="w-full bg-transparent">
                    <Link href="/community/my-posts">My Posts</Link>
                  </Button>
                  <Button variant="outline" asChild className="w-full bg-transparent">
                    <Link href="/crisis">Crisis Support</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Community Stats */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Community Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Active Members</span>
                    <span className="font-medium">2,847</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Posts Today</span>
                    <span className="font-medium">23</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Online Now</span>
                    <span className="font-medium">156</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Categories */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Discussion Categories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {categories.map((category) => (
                    <CategoryCard key={category.id} {...category} />
                  ))}
                </div>
              </div>

              {/* Recent Posts */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-foreground">Recent Posts</h2>
                  <Button variant="outline" asChild>
                    <Link href="/community/all-posts">View All</Link>
                  </Button>
                </div>
                <div className="space-y-4">
                  {recentPosts.map((post) => (
                    <CommunityPost key={post.id} {...post} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
