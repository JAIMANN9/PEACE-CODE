"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CommunityPost } from "@/components/community/community-post"
import { CategoryCard } from "@/components/community/category-card"
import { Input } from "@/components/ui/input"
import { Search, Plus, Users, MessageCircle, Heart, Shield, ChevronDown } from "lucide-react"
import Link from "next/link"
import { categories } from "@/lib/community-data"

const heroImages = [
  "/pexels-tima-miroshnichenko-5710929.jpg",
  "/pexels-tima-miroshnichenko-5711022.jpg",
  "/pexels-tima-miroshnichenko-5711372.jpg",
  "/pexels-tima-miroshnichenko-5711382.jpg",
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 30000) // Change image every 30 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* New Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          {heroImages.map((src, index) => (
            <img
              key={src}
              src={src}
              alt="Community support session"
              className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 p-4 animate-fade-in-up">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-4 text-balance tracking-tight text-shadow-soft">
            You Are Not Alone
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto text-white/90 text-balance text-shadow-soft">
            Share your story, find support, and connect with a community that understands.
          </p>
          <Button size="lg" asChild className="mt-8 text-lg px-8 py-4 bg-white text-primary hover:bg-white/90">
            <Link href="/community/new-post">Join the Conversation</Link>
          </Button>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/70" />
        </div>
      </section>

      <main className="pt-16 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
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
                <h2 className="text-2xl font-bold text-foreground mb-6">Discussion Groups</h2>
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
      </main>
    </div>
  )
}
