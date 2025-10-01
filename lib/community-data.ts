import { Heart, Users, MessageCircle, Shield } from "lucide-react"

const allCategories = [
  {
    id: "anxiety-stress",
    name: "Anxiety & Stress",
    description: "Share experiences and coping strategies for anxiety and academic stress",
    posts: 234,
    members: 1205,
    color: "bg-blue-100 text-blue-700",
    icon: Heart,
    premium: true,
  },
  {
    id: "depression-support",
    name: "Depression Support",
    description: "A safe space to discuss depression and find peer support",
    posts: 189,
    members: 892,
    color: "bg-purple-100 text-purple-700",
    icon: Users,
    premium: false,
  },
  {
    id: "academic-pressure",
    name: "Academic Pressure",
    description: "Dealing with academic stress, perfectionism, and burnout",
    posts: 156,
    members: 743,
    color: "bg-green-100 text-green-700",
    icon: MessageCircle,
    premium: true,
  },
  {
    id: "relationships",
    name: "Relationships",
    description: "Navigating friendships, family, and romantic relationships",
    posts: 98,
    members: 567,
    color: "bg-pink-100 text-pink-700",
    icon: Heart,
    premium: true,
  },
  {
    id: "self-care",
    name: "Self-Care & Wellness",
    description: "Tips and discussions about mental health maintenance",
    posts: 145,
    members: 623,
    color: "bg-yellow-100 text-yellow-700",
    icon: Shield,
    premium: false,
  },
  {
    id: "crisis-support",
    name: "Crisis Support",
    description: "Immediate peer support for those in crisis (moderated 24/7)",
    posts: 67,
    members: 234,
    color: "bg-red-100 text-red-700",
    icon: Shield,
    premium: false,
  },
]

export const categories = allCategories.sort((a, b) => {
  if (a.premium && !b.premium) {
    return 1
  }
  if (!a.premium && b.premium) {
    return -1
  }
  return 0
})
