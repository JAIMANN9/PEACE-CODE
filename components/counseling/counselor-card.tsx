import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface CounselorCardProps {
  id: number
  name: string
  title: string
  specialties: string[]
  experience: string
  rating: number
  reviews: number
  image: string
  availability: string
  bio: string
}

export function CounselorCard({
  id,
  name,
  title,
  specialties,
  experience,
  rating,
  reviews,
  image,
  availability,
  bio,
}: CounselorCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={120}
            height={120}
            className="rounded-full object-cover"
          />
        </div>
        <CardTitle className="text-xl">{name}</CardTitle>
        <CardDescription className="font-medium">{title}</CardDescription>

        <div className="flex items-center justify-center space-x-2 mt-2">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
          <span className="text-sm text-muted-foreground">({reviews} reviews)</span>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div>
          <h4 className="font-medium text-sm mb-2">Specialties</h4>
          <div className="flex flex-wrap gap-1">
            {specialties.map((specialty, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {specialty}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>{availability}</span>
        </div>

        <p className="text-sm text-muted-foreground">{bio}</p>

        <div className="space-y-2">
          <Button asChild className="w-full">
            <Link href={`/counseling/book?counselor=${id}`}>Book Session</Link>
          </Button>
          <Button variant="outline" asChild className="w-full bg-transparent">
            <Link href={`/counseling/counselors/${id}`}>View Profile</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
