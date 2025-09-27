"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import {
  Video,
  Headphones,
  FileText,
  Play,
  Download,
  Clock,
  Star,
  Search,
  Filter,
  Globe,
  Heart,
  Brain,
  Zap,
} from "lucide-react"

interface Resource {
  id: string
  title: string
  description: string
  type: "video" | "audio" | "guide"
  category: string
  duration?: string
  language: string
  rating: number
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  tags: string[]
  thumbnail?: string
}

const resources: Resource[] = [
  {
    id: "1",
    title: "Understanding Anxiety: A Student's Guide",
    description: "Learn about anxiety symptoms, triggers, and effective coping strategies specifically for students.",
    type: "video",
    category: "Anxiety Management",
    duration: "15 min",
    language: "English",
    rating: 4.8,
    difficulty: "Beginner",
    tags: ["anxiety", "coping", "students"],
  },
  {
    id: "2",
    title: "चिंता प्रबंधन: श्वास तकनीक",
    description: "गहरी सांस लेने की तकनीकों के माध्यम से चिंता को कम करने के तरीके सीखें।",
    type: "audio",
    category: "Anxiety Management",
    duration: "10 min",
    language: "Hindi",
    rating: 4.7,
    difficulty: "Beginner",
    tags: ["breathing", "relaxation", "hindi"],
  },
  {
    id: "3",
    title: "Depression: Breaking the Cycle",
    description: "Comprehensive guide on understanding depression and building resilience.",
    type: "guide",
    category: "Depression Support",
    language: "English",
    rating: 4.9,
    difficulty: "Intermediate",
    tags: ["depression", "resilience", "mental health"],
  },
  {
    id: "4",
    title: "மன அழுத்த மேலாண்மை",
    description: "மாணவர்களுக்கான மன அழுத்தத்தை கையாளும் நடைமுறை வழிகள்.",
    type: "video",
    category: "Stress Management",
    duration: "20 min",
    language: "Tamil",
    rating: 4.6,
    difficulty: "Beginner",
    tags: ["stress", "tamil", "students"],
  },
  {
    id: "5",
    title: "Mindfulness Meditation for Students",
    description: "Guided mindfulness practices to improve focus and reduce academic stress.",
    type: "audio",
    category: "Mindfulness",
    duration: "25 min",
    language: "English",
    rating: 4.8,
    difficulty: "Beginner",
    tags: ["mindfulness", "meditation", "focus"],
  },
  {
    id: "6",
    title: "স্ট্রেস ম্যানেজমেন্ট গাইড",
    description: "পরীক্ষার চাপ এবং একাডেমিক স্ট্রেস মোকাবেলার কার্যকর উপায়।",
    type: "guide",
    category: "Stress Management",
    language: "Bengali",
    rating: 4.7,
    difficulty: "Intermediate",
    tags: ["stress", "bengali", "exams"],
  },
  {
    id: "7",
    title: "Sleep Hygiene for Better Mental Health",
    description: "Learn how proper sleep habits can significantly improve your mental well-being.",
    type: "video",
    category: "Sleep & Wellness",
    duration: "18 min",
    language: "English",
    rating: 4.5,
    difficulty: "Beginner",
    tags: ["sleep", "wellness", "habits"],
  },
  {
    id: "8",
    title: "Progressive Muscle Relaxation",
    description: "Step-by-step audio guide for progressive muscle relaxation technique.",
    type: "audio",
    category: "Relaxation Techniques",
    duration: "30 min",
    language: "English",
    rating: 4.9,
    difficulty: "Beginner",
    tags: ["relaxation", "muscle", "tension"],
  },
]

const categories = [
  "All",
  "Anxiety Management",
  "Depression Support",
  "Stress Management",
  "Mindfulness",
  "Sleep & Wellness",
  "Relaxation Techniques",
]
const languages = ["All", "English", "Hindi", "Tamil", "Bengali", "Telugu", "Marathi"]

export function ResourceHub() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedLanguage, setSelectedLanguage] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  const filteredResources = resources.filter((resource) => {
    const matchesCategory = selectedCategory === "All" || resource.category === selectedCategory
    const matchesLanguage = selectedLanguage === "All" || resource.language === selectedLanguage
    const matchesSearch =
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesType = activeTab === "all" || resource.type === activeTab

    return matchesCategory && matchesLanguage && matchesSearch && matchesType
  })

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Video className="h-4 w-4" />
      case "audio":
        return <Headphones className="h-4 w-4" />
      case "guide":
        return <FileText className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  const getCategoryIcon = (category: string) => {
    if (category.includes("Anxiety")) return <Zap className="h-4 w-4 text-yellow-500" />
    if (category.includes("Depression")) return <Heart className="h-4 w-4 text-red-500" />
    if (category.includes("Stress")) return <Brain className="h-4 w-4 text-blue-500" />
    return <Heart className="h-4 w-4 text-primary" />
  }

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
        <div className="flex flex-col sm:flex-row gap-4 flex-1">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full sm:w-[200px]">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
            <SelectTrigger className="w-full sm:w-[150px]">
              <Globe className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              {languages.map((language) => (
                <SelectItem key={language} value={language}>
                  {language}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Resource Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All Resources</TabsTrigger>
          <TabsTrigger value="video">Videos</TabsTrigger>
          <TabsTrigger value="audio">Audio</TabsTrigger>
          <TabsTrigger value="guide">Guides</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => (
              <Card key={resource.id} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2">
                      {getTypeIcon(resource.type)}
                      <Badge variant="secondary" className="text-xs">
                        {resource.type}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-muted-foreground">{resource.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg line-clamp-2">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground line-clamp-3">{resource.description}</p>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      {getCategoryIcon(resource.category)}
                      <span>{resource.category}</span>
                    </div>
                    {resource.duration && (
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{resource.duration}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Globe className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{resource.language}</span>
                      <Badge variant="outline" className="text-xs">
                        {resource.difficulty}
                      </Badge>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {resource.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button size="sm" className="flex-1">
                      <Play className="h-4 w-4 mr-2" />
                      {resource.type === "guide" ? "Read" : "Play"}
                    </Button>
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">No resources found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search criteria or browse different categories.
              </p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
